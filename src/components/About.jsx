import { MapPin, GraduationCap, BookOpen, Code2 } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { SectionHeading } from "./UI.jsx";
import { profile, aboutStats } from "../data/profile.js";

const STAT_ICONS = {
  Location: MapPin,
  Education: GraduationCap,
  "Academic Year": BookOpen,
  Focus: Code2,
};

export default function About() {
  return (
    <section id="about" className="px-6 py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading index="01" title="About" />
        </Reveal>

        {/* items-stretch + h-full on Reveal ensures both columns match height */}
        <div className="grid md:grid-cols-5 gap-8 items-stretch">
          {/* ── Bio text ──────────────────────────── */}
          <Reveal delay={80} className="md:col-span-3 h-full">
            <div className="glass rounded-2xl p-6 md:p-8 h-full flex items-center">
              <p className="text-base md:text-lg leading-[1.85] text-ink-700 dark:text-white/70">
                {profile.about}
              </p>
            </div>
          </Reveal>

          {/* ── Info card ─────────────────────────── */}
          <Reveal delay={160} className="md:col-span-2 h-full">
            <div className="glass rounded-2xl overflow-hidden h-full flex flex-col justify-center">
              {aboutStats.map((row, i) => {
                const Icon = STAT_ICONS[row.label] || Code2;
                return (
                  <div
                    key={row.label}
                    className={`flex items-center gap-3.5 px-6 py-5 ${
                      i !== 0 ? "border-t border-ink-900/[0.06] dark:border-white/[0.06]" : ""
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 dark:bg-amber-400/10
                                    flex items-center justify-center shrink-0">
                      <Icon
                        size={14}
                        className="text-amber-600 dark:text-amber-400"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-mono text-[10px] tracking-wider text-ink-400 dark:text-white/35 uppercase">
                        {row.label}
                      </span>
                      <span className="text-sm text-ink-900 dark:text-white font-medium truncate">
                        {row.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
