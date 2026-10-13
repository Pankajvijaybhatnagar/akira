"use client";

import { motion, useReducedMotion } from "motion/react";

// Akira / Customer / Partner triangle, redrawn from the diagrams on the original site.
// Arrows draw themselves and the nodes pop in when scrolled into view.
export default function RevenueModel({ label, feeLabel }) {
  const reduce = useReducedMotion();
  const nodes = [
    { x: 70, y: 50, name: "Akira", fill: "#1a276c" },
    { x: 250, y: 50, name: "Customer", fill: "#3e4f9e" },
    { x: 160, y: 170, name: "Partner", fill: "#7584cc" },
  ];
  const paths = [
    { d: "M106 44 L212 44" },
    { d: "M214 58 L108 58", dash: "4 4" },
    { d: "M88 82 L138 146" },
    { d: "M232 82 L182 146", both: true },
  ];
  const initial = reduce ? false : "hidden";

  return (
    <figure className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
      <figcaption className="text-xs font-bold uppercase tracking-wider text-brand-600">{label}</figcaption>
      <motion.svg
        viewBox="0 0 320 220"
        className="mx-auto mt-2 w-full max-w-[320px]"
        role="img"
        aria-label={`${label}: Akira, Customer and Partner`}
        initial={initial}
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 10 5 0 10z" fill="#3e4f9e" />
          </marker>
        </defs>
        {paths.map((p, i) => (
          <motion.path
            key={p.d}
            d={p.d}
            stroke="#3e4f9e"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray={p.dash}
            markerEnd="url(#arrow)"
            markerStart={p.both ? "url(#arrow)" : undefined}
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              show: { pathLength: 1, opacity: 1, transition: { duration: 0.7, delay: 0.5 + i * 0.15 } },
            }}
          />
        ))}
        {feeLabel && (
          <motion.g variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0, transition: { delay: 1.2 } } }}>
            <rect x="122" y="62" width="76" height="20" rx="10" fill="#fff" stroke="#cbd1ee" />
            <text x="160" y="76" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1a276c">{feeLabel}</text>
          </motion.g>
        )}
        {nodes.map((n, i) => (
          <motion.g
            key={n.name}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 18, delay: i * 0.15 } },
            }}
          >
            <circle cx={n.x} cy={n.y} r="32" fill={n.fill} />
            <circle cx={n.x} cy={n.y - 6} r="7" fill="#fff" />
            <path d={`M${n.x - 12} ${n.y + 14} a12 10 0 0 1 24 0`} fill="#fff" />
            <text x={n.x} y={n.y + 50} textAnchor="middle" fontSize="12" fontWeight="700" fill="#111a4f">{n.name}</text>
          </motion.g>
        ))}
      </motion.svg>
    </figure>
  );
}
