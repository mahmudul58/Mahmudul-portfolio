import React from "react";
import CinematicBackground from "./components/CinematicBackground.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

/* ── Error Boundary ──────────────────────────────── */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-ink-950 text-white px-6 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">
            Something went wrong
          </h1>
          <p className="text-white/70 mb-6 max-w-md">
            An unexpected error occurred. Please refresh the page or try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-xl text-sm font-semibold bg-amber-500 text-ink-950
                       hover:-translate-y-0.5 transition-transform duration-200"
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

/* ── App ─────────────────────────────────────────── */
export default function App() {
  return (
    <ErrorBoundary>
      <div className="relative min-h-screen text-ink-900 dark:text-white transition-colors duration-500">
        {/* Skip-to-content link for keyboard / screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50
                     focus:px-4 focus:py-2 focus:rounded-lg focus:bg-amber-500 focus:text-ink-950
                     focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>

        <CinematicBackground />
        <Navbar />
        <main id="main-content" aria-label="Portfolio content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          {/* <Credentials /> */}
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}
