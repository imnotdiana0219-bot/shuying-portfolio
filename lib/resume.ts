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
    date: "Apr 2025",
    detail: "Genomics, Computational Biology, Machine Learning, Biostatistics, Data Science",
  },
];

export const experience = [
  {
    org: "GBCS Group",
    title: "Commercial Strategy & Market Intelligence Intern",
    date: "Mar 2026 – Present",
    bullets: [
      "Evaluated market attractiveness, commercialization potential, and growth opportunities across three SaaS products through market sizing, competitive benchmarking, and customer segmentation analyses, informing go-to-market and strategic growth strategy.",
      "Conducted commercial due diligence across 15+ competitors and 20+ sources, identifying market opportunities.",
      "Developed commercialization and pricing strategies by analyzing customer economics, value propositions, competitive positioning, and adoption pathways to support scalable market-entry planning.",
      "Built customer economics and ROI frameworks quantifying savings from predictive maintenance, fuel optimization, and workflow automation, validating demand drivers and key assumptions underpinning commercialization and growth planning.",
    ],
  },
  {
    org: "BCG Mentorship Project",
    title: "Healthcare Market Strategy Analyst",
    date: "Jan 2024 – May 2024",
    bullets: [
      "Evaluated JADA's China market opportunity through market sizing, competitive analysis, and stakeholder research.",
      "Assessed regulatory approval, reimbursement, and market-access pathways through stakeholder interviews and policy analysis, identifying key adoption barriers and commercialization risks to inform China launch strategy.",
      "Synthesized insights from 3,000+ physician, hospital, and stakeholder interviews to identify adoption barriers, reimbursement challenges, physician education needs, and key drivers of hospital uptake.",
      "Evaluated competitive products, unmet clinical needs, physician demand, and healthcare system dynamics through stakeholder research, identifying key market-entry opportunities and commercialization priorities for China launch.",
      "Developed recommendations on regulatory approval strategy, target hospital segments, and pricing considerations, identifying priority launch markets and adoption pathways to inform JADA's China market-entry strategy.",
    ],
  },
  {
    org: "Chinese Academy of Sciences",
    title: "Biomedical Data Analyst Intern",
    date: "Apr 2023 – Dec 2023",
    bullets: [
      "Applied Python- and R-based bioinformatics pipelines to 10,000+ patient genomic datasets, identifying candidate biomarkers, differential gene-expression patterns, and molecular signatures associated with cancer development and progression.",
      "Applied pathway enrichment, differential expression, and molecular network analyses to identify disease-associated pathways, biomarker candidates, and therapeutic targets from large-scale genomic datasets.",
      "Integrated large-scale genomic findings with clinical and scientific evidence to validate candidate biomarkers, characterize molecular disease subtypes, and support translational oncology and precision medicine research.",
      "Translated large-scale genomic analyses into actionable research insights, hypotheses, and recommendations, enabling multidisciplinary teams to prioritize biomarker candidates and advance translational oncology research efforts.",
    ],
  },
];

export const projects = [
  {
    title: "Biotech Investment Thesis | Structure Therapeutics (NASDAQ: GPCR)",
    date: "May 2026 – Present",
    href: "/research/structure-therapeutics",
    bullets: [
      "Built an investment thesis assessing clinical differentiation, market opportunity, and competitive positioning.",
      "Conducted clinical and regulatory diligence on aleniglipron, evaluating efficacy, safety, FDA readiness, and risks.",
      "Modeled cash runway and financing scenarios to assess funding sufficiency through Phase 3 development.",
      "Formulated a conditional buy recommendation based on best-in-class oral GLP-1 efficacy, strong liquidity, scalable commercialization potential, and risk-adjusted upside relative to execution and competitive risks.",
    ],
  },
  {
    title: "Obesity Therapeutics Market & Value Assessment | Wegovy vs Zepbound",
    date: "Apr 2026 – May 2026",
    href: "/insights/obesity-therapeutics",
    bullets: [
      "Evaluated Wegovy and Zepbound's clinical and economic value through efficacy, safety, and outcomes.",
      "Developed a Markov and decision tree model incorporating treatment costs, adverse events, QALYs, and long-term health outcomes to quantify payer-relevant value and evaluate reimbursement potential across different pricing and utilization scenarios.",
      "Conducted sensitivity and scenario analyses across treatment efficacy, adherence, pricing, and healthcare cost assumptions to identify key value drivers, reimbursement risks, and market access considerations influencing payer coverage and commercial adoption.",
      "Synthesized HEOR findings into recommendations on payer value proposition, pricing strategy, and market access priorities to support commercialization decision-making.",
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
