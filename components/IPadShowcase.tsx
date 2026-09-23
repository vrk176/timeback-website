"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TabletFrame, ipadShot, type IPadShot } from "@/components/DeviceFrame";
import type { Dictionary } from "@/lib/dictionaries/en";
import type { Locale } from "@/lib/i18n";

/** Aligned by index with dict.ipad.tabs. Only shots that exist for every locale. */
const shots: IPadShot[] = ["rules", "schedules", "zones"];

const icons = [
  // Rules — hourglass
  <path key="r" strokeLinecap="round" strokeLinejoin="round" d="M6 3h12M6 21h12M7 3c0 4 5 5 5 9s-5 5-5 9m10-18c0 4-5 5-5 9s5 5 5 9" />,
  // Schedules — calendar
  <path key="s" strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
  // Zones — pin
  <path key="z" strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
];

export default function IPadShowcase({
  dict,
  locale,
}: {
  dict: Dictionary["ipad"];
  locale: Locale;
}) {
  const [active, setActive] = useState(0);

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : shots.length - 1)) % shots.length;
    setActive(next);
    document.getElementById(`ipad-tab-${next}`)?.focus();
  }

  return (
    <section id="ipad" className="relative isolate overflow-hidden scene-midnight py-24 md:py-28">
      <img
        src="/brand/midnight.webp"
        alt=""
        aria-hidden="true"
        width={850}
        height={1850}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-top"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-violet/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[26rem] w-[26rem] rounded-full bg-midnight-glow/40 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex rounded-full bg-lime px-3.5 py-1 text-xs font-bold text-midnight">
            {dict.eyebrow}
          </span>
          <h2 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-balance text-white md:text-5xl lg:text-6xl">
            <span className="block">{dict.titleLine1}</span>
            <span className="block text-lime">{dict.titleLine2}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80 lg:mx-0">{dict.subtitle}</p>

          <div
            role="tablist"
            aria-label={dict.tabsLabel}
            onKeyDown={onKeyDown}
            className="mx-auto mt-9 grid max-w-xl grid-cols-3 gap-2 rounded-3xl bg-white/5 p-1.5 ring-1 ring-white/10 lg:mx-0 lg:grid-cols-1 lg:gap-2 lg:bg-transparent lg:p-0 lg:ring-0"
          >
            {dict.tabs.map((tab, i) => {
              const selected = i === active;
              return (
                <button
                  key={shots[i]}
                  id={`ipad-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="ipad-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`group flex items-center justify-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-colors duration-200 lg:justify-start lg:px-5 lg:py-4 ${
                    selected
                      ? "bg-white text-ink shadow-lg shadow-midnight/30"
                      : "text-white/80 hover:bg-white/10 lg:bg-white/5 lg:ring-1 lg:ring-white/10"
                  }`}
                >
                  <span
                    className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl lg:flex ${
                      selected ? "gradient-card-violet text-white" : "bg-white/10 text-white/80"
                    }`}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      {icons[i]}
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold lg:hidden">{tab.label}</span>
                    <span className="hidden text-xs font-semibold uppercase tracking-wider opacity-60 lg:block">{tab.label}</span>
                    <span className="hidden text-base font-bold lg:block">{tab.title}</span>
                    <span className={`hidden text-sm lg:block ${selected ? "text-text-secondary" : "text-white/60"}`}>
                      {tab.subtitle}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Caption for the active tab on small screens */}
          <p className="mt-4 text-white lg:hidden" aria-live="polite">
            <span className="font-bold">{dict.tabs[active].title}</span>
            <span className="text-white/70"> · {dict.tabs[active].subtitle}</span>
          </p>

          <p className="mt-8 text-sm text-white/60">{dict.requirement}</p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <TabletFrame className="w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[500px]">
            <div id="ipad-panel" role="tabpanel" aria-labelledby={`ipad-tab-${active}`} className="relative">
              {shots.map((shot, i) => (
                <img
                  key={shot}
                  src={ipadShot(locale, shot)}
                  alt={dict.tabs[i].alt}
                  aria-hidden={i !== active}
                  width={1024}
                  height={1366}
                  loading="lazy"
                  decoding="async"
                  className={`block h-auto w-full transition-opacity duration-500 ${
                    i === 0 ? "relative" : "absolute inset-0"
                  } ${i === active ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </TabletFrame>
        </motion.div>
      </div>
    </section>
  );
}
