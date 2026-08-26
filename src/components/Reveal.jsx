import { useReveal } from "../hooks/useReveal.js";

/**
 * Wraps children in a div that fades + slides up into view the first
 * time it crosses into the viewport. `delay` is in milliseconds and
 * is useful for staggering a row of cards.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
