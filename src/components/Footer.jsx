export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-ink-900/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-ink-500 dark:text-white/40">
          © {new Date().getFullYear()} Md. Mahmudul Islam Amit
        </span>
        <span className="font-mono text-xs text-ink-500 dark:text-white/40">
          Built with React &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
