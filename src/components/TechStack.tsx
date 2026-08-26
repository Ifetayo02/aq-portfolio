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

  return (
    <motion.div
      className="tile"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -4,
        scale: 1.04,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
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

      <div className="tile-grid">
        {TECH.map((tech, i) => (
          <TechTile
            tech={tech}
            i={i}
            key={tech.name}
          />
        ))}
      </div>
    </section>
  );
}