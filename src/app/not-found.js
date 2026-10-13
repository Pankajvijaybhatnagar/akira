import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-gradient-to-b from-brand-50 to-white px-5 pt-32 text-center">
      <div className="grid-pattern-light absolute inset-0" />
      <div className="relative">
        <p className="font-display text-8xl text-gradient-brand sm:text-9xl">404</p>
        <h1 className="mt-4 font-display text-3xl text-ink-900">This page took a different path.</h1>
        <p className="mt-3 text-ink-700/70">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white hover:bg-brand-700"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    </section>
  );
}
