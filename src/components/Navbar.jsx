import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle.jsx";
import { scrollToSection } from "../utils/scrollTo.js";

import { navLinks as LINKS } from "../data/links.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* ── scroll shadow ─────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── active section tracking ───────────────────────── */
  useEffect(() => {
    const sectionIds = ["hero", ...LINKS.map((l) => l.id)];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── nav click handler ─────────────────────────────── */
  const handleNav = useCallback(
    (id) => {
      scrollToSection(id);
      setMenuOpen(false);
    },
    []
  );

  /* ── close mobile menu on resize to desktop ────────── */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* ── lock body scroll when mobile menu is open ─────── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <nav
          aria-label="Primary navigation"
          className={`glass flex items-center justify-between rounded-2xl px-5 transition-all duration-300 ${
            scrolled ? "py-2.5" : "py-3.5"
          }`}
        >
          {/* ─── Logo ─────────────────────────────── */}
          <button
            onClick={() => handleNav("hero")}
            className="font-display font-semibold tracking-tight text-ink-900 dark:text-white
                       hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 rounded"
          >
            Md. Mahmudul Islam Amit
          </button>

          {/* ─── Desktop links ────────────────────── */}
          <div className="hidden md:flex items-center gap-6">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-sm transition-colors
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 rounded
                  ${
                    activeSection === link.id
                      ? "text-amber-500 dark:text-amber-400 font-medium"
                      : "text-ink-700 dark:text-white/70 hover:text-amber-500 dark:hover:text-amber-400"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* ─── Right cluster ────────────────────── */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex text-xs font-mono px-3 py-1.5 rounded-full
                              border border-amber-500/40 text-amber-600 dark:text-amber-400">
              Open to Internships
            </span>
            <ThemeToggle />

            {/* ─── Hamburger (mobile only) ────────── */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden glass w-10 h-10 rounded-xl flex items-center justify-center
                         text-ink-900 dark:text-white hover:scale-105 active:scale-95
                         transition-transform duration-200
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* ─── Mobile menu panel ─────────────────── */}
        <div
          className={`md:hidden glass rounded-2xl mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="flex flex-col py-2">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                tabIndex={menuOpen ? 0 : -1}
                className={`text-left px-5 py-3 text-sm transition-colors
                  focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber-500
                  ${
                    activeSection === link.id
                      ? "text-amber-500 dark:text-amber-400 font-medium bg-amber-500/5"
                      : "text-ink-700 dark:text-white/70 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-amber-500/5"
                  }`}
              >
                {link.label}
              </button>
            ))}

          </div>
        </div>
      </div>
    </header>
  );
}
