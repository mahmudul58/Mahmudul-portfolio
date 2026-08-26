import Reveal from "./Reveal.jsx";
import { SectionHeading } from "./UI.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading index="03" title="Projects" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
