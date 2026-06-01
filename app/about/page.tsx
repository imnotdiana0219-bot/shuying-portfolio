import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, LineChart, Coins } from "lucide-react";
import { PageHeader, Callout } from "@/components/ui";
import { education } from "@/lib/resume";
import { focusAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Academic background, career interests, and investment philosophy of Shuying Dai — healthcare investing candidate.",
};

const lenses = [
  {
    icon: FlaskConical,
    title: "The Science",
    body: "Bioinformatics and genomics — mechanism, modality, biomarker literacy, and the ability to read clinical data rather than just the press release.",
  },
  {
    icon: LineChart,
    title: "The Commercial Trajectory",
    body: "Market sizing, competitive positioning, and go-to-market strategy — assessing whether a differentiated asset can actually win share.",
  },
  {
    icon: Coins,
    title: "The Economic Value",
    body: "HEOR, market access, and reimbursement — translating clinical endpoints into the payer-relevant value that drives realizable revenue.",
  },
];

const principles = [
  {
    title: "Mechanism before narrative",
    body: "I read the biology and the data before the pitch. A compelling story that the mechanism can't support is a red flag, not a thesis.",
  },
  {
    title: "Reimbursement is destiny",
    body: "A differentiated asset with no payer pathway is a science project. I size the reimbursed, accessible market — not just the addressable one.",
  },
  {
    title: "Disconfirming evidence first",
    body: "I write the bear case before I let myself believe the bull case, and I track what would change my mind.",
  },
  {
    title: "Base rates anchor estimates",
    body: "Phase-transition probabilities, historical analogs, and comparable companies discipline every projection.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-page py-16">
      <PageHeader
        eyebrow="About"
        title="From the bench to the cap table"
        intro="I've moved deliberately from understanding how a therapy works, to whether it wins commercially, to what it's worth to payers and patients — because those are the same question asked at three altitudes."
      />

      {/* Narrative */}
      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-white">
            Background
          </h2>
          <div className="prose-memo mt-4 max-w-prose">
            <p>
              I&rsquo;m a master&rsquo;s candidate in Healthcare Decision Analysis at the
              University of Southern California, with an undergraduate background in
              Bioinformatics from the University of Toronto. My path has been a steady
              progression across the value chain of a healthcare product: from the
              molecular science, to its commercial strategy, to its economic value.
            </p>
            <p>
              That progression is the reason I think the way I do. At the Chinese Academy
              of Sciences I analyzed large-scale genomic datasets for biomarker and
              target discovery in oncology. Through a BCG mentorship project and my role
              at GBCS Group, I shifted to the commercial questions — market sizing,
              competitive diligence, reimbursement risk, and go-to-market strategy. At
              USC, I&rsquo;ve built the health-economics toolkit — HEOR, cost-effectiveness
              modeling, and market access — that connects clinical evidence to payer value.
            </p>
            <p>
              Today I apply all three lenses to investment research: building investment
              theses, conducting scientific and commercial due diligence, and assessing
              the long-term value of healthcare and biotech opportunities.
            </p>
          </div>

          <h2 className="mt-12 font-serif text-xl font-semibold text-slate-900 dark:text-white">
            Investment philosophy
          </h2>
          <div className="mt-4">
            <Callout label="Core belief">
              Conviction comes from triangulation. The opportunities I find most
              compelling hold up under the science, the commercial trajectory, and the
              economic value at once — and the risks I flag earliest are the ones that
              look fine on two lenses and break on the third.
            </Callout>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="surface p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div>
            <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-white">
              Education
            </h2>
            <div className="mt-4 space-y-4">
              {education.map((e) => (
                <div key={e.school} className="surface p-5">
                  <div className="font-semibold text-slate-900 dark:text-white">{e.school}</div>
                  <div className="mt-0.5 text-sm text-accent-deep dark:text-accent-soft">
                    {e.degree}
                  </div>
                  <div className="mt-1 text-xs text-slate-400">{e.date}</div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {e.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-white">
              Career interests
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {focusAreas.map((f) => (
                <span key={f} className="tag">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Three lenses */}
      <div className="mt-16">
        <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-white">
          The three-lens framework
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          Every memo and insight on this site is built by triangulating the same three
          perspectives.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {lenses.map((l) => (
            <div key={l.title} className="surface p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-deep dark:text-accent-soft">
                <l.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-slate-900 dark:text-white">
                {l.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {l.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <Link
          href="/research"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-deep hover:gap-2.5 dark:text-accent-soft transition-all"
        >
          See the framework applied in my research <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
