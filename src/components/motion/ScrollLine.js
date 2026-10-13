"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";

/**
 * A timeline line that draws itself as the user scrolls through its parent.
 * Place inside a `relative` container. `orientation`: "horizontal" | "vertical".
 */
export default function ScrollLine({ className = "", orientation = "horizontal" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const horizontal = orientation === "horizontal";

  return (
    <div ref={ref} aria-hidden="true" className={`overflow-hidden rounded-full bg-brand-100 ${className}`}>
      <motion.div
        className={`h-full w-full rounded-full bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400 ${
          horizontal ? "origin-left" : "origin-top"
        }`}
        style={horizontal ? { scaleX: progress } : { scaleY: progress }}
      />
    </div>
  );
}
