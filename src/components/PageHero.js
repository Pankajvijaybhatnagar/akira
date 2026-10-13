import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import AnimatedText from "./motion/AnimatedText";
import Aurora from "./motion/Aurora";
import Magnetic from "./motion/Magnetic";

export default function PageHero({ eyebrow, title, highlight = [], text, cta, aside }) {
  return (
    <section className="relative overflow-hidden border-b border-brand-100 bg-gradient-to-b from-brand-50 to-white pb-20 pt-36 sm:pb-24 sm:pt-44">
      <div className="grid-pattern-light absolute inset-0" />
      <Aurora />
      <div className={`relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 ${aside ? "lg:grid-cols-2" : ""}`}>
        <div className="max-w-3xl">
          <Reveal variant="blur" duration={0.6}>
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-brand-500">
              <span className="h-px w-8 bg-current" />
              {eyebrow}
            </p>
          </Reveal>
          <AnimatedText
            text={title}
            highlight={highlight}
            delay={0.15}
            className={`font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink-900 sm:text-6xl ${aside ? "lg:text-[3.25rem] xl:text-[3.6rem]" : "lg:text-7xl"}`}
          />
          {text && (
            <Reveal delay={450}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700/75">{text}</p>
            </Reveal>
          )}
          {cta && (
            <Reveal delay={600}>
              <Magnetic className="mt-9">
                <Link
                  href={cta.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-700"
                >
                  {cta.label}
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </Reveal>
          )}
        </div>
        {aside && (
          <Reveal delay={300} variant="scale" duration={1}>
            {aside}
          </Reveal>
        )}
      </div>
    </section>
  );
}
