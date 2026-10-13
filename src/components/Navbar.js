"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import Magnetic from "./motion/Magnetic";
import { navLinks } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [hovered, setHovered] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
    setHovered(null);
  }, [pathname]);

  const solid = scrolled || open;
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,padding,box-shadow] duration-500 ${
        solid ? "border-b border-brand-100 bg-white/90 py-3 shadow-lg shadow-brand-900/5 backdrop-blur-xl" : "py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setHovered(null)}>
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href} className="relative" onMouseEnter={() => setHovered(link.href)}>
                <Link
                  href={link.href}
                  onFocus={() => setHovered(link.href)}
                  className={`relative z-10 flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-brand-600" : "text-ink-700/80 hover:text-brand-600"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${hovered === link.href ? "rotate-180" : ""}`} />
                  )}
                </Link>
                {hovered === link.href && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 rounded-full bg-brand-50"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-600"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <AnimatePresence>
                  {link.children && hovered === link.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="absolute left-0 top-full z-20 pt-3"
                    >
                      <ul className="w-64 overflow-hidden rounded-2xl border border-brand-100 bg-white p-2 shadow-2xl shadow-brand-900/10">
                        {link.children.map((c, i) => (
                          <motion.li
                            key={c.href}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.04 * i, duration: 0.3 }}
                          >
                            <Link
                              href={c.href}
                              className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink-800 transition-colors hover:bg-brand-50 hover:text-brand-600"
                            >
                              {c.label}
                              <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Magnetic>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-700"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Magnetic>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full border border-brand-200 bg-white/70 text-ink-900 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "x" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="max-h-[80vh] overflow-y-auto lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
              className="mx-5 mt-4 space-y-1 border-t border-brand-100 pt-4 sm:mx-8"
            >
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}>
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      className={`flex-1 rounded-xl px-4 py-3 text-base font-medium hover:bg-brand-50 hover:text-brand-600 ${
                        isActive(link.href) ? "text-brand-600" : "text-ink-800"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        onClick={() => setExpanded((v) => (v === link.href ? null : link.href))}
                        className="grid h-11 w-11 place-items-center rounded-xl text-ink-700 hover:bg-brand-50"
                        aria-label={`Show ${link.label} pages`}
                        aria-expanded={expanded === link.href}
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${expanded === link.href ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  <AnimatePresence initial={false}>
                    {link.children && expanded === link.href && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mb-2 ml-4 overflow-hidden border-l-2 border-brand-100 pl-2"
                      >
                        {link.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className="block rounded-lg px-4 py-2.5 text-sm text-ink-700 hover:text-brand-600">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="pb-4 pt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-semibold text-white"
                >
                  Get in touch <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
