"use client";

import { motion, useReducedMotion } from "motion/react";

// A connector line that draws itself when it scrolls into view.
export default function DrawLine({ className = "", vertical = false, delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={`${vertical ? "origin-top" : "origin-center"} ${className}`}
      initial={reduce ? false : vertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
