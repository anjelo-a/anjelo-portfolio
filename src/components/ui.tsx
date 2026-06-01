import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Section({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[var(--line)] py-7">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">{title}</h2>
        {href ? (
          <Link className="inline-flex items-center gap-1 text-sm font-medium hover:underline" href={href}>
            View All <ArrowUpRight size={15} />
          </Link>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      className={className}
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return <span className="border-b border-[var(--line)] px-1 py-1 text-sm text-neutral-700">{children}</span>;
}

export function MonoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`border border-[var(--line)] bg-[#fbfbf8] p-5 ${className}`}>{children}</div>;
}
