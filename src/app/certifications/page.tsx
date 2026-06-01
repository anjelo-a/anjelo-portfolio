import Link from "next/link";
import { ArrowLeft, Award } from "lucide-react";
import { ExternalLink, MonoCard } from "@/components/ui";
import { certifications } from "@/data/portfolio";

export default function CertificationsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Link className="mb-8 inline-flex items-center gap-2 text-sm font-medium hover:underline" href="/">
        <ArrowLeft size={16} /> Home
      </Link>
      <h1 className="text-4xl font-semibold">Certifications</h1>
      <p className="mt-3 max-w-2xl leading-7 text-neutral-600">A growing record of structured learning, fundamentals, and developer tooling practice.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <MonoCard key={cert.title}>
            <Award className="mb-5" size={24} />
            <p className="text-sm text-neutral-500">{cert.date} / {cert.issuer}</p>
            <h2 className="mt-2 text-xl font-semibold">{cert.title}</h2>
            <ExternalLink className="mt-5 inline-flex border border-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white" href={cert.url}>
              View credential
            </ExternalLink>
          </MonoCard>
        ))}
      </div>
    </main>
  );
}
