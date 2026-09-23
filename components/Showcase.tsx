"use client";

import { motion } from "framer-motion";
import { PhoneFrame, iphoneShot, type IPhoneShot } from "@/components/DeviceFrame";
import type { Dictionary } from "@/lib/dictionaries/en";
import type { Locale } from "@/lib/i18n";
import { titleGap } from "@/lib/text";

type Tone = "violet" | "midnight" | "pearl";

/** Panel config, aligned by index with dict.showcase.items. */
const panels: { shot: IPhoneShot; tone: Tone; highlight: "lime" | "amber" | "violet"; isNew?: boolean }[] = [
  { shot: "weekly-review", tone: "violet", highlight: "lime", isNew: true },
  { shot: "schedule", tone: "midnight", highlight: "lime" },
  { shot: "zone", tone: "pearl", highlight: "violet" },
  { shot: "rule-blocked", tone: "midnight", highlight: "amber" },
  { shot: "passcode", tone: "pearl", highlight: "violet", isNew: true },
  { shot: "block-screen", tone: "violet", highlight: "lime" },
];

const toneStyles: Record<Tone, { scene: string; art: string; line1: string; sub: string; detail: string; tag: string }> = {
  violet: {
    scene: "scene-violet",
    art: "/brand/violet.webp",
    line1: "text-white",
    sub: "text-white/90",
    detail: "text-white/75",
    tag: "bg-white/15 text-white ring-white/25",
  },
  midnight: {
    scene: "scene-midnight",
    art: "/brand/midnight.webp",
    line1: "text-white",
    sub: "text-white/85",
    detail: "text-white/65",
    tag: "bg-white/10 text-white/90 ring-white/20",
  },
  pearl: {
    scene: "scene-pearl",
    art: "/brand/pearl.webp",
    line1: "text-ink",
    sub: "text-ink/80",
    detail: "text-text-secondary",
    tag: "bg-white text-ink/75 ring-ink/10",
  },
};

const highlightClass = { lime: "text-lime", amber: "text-amber", violet: "text-brand" } as const;

export default function Showcase({
  dict,
  locale,
}: {
  dict: Dictionary["showcase"];
  locale: Locale;
}) {
  return (
    <section id="preview" className="overflow-hidden pb-24 pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand">
            {dict.eyebrow}
          </span>
          <h2 className="mb-4 text-4xl font-black text-ink md:text-5xl">
            {dict.titlePart1}{titleGap(dict.titlePart1)}<span className="text-brand">{dict.titleHighlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">{dict.subtitle}</p>
        </motion.div>

        {/* Mobile: scroll-snap carousel · md: 2-col grid · lg: alternating wide panels */}
        <div
          role="region"
          aria-label={dict.eyebrow}
          tabIndex={0}
          className="no-scrollbar -mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 outline-none md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-1 lg:gap-8"
        >
          {dict.items.map((item, i) => {
            const p = panels[i];
            const t = toneStyles[p.tone];
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={p.shot}
                className={`relative isolate flex w-[84%] max-w-[360px] shrink-0 snap-center flex-col overflow-hidden rounded-[2rem] ${t.scene} shadow-[0_24px_60px_-34px_rgba(32,15,63,0.55)] ring-1 ring-ink/5 md:w-auto md:max-w-none lg:h-[560px] lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={t.art}
                  alt=""
                  aria-hidden="true"
                  width={850}
                  height={1850}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
                />

                <div className="px-6 pt-7 sm:px-8 sm:pt-9 lg:w-1/2 lg:self-center lg:px-16 lg:py-12">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${t.tag}`}>
                      {item.tag}
                    </span>
                    {p.isNew && (
                      <span className="inline-flex rounded-full bg-lime px-3 py-1 text-xs font-bold text-midnight">
                        {dict.newBadge}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-[1.85rem] font-black leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-[3.25rem]">
                    <span className={`block ${t.line1}`}>{item.line1}</span>
                    <span className={`block ${highlightClass[p.highlight]}`}>{item.line2}</span>
                  </h3>
                  <p className={`mt-3 text-base font-medium sm:text-lg lg:mt-5 lg:text-xl ${t.sub}`}>{item.subtitle}</p>
                  <p className={`mt-3 hidden text-sm leading-relaxed sm:block lg:max-w-md lg:text-base ${t.detail}`}>
                    {item.detail}
                  </p>
                </div>

                <div className="relative mt-auto h-[330px] overflow-hidden pt-7 sm:h-[400px] lg:mt-0 lg:h-full lg:w-1/2 lg:pt-14">
                  <PhoneFrame
                    src={iphoneShot(locale, p.shot)}
                    alt={item.alt}
                    className="mx-auto w-[62%] max-w-[250px] lg:w-[300px] lg:max-w-none"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-text-secondary md:hidden" aria-hidden="true">
          {dict.swipeHint}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </p>
      </div>
    </section>
  );
}
