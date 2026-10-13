"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Aurora from "./motion/Aurora";

const field =
  "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 transition-colors focus:border-white/50 focus:bg-white/10 focus:outline-none";

const interests = [
  "Japan market entry / Business Consulting",
  "Hire IT talent",
  "Bilingual staffing",
  "I am a candidate looking for a career in Japan",
  "Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // TODO: connect to an email service or API route (e.g. /api/contact) before going live.
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="on-dark relative overflow-hidden rounded-[2rem] bg-ink-800 p-8 sm:p-12">
      <div className="grid-pattern absolute inset-0" />
      <Aurora dark />

      <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="relative flex min-h-[480px] flex-col items-center justify-center text-center"
        >
          <motion.span initial={{ scale: 0, rotate: -120 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}>
            <CheckCircle2 className="h-16 w-16 text-white" />
          </motion.span>
          <h2 className="mt-6 font-display text-4xl text-white">Thank you!</h2>
          <p className="mt-3 max-w-sm text-white/65">We&apos;ve received your message and will be in touch soon.</p>
          <button onClick={() => setSent(false)} className="mt-8 text-sm font-semibold text-brand-200 hover:text-white">
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          onSubmit={onSubmit}
          className="relative space-y-5"
        >
          <h2 className="font-display text-3xl text-white sm:text-4xl">Send us a message</h2>
          <p className="text-white/60">Share a few details and we&apos;ll come back to you.</p>

          <div className="grid gap-5 pt-3 sm:grid-cols-2">
            <input required name="name" placeholder="Full name *" className={field} aria-label="Full name" />
            <input required type="email" name="email" placeholder="Email *" className={field} aria-label="Email" />
            <input name="company" placeholder="Company" className={field} aria-label="Company" />
            <input name="phone" type="tel" placeholder="Phone" className={field} aria-label="Phone" />
          </div>
          <select name="interest" defaultValue="" className={`${field} appearance-none`} aria-label="I am interested in">
            <option value="" disabled className="text-ink-900">I am interested in…</option>
            {interests.map((s) => (
              <option key={s} value={s} className="text-ink-900">{s}</option>
            ))}
          </select>
          <textarea required name="message" rows={5} placeholder="Your message *" className={`${field} resize-none`} aria-label="Message" />
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-brand-600 transition-all hover:bg-brand-100 sm:w-auto"
          >
            Send message
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.form>
      )}
      </AnimatePresence>
    </div>
  );
}
