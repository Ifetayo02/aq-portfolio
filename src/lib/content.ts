export const NAME = "Abdulqoyum";

export const HERO_ROLE = "Frontend developer";
export const HERO_TAGLINE = "Building digital experiences with clarity and intention";

export const ROLE_LINES: string[] = [
  "Frontend Developer",
  "React Interface Builder",
  "Next.js Developer",
  "Design-minded Engineer",
];

export type TechGroup = "frontend" | "backend" | "data";

export interface TechItem {
  name: string;
  group: TechGroup;
}
export const ABOUT_TEXT = [
    "I’m a frontend developer who uses React, Tailwind CSS, and Next.js to turn ideas into clear, responsive, and expressive digital experiences that solve real problems.",
    "My work sits at the intersection of thoughtful interface design and solid frontend engineering. I focus on building interfaces that are intuitive to use, purposeful in their design, and reliable in practice.",
    "I build with maintainability and usability in mind, while leaving room for the small interactions that make a product feel intuitive, purposeful, and alive."
  ]

export const TECH: TechItem[] = [
  { name: "React", group: "frontend" },
  { name: "Next.js", group: "frontend" },
   { name: "JavaScript", group: "data" },
  { name: "TypeScript", group: "frontend" },
  { name: "Tailwind CSS", group: "frontend" },
   { name: "Node.js", group: "backend" },
  { name: "Express", group: "backend" },
  { name: "MongoDB", group: "data" },
  { name: "Firebase", group: "data" },
 
];

export type ProjectAccent = "strong" | "soft";

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
    accent: "strong",
    live: "#",
    code: "#",
  },
  {
    name: "Planify",
    desc: "A full-stack task manager with Firebase authentication and a clean, fast task-tracking workflow.",
    tags: ["React", "Firebase", "Vite"],
    accent: "soft",
    live: "#",
    code: "#",
  },
  {
    name: "OS Portfolio",
    desc: "A desktop-OS-themed web app with draggable windows, an admin CRUD panel, and a soft-delete recycle bin.",
    tags: ["Next.js", "Zustand", "Framer Motion"],
    accent: "strong",
    live: "#",
    code: "#",
  },
  {
    name: "ShelfQuest",
    desc: "A group-built book discovery app pulling live data from the Google Books API.",
    tags: ["JavaScript", "Tailwind", "Google Books API"],
    accent: "soft",
    live: "#",
    code: "#",
  },
];

export interface AboutHighlight {
  icon: "Code2" | "Zap" | "Layers" | "Rocket";
  title: string;
  desc: string;
}

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  {
    icon: "Code2",
    title: "Interface Craft",
    desc: "Clear hierarchy, responsive layouts, and purposeful detail.",
  },
  {
    icon: "Zap",
    title: "Motion With Meaning",
    desc: "Fluid transitions that guide attention instead of getting in the way.",
  },
  {
    icon: "Layers",
    title: "Accessible By Default",
    desc: "Keyboard-friendly, readable, and considerate experiences.",
  },
  {
    icon: "Rocket",
    title: "Built To Perform",
    desc: "Fast-loading frontends with clean, maintainable foundations.",
  },
];

export const CONTACT_EMAIL = "abdulqoyumjamiu@gmail.com";
export const AVATAR_PATH = "/avatar.jpg";
export const AVATAR_HERO_PATH = "/avatar1.jpg";
export const GITHUB_URL = "https://github.com/Ifetayo02";
export const LINKEDIN_URL = "https://linkedin.com/in/abdulqoyumjamiu";
export const CV_PATH = "https://docs.google.com/document/d/1IUlLCL7o0WxMFDlIakeEcvfeJUrPYAGLCUsI2lpE1xo/view";