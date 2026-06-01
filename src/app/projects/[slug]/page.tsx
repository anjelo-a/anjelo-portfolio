import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { ExternalLink, MonoCard, Pill, Section } from "@/components/ui";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Link className="mb-8 inline-flex items-center gap-2 text-sm font-medium hover:underline" href="/projects">
        <ArrowLeft size={16} /> Projects
      </Link>
      <div className="border border-[var(--line)] bg-[#fbfbf8] p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">Case Study</p>
        <h1 className="mt-3 text-4xl font-semibold">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tool) => (
            <Pill key={tool}>{tool}</Pill>
          ))}
        </div>

        <Section title="Overview">
          <div className="grid gap-4 md:grid-cols-3">
            <MonoCard>
              <p className="text-sm text-neutral-500">Role</p>
              <p className="mt-2 font-semibold">{project.role}</p>
            </MonoCard>
            <MonoCard className="md:col-span-2">
              <p className="text-sm text-neutral-500">Links</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <ExternalLink className="border border-neutral-900 px-4 py-2 text-sm font-medium" href={project.github}>GitHub</ExternalLink>
                {project.demo ? <ExternalLink className="border border-neutral-900 px-4 py-2 text-sm font-medium" href={project.demo}>Live Demo</ExternalLink> : null}
              </div>
            </MonoCard>
          </div>
        </Section>

        <Section title="Key Features">
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li className="border border-[var(--line)] p-4 text-sm text-neutral-700" key={feature}>{feature}</li>
            ))}
          </ul>
        </Section>

        <Section title="Gallery">
          <LightboxGallery images={project.screenshots} title={project.title} />
        </Section>

        <Section title="What I Learned">
          <ul className="space-y-3">
            {project.learned.map((item) => (
              <li className="border-l border-neutral-300 pl-4 text-neutral-700" key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      </div>
    </main>
  );
}
