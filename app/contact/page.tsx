import type { Metadata } from "next";
import { Mail, Linkedin, Download, MapPin } from "lucide-react";
import { PageHeader, Callout } from "@/components/ui";
import { site, focusAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Shuying Dai — healthcare investing candidate.",
};

export default function ContactPage() {
  return (
    <div className="container-page py-16">
      <PageHeader
        eyebrow="Contact"
        title="Let's connect"
        intro="I'm actively recruiting for roles in healthcare investing, biotech equity research, corporate venture, and pharma business development. I'd welcome a conversation."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <a
          href={`mailto:${site.email}`}
          className="surface surface-hover group flex items-center gap-4 p-6"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent-deep dark:text-accent-soft">
            <Mail className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm text-slate-400">Email</span>
            <span className="block font-semibold text-slate-900 dark:text-white">
              {site.email}
            </span>
          </span>
        </a>

        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="surface surface-hover group flex items-center gap-4 p-6"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent-deep dark:text-accent-soft">
            <Linkedin className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm text-slate-400">LinkedIn</span>
            <span className="block font-semibold text-slate-900 dark:text-white">
              {site.linkedinHandle}
            </span>
          </span>
        </a>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href={site.resumePath} download className="btn-primary">
          <Download className="h-4 w-4" /> Download Resume
        </a>
        <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <MapPin className="h-4 w-4" /> {site.location} · Open to relocation
        </span>
      </div>

      <div className="mt-12 max-w-2xl">
        <Callout label="Currently exploring">
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((f) => (
              <span
                key={f}
                className="rounded-full bg-white/60 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200"
              >
                {f}
              </span>
            ))}
          </div>
        </Callout>
      </div>
    </div>
  );
}
