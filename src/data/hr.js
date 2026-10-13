import {
  GraduationCap,
  Compass,
  ShieldCheck,
  Building2,
  Target,
  Clock,
  Search,
  UserCheck,
  CalendarCheck,
  BadgeCheck,
} from "lucide-react";

// Content from akiraconsulting.jp/hr-consulting
export const hrIntro = [
  "Akira consulting is a recruitment firm specialising in the search and recruitment of Bilingual talent across Japan. Bilingual staffing means rapid access to specific talent with language skills that suit the organisation's job role. Being the premier staffing agency in Japan, we adhere to the search for deserving candidates across Asia who know Japanese and English and are proficient in their skills.",
  "We work for the betterment of both candidates and our clients with a holistic approach.",
];

export const candidates = {
  intro:
    "With deep knowledge of the Japanese marketplace, we work in coordination to understand your industry and unique business strategies to find perfect candidates who match your unique staffing requirements. In short, we will help you find the right career in Japan.",
  steps: [
    { icon: GraduationCap, title: "Review education qualification and experience", text: "We first focus on understanding your career experience to get you the best job." },
    { icon: Compass, title: "Understanding expectations", text: "After knowing your experience, we focus on understanding your future goals so that we can ensure the right fit for your bright future." },
    { icon: ShieldCheck, title: "Vetting", text: "We screen your bilingualism, culture fit, and experience to pair you with the suitable employment in Japan." },
    { icon: Building2, title: "Introduction to employers", text: "Now, we will begin with your representation to the hiring company. We present you with roles that match your experience and future objectives." },
  ],
};

export const clients = {
  steps: [
    { icon: Target, title: "Understanding your organization's goals", text: "We strive to understand the company's mission, values, and long-term goals for tailored recruitment procedures." },
    { icon: Clock, title: "Discuss roles and culture of the company", text: "We try to understand your roles well to search for curated talent which fits well with your respective positions in the company." },
    { icon: Search, title: "Commence the search", text: "With our strategic recruitment approach, we leverage our pre-screened database of bilingual talent, job posting, and hiring advisors to deliver the quickest and most excellent results." },
    { icon: UserCheck, title: "Present candidate", text: "After devoting our time to understanding the candidate and satisfying that individual profile for a particular role, we deliver a matched candidate to the organization." },
    { icon: CalendarCheck, title: "Interview", text: "We streamline the scheduling process for the interview, ensuring hiring the candidate is a seamless process." },
    { icon: BadgeCheck, title: "Make the offer", text: "Desiring benefits of both candidate and employer, we make sure both are happy with the final offer. Therefore we take all necessary steps to meet both requirements and expectations well." },
  ],
};

export const itRecruitment = {
  paragraphs: [
    "Akira consulting are your essential partner in hiring IT bilingual staff for your company. We search for those individuals who are fluent in Japanese and English and are highly proficient in technology.",
    "We build a solid presence to search for the right person for the job across Asia. Our services end up with a perfect match and long-term fit.",
  ],
  roles: [
    "CRM Developers",
    "SharePoint Developers",
    "Java Developers",
    ".NET Front-end, Back-end & Full-stack Developers",
    "Data Analysts",
    "Financial System Specialists",
    "Network Administrators",
    "Cloud & Video Game Developers",
    "Data Scientists",
  ],
  closing:
    "Being top IT recruiters in Japan, Akira consulting provide customized solutions that fit well with the needs of both IT professionals and recruiters.",
};
