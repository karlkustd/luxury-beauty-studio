"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "ORIGIN", text: "Ethical sourcing from certified mines across Colombia, Myanmar, Kashmir, and Botswana." },
  { year: "GRADING", text: "GIA gemologists with spectroscopy, UV analysis, and AI-assisted valuation." },
  { year: "CRAFTING", text: "Master artisans transform each stone in our Geneva atelier." },
  { year: "LEGACY", text: "Blockchain certification and lifetime authenticity guarantee." },
];

const stats = [
  { num: "100%", text: "Conflict-free certified" },
  { num: "48", text: "Mining communities" },
  { num: "0.3%", text: "Carbon offset footprint" },
  { num: "$2M+", text: "Reinvested annually" },
];

export function AboutLandscape() {
  return (
    <section className="h-screen w-screen overflow-hidden bg-gradient-to-br from-[#0C3425] via-[#0F3D2E] to-[#0A2A1E]">
      <div className="pointer-events-none absolute inset-0 bg-botanical opacity-20" aria-hidden />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.04) 0%, transparent 40%)" }} aria-hidden />

      <div className="relative z-10 flex h-full">
        {/* Left - Story */}
        <div className="flex w-[45%] flex-col justify-center px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="font-heading text-[10px] tracking-[0.35em] text-[#D4AF37]">OUR HERITAGE</span>
            <h1 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.08] text-[#F0EAD6]">
              From Mine to
              <br />
              <em className="italic bg-gradient-to-r from-[#F5DFA0] via-[#D4AF37] to-[#C9A227] bg-clip-text text-transparent">Masterpiece</em>
            </h1>
            <p className="mt-5 max-w-sm text-[0.82rem] font-light leading-[1.8] text-white/45">
              Verdura was founded on a belief that the world&apos;s most beautiful gemstones should be sourced responsibly and presented with scientific rigor.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="mt-8 space-y-0">
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.12 }}
                className="flex gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="h-5 w-5 flex items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/5 mt-0.5">
                    <span className="text-[6px] text-[#D4AF37]">&#9670;</span>
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-[#D4AF37]/25 to-transparent mt-1" />}
                </div>
                <div className="pb-5">
                  <div className="font-heading text-[9px] tracking-[0.2em] text-[#D4AF37]">{item.year}</div>
                  <div className="mt-1 text-[11px] leading-[1.6] text-white/40 max-w-xs">{item.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right - Stats + visual */}
        <div className="flex-1 flex flex-col justify-center items-center px-10 relative">
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {stats.map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                className="border border-[#D4AF37]/15 bg-[#D4AF37]/[0.03] p-6 text-center">
                <div className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-light text-[#D4AF37]">{s.num}</div>
                <div className="mt-2 text-[10px] leading-[1.4] text-white/35">{s.text}</div>
              </motion.div>
            ))}
          </div>

          {/* Decorative gem visual */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ delay: 1 }}
            className="absolute top-[15%] right-[10%]">
            <svg viewBox="0 0 100 120" width="80" height="96">
              <polygon points="50,0 95,30 95,90 50,120 5,90 5,30" fill="none" stroke="#D4AF37" strokeWidth="1" />
              <polygon points="50,0 95,30 50,60 5,30" fill="rgba(212,175,55,0.1)" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
