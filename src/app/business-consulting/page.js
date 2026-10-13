import { Search, Rocket, ChartLine, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";
import PhaseNav from "@/components/PhaseNav";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import AnimatedText from "@/components/motion/AnimatedText";
import Aurora from "@/components/motion/Aurora";
import SpotlightCard from "@/components/motion/SpotlightCard";
import JourneyCard from "@/components/motion/JourneyCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { businessIntro, phases, singlePointOfContact } from "@/data/business";

export const metadata = {
  title: "Business Consulting",
  description:
    "Global business consulting for the Japan market: analysis, launch and ramp-up support — from market research and incubation to joint ventures and M&A.",
};

const phaseIcons = { analysis: Search, launch: Rocket, "ramp-up": ChartLine };

export default function BusinessConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Consulting"
        title="We help businesses innovate and grow."
        highlight={["innovate"]}
        text={businessIntro}
        cta={{ href: "#analysis", label: "Know more" }}
        aside={
          <JourneyCard
            phases={phases.map((p) => ({ id: p.id, title: p.title, tagline: p.tagline, count: p.items.length }))}
          />
        }
      />

      <PhaseNav items={phases.map((p) => ({ id: p.id, step: p.step, label: p.title }))} />

      {phases.map((phase, pi) => {
        const Icon = phaseIcons[phase.id];
        return (
          <section
            key={phase.id}
            id={phase.id}
            className={`relative scroll-mt-40 overflow-hidden px-5 py-24 sm:px-8 ${pi % 2 === 1 ? "bg-brand-50" : "bg-white"}`}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[16rem] leading-none text-brand-600/[0.04] sm:text-[22rem]"
            >
              {phase.step}
            </span>
            <div className="relative mx-auto max-w-7xl">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-5">
                  <Reveal variant="scale">
                    <div className="flex items-center gap-4">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
                        Phase {phase.step}
                      </span>
                    </div>
                  </Reveal>
                  <AnimatedText
                    as="h2"
                    onView
                    text={phase.title}
                    highlight={[phase.title.split(" ")[0]]}
                    className="mt-6 font-display text-4xl font-medium tracking-tight text-ink-900 sm:text-5xl"
                  />
                  <Reveal delay={200}>
                    <p className="mt-3 text-lg font-medium text-brand-500">{phase.tagline}</p>
                  </Reveal>
                </div>
                <Reveal delay={150} variant="right" className="lg:col-span-7">
                  <blockquote className="relative rounded-3xl border-l-4 border-brand-600 bg-white p-7 text-ink-700/80 shadow-sm">
                    <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-100" />
                    <p className="relative leading-relaxed">{phase.intro}</p>
                  </blockquote>
                </Reveal>
              </div>

              <Stagger gap={0.08} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {phase.items.map((item, i) => (
                  <StaggerItem key={item.title}>
                    <SpotlightCard className="group h-full rounded-3xl border border-brand-100 bg-white transition-[border-color,box-shadow] duration-500 hover:border-brand-300 hover:shadow-2xl hover:shadow-brand-900/10">
                      <article className="relative h-full p-7">
                        <span className="absolute right-6 top-6 font-display text-sm text-ink-700/25 transition-colors group-hover:text-brand-500">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                          <item.icon className="h-5 w-5" />
                        </span>
                        <h3 className="mt-6 text-xl font-bold text-ink-900">{item.title}</h3>
                        <p className="mt-3 leading-relaxed text-ink-700/70">{item.text}</p>
                        <span className="absolute inset-x-7 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-brand-600 transition-transform duration-500 group-hover:scale-x-100" />
                      </article>
                    </SpotlightCard>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>
        );
      })}

      {/* Single point of contact */}
      <section className="px-5 pt-24 sm:px-8">
        <Reveal variant="scale" duration={1} className="on-dark relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand-600">
          <Aurora dark />
          <div className="relative grid items-center gap-10 p-8 sm:p-14 lg:grid-cols-12">
            <Reveal delay={200} variant="scale" className="lg:col-span-2">
              <span className="grid h-24 w-24 place-items-center rounded-3xl bg-white text-brand-600 shadow-2xl">
                <singlePointOfContact.icon className="h-10 w-10" />
              </span>
            </Reveal>
            <div className="lg:col-span-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-200">Why Akira Consulting</p>
              <AnimatedText
                as="h2"
                onView
                text={singlePointOfContact.title}
                className="mt-3 font-display text-3xl text-white sm:text-4xl"
              />
              <Reveal delay={300}>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/75">{singlePointOfContact.text}</p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </section>

      <CTA />
    </>
  );
}
