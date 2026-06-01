# Shuying Dai — Portfolio

**Healthcare Innovation, Commercialization & Investment Research**

A professional portfolio website for a healthcare investing candidate, built to look like the work of an early-career healthcare investor — clean, institutional, and credibility-first.

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (mobile-first, responsive)
- **Dark mode:** `next-themes` (defaults to dark, respects system, user-toggleable)
- **Icons:** lucide-react
- **Fonts:** Inter (body) + Newsreader (serif headings) via `next/font`

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero, short bio, expertise areas, featured research & insights, resume + LinkedIn CTAs |
| `/about` | Academic background, career interests, investment philosophy, three-lens framework |
| `/research` | Investment Memo Library — Structure Therapeutics, Recursion, forward pipeline |
| `/research/[slug]` | Full investment memo (thesis, science, market, value, catalysts, risks) |
| `/insights` | Industry Insights index |
| `/insights/[slug]` | Full article — Obesity Therapeutics, AI Drug Discovery, Market Access |
| `/resume` | Interactive resume + PDF download |
| `/contact` | LinkedIn + email |

---

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx            # Root layout: fonts, theme provider, navbar, footer
│   ├── page.tsx              # Homepage
│   ├── globals.css           # Tailwind layers + design-system component classes
│   ├── not-found.tsx         # 404
│   ├── about/page.tsx
│   ├── research/
│   │   ├── page.tsx          # Memo library index
│   │   └── [slug]/page.tsx   # Memo detail
│   ├── insights/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── resume/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx            # Sticky responsive nav + mobile menu
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx     # next-themes wrapper
│   ├── ThemeToggle.tsx       # Light/dark switch
│   └── ui.tsx                # PageHeader, Callout, Tags
├── lib/
│   ├── site.ts               # Name, contact, nav, expertise, focus areas
│   ├── research.ts           # Investment memo content
│   ├── insights.ts           # Industry insight content
│   └── resume.ts             # Education, experience, projects, skills
├── public/
│   └── Shuying-Dai-Resume.pdf
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
└── tsconfig.json
```

**All content lives in `lib/`** — edit those four files to update text without touching layout code.

---

## Run locally

Requires Node.js 18.17+ (Node 20 LTS recommended).

```bash
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

---

## Editing content

- **Name, contact, LinkedIn, tagline, nav, focus areas** → `lib/site.ts`
- **Investment memos** (Structure Therapeutics, Recursion, pipeline) → `lib/research.ts`
- **Industry insights** (obesity, AI drug discovery, market access) → `lib/insights.ts`
- **Resume** (education, experience, projects, skills) → `lib/resume.ts`
- **Resume PDF** → replace `public/Shuying-Dai-Resume.pdf` (keep the filename, or update `resumePath` in `lib/site.ts`)

To add a new memo, append an object to the `memos` array in `lib/research.ts` — the index card and `/research/[slug]` page generate automatically. Same pattern for insights.

---

## Deploy to Vercel

### Option A — Git + Vercel dashboard (recommended)

1. Push this `portfolio/` folder to a GitHub repository.
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. Go to https://vercel.com → **Add New… → Project** → import the repo.
3. Vercel auto-detects Next.js. If this folder is **not** the repo root, set **Root Directory** to `portfolio`.
4. Leave build/output settings at defaults (`next build`). Click **Deploy**.
5. You'll get a `*.vercel.app` URL in ~1 minute.

### Option B — Vercel CLI

```bash
npm i -g vercel
cd portfolio
vercel          # follow prompts; first run creates the project
vercel --prod   # promote to production
```

### Custom domain (optional)

Vercel → Project → **Settings → Domains** → add your domain (e.g. `shuyingdai.com`) and follow the DNS instructions. Update `metadataBase` in `app/layout.tsx` to your final URL for correct social previews.

---

## Notes

- Dark mode is the default; the toggle is in the navbar.
- All research and insights carry an educational-use disclaimer (standard for investment content).
- The site is fully static-friendly — memo and insight routes are pre-rendered via `generateStaticParams`.
