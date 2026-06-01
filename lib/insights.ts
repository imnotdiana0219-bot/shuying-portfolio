// Industry Insights content. Each insight renders as a card on /insights and
// a full article at /insights/[slug].

export type Insight = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  takeaway: string; // bottom-line, shown in a callout
  sections: { heading: string; body: string[] }[];
};

export const insights: Insight[] = [
  {
    slug: "obesity-therapeutics",
    title: "Obesity Therapeutics: From Efficacy Race to Access War",
    category: "Therapeutic Landscape",
    date: "May 2026",
    readTime: "6 min read",
    summary:
      "The GLP-1 class has proven the science; the next decade of value creation will be decided by oral convenience, supply, durability of outcomes, and payer access — not by incremental efficacy alone.",
    takeaway:
      "The competitive frontier is shifting from 'how much weight loss' to 'how accessible, how durable, and how affordable.' Differentiated oral assets and outcomes data — not marginal efficacy — are where the next tranche of value accrues.",
    sections: [
      {
        heading: "The market has crossed the efficacy threshold",
        body: [
          "Injectable GLP-1 and GIP/GLP-1 agonists have established that double-digit percentage weight loss is achievable pharmacologically. With efficacy broadly validated at the class level, marginal improvements in headline weight loss are no longer sufficient to win — they are table stakes.",
          "This is a familiar pattern in maturing categories: once the core clinical claim is proven, competition migrates to the dimensions patients and payers actually experience — convenience, tolerability, persistence, and cost.",
        ],
      },
      {
        heading: "Three battlegrounds that now determine share",
        body: [
          "Convenience and formulation: Oral small molecules promise to relieve the cold-chain, injection, and manufacturing constraints that have repeatedly bottlenecked injectable supply. Convenience also supports adherence — a major real-world weakness of the class.",
          "Durability of outcomes: Weight regain after discontinuation undercuts the long-term value narrative. Assets and regimens that demonstrate durable cardiometabolic outcomes will command stronger reimbursement and defend against step therapy.",
          "Access economics: Coverage breadth, prior authorization, and pricing pressure are the real governors on volume. The category's ceiling is set as much by payer willingness as by clinical performance.",
        ],
      },
      {
        heading: "Investment implication",
        body: [
          "For investors, the screen is no longer 'which asset loses the most weight' but 'which asset wins on the access-and-durability frontier at a defensible price.' That reframing favors differentiated oral programs, outcomes-driven evidence generation, and developers with the capital to fund global Phase 3 and commercialization.",
        ],
      },
    ],
  },
  {
    slug: "ai-drug-discovery",
    title: "AI Drug Discovery: Separating Platform Value from Pipeline Value",
    category: "TechBio",
    date: "June 2026",
    readTime: "6 min read",
    summary:
      "AI has compressed the early steps of discovery, but the expensive, probabilistic part — clinical efficacy and safety — remains. The valuation question is whether platforms earn a multiple or must be underwritten asset-by-asset.",
    takeaway:
      "Compute accelerates the cheap end of the funnel; it has not yet been proven to change clinical base rates. Until platforms show differentiated clinical outcomes and partnership economics, the prudent default is to value the pipeline and treat the platform as option value.",
    sections: [
      {
        heading: "Where AI clearly helps — and where it doesn't yet",
        body: [
          "Machine learning, automated experimentation, and large biological datasets have genuinely accelerated target identification, hit generation, and lead optimization — the front of the discovery funnel. These gains are real and compounding.",
          "The unresolved question is the back of the funnel. Clinical efficacy and safety are where the overwhelming majority of cost and attrition live, and there is not yet a durable track record showing that AI-originated molecules clear clinical development at materially higher rates.",
        ],
      },
      {
        heading: "The valuation fork",
        body: [
          "Platform thesis: if the discovery engine repeatedly produces differentiated, approvable assets faster or cheaper, it deserves a platform multiple — value beyond the sum of current programs.",
          "Pipeline thesis: if output is indistinguishable in clinical outcome from conventional discovery, the company should be valued asset-by-asset on risk-adjusted net present value, like any biotech.",
          "Most AI-discovery names trade on some blend of the two. The blend — and how it re-rates as data arrives — is the entire investment debate.",
        ],
      },
      {
        heading: "What to underwrite",
        body: [
          "Three signals move the platform case: (1) clinical readouts showing differentiated efficacy, safety, or speed; (2) partnership and milestone economics that externally price the platform; and (3) capital discipline that funds the company to those inflection points. Absent these, platform narratives should be discounted heavily.",
        ],
      },
    ],
  },
  {
    slug: "market-access-commercialization",
    title: "Market Access & Commercialization: Why Reimbursement Is Destiny",
    category: "Commercial Strategy",
    date: "May 2026",
    readTime: "5 min read",
    summary:
      "A differentiated asset with no payer pathway is a science project. The commercial value of a therapy is set as much by access strategy — coverage, pricing, and evidence — as by the underlying clinical data.",
    takeaway:
      "Underwrite the access case as rigorously as the clinical case. The assets that win commercially are those that pair efficacy with a defensible payer value proposition, real-world evidence, and a coverage pathway designed from Phase 2 onward.",
    sections: [
      {
        heading: "Clinical value and commercial value are not the same thing",
        body: [
          "A therapy can be scientifically excellent and commercially disappointing if it cannot secure broad coverage at a sustainable price. Conversely, a moderately differentiated asset with a clean reimbursement pathway and a strong value story can outperform commercially.",
          "Bridging the two requires translating clinical endpoints into the economic and outcomes evidence that payers actually reward — the core work of HEOR and market access.",
        ],
      },
      {
        heading: "The levers that decide access",
        body: [
          "Evidence generation: cost-effectiveness, budget impact, and real-world evidence that substantiate a payer-relevant value proposition rather than a purely clinical one.",
          "Pricing and contracting: list-versus-net dynamics, rebating, and value-based arrangements that align price with demonstrated outcomes.",
          "Coverage design: prior authorization, step therapy, and formulary positioning that determine whether a label translates into prescriptions.",
        ],
      },
      {
        heading: "Why this matters for investors and BD teams",
        body: [
          "Diligence that stops at the clinical data misses half the value equation. The strongest investment and partnership cases integrate the access view from the start — sizing not the addressable patient population, but the reimbursed, accessible population at a defensible price. That is the number that drives revenue, and therefore valuation.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
