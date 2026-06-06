import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  TrendingDown,
  Layers,
  Activity,
  ShieldAlert,
} from "lucide-react";
import { Callout } from "@/components/ui";

export const metadata: Metadata = {
  title: "Healthcare Equity Downside Risk — Quant Research",
  description:
    "A reproducible quant study measuring, factor-decomposing, and stress-testing downside risk across 28 U.S. healthcare equities (2016–2025). The 'defensive' sector hides a 4× volatility range, fat tails, and ~50% idiosyncratic risk.",
};

const REPORT = "/healthcare-equity-risk/Healthcare-Equity-Risk-Report.pdf";

const stats = [
  { label: "Universe", value: "28 names" },
  { label: "Window", value: "2016–2025" },
  { label: "Frequency", value: "119 months" },
  { label: "Tests", value: "70 passing" },
];

const findings = [
  {
    icon: Activity,
    title: "Risk dispersion is ~4× within the sector",
    body: "Annualized volatility ranges from JNJ at 18% to MRNA at 72%. Biotechnology is the highest-risk sub-industry (median 33%), Pharmaceuticals the lowest (24%). The 'defensive healthcare' label masks enormous internal heterogeneity.",
  },
  {
    icon: Layers,
    title: "~50% of portfolio risk is idiosyncratic",
    body: "A Fama-French 5 + momentum model explains only 44–50% of portfolio variance, with no statistically significant alpha. Roughly half of the risk is name-specific — the footprint of trial, approval, and pricing catalysts.",
  },
  {
    icon: TrendingDown,
    title: "Volatility ≠ tail risk",
    body: "Minimum-variance delivered the lowest volatility (16.2%) but the deepest drawdown (−29.3%) via concentration; risk-parity earned the best Sharpe (0.91). Fat tails everywhere mean CVaR (Expected Shortfall), not Gaussian VaR, is the metric of record.",
  },
  {
    icon: ShieldAlert,
    title: "Diversification helps selectively",
    body: "In the 2022 rate selloff, minimum-variance fell just −3.9% vs the S&P 500's −24.1%. In the 2015–16 biotech/drug-pricing selloff, diversified healthcare avoided the worst of IBB's drawdown. In the broad COVID crash, everything converged.",
  },
];

const charts = [
  {
    src: "/healthcare-equity-risk/cumulative_returns.png",
    alt: "Cumulative return of the three healthcare portfolios versus XLV, IBB and SPY, 2016–2025",
    caption:
      "Figure 1 — Growth of $1. Risk-parity and equal-weight compound competitively with the market at lower volatility; biotech (IBB) lags with the deepest drawdowns.",
  },
  {
    src: "/healthcare-equity-risk/factor_loadings_heatmap.png",
    alt: "Heatmap of Fama-French factor betas for each portfolio and benchmark",
    caption:
      "Figure 2 — Factor loadings (betas). Model-validity check passes: SPY loads ~0.98 on the market with R²≈1.00. Biotech shows its small-cap (SMB +0.53) and growth (HML −0.36) signature; minimum-variance carries the lowest market beta and a quality tilt.",
  },
  {
    src: "/healthcare-equity-risk/factor_variance_decomposition.png",
    alt: "Stacked bar chart decomposing portfolio variance into per-factor systematic and idiosyncratic components",
    caption:
      "Figure 3 — Variance decomposition. About half of each portfolio's variance is systematic (market-dominated); the rest is idiosyncratic, name-specific risk.",
  },
  {
    src: "/healthcare-equity-risk/stress_windows.png",
    alt: "Cumulative return paths through the COVID, 2022 rate-hike, and 2015–16 biotech stress windows",
    caption:
      "Figure 4 — Historical stress windows. The defensive construction decouples in the 2022 rate-driven selloff (MinVariance −3.9% vs SPY −24.1%) and dampens the 2015–16 biotech shock; in the broad COVID crash, healthcare and the market converge.",
  },
];

const methodology = [
  {
    heading: "Data & pipeline",
    body: "Daily adjusted prices (Yahoo Finance, stooq fallback) aligned to a master NYSE calendar, with an explicit no-silent-fills missing-data policy and schema/range validation. Raw pulls are snapshotted immutably for reproducibility.",
  },
  {
    heading: "Portfolio construction",
    body: "Equal-weight, long-only minimum-variance (SLSQP), and risk-parity (convex solve). Weights are estimated walk-forward from a trailing 252-day covariance and rebalanced monthly — no look-ahead.",
  },
  {
    heading: "Factor model",
    body: "Monthly excess returns regressed on Fama-French 5 + momentum (Kenneth French) with Newey-West (HAC) standard errors; variance decomposed into systematic-per-factor and idiosyncratic components.",
  },
  {
    heading: "Stress testing",
    body: "Historical replay over labeled crisis windows plus transparent hypothetical shocks propagated through linear betas (impact = β · shock). CVaR over Gaussian VaR throughout.",
  },
];

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="eyebrow">{kicker}</p>
      <h2 className="mt-2 font-serif text-2xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h2>
    </div>
  );
}

