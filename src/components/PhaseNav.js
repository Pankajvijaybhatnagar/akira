"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

// Sticky pill navigation that highlights the section currently in view.
export default function PhaseNav({ items }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="sticky top-[81px] z-30 border-b border-brand-100 bg-white/90 backdrop-blur-xl sm:top-[89px]">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 sm:px-8">
        {items.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            className={`relative whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              active === i.id ? "text-white" : "text-ink-700/70 hover:text-brand-600"
            }`}
          >
            {active === i.id && (
              <motion.span
                layoutId="phase-pill"
                className="absolute inset-0 rounded-full bg-brand-600 shadow-lg shadow-brand-600/25"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">
              <span className="mr-1.5 opacity-60">{i.step}</span>
              {i.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
