import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 dark:border-white/10">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="font-serif text-lg font-semibold text-slate-900 dark:text-white">
              {site.name}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {site.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="eyebrow mb-1">Navigate</span>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 transition-colors hover:text-accent-deep dark:text-slate-400 dark:hover:text-accent-soft"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <span className="eyebrow mb-1">Connect</span>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-accent-deep dark:text-slate-400 dark:hover:text-accent-soft"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-accent-deep dark:text-slate-400 dark:hover:text-accent-soft"
            >
              <Mail className="h-4 w-4" /> {site.email}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between dark:border-white/10 dark:text-slate-500">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Independent research for educational purposes only — not investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
