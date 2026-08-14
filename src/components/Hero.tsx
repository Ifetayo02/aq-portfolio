"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download,Eye } from "lucide-react";
import Image from "next/image";

import { NAME, CV_PATH, AVATAR_HERO_PATH } from "@/lib/content";

const WORDS = [NAME, "Full-Stack Developer"];

function useLoopingTypewriter(
    words: string[],
    typingSpeed = 90,
    deletingSpeed = 50,
    pauseTime = 1800
) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex % words.length];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && text === current) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
        } else {
            timeout = setTimeout(
                () => {
                    setText((t) =>
                        isDeleting
                            ? current.slice(0, t.length - 1)
                            : current.slice(0, t.length + 1)
                    );
                },
                isDeleting ? deletingSpeed : typingSpeed
            );
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return text;
}

export default function Hero() {
    const typed = useLoopingTypewriter(WORDS);

    return (
        <section id="hero" className="hero">
            <motion.div
                className="hero-avatar-wrap"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src={AVATAR_HERO_PATH}
                    alt={NAME}
                    width={72}
                    height={72}
                    className="hero-avatar"
                    priority
                />
            </motion.div>
            <motion.h1
                className="hello"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Hey there! <span className="wave">👋</span>
            </motion.h1>

            <motion.p
                className="typewriter-line"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
            >
                I am <span className="tw-word">{typed}</span>
                <span className="tw-caret">|</span>
            </motion.p>

            <motion.p
                className="hero-desc"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                I build full-stack web applications with the MERN stack and ensure real-time
                features, clean architecture, and interfaces people actually enjoy
                using.
            </motion.p>

            <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
            >
                <a href="#projects" className="btn btn-primary">
                    See my work <ArrowUpRight size={16} />
                </a>
                <a href={CV_PATH} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                    <Eye size={16} /> View CV
                </a>
            </motion.div>
        </section>
    );
}