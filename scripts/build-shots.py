#!/usr/bin/env python3
"""
build-shots.py — build optimized WebP image assets for the TimeBack website
from the read-only source screenshots in ~/Documents/TimeBack-screenshots.

Reproducible: re-running always re-derives outputs from the source folder,
which this script never writes to.

Outputs:
  public/shots/<locale>/iphone/<name>.webp   (660px wide)
  public/shots/<locale>/ipad/<name>.webp     (1024px wide)
  public/brand/guardian.webp  (560px, RGBA, lossless)
  public/brand/guardian.png   (560px, RGBA, optimized)
  public/brand/{violet,midnight,pearl}.webp  (850px wide)

Usage:
  python3 scripts/build-shots.py
"""

import sys
from pathlib import Path
from typing import Optional

from PIL import Image

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------

SITE_ROOT = Path(__file__).resolve().parent.parent
SRC_ROOT = Path.home() / "Documents" / "TimeBack-screenshots" / "shots"
IPHONE_SRC = SRC_ROOT / "iphone"
IPAD_SRC = SRC_ROOT / "Ipad"
ASSETS_SRC = IPHONE_SRC / "design_source" / "assets"

OUT_SHOTS = SITE_ROOT / "public" / "shots"
OUT_BRAND = SITE_ROOT / "public" / "brand"

LOCALES = ["en", "zh-Hans", "zh-Hant", "ja", "ko", "de", "fr", "es"]

IPHONE_FILES = [
    "onboarding.png",
    "rule.png",
    "schedule.png",
    "zone.png",
    "weekly-review.png",
    "block-screen.png",
    "passcode.png",
    "shield.PNG",
    "daily-limit.png",
    "rule-blocked.png",
]

IPHONE_WIDTH = 660
IPAD_WIDTH = 1024
JPEG_LIKE_QUALITY = 82

# name -> filename within Ipad/<locale>/ for non-en locales
IPAD_NON_EN_MAP = {
    "rules": "01-rules.png",
    "schedules": "03-schedules.png",
    "zones": "04-zones.png",
    "weekly-review": "06-weekly-review.png",
    "block-screen": "05-block-screen.png",
}

# name -> filename within Ipad/ref-en/ for en (subset only; en has no
# weekly-review / block-screen raw iPad source)
IPAD_EN_MAP = {
    "rules": "rule-blocked.png",
    "schedules": "schedule.png",
    "zones": "zone-metric.png",
}

BRAND_MASCOT = "guardian.png"
BRAND_MASCOT_WIDTH = 560
BRAND_BACKGROUNDS = ["violet.png", "midnight.png", "pearl.png"]
BRAND_BG_WIDTH = 850
BRAND_BG_QUALITY = 75
BRAND_MASCOT_QUALITY = 90

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

missing_sources = []
notes = []
written = []  # list of Path, for the final report


def resize_to_width(im: Image.Image, target_width: int) -> Image.Image:
    w, h = im.size
    if w == target_width:
        return im
    target_height = round(h * (target_width / w))
    return im.resize((target_width, target_height), Image.LANCZOS)


def save_webp_rgb(im: Image.Image, dest: Path, width: int, quality: int = JPEG_LIKE_QUALITY):
    dest.parent.mkdir(parents=True, exist_ok=True)
    im = im.convert("RGB")
    im = resize_to_width(im, width)
    im.save(dest, format="WEBP", quality=quality, method=6)
    written.append(dest)


def load_source(path: Path) -> Optional[Image.Image]:
    if not path.exists():
        missing_sources.append(str(path))
        return None
    return Image.open(path)


# ---------------------------------------------------------------------------
# 1. iPhone raw UI screenshots
# ---------------------------------------------------------------------------

def build_iphone():
    for locale in LOCALES:
        src_dir = IPHONE_SRC / locale
        for fname in IPHONE_FILES:
            src_path = src_dir / fname
            im = load_source(src_path)
            if im is None:
                continue
            stem = Path(fname).stem.lower()
            dest = OUT_SHOTS / locale / "iphone" / f"{stem}.webp"
            save_webp_rgb(im, dest, IPHONE_WIDTH, JPEG_LIKE_QUALITY)
            im.close()


