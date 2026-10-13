import Link from "next/link";
import { BellRing, ChevronRight, ArrowUp } from "lucide-react";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";
import Reveal from "./Reveal";
import { site } from "@/data/site";

const columns = [
  {
    title: "Business Consulting",
    links: [
      { href: "/business-consulting#analysis", label: "Analysis Phase" },
      { href: "/business-consulting#launch", label: "Launch Phase" },
      { href: "/business-consulting#ramp-up", label: "Ramp-Up Phase" },
    ],
  },
  {
    title: "HR Consulting",
    links: [
      { href: "/hr-consulting#hire-it-talent", label: "Hire IT Talent" },
      { href: "/hr-consulting#bilingual-staffing", label: "Bilingual Staffing" },
    ],
  },
  {
    title: "Information",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact Us" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
];

const socials = [
  {
    label: "Facebook",
    href: site.social.facebook,
    path: "M14 8h3V4h-3c-2.8 0-4 1.7-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6Z",
  },
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    path: "M4.5 9h3.8v12H4.5V9Zm1.9-6a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM10.6 9h3.6v1.7c.5-.9 1.8-2 3.7-2 4 0 4.6 2.6 4.6 6V21h-3.8v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21h-3.8V9h-.2Z",
  },
  {
    label: "Instagram",
    href: site.social.instagram,
    path: "M12 7.4A4.6 4.6 0 1 0 12 16.6 4.6 4.6 0 0 0 12 7.4Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.8-8.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM12 3c-2.4 0-2.7 0-3.7.1C4.9 3.2 3.2 4.9 3.1 8.3 3 9.3 3 9.6 3 12s0 2.7.1 3.7c.1 3.4 1.8 5.1 5.2 5.2 1 .1 1.3.1 3.7.1s2.7 0 3.7-.1c3.4-.1 5.1-1.8 5.2-5.2.1-1 .1-1.3.1-3.7s0-2.7-.1-3.7c-.1-3.4-1.8-5.1-5.2-5.2C14.7 3 14.4 3 12 3Z",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white/70">
      <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-brand-400/10 blur-[100px]" />

      {/* newsletter strip */}
      <div className="relative border-b border-white/10 bg-ink-900/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-white">
              <BellRing className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-xl text-white">Stay in the loop</p>
              <p className="text-sm text-white/55">Get updates on Japan market insights and opportunities.</p>
            </div>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
        <Reveal className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo variant="card" />
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-white">Who we are</h3>
            <p className="mt-4 max-w-sm leading-relaxed">
              We intelligently <strong className="text-white">connect</strong> job opportunities with qualified candidates,{" "}
              <strong className="text-white">collaborate</strong> in providing skill development training to meet the job
              demand, and <strong className="text-white">contribute</strong> towards the development of the international
              economic society.
            </p>
            <a href={`mailto:${site.email}`} className="mt-5 block font-semibold text-white hover:text-brand-300">
              {site.email}
            </a>
            <Link href="/about" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-300 hover:text-white">
              Read more <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {columns.map((col, i) => (
            <div key={col.title} className={`lg:col-span-2 ${i === 0 ? "lg:col-start-6" : ""}`}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white">{col.title}</h3>
              <span className="mt-3 block h-0.5 w-8 rounded-full bg-brand-400" />
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="group inline-flex items-center gap-1.5 transition-colors hover:text-white">
                      <ChevronRight className="h-3.5 w-3.5 text-brand-400 transition-transform group-hover:translate-x-0.5" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 transition-colors hover:border-white/40 hover:text-white"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 transition-colors hover:bg-white hover:text-brand-600"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
