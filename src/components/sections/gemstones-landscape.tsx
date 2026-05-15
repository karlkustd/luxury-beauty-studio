"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const filters = ["All", "Emeralds", "Rubies", "Diamonds", "Sapphires"];

const gems = [
  { name: "Colombian Emerald", origin: "Muzo Mine, Colombia", price: "$48,200", rarity: 92, cert: "4.82ct VVS", badge: "GIA", cat: "Emeralds", bg: "#0C2A1C", colors: ["#1B5E20", "#4CAF50", "#66BB6A"] },
  { name: "Pigeon Blood Ruby", origin: "Mogok Valley, Myanmar", price: "$186,000", rarity: 98, cert: "6.14ct No Heat", badge: "Rare", cat: "Rubies", bg: "#1A0810", colors: ["#7B1A2E", "#C62828", "#FF6B6B"] },
  { name: "D-IF Round Brilliant", origin: "Botswana, Conflict Free", price: "$95,500", rarity: 95, cert: "3.01ct D/IF", badge: "GIA", cat: "Diamonds", bg: "#080E18", colors: ["#1A237E", "#4A7CB5", "#FFFFFF"] },
  { name: "Royal Blue Sapphire", origin: "Kashmir, India", price: "$124,000", rarity: 88, cert: "5.60ct Kashmir", badge: "GIA", cat: "Sapphires", bg: "#060A1A", colors: ["#0D47A1", "#1565C0", "#90CAF9"] },
];

function MiniGem({ colors }: { colors: string[] }) {
  return (
    <svg viewBox="0 0 80 100" className="w-16 h-20">
      <defs>
        <radialGradient id={`mg-${colors[0].replace("#","")}`} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor={colors[2]} />
          <stop offset="50%" stopColor={colors[1]} />
          <stop offset="100%" stopColor={colors[0]} />
        </radialGradient>
      </defs>
      <polygon points="40,5 65,20 75,45 75,65 65,88 40,98 15,88 5,65 5,45 15,20" fill={`url(#mg-${colors[0].replace("#","")})`} />
      <polygon points="40,5 65,20 75,45 75,65 65,88 40,98 15,88 5,65 5,45 15,20" fill="none" stroke="rgba(212,175,55,0.5)" strokeWidth="1" />
      <polygon points="40,8 55,18 62,35 50,28 32,16" fill="rgba(255,255,255,0.2)" />
      <circle cx="28" cy="30" r="2" fill="#D4AF37" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export function GemstonesLandscape() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? gems : gems.filter((g) => g.cat === active);

  return (
    <section className="h-screen w-screen overflow-hidden bg-gradient-to-br from-[#0C3425] via-[#0F3D2E] to-[#0A2A1E]">
      <div className="pointer-events-none absolute inset-0 bg-botanical opacity-25" aria-hidden />
      <div className="relative z-10 flex h-full flex-col px-6 pt-20 pb-6 sm:px-10 lg:px-16">
        {/* Header row */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="font-heading text-[10px] tracking-[0.35em] text-[#D4AF37]">CURATED SELECTION</span>
            <h1 className="mt-2 font-display text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.1] text-[#F0EAD6]">
              Rare Gemstones, <em className="italic text-[#D4AF37]">Certified</em>
            </h1>
          </div>
          <div className="hidden sm:flex gap-2">
            {filters.map((f) => (
              <button key={f} onClick={() => setActive(f)}
                className={`font-heading text-[9px] tracking-[0.18em] px-4 py-2 border transition-all duration-300 ${
                  active === f ? "bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/40" : "text-white/30 border-white/10 hover:text-[#D4AF37] hover:border-[#D4AF37]/30"
                }`}>{f.toUpperCase()}</button>
            ))}
          </div>
        </div>

        {/* Gem cards - horizontal layout */}
        <div className="flex-1 grid grid-cols-4 gap-5 min-h-0">
          {filtered.map((gem, i) => (
            <motion.div
              key={gem.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative flex flex-col overflow-hidden border border-white/8 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-[#D4AF37]/30 hover:bg-white/[0.06]"
            >
              <div className="flex-1 flex items-center justify-center relative overflow-hidden" style={{ background: `radial-gradient(ellipse at 50% 40%, ${gem.colors[2]}15, ${gem.bg} 70%)` }}>
                <span className={`absolute top-2 left-2 font-heading text-[7px] tracking-[0.15em] px-2 py-1 ${gem.badge === "Rare" ? "bg-[#8B1A2E] text-white" : "bg-[#D4AF37] text-[#0B0B0B]"}`}>
                  {gem.badge}
                </span>
                <div className="transition-transform duration-700 group-hover:scale-115">
                  <MiniGem colors={gem.colors} />
                </div>
              </div>
              <div className="p-4 border-t border-white/5">
                <div className="font-display text-base text-[#F0EAD6]">{gem.name}</div>
                <div className="mt-1 text-[9px] tracking-[0.1em] text-white/30">{gem.origin}</div>
                <div className="mt-2 h-[2px] overflow-hidden rounded-full bg-white/8">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${gem.rarity}%` }} transition={{ delay: 0.5, duration: 1 }}
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547]" />
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-[9px] text-white/30">
                  <span className="h-1 w-1 rounded-full bg-[#00C853]" />{gem.cert}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-display text-lg text-[#00C853]">{gem.price}</span>
                  <span className="font-heading text-[8px] tracking-[0.1em] text-[#D4AF37]">{gem.rarity} RARITY</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
