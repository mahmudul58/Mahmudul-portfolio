import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

/**
 * Uniform-height project card with screenshot + clean hover effect.
 * Shows a static screenshot with a subtle zoom on hover.
 */
export default function ProjectCard({ project }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article
      className="glass rounded-2xl overflow-hidden group flex flex-col h-full
                 hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* ── screenshot ───────────────────────────── */}
      <div className="relative aspect-video overflow-hidden bg-ink-800/10 dark:bg-ink-800/40">
        {!imgFailed && project.image ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover object-top
                       transition-transform duration-500 ease-out
                       group-hover:scale-105"
            onError={() => setImgFailed(true)}
          />
        ) : (
          /* gradient fallback when image is missing */
          <div className="w-full h-full flex items-center justify-center
                          bg-gradient-to-br from-ink-800/20 via-ink-800/10 to-amber-500/10
                          dark:from-ink-800 dark:via-ink-900 dark:to-amber-900/20">
            <span className="font-display text-xl font-bold text-ink-500/30 dark:text-white/10">
              {project.name}
            </span>
          </div>
        )}

        {/* hover overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </div>

      {/* ── content ──────────────────────────────── */}
      <div className="px-6 pt-5 pb-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">
            {project.name}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-ink-700 dark:text-white/70 mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2.5 py-1 rounded-md
                         border border-ink-900/10 dark:border-white/10
                         text-ink-600 dark:text-white/60
                         bg-ink-900/[0.02] dark:bg-white/[0.03]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ── footer ─────────────────────────────── */}
        <div className="flex items-center justify-between pt-4 border-t border-ink-900/10 dark:border-white/10 mt-auto">
          <span className="font-mono text-xs text-ink-500 dark:text-white/40">
            {project.metric}
          </span>
          <div className="flex items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} live demo`}
                className="flex items-center gap-1.5 text-xs font-medium
                           text-amber-600 dark:text-amber-400
                           hover:text-amber-500 dark:hover:text-amber-300
                           transition-colors duration-200
                           focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 rounded"
              >
                <ExternalLink size={13} /> Live
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} source code on GitHub`}
                className="flex items-center gap-1.5 text-xs font-medium
                           text-ink-700 dark:text-white/70
                           hover:text-ink-900 dark:hover:text-white
                           transition-colors duration-200
                           focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 rounded"
              >
                <Github size={13} /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
