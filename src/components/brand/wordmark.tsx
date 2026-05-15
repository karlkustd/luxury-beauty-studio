"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sizes = {
  hero: "text-[clamp(2.75rem,12vw,7.5rem)] leading-[0.92] tracking-[-0.01em]",
  lg: "text-4xl md:text-5xl tracking-[-0.01em]",
  md: "text-2xl md:text-3xl tracking-[0.08em]",
  sm: "text-xl tracking-[0.08em]",
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
        className={`font-heading font-semibold ${sizes[size]} bg-gradient-to-br from-[#F5DFA0] via-[#D4AF37] to-[#8B6914] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,175,55,0.35)]`}
      >
        VERDURA
      </span>
      {animated && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -inset-x-6 -bottom-2 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent"
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
        className="group inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      >
        {inner}
      </Link>
    );
  }

  return <span className="inline-block">{inner}</span>;
}
