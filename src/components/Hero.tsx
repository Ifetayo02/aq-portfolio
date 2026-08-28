"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Eye } from "lucide-react";

import { NAME, HERO_ROLE, HERO_TAGLINE, CV_PATH } from "@/lib/content";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
    return (
        <section id="hero" className="hero">

            <motion.h1
                className="hero-name"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                {NAME}
                <span className="hero-dot">.</span>
            </motion.h1>

            <motion.div
                className="hero-divider"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.p
                className="hero-role"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {HERO_ROLE}
            </motion.p>

            <motion.p
                className="hero-desc"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                {HERO_TAGLINE}
            </motion.p>

            <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.62 }}
            >
                <MagneticButton href="#projects" className="btn btn-ghost">
                    See my work
                    <span className="btn-arrow">
                        <ArrowDownRight size={16} />
                    </span>
                </MagneticButton>
                <MagneticButton
                    href={CV_PATH}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Eye size={16} /> View CV
                </MagneticButton>
            </motion.div>
        </section>
    );
}
