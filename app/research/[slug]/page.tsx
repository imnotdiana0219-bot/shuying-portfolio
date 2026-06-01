import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, AlertTriangle, CalendarClock } from "lucide-react";
import { Callout } from "@/components/ui";
import { memos, getMemo } from "@/lib/research";

export function generateStaticParams() {
  return memos.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const memo = getMemo(params.slug);
  if (!memo) return { title: "Research" };
  return {
    title: memo.company,
    description: memo.thesis,
  };
}

export default function MemoPage({ params }: { params: { slug: string } }) {
  const memo = getMemo(params.slug);
  if (!memo) notFound();

  return (
    <article className="container-page py-16">
      <Link
        href="/research"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-accent-deep dark:text-slate-400 dark:hover:text-accent-soft"
      >
        <ArrowLeft className="h-4 w-4" /> Back to research
      </Link>

      {/* Header */}
      <header className="mt-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="tag border-accent/30 text-accent-deep dark:text-accent-soft">
            {memo.stance}
          </span>
          <span className="tag">{memo.sector}</span>
          <span className="tag">Conviction: {memo.conviction}</span>
          <span className="ml-auto text-xs text-slate-400">{memo.date}</span>
        </div>
        <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {memo.company}
          {memo.ticker && (
            <span className="ml-3 align-middle text-lg font-normal text-slate-400">
              {memo.ticker}
            </span>
          )}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {memo.title}
        </p>
      </header>

      {/* Body */}
      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="max-w-prose">
            {memo.sections?.map((s) => (
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
        </div>

        {/* Sidebar: catalysts & risks */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          {memo.catalysts && (
            <div className="surface p-5">
              <div className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-accent-deep dark:text-accent-soft" />
                <h3 className="font-semibold text-slate-900 dark:text-white">Catalysts</h3>
              </div>
              <ul className="mt-3 space-y-2.5">
                {memo.catalysts.map((c, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {memo.risks && (
            <div className="rounded-xl border-l-4 border-amber-300/60 bg-amber-50 p-5 dark:border-amber-500/30 dark:bg-amber-500/5">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Key risks &amp; what would change my mind
                </h3>
              </div>
              <ul className="mt-3 space-y-2.5">
                {memo.risks.map((r, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <div className="mt-12 max-w-prose">
        <Callout label="Disclaimer" tone="warn">
          Independent research for educational purposes only. Not investment advice or a
          recommendation to buy or sell any security. Views are my own as of {memo.date}.
        </Callout>
      </div>
    </article>
  );
}
