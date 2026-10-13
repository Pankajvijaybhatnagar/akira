import Image from "next/image";
import { Link2, Users, Globe2, MapPin, Building2, Handshake, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Avatar from "@/components/Avatar";
import CTA from "@/components/CTA";
import Aurora from "@/components/motion/Aurora";
import SpotlightCard from "@/components/motion/SpotlightCard";
import DrawLine from "@/components/motion/DrawLine";
import ProfileCard from "@/components/motion/ProfileCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { intro, goalVision, geographies } from "@/data/site";
import { companyProfile, leadership, orgChart } from "@/data/about";

export const metadata = {
  title: "About Us",
  description:
    "Akira Consulting 合同会社 — founded in November 2021 in Kawasaki, Japan by Ajay Narula to bridge Japan and the world through business and HR consulting.",
};

const pillars = [
  { icon: Link2, title: "Connect", text: "We intelligently connect job opportunities with qualified candidates." },
  { icon: Users, title: "Collaborate", text: "We collaborate in providing skill development training to meet the job demand." },
  { icon: Globe2, title: "Contribute", text: "We contribute towards the development of the international economic society." },
];

const unitIcons = { "Business Consulting": Building2, "HR Consulting": Handshake };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A bridge between Japan and the world."
        highlight={["Japan"]}
        text="Founded in November 2021 in Kawasaki, Japan, Akira Consulting equips Japanese professionals to work in a global setup — and global professionals to thrive in Japan."
        aside={<ProfileCard rows={companyProfile.slice(0, 5).map(({ label, value }) => ({ label, value }))} />}
      />

      {/* who we are */}
      <section className="px-5 py-28 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <SectionHeading align="left" eyebrow="Who we are" title="Welcome to Akira Consulting" highlight={["Akira"]} />
          <div>
            <Reveal className="text-lg leading-relaxed text-ink-700/80">
              <p>{intro}</p>
            </Reveal>
            <Stagger gap={0.08} className="mt-8 flex flex-wrap gap-2">
              {geographies.map((g) => (
                <StaggerItem
                  as="span"
                  key={g}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600"
                >
                  <MapPin className="h-3.5 w-3.5" /> {g}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        <Stagger gap={0.14} className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <StaggerItem key={p.title}>
              <SpotlightCard glow="rgba(255,255,255,0.16)" className="group h-full overflow-hidden rounded-[2rem] bg-brand-600 text-white">
                <div className="relative p-10">
                  <span className="absolute right-8 top-8 font-display text-5xl text-white/10">0{i + 1}</span>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-8 font-display text-3xl">{p.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-white/75">{p.text}</p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* goal & vision */}
      <section className="bg-brand-50 px-5 py-28 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {goalVision.map((g, i) => (
            <Reveal key={g.title} delay={i * 120} variant={i === 0 ? "left" : "right"}>
              <SpotlightCard className="group h-full rounded-[2rem] bg-white shadow-xl shadow-brand-900/5">
                <div className="p-10">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white transition-transform duration-500 group-hover:scale-110">
                    <g.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-8 font-display text-3xl text-ink-900">{g.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink-700/75">{g.text}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* leadership */}
      <section className="on-dark relative overflow-hidden bg-ink-800 px-5 py-28 sm:px-8">
        <div className="grid-pattern absolute inset-0" />
        <Aurora dark />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            dark
            eyebrow="Leadership"
            title="Experienced team"
            highlight={["team"]}
            text="Decades of experience across Japan, India and global technology businesses."
          />
          <Stagger gap={0.15} className="mt-16 grid gap-6 lg:grid-cols-3">
            {leadership.map((m) => (
              <StaggerItem key={m.name}>
                <SpotlightCard className="group h-full rounded-[2rem] bg-white">
                  <article className="p-8">
                    <div className="flex items-center gap-5">
                      <div className="relative rounded-full p-1 ring-2 ring-brand-100 transition-all duration-500 group-hover:ring-brand-600">
                        <Avatar name={m.name} photo={m.photo} size={76} />
                        <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl text-ink-900">{m.name}</h3>
                        <p className="mt-1 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                          {m.role}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-7 space-y-3 border-t border-brand-100 pt-6">
                      {m.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm leading-relaxed text-ink-700/80">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </article>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* org chart */}
      <section className="px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our organisation" title="The people behind Akira" highlight={["Akira"]} />

          <Reveal variant="scale" className="mt-16 flex justify-center">
            <div className="rounded-3xl border border-brand-100 bg-white px-8 py-5 shadow-xl shadow-brand-900/10">
              <Image src="/brand/akira-logo.png" alt="Akira Consulting" width={632} height={548} className="h-20 w-auto" />
            </div>
          </Reveal>
          <DrawLine vertical delay={0.3} className="mx-auto h-10 w-px bg-brand-300" />
          <DrawLine delay={0.6} className="mx-auto hidden h-px max-w-3xl bg-brand-300 lg:block" />

          <div className="mt-0 grid gap-8 lg:mt-10 lg:grid-cols-5">
            {orgChart.map((unit, ui) => {
              const Icon = unitIcons[unit.unit];
              return (
                <Reveal key={unit.unit} delay={600 + ui * 150} className={ui === 0 ? "lg:col-span-2" : "lg:col-span-3"}>
                  <div className="h-full rounded-[2rem] border border-brand-100 bg-brand-50/60 p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-2xl text-ink-900">{unit.unit}</h3>
                      <span className="ml-auto rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-600">
                        {unit.members.length}
                      </span>
                    </div>
                    <Stagger as="ul" gap={0.06} className={`mt-6 grid gap-3 ${ui === 1 ? "sm:grid-cols-2" : ""}`}>
                      {unit.members.map((m) => (
                        <StaggerItem as="li" key={m.name}>
                          <div className="group flex items-center gap-3 rounded-2xl bg-white p-3 pr-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10">
                            <span className="transition-transform duration-300 group-hover:scale-110">
                              <Avatar name={m.name} photo={m.photo} size={44} />
                            </span>
                            <div className="min-w-0">
                              <p className="truncate font-semibold text-ink-900">{m.name}</p>
                              <p className="truncate text-xs font-medium uppercase tracking-wide text-ink-700/55">{m.role}</p>
                            </div>
                          </div>
                        </StaggerItem>
                      ))}
                    </Stagger>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* full company details */}
      <section className="bg-brand-50 px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Company details" title="Company information" highlight={["information"]} />
          <Reveal className="mt-14 overflow-hidden rounded-[2rem] border border-brand-100 bg-white shadow-xl shadow-brand-900/5">
            <Stagger as="dl" gap={0.05} className="divide-y divide-brand-100">
              {companyProfile.map((row) => (
                <StaggerItem key={row.label} className="grid gap-1 px-6 py-5 transition-colors hover:bg-brand-50/60 sm:grid-cols-3 sm:gap-6 sm:px-10">
                  <dt className="text-sm font-semibold uppercase tracking-wider text-brand-500">{row.label}</dt>
                  <dd className="whitespace-pre-line font-medium text-ink-900 sm:col-span-2">
                    {row.href ? (
                      <a href={row.href} className="text-brand-600 underline-offset-4 hover:underline">{row.value}</a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
