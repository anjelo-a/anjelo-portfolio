import {
  Code2,
  Database,
  GraduationCap,
  Mail,
  Server,
  TerminalSquare,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";

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
  name: "Anjelo Benedict L. Arnaez",
  role: "Full-Stack Developer",
  location: "Manila, Philippines",
  email: "arnaez.anjelo@gmail.com",
  resumeUrl: "/resume/anjelo-arnaez-resume.pdf",
  about: [
    "I’m Anjelo, a Computer Science student from the Philippines focused on becoming useful in remote startup teams.",
    "Most of my growth came from building outside class. I had to learn how to read docs, debug alone, make decisions, and finish projects without waiting for someone to give me every next step. That shaped how I work more than any single tech stack.",
    "Right now, I’m open to learning across different products and industries. What matters most to me is working on real problems, getting feedback from experienced engineers, and improving through actual product work.",
    "I want to keep growing through real work and become someone a remote startup team can trust with ownership.",
  ],
};

export const socialLinks = [
  { label: "Email", href: "mailto:arnaez.anjelo@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/anjelo-a", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anjelo-a-a6228a210/", icon: LinkedInIcon },
];

export const techStack: TechGroup[] = [
  {
    category: "Frontend",
    icon: Code2,
    featured: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    tools: ["Vite", "Playwright", "Lighthouse", "Figma"],
  },
  {
    category: "Backend",
    icon: Server,
    featured: ["Python", "NestJS", "FastAPI", "Go", "REST APIs"],
    tools: ["JWT", "Socket.IO", "SQLAlchemy", "Rate limiting"],
  },
  {
    category: "Data & Mobile",
    icon: TerminalSquare,
    featured: ["PostgreSQL", "Prisma", "Kotlin", "Jetpack Compose"],
    tools: ["SQL", "MVVM", "StateFlow", "WorkManager"],
  },
  {
    category: "Cloud & Testing",
    icon: Database,
    featured: ["Azure", "Google Cloud Platform (GCP)", "Docker", "GitHub Actions"],
    tools: ["Vercel", "Render", "Pytest", "Vitest", "autocannon"],
  },
];

export const projects: Project[] = [
  {
    slug: "poisontrace",
    title: "PoisonTrace",
    summary: "A Solana wallet-poisoning detection pipeline with strict candidate filtering, idempotent storage, async exports, and a React dashboard.",
    role: "Full-stack developer",
    stack: ["TypeScript", "Go", "PostgreSQL", "React", "Docker", "Azure"],
    features: [
      "Bounded ingestion and owner-level normalization",
      "100% recall and 0 false positives across 19 test cases",
      "Composite identity keys for idempotent persistence",
      "React + Go dashboard load-tested to ~190 req/s at p99 123ms",
    ],
    learned: ["Built reproducible data pipelines", "Designed false-positive regression checks", "Used async jobs and exports for operational workflows"],
    github: "https://github.com/",
    demo: "https://vercel.com/",
    screenshots: [
      "/projects/poisontrace-1.png",
      "/projects/poisontrace-2.png",
      "/projects/poisontrace-3.png",
      "/projects/poisontrace-4.png",
      "/projects/poisontrace-5.png",
      "/projects/poisontrace-6.png",
    ],
  },
  {
    slug: "teamwork",
    title: "TeamWork",
    summary: "A multi-workspace collaboration platform with authentication, role-based access, shared TypeScript contracts, and load-tested APIs.",
    role: "Full-stack developer",
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "JWT", "Render"],
    features: [
      "JWT auth, RBAC, and 5 domain modules",
      "Shared API contracts in a full-stack TypeScript monorepo",
      "Rate limiting, HttpOnly JWT cookies, and strict CORS controls",
      "Task-board ready time measured at 553ms p50 and 581ms p95",
    ],
    learned: ["Structured full-stack monorepos", "Measured API and UI readiness", "Hardened auth and production deployment boundaries"],
    github: "https://github.com/",
    screenshots: ["/projects/studyhub-1.svg", "/projects/studyhub-2.svg"],
  },
  {
    slug: "snapledger",
    title: "SnapLedger",
    summary: "An offline-first Android receipt ledger with backend sync recovery and Gemini-powered receipt validation.",
    role: "Mobile and backend developer",
    stack: ["Kotlin", "Python", "Jetpack Compose", "FastAPI", "SQLAlchemy", "PostgreSQL", "Gemini", "GCP"],
    features: [
      "Local-first saves during backend timeouts and sync failures",
      "Optimistic queue with WorkManager reconciliation",
      "Gemini 2.5 Flash outputs guarded with Pydantic validation",
      "8 Compose routes with MVVM + StateFlow and sync determinism tests",
    ],
    learned: ["Designed offline-first mobile flows", "Validated AI outputs with schemas", "Built CI and nightly evals around real failure modes"],
    github: "https://github.com/",
    demo: "https://vercel.com/",
    screenshots: ["/projects/portfolio-1.svg", "/projects/portfolio-2.svg"],
  },
];

export const learningJourney = [
  { date: "May 2026", title: "SnapLedger", detail: "Built an offline-first receipt tracking app." },
  { date: "Apr 2026", title: "PoisonTrace", detail: "Built a Solana wallet-poisoning scanner." },
  { date: "Mar 2026", title: "TeamWork", detail: "Built a team collaboration and task management platform." },
  { date: "Mar 2026", title: "Rizal film review website", detail: "Duo project building frontend 3D objects for a film review website." },
  { date: "Dec 2025", title: "DSA-optimized resort ticketing", detail: "Group project using C# with a focus on data structures and optimized ticketing flow." },
  { date: "Dec 2025", title: "UI/UX for dungeon-style game", detail: "Group project focused on game interface and user flow design." },
  { date: "May 2025", title: "UI/UX for pet grooming scheduling", detail: "Group project designing a website scheduling experience for a pet grooming shop." },
  { date: "May 2025", title: "Java airplane ticketing system", detail: "Group project focused on ticketing flow and Java fundamentals." },
  { date: "Aug 2024", title: "Started CS at University of Makati", detail: "Began B.S. Computer Science." },
  { date: "Mar 2024", title: "Senior High School capstone", detail: "Built an IoT flood-detection device using C# and threshold-based alerts." },
];

export const certifications = [
  { title: "Introduction to IoT", issuer: "Cisco Networking Academy", date: "Resume certificate", url: "https://www.netacad.com/" },
  { title: "Introduction to Data Science", issuer: "Cisco Networking Academy", date: "Resume certificate", url: "https://www.netacad.com/" },
  { title: "Python Essentials", issuer: "Cisco Networking Academy", date: "Resume certificate", url: "https://www.netacad.com/" },
  { title: "Python Basics", issuer: "University of Michigan / Coursera", date: "Resume certificate", url: "https://www.coursera.org/" },
];

export const journeyIcon = GraduationCap;
