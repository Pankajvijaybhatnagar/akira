"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1];

// Children animate in one after another when the group scrolls into view.
export function Stagger({ children, className = "", gap = 0.09, as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -60px 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className = "", as = "div" }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 36, scale: 0.97 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease: EASE } },
      }}
    >
      {children}
    </Tag>
  );
}
