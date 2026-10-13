"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1];

const variants = {
  up: { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -30 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } },
  blur: { hidden: { opacity: 0, filter: "blur(12px)", y: 20 }, show: { opacity: 1, filter: "blur(0px)", y: 0 } },
};

// Scroll-triggered entrance. `delay` is in milliseconds.
export default function Reveal({ children, delay = 0, className = "", variant = "up", as = "div", duration = 0.8 }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  const v = variants[variant] ?? variants.up;

  return (
    <Tag
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -60px 0px" }}
      variants={v}
      transition={{ duration, delay: delay / 1000, ease: EASE }}
    >
      {children}
    </Tag>
  );
}
