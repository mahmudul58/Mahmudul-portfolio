import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "../data/profile.js";
import { scrollToSection } from "../utils/scrollTo.js";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center px-6 pt-36 md:pt-40 pb-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.3fr_1fr] gap-14 items-center">
        {/* text column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.3em] text-amber-600 dark:text-amber-400 mb-5"
          >
            FULL STACK DEVELOPER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-ink-900 dark:text-white mb-6"
          >
            Building full-stack web apps
            <br />
            with <span className="gradient-text">Django &amp; React</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-ink-700 dark:text-white/70 max-w-lg mb-10"
          >
            Building and deploying real-world projects with Django, DRF
            &amp; React, exploring machine learning along the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 rounded-xl text-sm font-semibold bg-amber-500 text-ink-950
                         hover:-translate-y-0.5 transition-transform duration-200 shadow-lg shadow-amber-500/20
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="glass px-6 py-3 rounded-xl text-sm font-semibold text-ink-900 dark:text-white
                         hover:-translate-y-0.5 transition-transform duration-200 flex items-center gap-2
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              <Mail size={16} /> Get in touch
            </button>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-6 py-3 rounded-xl text-sm font-semibold text-ink-900 dark:text-white
                         hover:-translate-y-0.5 transition-transform duration-200 flex items-center gap-2
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              <Download size={16} /> Resume
            </a>
          </motion.div>
        </div>

        {/* profile picture — portrait 4:5 frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-56 sm:w-64 md:w-72"
        >
          {/* glow: soft, contained, no hard edges to clip */}
          <div className="absolute -inset-4 rounded-[2rem] bg-amber-500/20 dark:bg-amber-500/25 blur-3xl animate-float-slow" />

          {/* decorative ring: static, not rotated — a spinning rectangle
              sweeps its corners outward and reads as a stray diamond
              shape, so this stays still and just frames the photo */}
          <div className="absolute -inset-3 rounded-[2rem] border-2 border-amber-500/20 dark:border-amber-400/15" />

          {/* glass frame */}
          <div className="glass relative aspect-[4/5] rounded-3xl p-1.5 overflow-hidden">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover object-top rounded-[calc(1.5rem-6px)] scale-110"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
            {/* fallback shown if the avatar image fails to load */}
            <div
              className="hidden w-full h-full rounded-[calc(1.5rem-6px)] items-center justify-center
                         font-display text-5xl font-bold text-ink-900 dark:text-white bg-black/5 dark:bg-white/5"
            >
              MA
            </div>
          </div>
        </motion.div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-500 dark:text-white/50 animate-bounce
                   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 rounded-full"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}