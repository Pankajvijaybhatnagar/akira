"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Headline that rises in word by word.
 * `text` is a string; words listed in `highlight` get the italic brand gradient.
 */
export default function AnimatedText({ text, highlight = [], as = "h1", className = "", delay = 0, onView = false }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.h1;
  const words = text.split(" ");
  const hl = new Set(highlight.map((w) => w.toLowerCase()));

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: delay } },
  };
  const word = {
    hidden: { y: "110%", opacity: 0, rotate: 4 },
    show: { y: "0%", opacity: 1, rotate: 0, transition: { duration: 0.9, ease: EASE } },
  };

  const trigger = onView
    ? { whileInView: "show", viewport: { once: true, amount: 0.4 } }
    : { animate: "show" };

  return (
    <Tag className={className} initial={reduce ? false : "hidden"} variants={container} {...trigger} aria-label={text}>
      {words.map((w, i) => {
        const clean = w.replace(/[.,!?]/g, "").toLowerCase();
        return (
          <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom" aria-hidden="true">
            <motion.span
              variants={word}
              className={`inline-block ${hl.has(clean) ? "italic text-gradient-brand pr-[0.06em]" : ""}`}
            >
              {w}
            </motion.span>
            {i < words.length - 1 && " "}
          </span>
        );
      })}
    </Tag>
  );
}
