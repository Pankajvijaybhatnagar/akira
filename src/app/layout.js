import { Fraunces, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/motion/ScrollProgress";
import BackToTop from "@/components/motion/BackToTop";
import Preloader, { INTRO_SCRIPT } from "@/components/motion/Preloader";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Akira Consulting — Business & HR Consulting in Japan",
    template: "%s | Akira Consulting",
  },
  description:
    "Akira Consulting bridges India and Japan: Japan market entry and business consulting, IT talent hiring and bilingual staffing with 15+ years of IT industry experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_SCRIPT }} />
      </head>
      <body id="top" className={`${fraunces.variable} ${manrope.variable} antialiased`}>
        <Preloader />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
