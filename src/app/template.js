"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const introPlaying = () => typeof document !== "undefined" && document.documentElement.dataset.intro === "play";

// Re-mounts on every navigation, giving each page a soft entrance.
// While the logo intro is playing, the page is re-keyed once it ends so every
// entrance animation plays as the curtain lifts instead of hidden behind it.
export default function Template({ children }) {
  const [ready, setReady] = useState(() => !introPlaying());

  useEffect(() => {
    if (ready) return;
    const go = () => setReady(true);
    if (!introPlaying()) go();
    window.addEventListener("akira:intro-done", go);
    return () => window.removeEventListener("akira:intro-done", go);
  }, [ready]);

  return (
    <motion.div
      key={ready ? "ready" : "waiting"}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