# ---------------------------------------------------------------------------
# 2. iPad raw UI screenshots
# ---------------------------------------------------------------------------

def build_ipad():
    for locale in LOCALES:
        if locale == "en":
            name_map = IPAD_EN_MAP
            src_dir = IPAD_SRC / "ref-en"
            skipped = {"weekly-review", "block-screen"}
        else:
            name_map = IPAD_NON_EN_MAP
            src_dir = IPAD_SRC / locale
            skipped = set()

        for out_name, src_fname in name_map.items():
            src_path = src_dir / src_fname
            im = load_source(src_path)
            if im is None:
                continue
            dest = OUT_SHOTS / locale / "ipad" / f"{out_name}.webp"
            save_webp_rgb(im, dest, IPAD_WIDTH, JPEG_LIKE_QUALITY)
            im.close()

        for out_name in skipped:
            notes.append(
                f"en iPad: no raw source for '{out_name}' "
                f"(Ipad/ref-en/ has no weekly-review/block-screen shot) — skipped."
            )

    notes.append(
        "zh-Hant Ipad source dir also contains 07-shield.PNG.PNG, which is not "
        "part of the requested output set and was intentionally not used."
    )


# ---------------------------------------------------------------------------
# 3. Brand art
# ---------------------------------------------------------------------------

def build_brand():
    # Mascot (RGBA, keep alpha)
    mascot_path = ASSETS_SRC / BRAND_MASCOT
    im = load_source(mascot_path)
    if im is not None:
        im_rgba = im.convert("RGBA")
        im_rgba = resize_to_width(im_rgba, BRAND_MASCOT_WIDTH)

        OUT_BRAND.mkdir(parents=True, exist_ok=True)

        webp_dest = OUT_BRAND / "guardian.webp"
        im_rgba.save(webp_dest, format="WEBP", lossless=True, method=6)
        written.append(webp_dest)

        png_dest = OUT_BRAND / "guardian.png"
        im_rgba.save(png_dest, format="PNG", optimize=True)
        written.append(png_dest)

        im.close()

    # Backgrounds (RGB, no alpha)
    for fname in BRAND_BACKGROUNDS:
        src_path = ASSETS_SRC / fname
        im = load_source(src_path)
        if im is None:
            continue
        stem = Path(fname).stem.lower()
        dest = OUT_BRAND / f"{stem}.webp"
        save_webp_rgb(im, dest, BRAND_BG_WIDTH, BRAND_BG_QUALITY)
        im.close()


# ---------------------------------------------------------------------------
# Report
# ---------------------------------------------------------------------------

def report():
    print("\n=== build-shots.py report ===")
    print(f"Source root (read-only): {SRC_ROOT}")
    print(f"Output shots dir:        {OUT_SHOTS}")
    print(f"Output brand dir:        {OUT_BRAND}")
    print(f"Files written: {len(written)}")

    if missing_sources:
        print(f"\nMISSING SOURCE FILES ({len(missing_sources)}):")
        for p in missing_sources:
            print(f"  - {p}")
    else:
        print("\nMissing source files: none")

    if notes:
        print("\nNotes:")
        for n in notes:
            print(f"  - {n}")

    # Verify alpha preserved in guardian.webp
    guardian_webp = OUT_BRAND / "guardian.webp"
    if guardian_webp.exists():
        with Image.open(guardian_webp) as g:
            print(f"\nguardian.webp mode check: {g.mode} size={g.size}")
    else:
        print("\nguardian.webp was not produced (source missing?).")


def main():
    print(f"PIL version: {Image.__version__ if hasattr(Image, '__version__') else 'unknown'}")
    build_iphone()
    build_ipad()
    build_brand()
    report()

    if missing_sources:
        sys.exit(1)


if __name__ == "__main__":
    main()
