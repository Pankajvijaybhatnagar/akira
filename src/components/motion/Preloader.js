"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

/*
 * Logo intro, shown once per browser session.
 * An inline script in <head> (see INTRO_SCRIPT) sets <html data-intro="play"> before first paint,
 * so the overlay is visible immediately with no flash of the page underneath.
 * Lifecycle: play -> leaving (event "akira:intro-done", page animations start) -> done.
 */
export const INTRO_SCRIPT = `try{if(!sessionStorage.getItem("akira-intro")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.dataset.intro="play";sessionStorage.setItem("akira-intro","1")}}catch(e){}`;

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.intro !== "play") {
      setShow(false);
      return;
    }
    const t = setTimeout(() => {
      root.dataset.intro = "leaving";
      window.dispatchEvent(new Event("akira:intro-done"));
      setShow(false);
    }, 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={() => (document.documentElement.dataset.intro = "done")}>
      {show && (
        <motion.div
          key="preloader"
          className="akira-intro fixed inset-0 z-[100] place-items-center bg-white"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src="/brand/akira-logo.png" alt="Akira Consulting" width={632} height={548} priority className="h-32 w-auto" />
            </motion.div>
            <div className="mt-8 h-1 w-40 overflow-hidden rounded-full bg-brand-100">
              <motion.div
                className="h-full rounded-full bg-brand-600"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
