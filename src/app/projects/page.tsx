import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/Projects";
import { PROJECTS } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <main className="site projects-page">
      <header className="projects-page-header">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} /> Back home
        </Link>
        <p className="section-eyebrow">ALL WORKS</p>
        <h1 className="projects-page-title">
          All <span>projects</span>
        </h1>
        <p className="projects-page-intro">
          A growing collection of interfaces, products, and experiments built with care.
        </p>
      </header>
      <section className="section projects-page-list" aria-label="All projects">
        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard project={project} i={index} key={project.name} />
          ))}
        </div>
      </section>
    </main>
  );
}
