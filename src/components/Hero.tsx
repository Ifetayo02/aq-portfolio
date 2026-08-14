"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Download, Terminal } from "lucide-react";
import { NAME, ROLE_LINES, CV_PATH } from "@/lib/content";

function useTypewriter(text: string, speed = 90, startDelay = 300) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const startTimer = setTimeout(() => {
      const tick = () => {
        i++;
        setOut(text.slice(0, i));
        if (i < text.length) {
          timeout = setTimeout(tick, speed);
        } else {
          setDone(true);
        }
      };
      tick();
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(timeout);
    };
  }, [text, speed, startDelay]);

  return { out, done };
}

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % ROLE_LINES.length),
      2400
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="role-swap">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLE_LINES[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "inline-block" }}
        >
          {ROLE_LINES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const prefix = `const developer = "`;
  const { out, done } = useTypewriter(`${prefix}${NAME}";`, 55, 400);
  const showName = out.startsWith(prefix);
  const nameOut = showName ? out.slice(prefix.length).replace(/";?$/, "") : "";

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />

      <motion.div
        className="eyebrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <Terminal size={13} /> portfolio.tsx
      </motion.div>

      <h1 className="code-name">
        <span className="tok-kw">const</span>{" "}
        <span className="tok-var">developer</span>{" "}
        <span className="tok-op">=</span>{" "}
        <span className="tok-str">
          "{nameOut}
          <span className={`caret ${done ? "caret-blink" : ""}`}>|</span>
          {done ? '";' : ""}
        </span>
      </h1>

      <motion.p
        className="hero-role"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: done ? 1 : 0, y: done ? 0 : 12 }}
        transition={{ duration: 0.5 }}
      >
        <RotatingRole />
      </motion.p>

      <motion.p
        className="hero-desc"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: done ? 1 : 0, y: done ? 0 : 12 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        I build full-stack web applications with the MERN stack — real-time
        features, clean architecture, and interfaces people actually enjoy
        using.
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: done ? 1 : 0, y: done ? 0 : 12 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a href="#projects" className="btn btn-primary">
          See my work <ArrowUpRight size={16} />
        </a>
      <a href={CV_PATH} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
  <Download size={16} /> View CV
</a>
      </motion.div>
    </section>
  );
}