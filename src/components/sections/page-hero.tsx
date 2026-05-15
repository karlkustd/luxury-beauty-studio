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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0C3425] via-[#0F3D2E] to-[#0A2A1E] px-4 pb-24 pt-36 sm:px-6 lg:px-12 xl:px-20">
      {/* Multi-layer background */}
      <div className="pointer-events-none absolute inset-0 bg-botanical opacity-40" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-botanical opacity-20" style={{ backgroundSize: "180px", transform: "rotate(15deg) scale(1.2)" }} aria-hidden />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(0,200,83,0.08) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(212,175,55,0.05) 0%, transparent 40%)" }} aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="font-heading text-[10px] tracking-[0.4em] text-[#D4AF37]">
            {eyebrow}
          </span>
          <h1 className="mt-6 font-display text-[clamp(2.8rem,5.5vw,5rem)] font-light leading-[1.05] text-[#F0EAD6]">
            {title}
            <br />
            <em className="italic bg-gradient-to-r from-[#F5DFA0] via-[#D4AF37] to-[#C9A227] bg-clip-text text-transparent">{titleAccent}</em>
          </h1>
          <p className="mt-7 max-w-lg text-[0.84rem] font-light leading-[1.85] text-white/45">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
