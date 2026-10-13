import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Privacy Policy",
  description: "How Akira Consulting collects, uses and protects your personal information.",
};

// NOTE: placeholder text — replace with the company's approved privacy policy.
const sections = [
  {
    title: "Information we collect",
    text: "We collect information you provide to us directly, such as your name, email address, phone number, company and any details you share through our contact or newsletter forms, or when you apply as a candidate.",
  },
  {
    title: "How we use your information",
    text: "We use your information to respond to enquiries, provide our business and HR consulting services, match candidates with suitable opportunities, and send updates you have asked to receive.",
  },
  {
    title: "Sharing your information",
    text: "We do not sell your personal information. Candidate information is shared with prospective employers only as part of the recruitment process and with your knowledge.",
  },
  {
    title: "Data security",
    text: "We take reasonable measures to protect your personal information from loss, misuse and unauthorised access.",
  },
  {
    title: "Your rights",
    text: "You may request access to, correction of, or deletion of your personal information at any time by contacting us.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Information" title="Privacy Policy" highlight={["Policy"]} />
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <Reveal key={s.title}>
              <h2 className="font-display text-2xl text-ink-900">{s.title}</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-700/80">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
