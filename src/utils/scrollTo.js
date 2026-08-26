/**
 * Smoothly scroll to the element matching the given ID.
 * Centralised helper to avoid duplicating this across components.
 */
export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
