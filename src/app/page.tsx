import Link from "next/link";
import { ArrowRight, ImageIcon, Mail, MapPin } from "lucide-react";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { ResumeCard } from "@/components/resume-card";
import { ExternalLink, Pill, Section } from "@/components/ui";
import { certifications, learningJourney, profile, projects, socialLinks, techStack } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="grid gap-8 border-b border-[var(--line)] pb-10 md:grid-cols-[220px_1fr]">
        <div className="flex aspect-square w-full max-w-[220px] items-center justify-center bg-neutral-200 text-neutral-500">
          <ImageIcon size={44} />
          <span className="sr-only">Profile image placeholder</span>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{profile.name}</h1>
          <p className="mt-3 inline-flex items-center gap-2 text-base text-neutral-700">
            <MapPin size={17} /> {profile.location}
          </p>
          <p className="mt-6 text-xl text-neutral-900">{profile.role}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 bg-neutral-950 px-5 py-3 text-sm font-semibold text-white" href={`mailto:${profile.email}`} style={{ color: "#ffffff" }}>
              <Mail size={17} /> Send Email
            </a>
            <Link className="inline-flex items-center gap-2 border-b border-neutral-900 px-1 py-3 text-sm font-medium" href="/projects">
              View Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <div>
          <Section title="About">
            <p className="max-w-3xl text-lg leading-9 text-neutral-800">{profile.about}</p>
          </Section>

          <Section title="Tech Stack" href="/tech-stack">
            <div className="divide-y divide-[var(--line)]">
              {techStack.map((group) => (
                <div className="grid gap-3 py-5 sm:grid-cols-[150px_1fr]" key={group.category}>
                  <div className="flex items-center gap-3">
                    <group.icon size={20} />
                    <h3 className="font-semibold">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.featured.map((tool) => (
                      <Pill key={tool}>{tool}</Pill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Recent Projects" href="/projects">
            <div className="divide-y divide-[var(--line)]">
              {projects.map((project) => (
                <Link className="group block py-6" href={`/projects/${project.slug}`} key={project.slug}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600">{project.summary}</p>
                    </div>
                    <ArrowRight className="transition group-hover:translate-x-1" size={20} />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tool) => (
                      <Pill key={tool}>{tool}</Pill>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </Section>

          <Section title="Certifications" href="/certifications">
            <div className="divide-y divide-[var(--line)]">
              {certifications.slice(0, 2).map((cert) => (
                <ExternalLink className="block py-5" href={cert.url} key={cert.title}>
                  <p className="text-sm text-neutral-500">{cert.date} / {cert.issuer}</p>
                  <h3 className="mt-2 font-semibold">{cert.title}</h3>
                </ExternalLink>
              ))}
            </div>
          </Section>

          <Section title="Project Gallery">
            <div className="space-y-6">
              {projects.slice(0, 2).map((project) => (
                <div className="border-t border-[var(--line)] pt-5" key={project.slug}>
                  <h3 className="mb-3 font-semibold">{project.title}</h3>
                  <LightboxGallery images={project.screenshots} title={project.title} />
                </div>
              ))}
            </div>
          </Section>
        </div>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <ResumeCard />
          <Section title="Learning Journey">
            <div className="relative ml-3 border-l border-[var(--line)]">
              {learningJourney.map((item, index) => (
                <div className="relative pb-9 pl-8 last:pb-1" key={item.title}>
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[13px] top-1 h-6 w-6 border-[3px] ${
                      index < 2 ? "border-neutral-950 bg-neutral-950" : "border-[var(--line)] bg-white"
                    }`}
                  />
                  <div className="grid grid-cols-[1fr_auto] items-start gap-5">
                    <div>
                      <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
                      <p className="mt-2 text-base leading-6 text-neutral-700">{item.detail}</p>
                    </div>
                    <p className="border-b border-[var(--line)] px-3 py-1 font-mono text-sm">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
          <Section title="Connect">
            <div className="divide-y divide-[var(--line)]">
              {socialLinks.map((link) => (
                <ExternalLink className="flex items-center justify-between py-4 text-sm" href={link.href} key={link.label}>
                  <span className="flex items-center gap-2"><link.icon size={16} /> {link.label}</span>
                  <ArrowRight size={15} />
                </ExternalLink>
              ))}
            </div>
          </Section>
        </aside>
      </div>
      <a className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 bg-neutral-950 px-5 py-3 text-sm font-semibold text-white shadow-lg" href={`mailto:${profile.email}`} style={{ color: "#ffffff" }}>
        <Mail size={17} /> Send Email
      </a>
    </main>
  );
}
