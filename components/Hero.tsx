"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero flex items-center">
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float" />

        {/* Small floating dots */}
        <motion.div
          className="absolute top-32 right-20 w-4 h-4 bg-warning rounded-full"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-success rounded-full"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-5 h-5 bg-danger rounded-full opacity-60"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Left text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Coming Soon to App Store
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Take Back
            <br />
            <span className="text-white/80">Your Time</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Build healthier screen habits with powerful, privacy-first tools.
            Free. No account needed. No ads. Ever.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand font-bold rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore Features
            </a>
            <a
              href="#cta"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-full text-lg border border-white/30 hover:bg-white/25 transition-all duration-300"
            >
              Coming Soon
            </a>
          </motion.div>
        </div>

        {/* Right phone mockup - real screenshot */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.3 }}
        >
          <div className="relative">
            <div className="w-[320px] md:w-[380px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/20 ring-1 ring-white/20">
              <img
                src="/screenshots/hero.jpg"
                alt="TimeBack App - Take back control of your screen time"
                className="w-full h-auto block"
              />
              {/* Bottom gradient fade to blend with hero background */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#3dbdb5] via-[#3dbdb5]/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -right-4 md:-right-8 top-24 bg-white rounded-2xl px-4 py-3 shadow-lg"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 gradient-card-purple rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-text-primary">100% Private</div>
                  <div className="text-[10px] text-text-secondary">On-device only</div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge left */}
            <motion.div
              className="absolute -left-4 md:-left-8 bottom-32 bg-white rounded-2xl px-4 py-3 shadow-lg"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 gradient-card-teal rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-text-primary">Smart Breaks</div>
                  <div className="text-[10px] text-text-secondary">Protect your eyes</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#f8f7fc"
          />
        </svg>
      </div>
    </section>
  );
}
