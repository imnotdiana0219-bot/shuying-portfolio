import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader, Callout } from "@/components/ui";
import { memos } from "@/lib/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Investment memo library — biotech and healthcare investment theses, company deep-dives, and the forward research pipeline.",
};

function StanceBadge({ stance }: { stance: string }) {
  const tone =
    stance === "Long"
      ? "border-emerald-400/40 text-emerald-700 dark:text-emerald-400"
      : stance === "Watch"
        ? "border-amber-400/40 text-amber-700 dark:text-amber-400"
        : "border-slate-300 text-slate-500 dark:border-white/15 dark:text-slate-400";
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${tone}`}>
      {stance}
    </span>
  );
}

export default function ResearchPage() {
  const published = memos.filter((m) => m.status === "Published");
  const pipeline = memos.filter((m) => m.status === "In Progress");

  return (
    <div className="container-page py-16">
      <PageHeader
        eyebrow="Investment Memo Library"
        title="Research"
        intro="Investment theses and company deep-dives. Each memo states a view, shows the analysis behind it across the science, the market, and the economics, and flags what would change my mind."
      />

      <div className="mt-8">
        <Callout label="Disclaimer" tone="warn">
          All content is independent research prepared for educational and illustrative
          purposes. Nothing herein is investment advice or a recommendation to buy or
          sell any security. Views are my own as of the publication date.
        </Callout>
      </div>

      {/* Published memos */}
      <div className="mt-12 space-y-5">
        {published.map((m) => (
          <Link
            key={m.slug}
            href={`/research/${m.slug}`}
            className="surface surface-hover group block p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-2">
              <StanceBadge stance={m.stance} />
              <span className="tag">{m.sector}</span>
              <span className="tag">Conviction: {m.conviction}</span>
              <span className="ml-auto text-xs text-slate-400">{m.date}</span>
            </div>
            <h2 className="mt-4 font-serif text-xl font-semibold text-slate-900 dark:text-white">
              {m.company}
              {m.ticker && (
                <span className="ml-2 text-base font-normal text-slate-400">({m.ticker})</span>
              )}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {m.thesis}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-deep group-hover:gap-2.5 dark:text-accent-soft transition-all">
              Read full memo <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>

      {/* Pipeline */}
      {pipeline.length > 0 && (
        <div className="mt-16">
          <p className="eyebrow">Forward Pipeline</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-slate-900 dark:text-white">
            Future research
          </h2>
          <div className="mt-6 space-y-5">
            {pipeline.map((m) => (
              <Link
                key={m.slug}
                href={`/research/${m.slug}`}
                className="surface surface-hover group block border-dashed p-6"
              >
                <div className="flex items-center gap-2">
                  <span className="tag">In progress</span>
                  <span className="ml-auto text-xs text-slate-400">{m.date}</span>
                </div>
                <h3 className="mt-3 font-serif text-lg font-semibold text-slate-900 dark:text-white">
                  {m.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {m.thesis}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
