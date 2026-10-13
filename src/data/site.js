import { Building2, Handshake, Target, Eye } from "lucide-react";

// Content taken from akiraconsulting.jp.
export const site = {
  name: "Akira Consulting",
  email: "akira_sales@akiraconsulting.jp",
  phone: "",
  addresses: [
    "Kawasaki-shi Kawasaki-ku Motoki 2-4-6-704, Kanagawa, JAPAN",
    "Kawasaki-shi Kawasaki-ku Miyamoto-cho 6-12 Office 201, Kanagawa, JAPAN",
  ],
  social: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/business-consulting",
    label: "Business Consulting",
    children: [
      { href: "/business-consulting#analysis", label: "Analysis Phase" },
      { href: "/business-consulting#launch", label: "Launch Phase" },
      { href: "/business-consulting#ramp-up", label: "Ramp-Up Phase" },
    ],
  },
  {
    href: "/hr-consulting",
    label: "HR Consulting",
    children: [
      { href: "/hr-consulting#hire-it-talent", label: "Hire IT Talent" },
      { href: "/hr-consulting#bilingual-staffing", label: "Bilingual Staffing" },
    ],
  },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export const intro =
  "We intelligently connect job opportunities with qualified candidates, collaborate in providing skill development training to meet the job demand, and contribute towards the development of the international economic society. We are a team of professionals with engineering and management backgrounds having vast experience of 15+ years in the IT industry working across geographies including Japan, USA, UK, Germany, and India.";

export const goalVision = [
  {
    icon: Target,
    title: "Our Goal",
    text: "Akira Consulting is founded with the simple goal of bridging the skill gap that Japan is facing currently. Also to equip Japanese professionals to work in a Global setup and vice versa.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "Our vision is to make our customers efficient by giving them flexible support which helps them to achieve their professional goals and commitments quickly and efficiently.",
  },
];

export const geographies = ["Japan", "India", "USA", "UK", "Germany"];

export const highlights = [
  { value: 15, suffix: "+", label: "Years of IT industry experience" },
  { value: 2021, suffix: "", label: "Founded in Japan", plain: true },
  { value: 5, suffix: "", label: "Countries of experience" },
  { value: 3, suffix: "", label: "Phase business journey" },
];

export const focusAreas = [
  {
    key: "business",
    icon: Building2,
    title: "Business Consulting",
    href: "/business-consulting",
    points: [
      "Support global firms for their Japan market strategy & entry.",
      "Help in setting up a branch with all support systems.",
      "Localization for Japan market including translation support.",
      "Follow strategic ways leading to the success of business keeping in mind business objectives.",
    ],
    revenueModel: "Flexible Revenue Model",
  },
  {
    key: "hr",
    icon: Handshake,
    title: "HR Consulting",
    href: "/hr-consulting",
    points: [
      "Staffing support for IT organizations in Japan with a special focus on bilinguals.",
      "Work with the right partners in India to support the right talent.",
      "Special focus on Japanese & Indian graduate hiring / skilling / reskilling to make them work in the Japanese environment.",
    ],
    revenueModel: "Flexible Revenue Model: % Fee / One-time Fee",
  },
];

export const langTech = {
  title: "Leading Language & Technology (LangTech) Services and Solutions Provider in Japan",
  heading: "Bilingual Staffing",
  eyebrow: "India to Japan",
  text: "We support global firms for their Japan market entry as well as work with local Japanese firms for implementing technology solutions with local language support. We specialize in analyzing business requirements, streamlining processes and developing customized solutions.",
};
