import { useState } from "react";
import { Code2, Layers, Database, Wrench } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { SectionHeading } from "./UI.jsx";
import { skills, skillIcons } from "../data/skills.js";

const GROUP_ICONS = {
  Languages: Code2,
  Frameworks: Layers,
  Databases: Database,
  "ML & Tools": Wrench,
};

function SkillTag({ name }) {
  const iconUrl = skillIcons[name];
  const [iconFailed, setIconFailed] = useState(false);

  return (
    <div
      className="group flex items-center gap-2 font-mono text-xs px-3 py-2 rounded-lg
                 border border-ink-900/10 dark:border-white/10
                 text-ink-700 dark:text-white/80
                 bg-ink-900/[0.03] dark:bg-white/[0.04]
                 hover:border-amber-500/40 dark:hover:border-amber-400/40
                 hover:bg-amber-500/[0.06] dark:hover:bg-amber-400/[0.08]
                 transition-colors duration-200"
    >
      {iconUrl && !iconFailed ? (
        <img
          src={iconUrl}
          alt=""
          width={16}
          height={16}
          loading="lazy"
          className={`shrink-0 transition-transform duration-300 group-hover:scale-110 ${
            name === "GitHub" ? "dark:invert" : ""
          } ${
            name.includes("Django") ? "dark:brightness-[2.5] brightness-90" : ""
          }`}
          onError={() => setIconFailed(true)}
        />
      ) : (
        <span
          className="w-4 h-4 rounded bg-amber-500/15 dark:bg-amber-400/15
                     flex items-center justify-center text-[8px] font-bold
                     text-amber-600 dark:text-amber-400 shrink-0
                     transition-transform duration-300 group-hover:scale-110"
        >
          {name.charAt(0)}
        </span>
      )}
      {name}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading index="02" title="Skills" />
        </Reveal>

        {/* auto-rows-fr makes every card the same height regardless of
            item count, so a 2-item card doesn't look sparse next to a
            5-item one */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-fr">
          {skills.map((group, i) => {
            const GroupIcon = GROUP_ICONS[group.group] ?? Code2;

            return (
              <Reveal key={group.group} delay={i * 70}>
                <div
                  className="relative glass rounded-2xl p-5 h-full flex flex-col
                             hover:-translate-y-1 hover:shadow-[0_12px_32px_-16px_rgba(245,158,11,0.35)]
                             transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0
                                   bg-amber-500/10 dark:bg-amber-400/10"
                      >
                        <GroupIcon size={15} className="text-amber-600 dark:text-amber-400" />
                      </div>
                      <p className="font-mono text-xs tracking-widest text-amber-600 dark:text-amber-400">
                        {group.group.toUpperCase()}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-ink-400 dark:text-white/30">
                      {group.items.length}
                    </span>
                  </div>

                  {/* content grows to fill the equal-height card, and the
                      tags stay top-aligned inside it */}
                  <div className="flex flex-wrap content-start gap-2 flex-1">
                    {group.items.map((item) => (
                      <SkillTag key={item} name={item} />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}