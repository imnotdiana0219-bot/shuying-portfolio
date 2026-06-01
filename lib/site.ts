// Central site configuration. Edit these values to update contact info,
// positioning, and navigation across every page.

export const site = {
  name: "Shuying Dai",
  tagline: "Healthcare Innovation, Commercialization & Investment Research",
  role: "Healthcare Investing Candidate",
  location: "Los Angeles, CA",
  email: "shuyingd@usc.edu",
  phone: "+1 213-255-9521",
  linkedin: "https://www.linkedin.com/in/shuyingdai",
  linkedinHandle: "linkedin.com/in/shuyingdai",
  resumePath: "/Shuying-Dai-Resume.pdf",
  // One-line positioning used in the hero and meta description.
  summary:
    "M.S. Healthcare Decision Analysis candidate at USC with a B.S. in Bioinformatics. I evaluate healthcare and biotech opportunities across three lenses — the science, the commercial trajectory, and the economic value.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/insights", label: "Industry Insights" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export const expertise = [
  {
    title: "Investment Research",
    description:
      "Investment thesis development, scientific & commercial due diligence, comparable company analysis, and valuation across public and private biotech.",
  },
  {
    title: "Commercialization & Market Access",
    description:
      "Market sizing, payer value propositions, reimbursement strategy, HEOR, and go-to-market planning for therapeutics and health technology.",
  },
  {
    title: "Scientific & Data Foundation",
    description:
      "Bioinformatics and genomic data analysis — biomarker discovery, computational biology, and translating clinical evidence into investment views.",
  },
] as const;

export const focusAreas = [
  "Healthcare Investing",
  "Biotech Equity Research",
  "Corporate Venture Capital",
  "Pharma Business Development",
  "Healthcare Strategy",
  "Market Access",
] as const;
