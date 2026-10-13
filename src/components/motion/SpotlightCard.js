"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useReducedMotion } from "motion/react";

/**
 * Card with a glow that follows the cursor and a gentle 3D tilt.
 * `glow` sets the spotlight colour; `tilt` toggles the 3D effect.
 */
export default function SpotlightCard({ children, className = "", glow = "rgba(62, 79, 158, 0.16)", tilt = true }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rx = useSpring(useTransform(py, [0, 1], [5, -5]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(px, [0, 1], [-5, 5]), { stiffness: 200, damping: 20 });
  const background = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, ${glow}, transparent 70%)`;

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(-400);
    my.set(-400);
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={tilt && !reduce ? { rotateX: rx, rotateY: ry, transformPerspective: 1000 } : undefined}
      className={`relative ${className}`}
    >
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]" style={{ background }} />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
