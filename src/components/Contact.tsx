"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Eye, Mail } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, CV_PATH } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">GET IN TOUCH</p>
        <h2 className="section-title">Let&apos;s build something</h2>
        <p className="contact-sub">
          Open to internships, freelance work, and collaborations. Reach out
          directly.
        </p>
      </motion.div>

      <div className="contact-links">
        <a href={`mailto:${CONTACT_EMAIL}`} className="mail-link">
          <Mail size={18} />
          <span>Send a mail to <strong>{CONTACT_EMAIL}</strong></span>
        </a>
        <a href={GITHUB_URL} className="profile-link" aria-label="GitHub">
          <GithubIcon size={18} /> <strong>GitHub</strong> <ArrowUpRight size={17} />
        </a>
        <a href={LINKEDIN_URL} className="profile-link" aria-label="LinkedIn">
          <LinkedinIcon size={18} /> <strong>LinkedIn</strong> <ArrowUpRight size={17} />
        </a>
      </div>

    <a href={CV_PATH} className="btn btn-ghost cv-final" target="_blank" rel="noopener noreferrer">
  <Eye size={16} /> View CV
</a>
      <footer className="footer-banner">
        <strong>Abdulqoyum</strong>
        <span>Copyright Reserved 2026</span>
      </footer>
    </section>
  );
}