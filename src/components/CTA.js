import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import AnimatedText from "./motion/AnimatedText";
import Aurora from "./motion/Aurora";
import Magnetic from "./motion/Magnetic";

export default function CTA() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <Reveal variant="scale" duration={1} className="on-dark relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink-800 px-6 py-16 text-center sm:px-16 sm:py-24">
        <div className="grid-pattern absolute inset-0" />
        <Aurora dark />
        <div className="relative">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brand-300">Let&apos;s talk</p>
          <AnimatedText
            as="h2"
            onView
            text="Ready to grow your business in Japan?"
            highlight={["Japan"]}
            className="mx-auto max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight text-white sm:text-6xl"
          />
          <Reveal delay={300}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
              Whether you are entering the Japan market or looking for bilingual IT talent, we are here to help.
            </p>
          </Reveal>
          <Reveal delay={450} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-brand-600 transition-colors hover:bg-brand-100"
              >
                Contact us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/hr-consulting"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
              >
                Hire IT talent
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
