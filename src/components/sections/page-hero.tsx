"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
}

export function PageHero({ eyebrow, title, titleAccent, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0F3D2E] px-4 pb-20 pt-32 sm:px-6 lg:px-12 xl:px-20">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-botanical opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 70% 30%, rgba(0,200,83,0.1) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="font-heading text-[10px] tracking-[0.35em] text-[#D4AF37]">
            {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] text-[#F0EAD6]">
            {title}
            <br />
            <em className="italic text-[#D4AF37]">{titleAccent}</em>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/50">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
