// This file lives in /api at the project root (NOT inside /src).
// Vercel automatically turns anything in /api into a serverless
// function — this one runs on Vercel's servers, never in the
// browser, so process.env.RESEND_API_KEY is never exposed to
// anyone visiting the site.

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message, company } = req.body ?? {};

  // Honeypot: a hidden field real users never fill in. If it has a
  // value, the submission came from a bot, so silently pretend it
  // succeeded instead of processing it.
  if (company) {
    return res.status(200).json({ success: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  try {
    await resend.emails.send({
      // Until you verify your own domain with Resend, sending must
      // come from this shared address — see the note below the code.
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "abc@gmail.com", // replace with your real inbox
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send message." });
  }
}