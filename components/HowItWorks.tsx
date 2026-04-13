"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Set Your Rules",
    description:
      "Choose which apps to limit and configure daily limits, schedules, or location-based blocking. It takes less than a minute.",
    color: "from-brand to-brand-light",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Stay Focused",
    description:
      "TimeBack works quietly in the background. When you hit a limit, a customizable block screen appears — gently nudging you to take a break.",
    color: "from-secondary to-secondary-light",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build Better Habits",
    description:
      "Over time, you'll naturally reach for your phone less. TimeBack helps you reclaim hours for the things that truly matter.",
    color: "from-teal to-success",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-page-bg to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-brand font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary">
            Simple as{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-teal">
              1-2-3
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-gradient-to-r from-brand via-secondary to-teal opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="text-center relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                >
                  {step.icon}
                </div>
                <div className="text-5xl font-black text-brand/10 mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
