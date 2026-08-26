import { profile } from "./profile.js";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

/**
 * Centralised contact links — used in Contact.jsx and can be reused
 * in the Footer or anywhere else. Single source of truth.
 */
export const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    Icon: Phone,
  },
  { label: "GitHub", value: "github.com/mahmudul58", href: profile.github, Icon: Github },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mahmudul-islam-amit",
    href: profile.linkedin,
    Icon: Linkedin,
  },
];

/**
 * Navigation links — used in Navbar.jsx.
 */
export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
