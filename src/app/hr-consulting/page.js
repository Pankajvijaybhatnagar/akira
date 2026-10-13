import Link from "next/link";
import { ArrowRight, Check, Code2, Languages, UserRound } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import RevenueModel from "@/components/RevenueModel";
import Counter from "@/components/Counter";
import CTA from "@/components/CTA";
import Aurora from "@/components/motion/Aurora";
import Magnetic from "@/components/motion/Magnetic";
import SpotlightCard from "@/components/motion/SpotlightCard";
import ScrollLine from "@/components/motion/ScrollLine";
import CandidateStack from "@/components/motion/CandidateStack";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { hrIntro, candidates, clients, itRecruitment } from "@/data/hr";
import { hiringTerms } from "@/data/about";

export const metadata = {
  title: "HR Consulting",
  description:
    "Bilingual staffing agency in Japan. We connect Japanese–English bilingual IT talent from across Asia with companies in Japan.",
};

const strengths = [
  { icon: Languages, title: "Bilingual talent", text: "Rapid access to specific talent with Japanese and English language skills that suit your job roles." },
  { icon: Code2, title: "Tech proficiency", text: "Candidates across Asia who are proficient in their skills and highly capable in technology." },
  { icon: UserRound, title: "Holistic approach", text: hrIntro[1] },
];

// "Up to 30%" -> { prefix: "Up to ", num: 30, suffix: "%" }
const parse = (v) => {
  const m = v.match(/^(.*?)(\d+)(.*)$/);
  return m ? { prefix: m[1], num: Number(m[2]), suffix: m[3] } : null;
};

export default function HRConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="HR Consulting"
        title="Bilingual staffing agency in Japan."
        highlight={["Japan"]}
        text={hrIntro[0]}
        cta={{ href: "#bilingual-staffing", label: "Know more" }}
        aside={<CandidateStack />}
      />

      {/* strengths */}
      <section id="bilingual-staffing" className="scroll-mt-24 px-5 py-24 sm:px-8">
        <Stagger gap={0.12} className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {strengths.map((c) => (
            <StaggerItem key={c.title}>
              <SpotlightCard className="group h-full rounded-3xl border border-brand-100 bg-white transition-shadow duration-500 hover:shadow-2xl hover:shadow-brand-900/10">
                <div className="p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-ink-900">{c.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-700/70">{c.text}</p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* for candidates */}
      <section className="bg-brand-50 px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="For candidates" title="Find the right career in Japan" highlight={["career"]} text={candidates.intro} />
          <div className="relative mt-16">
            <ScrollLine className="absolute left-[12%] right-[12%] top-[30px] hidden h-1 lg:block" />
            <Stagger gap={0.15} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {candidates.steps.map((s, i) => (
                <StaggerItem key={s.title} className="group relative text-center">
                  <span className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full border-4 border-brand-50 bg-brand-600 text-white shadow-lg shadow-brand-600/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div className="mt-6 rounded-3xl bg-white p-7 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-brand-900/10">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-500">Step {i + 1}</p>
                    <h3 className="mt-2 text-lg font-bold text-ink-900">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700/70">{s.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* for clients */}
      <section className="on-dark relative overflow-hidden bg-ink-800 px-5 py-28 sm:px-8">
        <div className="grid-pattern absolute inset-0" />
        <Aurora dark />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  dark
                  align="left"
                  eyebrow="For clients"
                  title="A recruitment process built around you"
                  highlight={["you"]}
                  text="Six clear steps from understanding your goals to a final offer both sides are happy with."
                />
                <Reveal delay={150} variant="scale" className="mt-10 rounded-3xl bg-white p-2">
                  <RevenueModel label="Flexible Revenue Model: % Fee / One-time Fee" feeLabel="% Fee / One-time" />
                </Reveal>
              </div>
            </div>
            <Stagger gap={0.1} className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
              {clients.steps.map((s, i) => (
                <StaggerItem key={s.title}>
                  <SpotlightCard glow="rgba(255,255,255,0.12)" className="glass group h-full rounded-3xl transition-colors hover:bg-white/10">
                    <div className="p-7">
                      <div className="flex items-center justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-600 transition-transform duration-500 group-hover:scale-110">
                          <s.icon className="h-5 w-5" />
                        </span>
                        <span className="font-display text-4xl text-white/15 transition-colors group-hover:text-white/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-6 text-lg font-bold text-white">{s.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/65">{s.text}</p>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* fees & guarantee */}
      <section className="px-5 pt-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Transparent terms"
            title="Simple fees with a refund guarantee"
            highlight={["refund", "guarantee"]}
            text="Clear, fair terms for every placement — so you can hire with confidence."
          />
          <Stagger gap={0.12} className="mt-14 grid gap-6 md:grid-cols-3">
            {hiringTerms.map((t, i) => {
              const p = parse(t.value);
              return (
                <StaggerItem key={t.label}>
                  <SpotlightCard
                    glow={i === 0 ? "rgba(255,255,255,0.15)" : "rgba(62,79,158,0.12)"}
                    className={`h-full rounded-[2rem] text-center ${
                      i === 0 ? "bg-brand-600 text-white shadow-xl shadow-brand-600/25" : "border border-brand-100 bg-white"
                    }`}
                  >
                    <div className="p-8">
                      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${i === 0 ? "text-brand-200" : "text-brand-500"}`}>{t.label}</p>
                      <p className={`mt-4 font-display text-6xl ${i === 0 ? "text-white" : "text-ink-900"}`}>
                        {p ? (
                          <>
                            {p.prefix && <span className="mr-2 align-middle text-2xl">{p.prefix.trim()}</span>}
                            <Counter value={p.num} suffix={p.suffix} />
                          </>
                        ) : (
                          t.value
                        )}
                      </p>
                      <p className={`mt-3 ${i === 0 ? "text-white/75" : "text-ink-700/70"}`}>{t.note}</p>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* IT recruitment */}
      <section id="hire-it-talent" className="scroll-mt-24 px-5 py-28 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Hire IT talent" title="IT Recruitment Services" highlight={["IT"]} />
            <Reveal delay={100} className="mt-6 space-y-4 text-lg leading-relaxed text-ink-700/80">
              {itRecruitment.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p className="font-display text-xl italic text-ink-900">{itRecruitment.closing}</p>
            </Reveal>
            <Reveal delay={200}>
              <Magnetic className="mt-9">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-700"
                >
                  Hire bilingual IT staff <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </Reveal>
          </div>

          <Reveal delay={150} variant="right">
            <div className="rounded-[2rem] border border-brand-100 bg-brand-50 p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-500">Our candidates include</p>
              <Stagger as="ul" gap={0.06} className="mt-6 grid gap-3 sm:grid-cols-2">
                {itRecruitment.roles.map((r) => (
                  <StaggerItem as="li" key={r}>
                    <div className="group flex h-full items-center gap-3 rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-ink-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600 text-white transition-transform duration-300 group-hover:scale-110">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {r}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
