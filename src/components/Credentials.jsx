import Reveal from "./Reveal.jsx";
import { SectionHeading } from "./UI.jsx";
import { credentials } from "../data/credentials.js";

export default function Credentials() {
  return (
    <section id="credentials" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading index="04" title="Certifications & Achievements" />
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5">
          {credentials.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="glass rounded-2xl p-5 h-full hover:-translate-y-1 transition-transform duration-300">
                <p className="font-mono text-xs tracking-widest text-amber-600 dark:text-amber-400 mb-2">
                  {item.label.toUpperCase()}
                </p>
                <p className="text-sm leading-relaxed text-ink-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
