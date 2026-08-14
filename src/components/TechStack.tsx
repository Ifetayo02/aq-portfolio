"use client";

import { motion } from "framer-motion";
import { TECH, TechItem } from "@/lib/content";

function TechTile({ tech, i }: { tech: TechItem; i: number }) {
  return (
    <motion.div
      className={`tile tile-${tech.group}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: i * 0.04 }}
      whileHover={{ y: -4, scale: 1.03 }}
    >
      <span className="tile-dot" />
      <span className="tile-label">{tech.name}</span>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">Toolkit</p>
        <h2 className="section-title">Tech I build with</h2>
      </motion.div>
      <div className="tile-grid">
        {TECH.map((t, i) => (
          <TechTile tech={t} i={i} key={t.name} />
        ))}
      </div>
    </section>
  );
}