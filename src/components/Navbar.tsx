"use client";

import { motion } from "framer-motion";
import { CV_PATH } from "@/lib/content";

export default function Nav() {
  return (
    <motion.nav
      className="nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-links">
        <a href="#projects">Projects</a>
        <span className="nav-divider" />
        <a href="#stack">Stack</a>
        <span className="nav-divider" />
        <a href="#about">About</a>
        <span className="nav-divider" />
        <a href={CV_PATH} target="_blank" rel="noopener noreferrer">
           Resume
        </a>
        <span className="nav-divider" />
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  );
}