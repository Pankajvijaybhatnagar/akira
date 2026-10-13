"use client";

import { motion } from "motion/react";
import { Search, Rocket, ChartLine } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];
const icons = { analysis: Search, launch: Rocket, "ramp-up": ChartLine };

// Business Consulting hero card: the three phases light up one after another.
export default function JourneyCard({ phases }) {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-brand-200/40 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink-800 to-ink-950 p-8 shadow-2xl shadow-brand-900/30">
        <motion.div
          className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-400/40 blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <p className="relative text-xs font-semibold uppercase tracking-[0.25em] text-brand-300">Your growth journey</p>
        <ol className="relative mt-8 space-y-6">
          {phases.map((p, i) => {
            const Icon = icons[p.id];
            return (
              <motion.li
                key={p.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.25, duration: 0.7, ease: EASE }}
                className="relative flex gap-4"
              >
                {i < phases.length - 1 && (
                  <motion.span
                    className="absolute left-6 top-14 h-6 w-px origin-top bg-white/30"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.9 + i * 0.25, duration: 0.5 }}
                  />
                )}
                <motion.span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-brand-600"
                  animate={{ boxShadow: ["0 0 0 0 rgba(255,255,255,0.35)", "0 0 0 10px rgba(255,255,255,0)"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 + i * 0.6, repeatDelay: 1.2 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.span>
                <div>
                  <p className="font-display text-xl text-white">{p.title}</p>
                  <p className="text-sm text-white/55">
                    {p.count} services · {p.tagline}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
