import Image from "next/image";

const palette = ["from-brand-500 to-brand-700", "from-ink-700 to-ink-950", "from-brand-400 to-brand-600"];

export default function Avatar({ name, photo, size = 56, className = "" }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const tone = palette[name.length % palette.length];

  if (photo) {
    return (
      <Image
        src={photo}
        alt={name}
        width={size}
        height={size}
        className={`shrink-0 rounded-full object-cover ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full bg-gradient-to-br ${tone} font-display text-white ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
