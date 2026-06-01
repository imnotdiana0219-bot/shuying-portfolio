import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Industry Insights",
  description:
    "Sector perspectives on obesity therapeutics, AI drug discovery, and market access & commercialization.",
};

export default function InsightsPage() {
  return (
    <div className="container-page py-16">
      <PageHeader
        eyebrow="Industry Insights"
        title="Sector perspectives"
        intro="Structural analyses of the healthcare and biopharma markets — the context I build before forming a view on any single company."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((a) => (
          <Link
            key={a.slug}
            href={`/insights/${a.slug}`}
            className="surface surface-hover group flex flex-col p-6"
          >
            <div className="flex items-center justify-between">
              <span className="tag">{a.category}</span>
              <span className="text-xs text-slate-400">{a.date}</span>
            </div>
            <h2 className="mt-4 font-serif text-lg font-semibold leading-snug text-slate-900 dark:text-white">
              {a.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {a.summary}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-400">{a.readTime}</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-deep group-hover:gap-2.5 dark:text-accent-soft transition-all">
                Read <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
