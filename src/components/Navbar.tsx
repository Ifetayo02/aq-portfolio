"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CONTACT_EMAIL, CV_PATH, NAME } from "@/lib/content";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    setDarkMode(savedTheme ? savedTheme === "dark" : true);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    window.localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const themeButtonLabel = darkMode ? "Light" : "Dark";
  const themeAriaLabel = darkMode ? "Switch to light mode" : "Switch to dark mode";
  const toggleTheme = () => setDarkMode((mode) => !mode);

  return (
    <div className="nav-bar">
      <div className="nav-inner">
        <motion.a
          href="#hero"
          className="nav-logo"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {NAME}
        </motion.a>

        {/* Desktop bar */}
        <motion.nav
          className="nav"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a href={CV_PATH} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
          <div className="nav-cta-group">
            <button
              className="theme-toggle-text"
              type="button"
              aria-label={themeAriaLabel}
              onClick={toggleTheme}
            >
              {themeButtonLabel}
            </button>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-cta">
              Let&apos;s Talk
            </a>
          </div>
        </motion.nav>

        {/* Mobile-only controls: theme toggle stays on the bar, doesn't collapse */}
        <div className="nav-mobile-controls">
          <button
            className="theme-toggle-text"
            type="button"
            aria-label={themeAriaLabel}
            onClick={toggleTheme}
          >
            {themeButtonLabel}
          </button>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown — links + CV + CTA only, theme toggle lives on the bar above */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="btn-cta btn-cta-mobile"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}