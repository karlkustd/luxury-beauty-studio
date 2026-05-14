"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sizes = {
  hero: "text-[clamp(2.75rem,12vw,7.5rem)] leading-[0.92] tracking-[-0.03em]",
  lg: "text-4xl md:text-5xl tracking-[-0.03em]",
  md: "text-2xl md:text-3xl tracking-[-0.02em]",
  sm: "text-xl tracking-[-0.02em]",
} as const;

type Size = keyof typeof sizes;

export function Wordmark({
  size = "md",
  href = "/",
  asLink = true,
  animated = false,
}: {
  size?: Size;
  href?: string;
  asLink?: boolean;
  animated?: boolean;
}) {
  const inner = (
    <span className="relative inline-block">
      <span
        className={`font-display font-normal ${sizes[size]} bg-gradient-to-br from-[#fff9ef] via-[#e8d5b5] to-[#c9a962] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(201,169,98,0.35)]`}
      >
        Maison
      </span>
      <span
        className={`font-display font-normal italic ${sizes[size]} bg-gradient-to-br from-white/90 via-[#f0e6d8] to-[#a8906a] bg-clip-text text-transparent`}
      >
        {" "}
        Noir
      </span>
      {animated && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -inset-x-6 -bottom-2 h-px bg-gradient-to-r from-transparent via-[#c9a962]/80 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </span>
  );

  if (asLink) {
    return (
      <Link
        href={href}
        className="group inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a962]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      >
        {inner}
      </Link>
    );
  }

  return <span className="inline-block">{inner}</span>;
}
