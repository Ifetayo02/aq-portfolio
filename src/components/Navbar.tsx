"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { CV_PATH } from "@/lib/content";

export default function Nav() {
  return (
    <motion.nav
      className="nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#hero" className="nav-brand">
        AQ
      </a>
      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#stack">Stack</a>
        <a href="#contact">Contact</a>
      </div>
   <a href={CV_PATH} className="nav-cta" download>
  <Download size={15} /> Resume
</a>
    </motion.nav>
  );
}