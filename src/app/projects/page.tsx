import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Pill } from "@/components/ui";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Link className="mb-8 inline-flex items-center gap-2 text-sm font-medium hover:underline" href="/">
        <ArrowLeft size={16} /> Home
      </Link>
      <h1 className="text-4xl font-semibold">Projects</h1>
      <p className="mt-3 max-w-2xl leading-7 text-neutral-600">Case-study style projects showing the role, stack, product decisions, and lessons learned.</p>
      <div className="mt-8 grid gap-4">
        {projects.map((project) => (
          <Link className="group border border-[var(--line)] bg-[#fbfbf8] p-5 hover:border-neutral-900" href={`/projects/${project.slug}`} key={project.slug}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="mt-2 max-w-2xl leading-7 text-neutral-600">{project.summary}</p>
              </div>
              <ArrowRight className="transition group-hover:translate-x-1" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tool) => (
                <Pill key={tool}>{tool}</Pill>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
