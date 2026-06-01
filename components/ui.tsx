import type { ReactNode } from "react";

// Page header used at the top of every interior page.
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="animate-fade-up">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h1>
      {intro && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {intro}
        </p>
      )}
    </div>
  );
}

// Institutional-style callout used for theses, takeaways, and disclaimers.
export function Callout({
  label,
  children,
  tone = "accent",
}: {
  label?: string;
  children: ReactNode;
  tone?: "accent" | "warn";
}) {
  const styles =
    tone === "warn"
      ? "border-amber-300/60 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-500/5"
      : "border-accent/30 bg-accent/5 dark:border-accent/30 dark:bg-accent/10";
  return (
    <div className={`rounded-xl border-l-4 ${styles} p-5`}>
      {label && (
        <div className="eyebrow mb-2">{label}</div>
      )}
      <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
        {children}
      </div>
    </div>
  );
}

// Tag / pill list.
export function Tags({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="tag">
          {t}
        </span>
      ))}
    </div>
  );
}
