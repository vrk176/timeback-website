"use client";

import { motion } from "framer-motion";

const screenshots = [
  {
    src: "/screenshots/hero.jpg",
    label: "Welcome",
  },
  {
    src: "/screenshots/rule.jpg",
    label: "Daily Limits",
  },
  {
    src: "/screenshots/schedule.jpg",
    label: "Schedules",
  },
  {
    src: "/screenshots/zone.jpg",
    label: "Location Zones",
  },
  {
    src: "/screenshots/shield.jpg",
    label: "Block Screen",
  },
  {
    src: "/screenshots/passcode.jpg",
    label: "Guardian Mode",
  },
];

export default function Showcase() {
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
            App Preview
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-4">
            See it in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-teal">
              action
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Beautiful, intuitive interface designed to stay out of your way
            while keeping you on track.
          </p>
        </motion.div>
      </div>

      {/* Screenshot gallery */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.src}
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="relative group">
                <img
                  src={screenshot.src}
                  alt={screenshot.label}
                  className="h-[420px] md:h-[500px] w-auto rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300"
                />
              </div>
              <span className="text-sm font-semibold text-text-secondary">
                {screenshot.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
