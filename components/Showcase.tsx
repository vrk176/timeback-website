"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries/en";

const srcs = [
  "/screenshots/hero.jpg",
  "/screenshots/rule.jpg",
  "/screenshots/schedule.jpg",
  "/screenshots/zone.jpg",
  "/screenshots/shield.jpg",
  "/screenshots/passcode.jpg",
];

export default function Showcase({ dict }: { dict: Dictionary["showcase"] }) {
  return (
    <section className="py-24 bg-gradient-to-b from-page-bg via-white to-page-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-brand font-semibold text-sm uppercase tracking-wider mb-3">
            {dict.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-4">
            {dict.titlePart1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-teal">
              {dict.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {srcs.map((src, index) => (
            <motion.div
              key={src}
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="relative group">
                <img
                  src={src}
                  alt={dict.labels[index]}
                  className="h-[420px] md:h-[500px] w-auto rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300"
                />
              </div>
              <span className="text-sm font-semibold text-text-secondary">
                {dict.labels[index]}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
