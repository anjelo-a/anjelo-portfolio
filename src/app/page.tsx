import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { ResumeCard } from "@/components/resume-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { ExternalLink, Pill, Section } from "@/components/ui";
import { certifications, learningJourney, profile, projects, socialLinks, techStack } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="relative mx-auto min-h-screen max-w-5xl px-7 py-10 sm:px-10 md:px-12 lg:px-8">
      <div className="absolute right-7 top-7 sm:right-10 md:right-12 lg:right-8">
        <ThemeToggle />
      </div>
      <header className="grid gap-7 border-b border-[var(--line)] pb-9 md:grid-cols-[168px_1fr]">
        <Image
          alt={profile.name}
          className="aspect-square w-full max-w-[168px] object-cover"
          height={168}
          priority
          src="/profile/843c8df7-8399-47d9-92f6-efd2bb87a430.jpeg"
          width={168}
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">{profile.name}</h1>
          <p className="mt-2 inline-flex items-center gap-2 text-sm text-neutral-700">
            <MapPin size={15} /> {profile.location}
          </p>
          <p className="mt-5 text-base text-neutral-900">{profile.role}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="primary-button inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium" href={`mailto:${profile.email}`}>
              <Mail size={16} /> Send Email
            </a>
            <Link className="inline-flex items-center gap-2 px-1 py-2.5 text-sm font-medium hover:text-neutral-600" href="/projects">
              View Projects <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div>
          <Section title="About">
            <div className="max-w-2xl space-y-5 text-[15px] leading-7 text-neutral-800 sm:text-base sm:leading-8">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Section>

          <Section title="Tech Stack" href="/tech-stack">
            <div className="divide-y divide-[var(--line)]">
              {techStack.map((group) => (
                <div className="grid gap-3 py-5 sm:grid-cols-[150px_1fr]" key={group.category}>
                  <div>
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
                      <h3 className="text-lg font-semibold">{project.title}</h3>
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

          <Section title="Project Gallery">
            <div className="space-y-6">
              {projects.map((project) => (
                <div className="border-t border-[var(--line)] pt-5" key={project.slug}>
                  <h3 className="mb-3 font-semibold">{project.title}</h3>
                  {project.screenshots.length > 0 ? (
                    <LightboxGallery images={project.screenshots} title={project.title} />
                  ) : (
                    <div className="border border-[var(--line)] bg-neutral-950 px-5 py-8 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">404 / Work Underway</p>
                      <p className="mt-2 text-lg font-semibold">Gallery not ready yet</p>
                      <ExternalLink className="mt-5 inline-flex items-center gap-2 border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-neutral-950" href={project.github}>
                        View on GitHub <ArrowUpRight size={15} />
                      </ExternalLink>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>

          <Section title="Certifications" href="/certifications">
            <div className="divide-y divide-[var(--line)]">
              {certifications.slice(0, 4).map((cert) => (
                <ExternalLink className="block py-5" href={cert.url} key={cert.title}>
                  <p className="text-sm text-neutral-500">{cert.date} / {cert.issuer}</p>
                  <h3 className="mt-2 font-semibold">{cert.title}</h3>
                </ExternalLink>
              ))}
            </div>
          </Section>
        </div>

        <aside>
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
                      <h3 className="text-base font-semibold leading-tight">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-700">{item.detail}</p>
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
      <a className="primary-button fixed bottom-5 right-5 z-40 hidden items-center gap-2 px-4 py-2.5 text-sm font-medium shadow-sm sm:inline-flex" href={`mailto:${profile.email}`}>
        <Mail size={16} /> Send Email
      </a>
    </main>
  );
}
