export function SectionHeading({ index, title }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-amber-500/40 text-amber-600 dark:text-amber-400">
        {index}
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-900 dark:text-white">
        {title}
      </h2>
      <span className="flex-1 h-px bg-ink-900/10 dark:bg-white/10" />
    </div>
  );
}

export function Tag({ children }) {
  return (
    <span className="font-mono text-xs px-2.5 py-1 rounded-md border border-ink-900/10 dark:border-white/10 text-ink-700 dark:text-white/70 bg-black/[0.02] dark:bg-white/[0.03]">
      {children}
    </span>
  );
}
