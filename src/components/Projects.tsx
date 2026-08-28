"use client";

import { useRef, MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import { PROJECTS, Project } from "@/lib/content";

export function ProjectCard({ project, i }: { project: Project; i: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Subtle parallax: the screenshot drifts a few px opposite the cursor,
    // giving the image a sense of depth without being distracting.
    const px = useMotionValue(0);
    const py = useMotionValue(0);
    const imgX = useSpring(useTransform(px, [-1, 1], [-8, 8]), { stiffness: 150, damping: 20 });
    const imgY = useSpring(useTransform(py, [-1, 1], [-8, 8]), { stiffness: 150, damping: 20 });

    function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        px.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
        py.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
    }

    function handleMouseLeave() {
        px.set(0);
        py.set(0);
    }

    return (
        <motion.div
            ref={cardRef}
            className="project-card"
            variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
            }}
            whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 260, damping: 18 },
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`project-image-frame mockup-${project.accent}`}
                aria-label={`${project.name} project preview`}
            >
                               {project.image ? (
                    <motion.div
                        className="project-image-mask"
                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                        transition={{ duration: 0.7, delay: i * 0.15 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.div className="project-image-scale" style={{ x: imgX, y: imgY }}>
                            <Image
                                src={project.image}
                                alt={`${project.name} screenshot`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="project-image-el"
                                priority={i < 2}
                            />
                        </motion.div>
                    </motion.div>
                ) : (
                    <div className="project-image-placeholder">
                        <div className="mockup-bar">
                            <span /> <span /> <span />
                        </div>
                        <div className="mockup-body">
                            <span className="placeholder-kicker">PROJECT PREVIEW</span>
                            <span className="mockup-glyph">
                                {project.name.slice(0, 2).toUpperCase()}
                            </span>
                        </div>
                    </div>
                )}
            </div>
            <div className="project-body">
                <div className="project-head">
                    <div className="project-title-line">
                        <span className="project-number">0{i + 1}</span>
                        <h3>{project.name.toUpperCase()}</h3>
                    </div>
                    <div className="project-links">
                        <a href={project.live} className="arrow-link" target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live link`}>
                            <ExternalLink size={16} />
                        </a>
                        <a href={project.code} className="arrow-link" target="_blank" rel="noopener noreferrer" aria-label={`${project.name} code link`}>
                            <GithubIcon size={16} />
                        </a>
                    </div>
                </div>
                <p>{project.desc}</p>
                <div className="tag-row">
                    {project.tags.map((t, ti) => (
                        <motion.span
                            key={t}
                            className="tag"
                            initial={{ opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: i * 0.08 + 0.25 + ti * 0.04 }}
                        >
                            {t}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="section-eyebrow">SELECTED WORKS</p>
                <div className="projects-title-wrap">
                    <span className="projects-title-back" aria-hidden="true">PROJECTS</span>
                    <h2 className="section-title projects-title">
                        <span>SELECTED</span> <strong>WORKS</strong>
                    </h2>
                </div>
            </motion.div>
            <motion.div
                className="project-grid"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.08 } },
                }}
            >
                {PROJECTS.map((p, i) => (
                    <ProjectCard project={p} i={i} key={p.name} />
                ))}
            </motion.div>
        </section>
    );
}
