import Reveal from "./Reveal.jsx";
import { SectionHeading } from "./UI.jsx";
import { credentials } from "../data/credentials.js";
import { ExternalLink } from "lucide-react";

export default function Credentials() {
  return (
    <section id="credentials" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading index="04" title="Certifications & Achievements" />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((item, i) => {
            const CardWrapper = item.link ? "a" : "div";
            const targetAttr = item.link ? { target: "_blank", rel: "noopener noreferrer" } : {};

            return (
              <Reveal key={item.label} delay={i * 80}>
                <CardWrapper
                  href={item.link}
                  {...targetAttr}
                  className="glass rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 relative focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 h-full"
                >
                  {/* Image Section */}
                  {item.image && (
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-800/10 dark:bg-ink-800/40 border-b border-ink-900/10 dark:border-white/10">
                      <img
                        src={item.image}
                        alt={`${item.label} certificate`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-mono text-xs tracking-widest text-amber-600 dark:text-amber-400">
                        {item.label.toUpperCase()}
                      </p>
                      {item.link && (
                        <ExternalLink
                          size={16}
                          className="text-ink-400 dark:text-white/30 group-hover:text-amber-500 transition-colors shrink-0 ml-4"
                        />
                      )}
                    </div>
                    
                    <h3 className="text-sm font-medium leading-relaxed text-ink-900 dark:text-white flex-1">
                      {item.value}
                    </h3>
                  </div>
                </CardWrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
