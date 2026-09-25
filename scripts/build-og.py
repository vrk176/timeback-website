#!/usr/bin/env python3
"""Build localized 1200x630 Open Graph / Twitter cards -> public/og/<locale>.png

Composition mirrors the site hero: brand violet art + violet overlays, "TimeBack"
wordmark, localized hero headline (titleLine1 white, titleLine2 lime #daffc7),
a localized iPhone screenshot in a rounded frame and the guardian mascot.

Headlines are read from lib/dictionaries/<locale>.ts (hero.titleLine1/2), so
re-run this script whenever those strings change:

    python3 scripts/build-og.py

Fonts are macOS system fonts; the script aborts if a font is missing or a
headline glyph would render as tofu (.notdef).
"""
from __future__ import annotations

import glob
import json
import re
import sys
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
OUT_DIR = PUBLIC / "og"

W, H = 1200, 630
VIOLET = (0x59, 0x3D, 0xCC)
VIOLET_BRIGHT = (0x7A, 0x60, 0xEC)
LIME = (0xDA, 0xFF, 0xC7)
WHITE = (255, 255, 255)

LOCALES = ["en", "zh-Hans", "zh-Hant", "ja", "ko", "de", "fr", "es"]

SYS = Path("/System/Library/Fonts")


def _pingfang() -> str | None:
    hits = glob.glob(
        "/System/Library/AssetsV2/com_apple_MobileAsset_Font*/*.asset/AssetData/PingFang.ttc"
    )
    return hits[0] if hits else None


def _ttc_index(path: str, family: str, style: str) -> int:
    for i in range(64):
        try:
            f = ImageFont.truetype(path, 20, index=i)
        except OSError:
            break
        if f.getname() == (family, style):
            return i
    raise SystemExit(f"face {family} {style} not found in {path}")


def headline_font(locale: str, size: int) -> ImageFont.FreeTypeFont:
    """Pick a bold system font that covers the locale's script."""
    if locale in ("zh-Hans", "zh-Hant"):
        pf = _pingfang()
        if pf:
            fam = "PingFang SC" if locale == "zh-Hans" else "PingFang TC"
            return ImageFont.truetype(pf, size, index=_ttc_index(pf, fam, "Semibold"))
        path = str(SYS / "Hiragino Sans GB.ttc")
        return ImageFont.truetype(path, size, index=_ttc_index(path, "Hiragino Sans GB", "W6"))
    if locale == "ja":
        return ImageFont.truetype(str(SYS / "ヒラギノ角ゴシック W7.ttc"), size, index=0)
    if locale == "ko":
        path = str(SYS / "AppleSDGothicNeo.ttc")
        return ImageFont.truetype(path, size, index=_ttc_index(path, "Apple SD Gothic Neo", "ExtraBold"))
    return latin_font(size, "Heavy")


def latin_font(size: int, weight: str = "Bold") -> ImageFont.FreeTypeFont:
    sf = SYS / "SFNS.ttf"
    if sf.exists():
        f = ImageFont.truetype(str(sf), size)
        try:
            f.set_variation_by_name(weight)
            return f
        except Exception:
            pass
    path = str(SYS / "HelveticaNeue.ttc")
    return ImageFont.truetype(path, size, index=_ttc_index(path, "Helvetica Neue", "Bold"))


def assert_no_tofu(font: ImageFont.FreeTypeFont, text: str, label: str) -> None:
    """Fail if any character renders identically to the font's .notdef glyph."""
    def raster(t: str) -> bytes:
        m = font.getmask(t)
        return repr(m.size).encode() + bytes(m)

    notdef = raster("\U000F0000")  # supplementary private-use plane: never mapped
    for ch in text:
        if ch.isspace():
            continue
        m = font.getmask(ch)
        if m.getbbox() is None or raster(ch) == notdef:
            raise SystemExit(f"[{label}] missing glyph {ch!r} (U+{ord(ch):04X}) in {font.getname()}")


def read_hero_lines(locale: str) -> tuple[str, str]:
    src = (ROOT / "lib" / "dictionaries" / f"{locale}.ts").read_text(encoding="utf-8")
    hero = re.search(r"\bhero:\s*\{(.*?)\n  \}", src, re.S)
    if not hero:
        raise SystemExit(f"hero block not found in {locale}.ts")
    block = hero.group(1)

    def pick(key: str) -> str:
        m = re.search(key + r':\s*"((?:[^"\\]|\\.)*)"', block)
        if not m:
            raise SystemExit(f"{key} not found in {locale}.ts hero")
        return json.loads(f'"{m.group(1)}"')  # TS double-quoted string == JSON string here

    return pick("titleLine1"), pick("titleLine2")


def cover(img: Image.Image, w: int, h: int, y_bias: float = 0.0) -> Image.Image:
    scale = max(w / img.width, h / img.height)
    img = img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
    x = (img.width - w) // 2
    y = round((img.height - h) * y_bias)
    return img.crop((x, y, x + w, y + h))


def background() -> Image.Image:
    art = Image.open(PUBLIC / "brand" / "violet.webp").convert("RGB")
    # Mirror so the glass swirl sits on the right (behind the phone), text side stays calm.
    art = art.transpose(Image.FLIP_LEFT_RIGHT)
    bg = cover(art, W, H, y_bias=0.2)

    # Left-to-right violet wash (like the hero's from-violet/70 overlay)
    wash = Image.new("L", (W, 1))
    for x in range(W):
        t = x / (W - 1)
        wash.putpixel((x, 0), round(255 * max(0.0, 0.78 - 0.9 * t)))
    wash = wash.resize((W, H))
    bg = Image.composite(Image.new("RGB", (W, H), VIOLET), bg, wash)

    # Uniform tint so everything sits in the brand violet family
    bg = Image.blend(bg, Image.new("RGB", (W, H), VIOLET), 0.18)
    return bg


