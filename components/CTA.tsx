"use client";

import { motion } from "framer-motion";
import AppStorePill from "@/components/AppStorePill";
import { APP_STORE_URL } from "@/lib/appStore";
import type { Dictionary } from "@/lib/dictionaries/en";

export default function CTA({ dict }: { dict: Dictionary["cta"] }) {
  return (
    <section id="cta" className="py-24 px-6">
      <motion.div
        className="max-w-4xl mx-auto relative overflow-hidden rounded-[2.5rem] gradient-hero p-12 md:p-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-20 h-20 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center"
          >
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            {dict.title}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto">
            {dict.subtitle}
          </p>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.badge}
            className="inline-flex hover:scale-105 transition-transform duration-300"
          >
            <AppStorePill tone="solid" className="ring-1 ring-white/50" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
