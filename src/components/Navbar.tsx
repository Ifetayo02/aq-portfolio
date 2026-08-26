"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Menu, Moon, Sun, X } from "lucide-react";
import { CV_PATH, NAME } from "@/lib/content";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(savedTheme ? savedTheme === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    window.localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const themeLabel = darkMode ? "Switch to light mode" : "Switch to dark mode";

  return (
    <div className="nav-bar">
      <motion.a
        href="#hero"
        className="nav-logo"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {NAME}
      </motion.a>

      {/* Desktop pill */}
      <motion.nav
        className="nav"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-links">
          {LINKS.map((l, i) => (
            <span key={l.href} className="nav-link-group">
              {i > 0 && <span className="nav-divider" />}
              <a href={l.href}>{l.label}</a>
            </span>
          ))}
          <span className="nav-divider" />
          <a href={CV_PATH} target="_blank" rel="noopener noreferrer">
            <Eye size={14} className="nav-icon" /> Resume
          </a>
          <button className="theme-toggle" type="button" aria-label={themeLabel} onClick={() => setDarkMode((mode) => !mode)}>
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile toggle */}
      <button
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className="nav-spacer" />

      {/* Mobile dropdown */}
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
              <Eye size={14} className="nav-icon" /> Resume
            </a>
            <button className="theme-toggle theme-toggle-mobile" type="button" onClick={() => setDarkMode((mode) => !mode)}>
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
              {themeLabel}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}