def rounded_mask(size: tuple[int, int], radius: int) -> Image.Image:
    scale = 4
    m = Image.new("L", (size[0] * scale, size[1] * scale), 0)
    ImageDraw.Draw(m).rounded_rectangle(
        (0, 0, m.width - 1, m.height - 1), radius=radius * scale, fill=255
    )
    return m.resize(size, Image.LANCZOS)


def phone(locale: str, screen_w: int) -> Image.Image:
    shot = Image.open(PUBLIC / "shots" / locale / "iphone" / "rule.webp").convert("RGB")
    screen_h = round(shot.height * screen_w / shot.width)
    shot = shot.resize((screen_w, screen_h), Image.LANCZOS)
    bezel = 12
    fw, fh = screen_w + bezel * 2, screen_h + bezel * 2
    frame = Image.new("RGBA", (fw, fh), (0, 0, 0, 0))
    body = Image.new("RGBA", (fw, fh), (24, 20, 44, 255))
    frame.paste(body, (0, 0), rounded_mask((fw, fh), 56))
    frame.paste(shot, (bezel, bezel), rounded_mask((screen_w, screen_h), 44))
    return frame


def shadow_of(img: Image.Image, blur: int, opacity: float) -> Image.Image:
    a = img.getchannel("A").point(lambda v: round(v * opacity))
    sh = Image.new("RGBA", img.size, (30, 16, 90, 0))
    sh.putalpha(a)
    pad = blur * 3
    canvas = Image.new("RGBA", (img.width + pad * 2, img.height + pad * 2), (0, 0, 0, 0))
    canvas.paste(sh, (pad, pad))
    return canvas.filter(ImageFilter.GaussianBlur(blur)), pad


def fit_size(font_for, lines: list[str], max_w: int, start: int, floor: int) -> int:
    size = start
    while size > floor:
        f = font_for(size)
        if all(f.getlength(t) <= max_w for t in lines):
            return size
        size -= 2
    return floor


def build(locale: str) -> Path:
    line1, line2 = read_hero_lines(locale)
    canvas = background().convert("RGBA")
    draw = ImageDraw.Draw(canvas)

    # ---- Wordmark (logo + "TimeBack")
    logo = Image.open(PUBLIC / "logo.png").convert("RGBA").resize((52, 52), Image.LANCZOS)
    logo_m = ImageChops.multiply(logo.getchannel("A"), rounded_mask((52, 52), 14))
    logo.putalpha(logo_m)
    lx, ly = 72, 60
    canvas.alpha_composite(logo, (lx, ly))
    wm_font = latin_font(34, "Bold")
    draw.text((lx + 66, ly + 26), "TimeBack", font=wm_font, fill=WHITE, anchor="lm")

    # ---- Headline
    text_max_w = 640
    size = fit_size(lambda s: headline_font(locale, s), [line1, line2], text_max_w, 100, 56)
    hf = headline_font(locale, size)
    for t in (line1, line2):
        assert_no_tofu(hf, t, locale)
    assert_no_tofu(wm_font, "TimeBack", locale)

    asc, desc = hf.getmetrics()
    line_h = round(size * 1.12)
    block_h = line_h + asc + desc
    top = 150 + (330 - block_h) // 2
    draw.text((lx - 2, top), line1, font=hf, fill=WHITE)
    draw.text((lx - 2, top + line_h), line2, font=hf, fill=LIME)

    # ---- Phone (peeks up from the bottom right)
    ph = phone(locale, 300)
    px, py = 828, 78
    sh, pad = shadow_of(ph, 22, 0.55)
    canvas.alpha_composite(sh, (px - pad, py - pad + 16))
    canvas.alpha_composite(ph, (px, py))

    # ---- Guardian mascot overlapping the phone's lower-left corner
    g = Image.open(PUBLIC / "brand" / "guardian.png").convert("RGBA")
    g = g.crop(g.getchannel("A").getbbox())
    gh = 220
    g = g.resize((round(g.width * gh / g.height), gh), Image.LANCZOS)
    gx, gy = px - round(g.width * 0.82), H - gh - 14
    gs, gpad = shadow_of(g, 14, 0.45)
    canvas.alpha_composite(gs, (gx - gpad, gy - gpad + 10))
    canvas.alpha_composite(g, (gx, gy))

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out = OUT_DIR / f"{locale}.png"
    canvas.convert("RGB").save(out, "PNG", optimize=True)
    # Palette-quantize if the truecolor PNG is heavy; keeps cards well under ~300 KB.
    if out.stat().st_size > 300_000:
        canvas.convert("RGB").quantize(colors=256, method=Image.MEDIANCUT, dither=Image.FLOYDSTEINBERG) \
            .save(out, "PNG", optimize=True)
    print(f"{out.relative_to(ROOT)}  {W}x{H}  {out.stat().st_size // 1024} KB  font={hf.getname()} size={size}  "
          f"lines={line1!r} / {line2!r}")
    return out


def main(argv: list[str]) -> None:
    for locale in argv or LOCALES:
        build(locale)


if __name__ == "__main__":
    main(sys.argv[1:])