export default function HealthcareEquityRiskPage() {
  return (
    <article className="container-page py-16">
      <Link
        href="/research"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-accent-deep dark:text-slate-400 dark:hover:text-accent-soft"
      >
        <ArrowLeft className="h-4 w-4" /> Back to research
      </Link>

      {/* Hero */}
      <header className="mt-6 max-w-3xl animate-fade-up">
        <div className="flex flex-wrap items-center gap-2">
          <span className="tag border-accent/30 text-accent-deep dark:text-accent-soft">
            Flagship Project
          </span>
          <span className="tag">Quantitative Risk</span>
          <span className="tag">Python · Tested</span>
        </div>
        <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Measuring &amp; Decomposing Downside Risk in U.S. Healthcare Equities
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          A reproducible, buy-side-style study that builds three healthcare portfolio variants,
          explains their risk with a multi-factor model, and stress-tests them through real and
          hypothetical shocks. Focus is risk explanation and attribution — not alpha.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="surface px-4 py-3">
              <div className="font-serif text-lg font-semibold text-slate-900 dark:text-white">
                {s.value}
              </div>
              <div className="eyebrow mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={REPORT} download className="btn-primary">
            <Download className="h-4 w-4" /> Download full report (PDF)
          </a>
        </div>
      </header>

      {/* Executive summary */}
      <section className="mt-14 max-w-3xl">
        <SectionTitle kicker="Executive Summary" title="The defensive label doesn't survive the data" />
        <Callout label="Bottom line">
          Within a sector usually treated as monolithically &ldquo;defensive,&rdquo; risk is highly
          heterogeneous: annualized volatility ranges roughly 4× (JNJ 18% → MRNA 72%), return tails
          are fatter than Gaussian models imply, and about half of portfolio risk is idiosyncratic.
          Simple, transparent construction materially reshapes the risk profile — and the benefit is
          concentrated in rate-driven and biotech-specific stress, not broad market crashes.
        </Callout>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          <p>
            I built three long-only healthcare portfolios — equal-weight, minimum-variance, and
            risk-parity — with a walk-forward monthly rebalance, then benchmarked them against the
            sector (XLV), biotech (IBB), and the broad market (SPY). Risk-parity was the most
            efficient (Sharpe 0.91); biotech alone was the least (Sharpe 0.40, 24% volatility, −40%
            drawdown).
          </p>
          <p>
            A Fama-French 5 + momentum model then explains <em>where</em> that risk comes from, and a
            stress-testing layer shows <em>when</em> diversification actually helps. The full analysis
            is reproducible end-to-end in Python and covered by 70 unit tests.
          </p>
        </div>
      </section>

      {/* Key findings */}
      <section className="mt-14">
        <SectionTitle kicker="Key Findings" title="Four evidence-based conclusions" />
        <div className="grid gap-5 sm:grid-cols-2">
          {findings.map((f) => (
            <div key={f.title} className="surface p-6">
              <f.icon className="h-5 w-5 text-accent-deep dark:text-accent-soft" />
              <h3 className="mt-3 font-serif text-lg font-semibold text-slate-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Charts */}
      <section className="mt-14">
        <SectionTitle kicker="Exhibits" title="The analysis in four charts" />
        <div className="space-y-10">
          {charts.map((c) => (
            <figure key={c.src}>
              <div className="surface overflow-hidden p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  className="w-full rounded-lg bg-white"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {c.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="mt-14 max-w-3xl">
        <SectionTitle kicker="Methodology" title="Transparent, reproducible, no look-ahead" />
        <div className="grid gap-5 sm:grid-cols-2">
          {methodology.map((m) => (
            <div key={m.heading} className="surface p-5">
              <h3 className="font-serif text-base font-semibold text-slate-900 dark:text-white">
                {m.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {m.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          <strong className="text-slate-700 dark:text-slate-300">Limitations.</strong> A 28-name
          liquid seed universe (survivorship not fully addressed); in-sample factor betas (only the
          weights are walk-forward); first-order linear scenarios; and a long-Treasury ETF (TLT)
          proxy for the rate driver. A fundamental-fragility model on SEC filings is the scoped next
          step.
        </p>
      </section>

      {/* Download / report */}
      <section className="mt-14">
        <div className="surface flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Full Report</p>
            <h2 className="mt-2 font-serif text-xl font-semibold text-slate-900 dark:text-white">
              Read the complete research report
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              The full PDF covers the portfolio comparison, factor results, and stress testing with
              all exhibits and method notes. Code and methodology available on request.
            </p>
          </div>
          <a href={REPORT} download className="btn-primary shrink-0">
            <Download className="h-4 w-4" /> Download PDF
          </a>
        </div>
      </section>

      {/* Disclaimer */}
      <p className="mt-12 max-w-3xl text-xs leading-relaxed text-slate-400 dark:text-slate-500">
        Independent research prepared for educational and illustrative purposes. Nothing herein is
        investment advice or a recommendation to buy or sell any security. Data: Yahoo Finance,
        Kenneth French Data Library. Views are my own as of the publication date.
      </p>
    </article>
  );
}
