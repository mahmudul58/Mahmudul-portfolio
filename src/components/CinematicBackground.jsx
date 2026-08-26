/**
 * Fixed full-viewport background: deep gradient base + soft blurred
 * "aurora" orbs that slowly drift, plus a subtle grid and grain layer
 * for texture. Sits behind everything (z-[-1]) and never scrolls.
 */
export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-ink-950 transition-colors duration-500">
      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-ink-950" />

      {/* drifting color orbs */}
      <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-amber-500/20 dark:bg-amber-500/25 blur-[100px] animate-float" />
      <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-blue-600/10 dark:bg-blue-500/20 blur-[100px] animate-float-slow" />
      <div className="absolute bottom-0 left-1/4 w-[24rem] h-[24rem] rounded-full bg-purple-500/10 dark:bg-purple-600/15 blur-[110px] animate-float" />

      {/* faint grid, dark mode only */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* grain texture */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
