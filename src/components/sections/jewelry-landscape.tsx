"use client";

import { motion } from "framer-motion";

const pieces = [
  { name: "Emerald Solitaire Ring", desc: "4.82ct Colombian emerald set in 18k gold", price: "$62,400", tag: "RINGS" },
  { name: "Ruby Pendant Necklace", desc: "Pigeon blood ruby with diamond halo on platinum", price: "$198,000", tag: "NECKLACES" },
  { name: "Sapphire Tennis Bracelet", desc: "Kashmir sapphires with brilliant-cut diamonds", price: "$145,000", tag: "BRACELETS" },
  { name: "Diamond Stud Earrings", desc: "D-IF round brilliant pair, 2ct each", price: "$78,500", tag: "EARRINGS" },
];

export function JewelryLandscape() {
  return (
    <section className="h-screen w-screen overflow-hidden bg-gradient-to-br from-[#0C3425] via-[#0F3D2E] to-[#0A2A1E]">
      <div className="pointer-events-none absolute inset-0 bg-botanical opacity-20" aria-hidden />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(212,175,55,0.06) 0%, transparent 50%)" }} aria-hidden />

      <div className="relative z-10 flex h-full">
        {/* Left info panel */}
        <div className="flex w-[35%] flex-col justify-center px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-heading text-[10px] tracking-[0.35em] text-[#D4AF37]">LUXURY JEWELRY</span>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,4vw,4rem)] font-light leading-[1.08] text-[#F0EAD6]">
              Heirloom
              <br />
              <em className="italic bg-gradient-to-r from-[#F5DFA0] via-[#D4AF37] to-[#C9A227] bg-clip-text text-transparent">Masterpieces</em>
            </h1>
            <p className="mt-5 max-w-sm text-[0.82rem] font-light leading-[1.8] text-white/45">
              Each piece handcrafted in our Geneva atelier by master artisans with generations of expertise, using only the finest certified gemstones.
            </p>
            <div className="mt-8 flex gap-3">
              <button className="border border-[#D4AF37] bg-[#D4AF37] px-6 py-3 font-heading text-[10px] tracking-[0.2em] text-[#0B0B0B] transition-all hover:bg-transparent hover:text-[#D4AF37]">
                VIEW ALL
              </button>
              <button className="border border-white/15 px-6 py-3 font-heading text-[10px] tracking-[0.2em] text-white/60 transition-all hover:border-[#D4AF37]/50 hover:text-[#D4AF37]">
                CUSTOM DESIGN
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right grid */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 p-6 pt-20">
          {pieces.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="group relative flex flex-col justify-end overflow-hidden border border-white/8 bg-white/[0.03] p-5 transition-all duration-500 hover:border-[#D4AF37]/30 hover:bg-white/[0.06]"
              style={{ background: `radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.04) 0%, rgba(15,61,46,0.3) 70%)` }}
            >
              <span className="absolute top-3 left-3 font-heading text-[7px] tracking-[0.2em] text-[#D4AF37]/50">{p.tag}</span>
              {/* Decorative gem icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] opacity-20 group-hover:opacity-30 transition-opacity">
                <svg viewBox="0 0 60 72" width="60" height="72">
                  <polygon points="30,0 60,24 48,72 12,72 0,24" fill="none" stroke="#D4AF37" strokeWidth="1" />
                  <polygon points="30,5 50,22 30,36 10,22" fill="rgba(212,175,55,0.15)" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="font-display text-xl text-[#F0EAD6]">{p.name}</div>
                <div className="mt-1 text-[11px] leading-relaxed text-white/35">{p.desc}</div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-display text-lg text-[#00C853]">{p.price}</span>
                  <button className="font-heading text-[8px] tracking-[0.15em] text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1.5 transition-all hover:bg-[#D4AF37] hover:text-[#0B0B0B]">
                    VIEW
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
