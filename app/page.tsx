import Link from "next/link";
import { ArrowRight, Download, Linkedin, FileText, LineChart, FlaskConical } from "lucide-react";
import { site, expertise, focusAreas } from "@/lib/site";
import { memos } from "@/lib/research";
import { insights } from "@/lib/insights";

const expertiseIcons = [LineChart, FileText, FlaskConical];

export default function HomePage() {
  const featuredMemos = memos.filter((m) => m.status === "Published").slice(0, 2);
  const featuredInsights = insights.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Subtle gradient texture */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/5 via-transparent to-transparent dark:from-accent/10" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl dark:bg-accent/20"
        />

        <div className="container-page py-20 sm:py-28">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow">{site.role}</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Healthcare Innovation, Commercialization &amp; Investment Research
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {site.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={site.resumePath} download className="btn-primary">
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <Link href="/research" className="btn-secondary">
                View Research <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {focusAreas.map((f) => (
                <span key={f} className="tag">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="container-page py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {expertise.map((item, i) => {
            const Icon = expertiseIcons[i] ?? LineChart;
            return (
              <div key={item.title} className="surface p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-deep dark:text-accent-soft">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Investment approach band */}
      <section className="container-page py-12">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-12 dark:border-white/10 dark:bg-ink-soft">
          <p className="eyebrow">Approach</p>
          <p className="mt-4 max-w-3xl font-serif text-xl leading-relaxed text-slate-800 sm:text-2xl dark:text-slate-100">
            &ldquo;Conviction comes from triangulation. I don&rsquo;t trust a thesis
            that survives only the scientific story, only the market math, or only
            the payer model — the strongest opportunities hold up across all three.&rdquo;
          </p>
          <div className="mt-6">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-deep hover:gap-2.5 dark:text-accent-soft transition-all"
            >
              Read my investment philosophy <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured research */}
      <section className="container-page py-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Investment Memo Library</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-white">
              Selected Research
            </h2>
          </div>
          <Link
            href="/research"
            className="hidden items-center gap-1.5 text-sm font-semibold text-accent-deep hover:gap-2.5 sm:inline-flex dark:text-accent-soft transition-all"
          >
            All research <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {featuredMemos.map((m) => (
            <Link
              key={m.slug}
              href={`/research/${m.slug}`}
              className="surface surface-hover group flex flex-col p-6"
            >
              <div className="flex items-center gap-2">
                <span className="tag">{m.sector}</span>
                <span className="tag border-accent/30 text-accent-deep dark:text-accent-soft">
                  {m.stance}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-slate-900 dark:text-white">
                {m.company}
                {m.ticker && (
                  <span className="ml-2 text-sm font-normal text-slate-400">({m.ticker})</span>
                )}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {m.thesis}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-deep group-hover:gap-2.5 dark:text-accent-soft transition-all">
                Read memo <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured insights */}
      <section className="container-page py-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Industry Insights</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-white">
              Sector Perspectives
            </h2>
          </div>
          <Link
            href="/insights"
            className="hidden items-center gap-1.5 text-sm font-semibold text-accent-deep hover:gap-2.5 sm:inline-flex dark:text-accent-soft transition-all"
          >
            All insights <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {featuredInsights.map((a) => (
            <Link
              key={a.slug}
              href={`/insights/${a.slug}`}
              className="surface surface-hover group flex flex-col p-6"
            >
              <span className="tag w-fit">{a.category}</span>
              <h3 className="mt-4 font-serif text-base font-semibold text-slate-900 dark:text-white">
                {a.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {a.summary}
              </p>
              <span className="mt-4 text-xs text-slate-400">{a.readTime}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16">
        <div className="rounded-2xl bg-accent px-8 py-12 text-center sm:px-12">
          <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
            Let&rsquo;s talk healthcare investing.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80">
            Open to roles and conversations in healthcare investing, biotech equity
            research, corporate venture, and pharma business development.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn bg-white text-accent-deep hover:bg-slate-100"
            >
              Get in touch
            </Link>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-white/40 text-white hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
