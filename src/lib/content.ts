export const NAME = " Jamiu Abdulqoyum";

export const ROLE_LINES: string[] = [
  "Full-Stack Developer",
  "MERN Stack Engineer",
  "React & Next.js",
  "Node.js & Express",
];

export type TechGroup = "frontend" | "backend" | "data";

export interface TechItem {
  name: string;
  group: TechGroup;
}
export const ABOUT_TEXT = [
  "I'm a self-taught full-stack developer working primarily in the MERN stack — MongoDB, Express, React, and Node.js.",
  "I started from close to zero and built my way up by shipping real projects: a real-time Kanban app, a task manager with auth, and a desktop-OS-themed portfolio, among others.",
  "I care about clean architecture, interfaces that feel good to use, and writing code I'd be comfortable handing to someone else.",
];

export const TECH: TechItem[] = [
  { name: "React", group: "frontend" },
  { name: "Next.js", group: "frontend" },
  { name: "TypeScript", group: "frontend" },
  { name: "Tailwind CSS", group: "frontend" },
  { name: "Framer Motion", group: "frontend" },
  { name: "Node.js", group: "backend" },
  { name: "Express", group: "backend" },
  { name: "Socket.IO", group: "backend" },
  { name: "JWT", group: "backend" },
  { name: "MongoDB", group: "data" },
  { name: "Firebase", group: "data" },
  { name: "Cloudinary", group: "data" },
];

export type ProjectAccent = "violet" | "cyan" | "emerald" | "amber";

export interface Project {
  name: string;
  desc: string;
  tags: string[];
  accent: ProjectAccent;
  live: string;
  code: string;
}

export const PROJECTS: Project[] = [
  {
    name: "TaskFlow",
    desc: "A Trello-style Kanban app with real-time collaboration, drag-and-drop boards, and role-based permissions.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    accent: "violet",
    live: "#",
    code: "#",
  },
  {
    name: "Planify",
    desc: "A full-stack task manager with Firebase authentication and a clean, fast task-tracking workflow.",
    tags: ["React", "Firebase", "Vite"],
    accent: "cyan",
    live: "#",
    code: "#",
  },
  {
    name: "OS Portfolio",
    desc: "A desktop-OS-themed web app with draggable windows, an admin CRUD panel, and a soft-delete recycle bin.",
    tags: ["Next.js", "Zustand", "Framer Motion"],
    accent: "emerald",
    live: "#",
    code: "#",
  },
  {
    name: "ShelfQuest",
    desc: "A group-built book discovery app pulling live data from the Google Books API.",
    tags: ["JavaScript", "Tailwind", "Google Books API"],
    accent: "amber",
    live: "#",
    code: "#",
  },
];

export const CONTACT_EMAIL = "abdulqoyumjamiu@gmail.com";
export const AVATAR_PATH = "/avatar.jpg";
export const AVATAR_HERO_PATH = "/avatar1.jpg";
export const GITHUB_URL = "#";
export const LINKEDIN_URL = "#";
export const CV_PATH = "https://docs.google.com/document/d/1IUlLCL7o0WxMFDlIakeEcvfeJUrPYAGLCUsI2lpE1xo/view";