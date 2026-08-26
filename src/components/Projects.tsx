"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, ExternalLink } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import { PROJECTS, Project } from "@/lib/content";

export function ProjectCard({ project, i }: { project: Project; i: number }) {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 260, damping: 18 },
            }}
        >
            <div className={`mockup mockup-${project.accent}`}>
                <div className="mockup-bar">
                    <span /> <span /> <span />
                </div>
                <div className="mockup-body">
                    <span className="mockup-glyph">
                        {project.name.slice(0, 2).toUpperCase()}
                    </span>
                </div>
            </div>
            <div className="project-body">
                <div className="project-head">
                    <h3>{project.name}</h3>
                    <div className="project-links">
                        <a href={project.live} aria-label={`${project.name} live link`}>
                            <ExternalLink size={16} />
                        </a>
                        <a href={project.code} aria-label={`${project.name} code link`}>
                            <GithubIcon size={16} />
                        </a>
                    </div>
                </div>
                <p>{project.desc}</p>
                <div className="tag-row">
                    {project.tags.map((t) => (
                        <span key={t} className="tag">
                            {t}
                        </span>
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
            <div className="project-grid">
                {PROJECTS.map((p, i) => (
                    <ProjectCard project={p} i={i} key={p.name} />
                ))}
            </div>
            <a href="/projects" className="all-projects-link">
                <span>VIEW ALL PROJECTS</span>
                <ArrowDownRight size={18} />
            </a>
        </section>
    );
}