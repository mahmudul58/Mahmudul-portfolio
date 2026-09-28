import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { SectionHeading } from "./UI.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="px-6 py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading index="03" title="Projects" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {displayedProjects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 4) * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {projects.length > 4 && (
          <Reveal delay={100}>
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2.5 font-mono text-sm rounded-lg border border-ink-900/10 dark:border-white/10 text-ink-700 dark:text-white/70 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/30 dark:hover:border-amber-400/30 hover:bg-amber-500/5 transition-all duration-300"
              >
                {showAll ? "Show Less" : "More Projects"}
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
