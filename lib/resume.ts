// Structured resume data, sourced from Shuying Dai's CV. Drives the
// interactive /resume page.

export const education = [
  {
    school: "University of Southern California",
    degree: "M.S. Healthcare Decision Analysis",
    date: "Expected May 2027",
    detail:
      "HEOR, RWE Analysis, Healthcare Policy & Market Access, Statistical Modeling, Healthcare Innovation & Commercialization",
  },
  {
    school: "University of Toronto",
    degree: "B.S. Bioinformatics, Minor in Data Science",
    date: "May 2025",
    detail: "Genomics, Computational Biology, Machine Learning, Biostatistics, Data Science",
  },
];

export const experience = [
  {
    org: "GBCS Group",
    title: "Commercial Strategy & Market Intelligence Intern",
    date: "Mar 2026 – Present",
    bullets: [
      "Assessed market attractiveness and commercialization feasibility for Orion Aviation's fleet management software across a $11.2B addressable market, shaping the product's go-to-market thesis.",
      "Conducted commercial due diligence across 15+ aviation software providers and industry sources, identifying pricing opportunities, adoption barriers, and customer segments to inform market-entry and pricing strategy.",
      "Built ROI models quantifying 18–37% operating-cost reductions, $250K annual savings, and ~150% ROI, supporting commercialization and customer adoption decisions.",
    ],
  },
  {
    org: "BCG Mentorship Project",
    title: "Healthcare Market Strategy Analyst",
    date: "Jan 2024 – May 2024",
    bullets: [
      "Evaluated JADA's China market opportunity through market sizing, competitive benchmarking, and stakeholder research, assessing a $50M+ intervention market across postpartum hemorrhage treatment and adjacent hospital segments.",
      "Assessed regulatory, reimbursement, and market-access pathways through 3,000+ clinician, policy, and market-access stakeholder interviews, identifying the primary barriers to physician adoption and hospital uptake.",
      "Developed go-to-market recommendations on approval strategy, hospital targeting, and pricing, prioritizing top-tier maternity hospitals representing >30% of national delivery volume for initial launch.",
    ],
  },
  {
    org: "Chinese Academy of Sciences",
    title: "Biomedical Data Analyst Intern",
    date: "Apr 2023 – Dec 2023",
    bullets: [
      "Applied Python and R bioinformatics pipelines to 10,000+ patient genomic datasets, identifying 50+ candidate biomarkers and 21 disease-associated pathways.",
      "Integrated genomic findings with clinical evidence to validate 12 biomarkers and characterize molecular disease subtypes, advancing translational oncology research.",
      "Translated complex genomic analyses into actionable recommendations that enabled multidisciplinary teams to prioritize biomarker candidates for downstream study.",
    ],
  },
];

export const projects = [
  {
    title: "Biotech Investment Thesis | Structure Therapeutics (NASDAQ: GPCR)",
    date: "May 2026 – Present",
    href: "/research/structure-therapeutics",
    bullets: [
      "Built an investment thesis on Structure Therapeutics, issuing a conditional buy on aleniglipron, a Phase 3-ready oral GLP-1 with best-in-class potential in the $100B+ obesity market.",
      "Conducted clinical and regulatory diligence supporting the thesis, evaluating Phase 2 efficacy (16.3% placebo-adjusted weight loss) and safety data across 625+ patients against oral and injectable competitors.",
      "Modeled cash runway and financing scenarios, confirming $1.46B in liquidity funds operations through the 2028 Phase 3 readout, weighed against execution and competitive timing risks.",
    ],
  },
  {
    title: "Obesity Therapeutics Market & Value Assessment | Wegovy vs Zepbound",
    date: "Apr 2026 – May 2026",
    href: "/insights/obesity-therapeutics",
    bullets: [
      "Conducted a HEOR cost-effectiveness analysis of Wegovy versus Zepbound, translating clinical and economic findings into pricing and market-access recommendations for obesity therapeutics.",
      "Built Markov and decision-tree models incorporating treatment costs, adverse events, QALYs, and long-term outcomes, estimating an incremental cost-effectiveness ratio (ICER) of ~$335,000/QALY for Zepbound versus Wegovy.",
      "Ran sensitivity analyses across pricing, adherence, and efficacy assumptions, finding a 20% price reduction lowered the ICER below the $150,000/QALY willingness-to-pay threshold.",
    ],
  },
];

export const skills = [
  {
    category: "Investment & Commercial Evaluation",
    items: [
      "Investment Thesis Development",
      "Commercial Due Diligence",
      "Scientific Due Diligence",
      "Market Opportunity Assessment",
      "Competitive Intelligence",
      "Financial Analysis",
    ],
  },
  {
    category: "Healthcare & Life Sciences",
    items: [
      "Clinical Data Analysis",
      "HEOR",
      "Market Access",
      "Reimbursement Strategy",
      "Real-World Evidence",
      "Commercialization Strategy",
    ],
  },
  {
    category: "Tools",
    items: ["Excel", "PitchBook", "CB Insights", "SEC Filings Research", "SAS", "R", "Python", "SQL", "Tableau"],
  },
];
