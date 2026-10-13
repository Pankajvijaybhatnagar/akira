"use client";

import { motion } from "motion/react";
import { Languages, Building2, UserSearch, MousePointer2 } from "lucide-react";
import Globe from "./motion/Globe";

const EASE = [0.22, 1, 0.36, 1];

// Home hero: rotating globe of Akira's India / global -> Japan network, with service chips and a legend.
export default function GlobeVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="relative aspect-square">
      {/* orbit ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[3%] rounded-full border border-dashed border-brand-200"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#f07e1a] shadow-[0_0_0_6px_rgba(240,126,26,0.15)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
      >
        <Globe />
      </motion.div>

      <Chip className="-left-2 top-0" delay={0.9} icon={Building2} title="Japan market entry" sub="USA · UK · Germany → Japan" />
      <Chip className="-right-2 top-[2%] hidden sm:block" delay={1.1} icon={UserSearch} title="IT talent" sub="Hire in Japan" floatDelay={-2} />
      <Chip className="-left-2 bottom-[2%]" delay={1.3} icon={Languages} title="Bilingual staffing" sub="India → Japan" floatDelay={-4} />
      </div>

      {/* legend */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.7, ease: EASE }}
        className="relative mx-auto mt-4 w-fit rounded-2xl border border-brand-100 bg-white/90 px-4 py-3 shadow-xl shadow-brand-900/10 backdrop-blur sm:absolute sm:-right-2 sm:bottom-0 sm:mt-0"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500">Our network</p>
        <ul className="mt-2 space-y-1.5 text-xs font-medium text-ink-800">
          <li className="flex items-center gap-2">
            <span className="h-0.5 w-5 rounded-full bg-[#f07e1a]" /> Bilingual IT talent
          </li>
          <li className="flex items-center gap-2">
            <span className="h-0.5 w-5 rounded-full bg-brand-300" /> Market entry clients
          </li>
          <li className="flex items-center gap-2">
            <span className="grid h-3 w-5 place-items-center">
              <span className="h-2 w-2 rounded-full border-2 border-brand-600 bg-[#f07e1a]" />
            </span>
            Japan HQ · Kawasaki
          </li>
        </ul>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="pointer-events-none absolute left-1/2 top-full mt-4 hidden -translate-x-1/2 items-center gap-1.5 text-xs text-ink-700/50 lg:flex"
      >
        <MousePointer2 className="h-3.5 w-3.5" /> Drag to spin the globe
      </motion.p>
    </div>
  );
}

function Chip({ className, delay, icon: Icon, title, sub, floatDelay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: EASE }}
      className={`pointer-events-none absolute ${className}`}
    >
      <div
        className="animate-float rounded-2xl border border-brand-100 bg-white/95 px-3 py-2 shadow-xl shadow-brand-900/10 backdrop-blur sm:px-4 sm:py-3"
        style={{ animationDelay: `${floatDelay}s` }}
      >
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-600 text-white sm:h-9 sm:w-9">
            <Icon className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold text-ink-900 sm:text-sm">{title}</p>
            <p className="hidden text-xs text-ink-700/60 sm:block">{sub}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
