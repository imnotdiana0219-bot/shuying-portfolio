import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Callout } from "@/components/ui";
import { insights, getInsight } from "@/lib/insights";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const insight = getInsight(params.slug);
  if (!insight) return { title: "Industry Insights" };
  return { title: insight.title, description: insight.summary };
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const insight = getInsight(params.slug);
  if (!insight) notFound();

  return (
    <article className="container-page py-16">
      <Link
        href="/insights"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-accent-deep dark:text-slate-400 dark:hover:text-accent-soft"
      >
        <ArrowLeft className="h-4 w-4" /> Back to insights
      </Link>

      <header className="mx-auto mt-6 max-w-prose">
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="tag">{insight.category}</span>
          <span>{insight.date}</span>
          <span>·</span>
          <span>{insight.readTime}</span>
        </div>
        <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {insight.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {insight.summary}
        </p>
      </header>

      <div className="mx-auto mt-10 max-w-prose">
        <Callout label="Bottom line">{insight.takeaway}</Callout>

        <div className="mt-10">
          {insight.sections.map((s) => (
            <section key={s.heading} className="mb-8">
              <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-white">
                {s.heading}
              </h2>
              <div className="prose-memo mt-3">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 dark:border-white/10">
          <p className="text-xs leading-relaxed text-slate-400">
            Independent analysis for educational purposes only. Not investment advice.
            Views are my own as of {insight.date}.
          </p>
        </div>
      </div>
    </article>
  );
}
