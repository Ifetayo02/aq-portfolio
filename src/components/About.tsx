"use client";

import { motion } from "framer-motion";
import { ABOUT_TEXT } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">ABOUT</p>
        <h2 className="section-title">Frontend developer</h2>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {ABOUT_TEXT.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <div className="about-note">
            <span className="about-note-mark" aria-hidden="true" />
            <span>Turning ideas into fast, thoughtful interfaces that just work.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}