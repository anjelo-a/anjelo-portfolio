import {
  Code2,
  Database,
  GitBranch,
  Globe2,
  GraduationCap,
  Link2,
  Mail,
  Server,
  TerminalSquare,
} from "lucide-react";

export type TechGroup = {
  category: string;
  icon: typeof Code2;
  featured: string[];
  tools: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  features: string[];
  learned: string[];
  github: string;
  demo?: string;
  screenshots: string[];
};

export const profile = {
  name: "Anjelo Arnaez",
  role: "Entry-Level Full-Stack Developer",
  location: "Manila, Philippines",
  email: "hello@anjelo.dev",
  resumeUrl: "/resume/anjelo-arnaez-resume.pdf",
  about:
    "I am an aspiring full-stack developer focused on building clear, responsive web apps with TypeScript, React, Next.js, and practical backend fundamentals. My portfolio is centered on projects, steady learning, and production-minded habits: readable code, thoughtful UI states, accessible interactions, and reliable deployment workflows.",
};

export const socialLinks = [
  { label: "Email", href: "mailto:hello@anjelo.dev", icon: Mail },
  { label: "GitHub", href: "https://github.com/", icon: GitBranch },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Link2 },
  { label: "Website", href: "https://anjelo.dev", icon: Globe2 },
];

export const techStack: TechGroup[] = [
  {
    category: "Frontend",
    icon: Code2,
    featured: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    tools: ["HTML", "CSS", "JavaScript", "Responsive UI", "Accessibility"],
  },
  {
    category: "Backend",
    icon: Server,
    featured: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
    tools: ["Prisma", "Auth basics", "API validation", "Server Actions"],
  },
  {
    category: "DevOps",
    icon: TerminalSquare,
    featured: ["Git", "GitHub Actions", "Docker"],
    tools: ["CI basics", "Linting", "Build checks", "Version control"],
  },
  {
    category: "Cloud",
    icon: Database,
    featured: ["Vercel", "Supabase", "AWS basics", "Firebase"],
    tools: ["Managed Postgres", "Object storage", "Deploy previews"],
  },
];

export const projects: Project[] = [
  {
    slug: "taskflow-dashboard",
    title: "TaskFlow Dashboard",
    summary: "A responsive task management dashboard with filters, activity summaries, and clean project cards.",
    role: "Frontend developer and UI implementer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Local state"],
    features: ["Kanban-style project view", "Priority filters", "Responsive analytics cards", "Keyboard-friendly controls"],
    learned: ["Designed reusable card patterns", "Improved responsive grid decisions", "Practiced accessible button states"],
    github: "https://github.com/",
    demo: "https://vercel.com/",
    screenshots: ["/projects/taskflow-1.svg", "/projects/taskflow-2.svg"],
  },
  {
    slug: "studyhub-api",
    title: "StudyHub API",
    summary: "A REST API for tracking study sessions, topics, and weekly progress toward learning goals.",
    role: "Backend developer",
    stack: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    features: ["CRUD endpoints", "Input validation", "Relational data model", "Progress summaries"],
    learned: ["Modeled relational data", "Handled API errors consistently", "Documented endpoints for frontend use"],
    github: "https://github.com/",
    screenshots: ["/projects/studyhub-1.svg", "/projects/studyhub-2.svg"],
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio V1",
    summary: "A compact portfolio focused on projects, certifications, tech stack, and an honest developer journey.",
    role: "Designer and developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Project case studies", "Resume modal", "Certification index", "Project-based gallery"],
    learned: ["Built typed content collections", "Created route-based detail pages", "Refined monochrome visual hierarchy"],
    github: "https://github.com/",
    demo: "https://vercel.com/",
    screenshots: ["/projects/portfolio-1.svg", "/projects/portfolio-2.svg"],
  },
];

export const learningJourney = [
  { date: "2024", title: "Started coding fundamentals", detail: "Built a foundation in HTML, CSS, JavaScript, Git, and command-line workflows." },
  { date: "2025", title: "Moved into full-stack projects", detail: "Practiced React, TypeScript, APIs, databases, and deployment through small product-style apps." },
  { date: "2026", title: "Portfolio and production habits", detail: "Focused on polished case studies, testing basics, accessibility, and clean deployment workflows." },
];

export const certifications = [
  { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "2025", url: "https://www.freecodecamp.org/" },
  { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", date: "2025", url: "https://www.freecodecamp.org/" },
  { title: "AWS Cloud Practitioner Essentials", issuer: "AWS Skill Builder", date: "2026", url: "https://skillbuilder.aws/" },
  { title: "GitHub Foundations", issuer: "GitHub", date: "2026", url: "https://github.com/" },
];

export const journeyIcon = GraduationCap;
