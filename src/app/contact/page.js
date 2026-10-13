import { Mail, Phone, MapPin, Building2, Handshake } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import SpotlightCard from "@/components/motion/SpotlightCard";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Akira Consulting about Japan market entry, business consulting or bilingual IT staffing.",
};

const details = [
  site.email && { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  site.phone && { icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  ...site.addresses.map((address, i) => ({ icon: MapPin, label: `Office ${i + 1}`, value: address })),
].filter(Boolean);

const topics = [
  { icon: Building2, title: "Business Consulting", text: "Japan market entry, branch setup, localization and growth.", href: "/business-consulting" },
  { icon: Handshake, title: "HR Consulting", text: "Bilingual IT staffing and graduate hiring for Japan.", href: "/hr-consulting" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's grow your business together."
        highlight={["together"]}
        text="Tell us about your plans for Japan or the talent you are looking for — our team will get back to you."
      />

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-3xl text-ink-900">How can we help?</h2>
            </Reveal>
            {topics.map((t, i) => (
              <Reveal key={t.title} delay={i * 80} variant="left">
                <SpotlightCard tilt={false} className="rounded-3xl">
                <Link href={t.href} className="group flex gap-5 rounded-3xl border border-brand-100 bg-white/80 p-6 transition-all hover:border-brand-600 hover:shadow-xl hover:shadow-brand-900/5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <t.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-lg font-bold text-ink-900">{t.title}</p>
                    <p className="mt-1 text-ink-700/70">{t.text}</p>
                  </div>
                </Link>
                </SpotlightCard>
              </Reveal>
            ))}
            {details.map((d, i) => (
              <Reveal key={d.label} delay={(i + 2) * 80} variant="left">
                <div className="flex gap-5 rounded-3xl bg-brand-50 p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-ink-700/50">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="mt-1 block text-lg font-semibold text-ink-900 hover:text-brand-600">{d.value}</a>
                    ) : (
                      <p className="mt-1 text-lg font-semibold text-ink-900">{d.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} variant="right" className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
