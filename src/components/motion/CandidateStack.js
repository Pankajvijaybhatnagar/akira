"use client";

import { motion } from "motion/react";
import { BadgeCheck, Search } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const profiles = [
  { initials: "JD", role: "Java Developer", tags: ["JLPT N2", "English"] },
  { initials: "DS", role: "Data Scientist", tags: ["Japanese", "English"] },
  { initials: "CE", role: "Cloud Engineer", tags: ["Bilingual", "AWS"] },
];

// HR hero: candidate cards slide in, get "screened", then show a matched badge.
export default function CandidateStack() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-brand-200/40 blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative mb-4 flex items-center gap-3 rounded-2xl bg-ink-800 px-5 py-3.5 text-white shadow-xl"
      >
        <Search className="h-4 w-4 text-brand-300" />
        <span className="text-sm text-white/80">Searching bilingual IT talent across Asia</span>
        <span className="ml-auto flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-brand-300"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </span>
      </motion.div>

      <div className="relative space-y-4">
        {profiles.map((p, i) => (
          <motion.div
            key={p.role}
            initial={{ opacity: 0, x: 60, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.7 + i * 0.25, duration: 0.8, ease: EASE }}
            className={i === 1 ? "ml-10" : ""}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
              className="relative flex items-center gap-4 overflow-hidden rounded-3xl border border-brand-100 bg-white p-5 shadow-xl shadow-brand-900/10"
            >
              <motion.span
                aria-hidden="true"
                className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-brand-100/80 to-transparent"
                initial={{ left: "-30%" }}
                animate={{ left: "130%" }}
                transition={{ delay: 1.5 + i * 0.35, duration: 1.1, ease: "easeInOut" }}
              />
              <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-lg text-white">
                {p.initials}
              </span>
              <div className="relative min-w-0 flex-1">
                <p className="font-semibold text-ink-900">{p.role}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-600">{t}</span>
                  ))}
                </div>
              </div>
              <motion.span
                className="relative"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 2.4 + i * 0.35, type: "spring", stiffness: 300, damping: 15 }}
              >
                <BadgeCheck className="h-7 w-7 text-emerald-500" />
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
        <p className="pt-2 text-center text-xs text-ink-700/50">Illustrative candidate profiles</p>
      </div>
    </div>
  );
}
