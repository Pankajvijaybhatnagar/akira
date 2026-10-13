"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

// Slowly drifting colour blobs + a cursor-reactive glow, for hero backgrounds.
export default function Aurora({ dark = false }) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });
  const x1 = useTransform(sx, [0, 1], [-40, 40]);
  const y1 = useTransform(sy, [0, 1], [-30, 30]);
  const x2 = useTransform(sx, [0, 1], [40, -40]);
  const y2 = useTransform(sy, [0, 1], [30, -30]);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);

  const a = dark ? "bg-brand-400/30" : "bg-brand-200/70";
  const b = dark ? "bg-[#5b6cc0]/30" : "bg-brand-100";
  const c = dark ? "bg-[#f07e1a]/10" : "bg-[#f07e1a]/[0.07]";

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div style={{ x: x1, y: y1 }} className="absolute -left-40 -top-32 h-[560px] w-[560px]">
        <motion.div
          className={`h-full w-full rounded-full ${a} blur-[120px]`}
          animate={reduce ? undefined : { scale: [1, 1.15, 1], x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div style={{ x: x2, y: y2 }} className="absolute -right-32 top-24 h-[520px] w-[520px]">
        <motion.div
          className={`h-full w-full rounded-full ${b} blur-[120px]`}
          animate={reduce ? undefined : { scale: [1.1, 0.95, 1.1], x: [0, -50, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div
        className={`absolute bottom-[-180px] left-1/3 h-[380px] w-[380px] rounded-full ${c} blur-[110px]`}
        animate={reduce ? undefined : { x: [0, 80, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
