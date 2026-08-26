"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">04 — CONTACT</p>
        <h2 className="contact-title">
          <span>LET&apos;S BUILD</span>
          <strong>SOMETHING.</strong>
        </h2>
      </motion.div>

      <div className="contact-footer-grid">
        <div className="contact-mail-block">
          <span className="contact-label">SEND A MAIL</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mail-link">
            <strong>{CONTACT_EMAIL}</strong>
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="contact-socials">
          <span className="contact-label">FIND ME ON</span>
          <div className="contact-links">
            <a href={GITHUB_URL} className="profile-link" aria-label="GitHub">
              <GithubIcon size={16} /> <strong>GitHub</strong> <ArrowUpRight size={15} />
            </a>
            <a href={LINKEDIN_URL} className="profile-link" aria-label="LinkedIn">
              <LinkedinIcon size={16} /> <strong>LinkedIn</strong> <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
      <footer className="footer-banner">
        <strong>Abdulqoyum</strong>
        <span>&copy; 2026 Abdulqoyum. All rights reserved.</span>
      </footer>
    </section>
  );
}