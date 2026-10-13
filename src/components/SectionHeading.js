"use client";

import { motion, useReducedMotion } from "motion/react";
import AnimatedText from "./motion/AnimatedText";
import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, highlight = [], text, align = "center", dark = false }) {
  const reduce = useReducedMotion();
  const centered = align === "center";
  const line = (
    <motion.span
      className="h-px w-8 origin-left bg-current"
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    />
  );

  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && (
        <Reveal variant="blur" duration={0.6}>
          <p
            className={`mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] ${
              dark ? "text-brand-300" : "text-brand-500"
            }`}
          >
            {line}
            {eyebrow}
            {centered && line}
          </p>
        </Reveal>
      )}
      <AnimatedText
        as="h2"
        onView
        text={title}
        highlight={highlight}
        className={`font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl ${
          dark ? "text-white" : "text-ink-900"
        }`}
      />
      {text && (
        <Reveal delay={200}>
          <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/70" : "text-ink-700/75"}`}>{text}</p>
        </Reveal>
      )}
    </div>
  );
}
