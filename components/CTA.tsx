"use client";

import { motion } from "framer-motion";
import AppStorePill from "@/components/AppStorePill";
import Guardian from "@/components/Guardian";
import { APP_STORE_URL } from "@/lib/appStore";
import type { Dictionary } from "@/lib/dictionaries/en";

export default function CTA({
  dict,
  mascotAlt,
}: {
  dict: Dictionary["cta"];
  mascotAlt: string;
}) {
  return (
    <section id="cta" className="px-6 py-24">
      <motion.div
        className="relative isolate mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] scene-midnight px-8 py-14 shadow-[0_40px_80px_-40px_rgba(32,15,63,0.7)] md:px-14 md:py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
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
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-violet/50 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-midnight-glow/50 blur-3xl" />
        </div>

        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-12">
          <motion.div
            className="w-40 shrink-0 sm:w-48 md:order-2 md:w-60"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Guardian alt={mascotAlt} />
            </motion.div>
          </motion.div>

          <div className="flex-1 text-center md:order-1 md:text-left">
            <h2 className="mb-4 text-3xl font-black tracking-tight text-balance text-white md:text-5xl">
              {dict.title}
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-white/80 md:mx-0 md:text-xl">
              {dict.subtitle}
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.badge}
              className="inline-flex transition-transform duration-300 hover:scale-105"
            >
              <AppStorePill tone="solid" className="ring-1 ring-white/50" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
