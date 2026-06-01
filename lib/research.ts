// Investment Memo Library content. Each memo renders both as a card on the
// /research index and as a full page at /research/[slug].

export type Memo = {
  slug: string;
  company: string;
  ticker?: string;
  title: string;
  sector: string;
  stance: "Long" | "Watch" | "Initiating Coverage" | "In Progress";
  conviction: "High" | "Medium" | "Exploratory";
  date: string;
  status: "Published" | "In Progress";
  thesis: string; // one-line shown on the card
  sections?: { heading: string; body: string[] }[];
  catalysts?: string[];
  risks?: string[];
};

export const memos: Memo[] = [
  {
    slug: "structure-therapeutics",
    company: "Structure Therapeutics",
    ticker: "NASDAQ: GPCR",
    title: "Structure Therapeutics — Oral GLP-1 Optionality in a GI-Tolerability Race",
    sector: "Obesity / Metabolic",
    stance: "Long",
    conviction: "Medium",
    date: "May 2026",
    status: "Published",
    thesis:
      "A differentiated oral small-molecule GLP-1 program positioned for the next wave of obesity therapeutics — the investment case turns on tolerability, durability of weight loss, and cash runway through Phase 3 readouts.",
    sections: [
      {
        heading: "Thesis",
        body: [
          "Structure Therapeutics is developing oral, small-molecule GLP-1 receptor agonists (lead asset aleniglipron / GSBR-1290) targeting the obesity and type 2 diabetes markets. The core variant perception: the market is pricing the company primarily against injectable incumbents, while underappreciating the strategic value of a convenient oral formulation in a category where adherence, supply, and patient preference increasingly drive share.",
          "The opportunity is asymmetric but contingent. Upside requires a tolerability and weight-loss profile competitive with oral peers, a clean path through Phase 3, and disciplined capital management. The bear case is equally clear and must be respected: GI tolerability, dose titration, and a crowded competitive set led by well-capitalized incumbents.",
        ],
      },
      {
        heading: "Science & Differentiation",
        body: [
          "The platform applies structure-based drug design to G-protein-coupled receptors (GPCRs), aiming for oral small molecules that replicate the efficacy of peptide GLP-1 agonists without the cold-chain, injection, and manufacturing complexity of biologics.",
          "An oral small molecule is meaningfully easier and cheaper to manufacture and distribute at scale than an injectable peptide — a structural advantage in a market where supply has repeatedly constrained demand. The scientific question that gates the thesis is whether efficacy and GI tolerability hold across the titration schedule in larger, longer trials.",
        ],
      },
      {
        heading: "Market & Competitive Landscape",
        body: [
          "The obesity therapeutics market is among the largest commercial opportunities in biopharma, with credible long-run estimates well into the tens of billions of dollars annually. Incumbency belongs to the injectable GLP-1 / GIP franchises (semaglutide and tirzepatide), with multiple oral programs advancing across large- and mid-cap developers.",
          "Structure competes less on being first and more on being differentiated-and-convenient. The relevant comparison set is the emerging oral cohort; positioning hinges on the efficacy-tolerability frontier and on whether a smaller developer can fund and execute global Phase 3 trials against players with far deeper balance sheets.",
        ],
      },
      {
        heading: "Value, Reimbursement & Commercialization",
        body: [
          "Payer dynamics are the swing factor for the entire obesity category. Coverage breadth, prior-authorization rules, and the durability of weight loss after discontinuation all shape the realizable value of any asset. An oral option may improve access economics and persistence, but pricing power depends on demonstrating differentiated outcomes, not just convenience.",
          "From an HEOR lens, the long-term value case rests on translating weight loss into downstream cardiometabolic outcomes — the evidence base that supports premium reimbursement and protects against step-therapy disadvantages.",
        ],
      },
      {
        heading: "Financial Position",
        body: [
          "The financing question is central for a clinical-stage developer: cash runway must credibly fund the program through value-inflecting readouts without dilutive financing at unfavorable terms. Monitoring cash position, burn, and capital requirements against the Phase 3 timeline is the single most important ongoing diligence item.",
        ],
      },
    ],
    catalysts: [
      "Late-stage clinical readouts on weight loss and GI tolerability across the titration schedule",
      "Phase 3 trial initiation, design, and enrollment pace",
      "Updates on cash runway, burn, and any financing or partnership activity",
      "Competitive readouts from the broader oral GLP-1 cohort that reset the bar",
    ],
    risks: [
      "GI tolerability or dose-titration limitations that cap competitive weight loss",
      "Crowded competitive set led by far better-capitalized incumbents",
      "Financing risk if cash runway falls short of Phase 3 inflection points",
      "Payer coverage and step-therapy decisions that compress realizable pricing",
    ],
  },
  {
    slug: "recursion-pharmaceuticals",
    company: "Recursion Pharmaceuticals",
    ticker: "NASDAQ: RXRX",
    title: "Recursion — Pricing the Option Value of an AI Drug-Discovery Platform",
    sector: "AI Drug Discovery / TechBio",
    stance: "Watch",
    conviction: "Exploratory",
    date: "June 2026",
    status: "Published",
    thesis:
      "A platform bet where the question is not whether the technology is impressive but whether clinical validation and partnership economics can justify a platform multiple — diligence centers on pipeline readouts converting compute into approvable assets.",
    sections: [
      {
        heading: "Thesis",
        body: [
          "Recursion is a TechBio company applying machine learning, automated wet-lab experimentation, and large proprietary biological datasets to industrialize drug discovery. The investment debate is fundamentally about how to value a platform: the market oscillates between pricing Recursion as a technology company with optionality across a broad pipeline and pricing it as a clinical-stage biotech that must be underwritten asset-by-asset.",
          "My current stance is Watch, not Long. The platform narrative is compelling, but conviction requires evidence that the discovery engine produces clinically differentiated assets faster, cheaper, or with higher probability of success than conventional approaches — the precise claim that platform skeptics most doubt.",
        ],
      },
      {
        heading: "Platform & Differentiation",
        body: [
          "The core asset is the data-and-automation flywheel: closed-loop experimentation generating proprietary datasets that, in principle, improve model predictions and compound over time. Strategic partnerships with large pharmaceutical companies provide both non-dilutive capital and external validation of the platform's utility.",
          "The key diligence question is attribution. Industry-wide, AI-discovered molecules are still building a clinical track record, and base rates for first-in-human-to-approval remain humbling. The bull case needs the platform to bend that probability curve; the bear case is that compute accelerates the early steps while the hard, expensive part — clinical efficacy and safety — remains stubbornly unchanged.",
        ],
      },
      {
        heading: "Market & Competitive Landscape",
        body: [
          "The AI drug-discovery space includes platform-oriented public companies, well-funded private players, and the internal AI efforts of every major pharma. Competitive advantage, if it exists, comes from proprietary data scale, the tightness of the experiment-to-model loop, and the ability to convert platform output into wholly-owned or favorably-partnered clinical assets.",
        ],
      },
      {
        heading: "Value & What Would Change My Mind",
        body: [
          "Valuing Recursion is an exercise in separating platform option value from pipeline net present value. A platform multiple is defensible only if clinical data and partnership economics validate that the engine creates durable, repeatable value rather than a one-time pipeline.",
          "I would move from Watch toward a constructive view on: (1) clinical readouts showing differentiated efficacy or speed; (2) expanded or milestone-rich partnerships that externally price the platform; and (3) evidence of capital discipline extending runway through those inflection points.",
        ],
      },
    ],
    catalysts: [
      "Clinical readouts from wholly-owned and partnered programs",
      "New or expanded pharma partnerships and associated milestone economics",
      "Evidence of platform productivity — cost or time-to-candidate improvements",
      "Cash runway and burn updates against the clinical timeline",
    ],
    risks: [
      "Platform value may not translate into clinically differentiated, approvable assets",
      "Long, capital-intensive path to clinical validation with humbling base rates",
      "Competition from better-resourced pharma internal AI efforts",
      "Multiple compression if the market re-rates from platform to pipeline valuation",
    ],
  },
  {
    slug: "pipeline",
    company: "Research Pipeline",
    title: "Future Research — Coverage Roadmap",
    sector: "Multiple",
    stance: "In Progress",
    conviction: "Exploratory",
    date: "Ongoing",
    status: "In Progress",
    thesis:
      "Upcoming memos in development across oncology, cell & gene therapy, and commercial-stage names — each built on the same science / commercial / economic framework.",
    sections: [
      {
        heading: "In Development",
        body: [
          "Antibody-drug conjugates (ADCs): mapping the competitive landscape and identifying where durable differentiation versus payload-and-target crowding will determine winners.",
          "Cell & gene therapy commercialization: the gap between clinical promise and the reimbursement, manufacturing, and durability hurdles that gate commercial value.",
          "A commercial-stage equity deep-dive applying comparable company analysis and scenario-based valuation to a profitable or near-profitable name.",
          "A short / bear thesis — pressure-testing a consensus-long name to demonstrate balanced, disconfirming analysis.",
        ],
      },
    ],
  },
];

export function getMemo(slug: string): Memo | undefined {
  return memos.find((m) => m.slug === slug);
}
