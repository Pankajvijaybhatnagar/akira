import Image from "next/image";
import Link from "next/link";

// Official Akira Consulting logo — used exactly as supplied (public/brand/akira-logo.png).
// "card" places it on a white card so it stays visible on dark backgrounds.
export default function Logo({ variant = "default" }) {
  const img = (
    <Image
      src="/brand/akira-logo.png"
      alt="Akira Consulting"
      width={632}
      height={548}
      priority={variant === "default"}
      className={variant === "card" ? "h-24 w-auto" : "h-14 w-auto sm:h-16"}
    />
  );

  if (variant === "card") {
    return (
      <Link
        href="/"
        aria-label="Akira Consulting home"
        className="inline-block rounded-2xl bg-white px-5 py-4 shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
      >
        {img}
      </Link>
    );
  }

  return (
    <Link href="/" aria-label="Akira Consulting home" className="block shrink-0">
      {img}
    </Link>
  );
}
