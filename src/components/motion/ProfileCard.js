"use client";

import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1];

// About hero: company profile rows slide in one after another.
export default function ProfileCard({ rows }) {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-brand-200/40 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-brand-100 bg-white shadow-2xl shadow-brand-900/10">
        <div className="relative flex items-center justify-between overflow-hidden bg-brand-600 px-7 py-5">
          <motion.span
            aria-hidden="true"
            className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ left: "-30%" }}
            animate={{ left: "130%" }}
            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
          />
          <p className="relative font-display text-xl text-white">Company profile</p>
          <span className="relative rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">Est. 2021</span>
        </div>
        <dl className="divide-y divide-brand-100">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.6, ease: EASE }}
              className="grid grid-cols-5 gap-4 px-7 py-3.5 text-sm transition-colors hover:bg-brand-50"
            >
              <dt className="col-span-2 font-medium text-ink-700/60">{row.label}</dt>
              <dd className="col-span-3 font-semibold text-ink-900">{row.value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}
