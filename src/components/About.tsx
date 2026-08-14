"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NAME, AVATAR_PATH, ABOUT_TEXT } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">Who I am</h2>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="avatar-wrap"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={AVATAR_PATH}
            alt={NAME}
            width={340}
            height={340}
            className="avatar"
          />
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {ABOUT_TEXT.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}