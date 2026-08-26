import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Floating button that appears after the user scrolls past the
 * first viewport height. Smoothly scrolls back to the top.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 glass w-11 h-11 rounded-full
                  flex items-center justify-center text-ink-900 dark:text-white
                  hover:scale-110 active:scale-95 transition-all duration-300
                  shadow-lg shadow-black/10
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
