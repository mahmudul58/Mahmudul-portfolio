import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { SectionHeading } from "./UI.jsx";
import { contactLinks } from "../data/links.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Same-origin call to the Vercel serverless function at
      // /api/contact.js — no external API URL or .env variable
      // needed, since the function is deployed alongside the
      // frontend on the same Vercel project/domain.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          company: form.company, // honeypot — always empty for real users
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", company: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputBase = `w-full rounded-xl px-4 py-3 text-sm
    bg-ink-900/[0.03] dark:bg-white/[0.04]
    border border-ink-900/10 dark:border-white/10
    text-ink-900 dark:text-white placeholder:text-ink-400 dark:placeholder:text-white/30
    focus:outline-none focus:border-amber-500/50 dark:focus:border-amber-400/50
    focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-400/20
    transition-all duration-200`;

  return (
    <section id="contact" className="px-6 py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading index="04" title="Contact" />
        </Reveal>

        <Reveal delay={80}>
          <p className="text-base md:text-lg text-ink-700 dark:text-white/70 max-w-xl mb-12">
            Interested in working together or have a project in mind? Feel free to reach out — I'd
            be glad to connect.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* ── Contact form (3 cols) ─────────────── */}
          <Reveal delay={120} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8">
              {/* honeypot: hidden from real users, bots that
                  auto-fill every field will trip it */}
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-[10px] tracking-wider text-ink-500 dark:text-white/40 uppercase mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-[10px] tracking-wider text-ink-500 dark:text-white/40 uppercase mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputBase}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-[10px] tracking-wider text-ink-500 dark:text-white/40 uppercase mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  className={`${inputBase} resize-none`}
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-6 py-3 rounded-xl text-sm font-semibold
                             bg-amber-500 text-ink-950
                             hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/20
                             active:translate-y-0 transition-all duration-200
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
                             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500
                             flex items-center gap-2"
                >
                  <Send size={14} />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {/* status feedback */}
                {status === "success" && (
                  <span className="flex items-center gap-1.5 text-sm text-emerald-600 dark:text-emerald-400 animate-fade-in">
                    <CheckCircle size={15} /> Message sent!
                  </span>
                )}
                {status === "error" && (
                  <span className="flex items-center gap-1.5 text-sm text-red-500 dark:text-red-400 animate-fade-in">
                    <AlertCircle size={15} /> Something went wrong. Try again.
                  </span>
                )}
              </div>
            </form>
          </Reveal>

          {/* ── Contact cards (2 cols) ────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactLinks.map(({ label, value, href, Icon }, i) => (
              <Reveal key={label} delay={160 + i * 80}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contact via ${label}: ${value}`}
                  className="glass rounded-2xl p-5 flex items-center gap-4
                             hover:-translate-y-0.5 transition-transform duration-300
                             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                >
                  <div
                    className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-400/10
                                  flex items-center justify-center shrink-0"
                  >
                    <Icon size={18} className="text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] tracking-wider text-ink-400 dark:text-white/35 uppercase">
                      {label}
                    </p>
                    <p className="text-sm text-ink-900 dark:text-white font-medium truncate">
                      {value}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}