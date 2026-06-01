import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui";
import { site } from "@/lib/site";
import { education, experience, projects, skills } from "@/lib/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: "Interactive resume of Shuying Dai — education, experience, projects, and skills.",
};

export default function ResumePage() {
  return (
    <div className="container-page py-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <PageHeader
          eyebrow="Curriculum Vitae"
          title="Shuying Dai"
          intro={`${site.role} · ${site.location}`}
        />
        <a href={site.resumePath} download className="btn-primary w-fit shrink-0">
          <Download className="h-4 w-4" /> Download PDF
        </a>
      </div>

      {/* Contact line */}
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
        <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-accent-deep dark:hover:text-accent-soft">
          <Mail className="h-4 w-4" /> {site.email}
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent-deep dark:hover:text-accent-soft">
          <Linkedin className="h-4 w-4" /> {site.linkedinHandle}
        </a>
        <span>{site.phone}</span>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        {/* Main column */}
        <div className="space-y-12 lg:col-span-2">
          {/* Experience */}
          <section>
            <h2 className="border-b border-slate-200 pb-2 font-serif text-xl font-semibold text-slate-900 dark:border-white/10 dark:text-white">
              Professional Experience
            </h2>
            <div className="mt-6 space-y-8">
              {experience.map((e) => (
                <div key={e.org} className="relative border-l border-slate-200 pl-6 dark:border-white/10">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="font-semibold text-slate-900 dark:text-white">{e.org}</h3>
                    <span className="text-xs text-slate-400">{e.date}</span>
                  </div>
                  <div className="text-sm font-medium text-accent-deep dark:text-accent-soft">
                    {e.title}
                  </div>
                  <ul className="mt-3 space-y-2">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="border-b border-slate-200 pb-2 font-serif text-xl font-semibold text-slate-900 dark:border-white/10 dark:text-white">
              Investment & Research Projects
            </h2>
            <div className="mt-6 space-y-8">
              {projects.map((p) => (
                <div key={p.title} className="relative border-l border-slate-200 pl-6 dark:border-white/10">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                    <span className="text-xs text-slate-400">{p.date}</span>
                  </div>
                  {p.href && (
                    <Link
                      href={p.href}
                      className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-accent-deep hover:underline dark:text-accent-soft"
                    >
                      View write-up <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  )}
                  <ul className="mt-3 space-y-2">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-10">
          <section>
            <h2 className="border-b border-slate-200 pb-2 font-serif text-xl font-semibold text-slate-900 dark:border-white/10 dark:text-white">
              Education
            </h2>
            <div className="mt-5 space-y-5">
              {education.map((e) => (
                <div key={e.school}>
                  <div className="font-semibold text-slate-900 dark:text-white">{e.school}</div>
                  <div className="text-sm text-accent-deep dark:text-accent-soft">{e.degree}</div>
                  <div className="text-xs text-slate-400">{e.date}</div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {e.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="border-b border-slate-200 pb-2 font-serif text-xl font-semibold text-slate-900 dark:border-white/10 dark:text-white">
              Skills
            </h2>
            <div className="mt-5 space-y-5">
              {skills.map((group) => (
                <div key={group.category}>
                  <div className="eyebrow mb-2">{group.category}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((s) => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
