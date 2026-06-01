import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MonoCard, Pill } from "@/components/ui";
import { techStack } from "@/data/portfolio";

export default function TechStackPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Link className="mb-8 inline-flex items-center gap-2 text-sm font-medium hover:underline" href="/">
        <ArrowLeft size={16} /> Home
      </Link>
      <h1 className="text-4xl font-semibold">Tech Stack</h1>
      <p className="mt-3 max-w-2xl leading-7 text-neutral-600">A practical view of the tools Anjelo is learning and using across frontend, backend, DevOps, and cloud projects.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {techStack.map((group) => (
          <MonoCard key={group.category}>
            <div className="mb-5 flex items-center gap-3">
              <group.icon size={22} />
              <h2 className="text-xl font-semibold">{group.category}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {[...group.featured, ...group.tools].map((tool) => (
                <Pill key={tool}>{tool}</Pill>
              ))}
            </div>
          </MonoCard>
        ))}
      </div>
    </main>
  );
}
