"use client";

import { motion } from "framer-motion";
import AppStorePill from "@/components/AppStorePill";
import Guardian from "@/components/Guardian";
import { PhoneFrame, iphoneShot } from "@/components/DeviceFrame";
import { APP_STORE_URL } from "@/lib/appStore";
import type { Dictionary } from "@/lib/dictionaries/en";
import type { Locale } from "@/lib/i18n";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero({
  dict,
  locale,
}: {
  dict: Dictionary["hero"];
  locale: Locale;
}) {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden scene-violet">
      {/* Brand art (CSS gradient above is the fallback) */}
      <img
        src="/brand/violet.webp"
        alt=""
        aria-hidden="true"
        width={850}
        height={1850}
        loading="eager"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-top"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-violet/50 via-violet/25 to-violet/40" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-violet/70 via-violet/30 to-transparent lg:w-2/3" />
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-violet/60 blur-3xl" />
        <div className="absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-lavender/25 blur-3xl" />
      </div>

      {/* Wordmark */}
      <div className="absolute left-5 top-5 z-10 flex items-center gap-2.5 sm:left-8 sm:top-6">
        <img src="/logo.png" alt="" width={32} height={32} className="h-8 w-8 rounded-[10px] ring-1 ring-white/30" />
        <span className="text-lg font-bold tracking-tight text-white">TimeBack</span>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 pb-28 pt-28 lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:pb-40 lg:pt-32">
        <div className="text-center lg:text-left">
          <motion.div {...rise(0)}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 ring-1 ring-white/25 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
              <span className="text-sm font-semibold text-white/95">{dict.badge}</span>
            </div>
          </motion.div>

          <motion.h1
            className="mb-6 text-[2.6rem] font-black leading-[1.05] tracking-tight text-balance text-white sm:text-6xl lg:text-7xl"
            {...rise(0.1)}
          >
            <span className="block">{dict.titleLine1}</span>
            <span className="block text-lime">{dict.titleLine2}</span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl lg:mx-0"
            {...rise(0.2)}
          >
            {dict.subtitle}
          </motion.p>

          <motion.div className="flex flex-col items-center gap-4 lg:items-start" {...rise(0.3)}>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row lg:justify-start">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.comingSoon}
                className="inline-flex transition-transform duration-300 hover:scale-105"
              >
                <AppStorePill tone="solid" className="ring-1 ring-white/50" />
              </a>
              <a
                href="#features"
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/25 bg-white/10 px-7 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                {dict.exploreFeatures}
              </a>
            </div>
            <p className="text-sm font-medium text-white/80 md:text-base">{dict.trustNote}</p>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-[236px] sm:w-[272px] lg:w-[300px]">
            <div aria-hidden="true" className="absolute -inset-x-[25%] inset-y-[8%] -z-10 rounded-full bg-lavender/35 blur-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, type: "spring", bounce: 0.25 }}
            >
              <PhoneFrame
                src={iphoneShot(locale, "rule")}
                alt={dict.screenshotAlt}
                eager
              />
            </motion.div>

            {/* Guardian mascot on its cloud */}
            <motion.div
              className="absolute -left-[28%] bottom-[3%] w-[48%] sm:-left-[42%] sm:w-[56%] lg:-left-[56%] lg:w-[62%]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Guardian alt={dict.mascotAlt} eager />
              </motion.div>
            </motion.div>

            {/* Floating chips */}
            <motion.div
              className="absolute -right-[14%] top-[13%] rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-xl shadow-midnight/20 ring-1 ring-white sm:-right-[24%] lg:-right-[30%]"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl gradient-card-violet">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="whitespace-nowrap">
                  <div className="text-xs font-bold text-ink">{dict.badgePrivateTitle}</div>
                  <div className="text-[10px] text-text-secondary">{dict.badgePrivateSub}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-[10%] top-[52%] rounded-2xl bg-midnight/90 px-3.5 py-2.5 shadow-xl shadow-midnight/30 ring-1 ring-white/15 backdrop-blur-md sm:-right-[20%] lg:-right-[26%]"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime">
                  <svg className="h-4 w-4 text-midnight" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="whitespace-nowrap">
                  <div className="text-xs font-bold text-white">{dict.badgeBreaksTitle}</div>
                  <div className="text-[10px] text-white/70">{dict.badgeBreaksSub}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 text-page-bg">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="block w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
