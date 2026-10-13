import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight, Check, Languages, Globe2, Search, Rocket, ChartLine } from "lucide-react";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import SectionHeading from "@/components/SectionHeading";
import GlobeVisual from "@/components/GlobeVisual";
import RevenueModel from "@/components/RevenueModel";
import CTA from "@/components/CTA";
import AnimatedText from "@/components/motion/AnimatedText";
import Aurora from "@/components/motion/Aurora";
import Magnetic from "@/components/motion/Magnetic";
import SpotlightCard from "@/components/motion/SpotlightCard";
import ScrollLine from "@/components/motion/ScrollLine";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { intro, goalVision, highlights, focusAreas, langTech, geographies } from "@/data/site";
import { phases } from "@/data/business";
import { itRecruitment } from "@/data/hr";

const phaseIcons = { analysis: Search, launch: Rocket, "ramp-up": ChartLine };

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-36 sm:pt-44">
        <div className="grid-pattern-light absolute inset-0" />
        <Aurora />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-2 lg:pb-28">
          <div>
            <Reveal variant="blur" duration={0.6}>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 py-1.5 pl-1.5 pr-4 text-sm text-ink-700 shadow-sm backdrop-blur">
                <span className="relative rounded-full bg-brand-600 px-2.5 py-0.5 text-xs font-bold text-white">
                  <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f07e1a] opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f07e1a]" />
                  </span>
                  India ⇄ Japan
                </span>
                Business &amp; HR consulting
              </p>
            </Reveal>
            <AnimatedText
              text="Grow your business with us."
              highlight={["business"]}
              delay={0.2}
              className="mt-8 font-display text-5xl font-medium leading-[1.04] tracking-tight text-ink-900 sm:text-6xl xl:text-7xl"
            />
            <Reveal delay={550}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-700/75">
                From Japan market entry to bilingual IT talent, Akira Consulting bridges the skill gap that Japan is facing
                and helps global businesses innovate and grow.
              </p>
            </Reveal>
            <Reveal delay={700} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Magnetic>
                <Link
                  href="/about"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-600 px-8 py-4 font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-700 sm:w-auto"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  Know more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-200 bg-white px-8 py-4 font-semibold text-brand-600 transition-colors hover:border-brand-600 sm:w-auto"
                >
                  Contact us
                </Link>
              </Magnetic>
            </Reveal>

            <Stagger gap={0.07} className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-700/70">
              <StaggerItem as="span" className="font-semibold text-ink-900">15+ years across</StaggerItem>
              {geographies.map((g) => (
                <StaggerItem as="span" key={g} className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> {g}
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <GlobeVisual />
        </div>

        {/* IT roles marquee */}
        <div className="relative border-y border-brand-100 bg-white/70 py-7 backdrop-blur">
          <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
              {[...itRecruitment.roles, ...itRecruitment.roles].map((name, i) => (
                <span key={i} className="flex items-center gap-12 whitespace-nowrap font-display text-lg text-ink-700/50 transition-colors hover:text-brand-600">
                  {name}
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WELCOME / GOAL / VISION ---------- */}
      <section className="px-5 py-28 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading align="left" eyebrow="Who we are" title="Welcome to Akira Consulting" highlight={["Akira"]} />
            <Reveal delay={150}>
              <p className="mt-6 text-lg leading-relaxed text-ink-700/80">{intro}</p>
              <Link href="/about" className="group mt-8 inline-flex items-center gap-3 font-semibold text-brand-600">
                Learn more about us
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 text-white transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="space-y-6">
            {goalVision.map((g, i) => (
              <Reveal key={g.title} delay={i * 150} variant={i === 0 ? "right" : "left"}>
                <SpotlightCard
                  glow={i === 0 ? "rgba(255,255,255,0.14)" : "rgba(62,79,158,0.12)"}
                  className={`overflow-hidden rounded-[2rem] ${
                    i === 0 ? "bg-brand-600 text-white lg:mr-12" : "border border-brand-100 bg-white shadow-xl shadow-brand-900/5 lg:ml-12"
                  }`}
                >
                  <div className="relative flex items-start gap-5 p-8 sm:p-10">
                    <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${i === 0 ? "bg-white/15 text-white" : "bg-brand-50 text-brand-600"}`}>
                      <g.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className={`font-display text-2xl ${i === 0 ? "text-white" : "text-ink-900"}`}>{g.title}</h3>
                      <p className={`mt-3 leading-relaxed ${i === 0 ? "text-white/80" : "text-ink-700/75"}`}>{g.text}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HIGHLIGHTS ---------- */}
      <section className="px-5 sm:px-8">
        <Reveal variant="scale" className="on-dark relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink-800">
          <div className="grid-pattern absolute inset-0" />
          <Aurora dark />
          <Stagger className="relative grid grid-cols-2 lg:grid-cols-4">
            {highlights.map((s, i) => (
              <StaggerItem
                key={s.label}
                className={`border-white/10 p-8 text-center sm:p-12 ${i < 3 ? "lg:border-r" : ""} ${i % 2 === 0 ? "max-lg:border-r" : ""} ${i < 2 ? "max-lg:border-b" : ""}`}
              >
                <p className="font-display text-5xl text-gradient-light sm:text-6xl">
                  {s.plain ? s.value : <Counter value={s.value} suffix={s.suffix} />}
                </p>
                <p className="mt-3 text-sm font-medium uppercase tracking-wider text-white/60">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </section>

      {/* ---------- FOCUSED AREAS ---------- */}
      <section className="px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Akira Consulting : Focussed areas"
            title="Two practices. One bridge between India and Japan."
            highlight={["bridge"]}
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {focusAreas.map((f, i) => (
              <Reveal key={f.key} delay={i * 150} variant={i === 0 ? "left" : "right"}>
                <SpotlightCard className="group h-full rounded-[2rem] border border-brand-100 bg-white transition-shadow duration-500 hover:shadow-2xl hover:shadow-brand-900/10">
                  <article className="flex h-full flex-col p-8 sm:p-10">
                    <div className="flex items-center justify-between">
                      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-600 text-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                        <f.icon className="h-7 w-7" />
                      </span>
                      <span className="font-display text-6xl text-brand-100 transition-colors duration-500 group-hover:text-brand-200">0{i + 1}</span>
                    </div>
                    <h3 className="mt-8 font-display text-3xl text-ink-900">{f.title}</h3>
                    <Stagger as="ul" className="mt-6 space-y-3">
                      {f.points.map((p) => (
                        <StaggerItem as="li" key={p} className="flex gap-3 text-ink-700/80">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {p}
                        </StaggerItem>
                      ))}
                    </Stagger>
                    <RevenueModel label={f.revenueModel} feeLabel={f.key === "hr" ? "% Fee / One-time" : null} />
                    <Link href={f.href} className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-600">
                      Explore {f.title} <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </article>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- BUSINESS JOURNEY ---------- */}
      <section className="bg-brand-50 px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Business consulting"
            title="We help businesses innovate and grow"
            highlight={["innovate"]}
            text="A three-phase journey that takes you from first analysis to a fully scaled business in Japan."
          />
          <div className="relative mt-16">
            <ScrollLine className="absolute left-[16%] right-[16%] top-[38px] hidden h-1 lg:block" />
            <Stagger gap={0.18} className="grid gap-6 lg:grid-cols-3">
              {phases.map((p) => {
                const Icon = phaseIcons[p.id];
                return (
                  <StaggerItem key={p.id}>
                    <Link href={`/business-consulting#${p.id}`} className="group relative block text-center">
                      <span className="relative z-10 mx-auto grid h-20 w-20 place-items-center rounded-full border-4 border-brand-50 bg-brand-600 text-white shadow-xl shadow-brand-600/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="h-8 w-8" />
                      </span>
                      <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-brand-900/10">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-500">Phase {p.step}</p>
                        <h3 className="mt-2 font-display text-2xl text-ink-900">{p.title}</h3>
                        <p className="mt-3 text-ink-700/70">{p.tagline}</p>
                        <p className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                          {p.items.length} services
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </p>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ---------- LANGTECH ---------- */}
      <section className="on-dark relative overflow-hidden bg-ink-800 px-5 py-28 sm:px-8">
        <div className="grid-pattern absolute inset-0" />
        <Aurora dark />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal variant="blur">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-300">LangTech</p>
            </Reveal>
            <AnimatedText
              as="h2"
              onView
              text={langTech.title}
              highlight={["LangTech"]}
              className="mt-4 font-display text-3xl font-medium leading-tight text-white sm:text-5xl"
            />
          </div>

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <Reveal variant="left">
              <div className="relative mx-auto max-w-md">
                <SpotlightCard glow="rgba(255,255,255,0.12)" className="glass rounded-[2rem]">
                  <div className="p-8">
                    <div className="flex items-center gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-600">
                        <Languages className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="font-semibold text-white">Language + Technology</p>
                        <p className="text-sm text-white/55">Japanese · English</p>
                      </div>
                    </div>
                    <Stagger as="ul" gap={0.12} className="mt-8 space-y-4">
                      {["Fluent in Japanese & English", "Highly proficient in technology", "Requirement analysis & process streamlining", "Customized solutions with local language support"].map((t) => (
                        <StaggerItem as="li" key={t} className="flex items-center gap-3 text-white/80">
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/15 text-white">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          </span>
                          {t}
                        </StaggerItem>
                      ))}
                    </Stagger>
                  </div>
                </SpotlightCard>
                <div className="absolute -bottom-6 -right-4 flex animate-float items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-2xl sm:-right-10">
                  <Globe2 className="h-6 w-6 animate-[spin_12s_linear_infinite] text-brand-600" />
                  <p className="text-sm font-semibold text-ink-900">India → Japan</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150} variant="right">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-300">{langTech.eyebrow}</p>
              <h3 className="mt-3 font-display text-4xl text-white">{langTech.heading}</h3>
              <p className="mt-6 text-lg leading-relaxed text-white/70">{langTech.text}</p>
              <Magnetic className="mt-9">
                <Link
                  href="/hr-consulting#bilingual-staffing"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-brand-600 transition-colors hover:bg-brand-100"
                >
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
