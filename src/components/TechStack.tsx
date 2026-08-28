"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiMongodb,
  SiFirebase,
  SiCloudinary,
} from "react-icons/si";

import { TECH, TechItem } from "@/lib/content";

const TECH_ICONS = {
  JavaScript: SiJavascript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "Socket.IO": SiSocketdotio,
  JWT: SiJsonwebtokens,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Cloudinary: SiCloudinary,
};

function TechTile({ tech, i }: { tech: TechItem; i: number }) {
  const Icon = TECH_ICONS[tech.name as keyof typeof TECH_ICONS];
  // Even tiles slide in from the left, odd tiles from the right.
  const fromLeft = i % 2 === 0;

  return (
    <motion.div
      className="tile"
      initial={{ opacity: 0, x: fromLeft ? -48 : 48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Icon className="tile-icon" size={22} />
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
        <p className="section-eyebrow">STACK</p>
      </motion.div>

      <div className="tile-grid" role="list" aria-label="Technologies I work with">
        {TECH.map((tech, i) => (
          <TechTile tech={tech} i={i} key={tech.name} />
        ))}
      </div>
    </section>
  );
}