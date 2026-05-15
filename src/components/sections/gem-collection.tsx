"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const filters = ["All", "Emeralds", "Rubies", "Diamonds", "Sapphires", "Rare"];

const gems = [
  {
    name: "Colombian Emerald",
    origin: "MUZO MINE -- COLOMBIA",
    cert: "GIA #1234567 -- 4.82ct -- VVS",
    price: "$48,200",
    rarity: 92,
    badge: "GIA Certified",
    badgeColor: "bg-[#D4AF37] text-[#0B0B0B]",
    category: "Emeralds",
    bgColor: "#1A3A28",
    gemColor: "#2E7D32",
    highlight: "#66BB6A",
  },
  {
    name: "Pigeon Blood Ruby",
    origin: "MOGOK VALLEY -- MYANMAR",
    cert: "GIA #7654321 -- 6.14ct -- No Heat",
    price: "$186,000",
    rarity: 98,
    badge: "Ultra Rare",
    badgeColor: "bg-[#8B1A2E] text-white",
    category: "Rubies",
    bgColor: "#2A0A12",
    gemColor: "#C62828",
    highlight: "#FF6B6B",
  },
  {
    name: "D-IF Round Brilliant",
    origin: "BOTSWANA -- CONFLICT FREE",
    cert: "GIA #9012345 -- 3.01ct -- D/IF",
    price: "$95,500",
    rarity: 95,
    badge: "GIA Certified",
    badgeColor: "bg-[#D4AF37] text-[#0B0B0B]",
    category: "Diamonds",
    bgColor: "#0D1B2A",
    gemColor: "#4A7CB5",
    highlight: "#BBE3FF",
  },
  {
    name: "Royal Blue Sapphire",
    origin: "KASHMIR -- INDIA",
    cert: "GIA #3456789 -- 5.60ct -- Kashmir",
    price: "$124,000",
    rarity: 88,
    badge: "GIA Certified",
    badgeColor: "bg-[#D4AF37] text-[#0B0B0B]",
    category: "Sapphires",
    bgColor: "#0A0F2E",
    gemColor: "#1565C0",
    highlight: "#90CAF9",
  },
];

function GemSVG({ gemColor, highlight }: { gemColor: string; highlight: string }) {
  return (
    <svg viewBox="0 0 200 240" width="140" height="170">
      <defs>
        <radialGradient id={`gg-${gemColor}`} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="50%" stopColor={gemColor} />
          <stop offset="100%" stopColor="#0A0A0A" />
        </radialGradient>
      </defs>
      <polygon
        points="100,30 145,50 160,90 160,150 145,190 100,210 55,190 40,150 40,90 55,50"
        fill={`url(#gg-${gemColor})`}
      />
      <polygon
        points="100,30 145,50 160,90 160,150 145,190 100,210 55,190 40,150 40,90 55,50"
        fill="none"
        stroke="rgba(212,175,55,0.5)"
        strokeWidth="1.5"
      />
      <line x1="100" y1="30" x2="100" y2="210" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
      <line x1="40" y1="120" x2="160" y2="120" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
      <polygon points="100,35 130,52 145,80 120,65 90,55" fill="rgba(255,255,255,0.18)" />
      <polygon points="100,80 120,95 120,145 100,160 80,145 80,95" fill={`${highlight}40`} />
      <circle cx="80" cy="70" r="2" fill="#D4AF37" opacity="0.8" />
      <circle cx="130" cy="170" r="1.5" fill="#D4AF37" opacity="0.6" />
    </svg>
  );
}

export function GemCollection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? gems : gems.filter((g) => g.category === active);

  return (
    <section className="bg-[#F9F7F1] px-4 py-20 dark:bg-[#0B0B0B] sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-heading text-[10px] tracking-[0.3em] text-[#D4AF37]">
              CURATED SELECTION
            </span>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] text-neutral-900 dark:text-[#F0EAD6]">
              Featured Gemstone
              <br />
              Collection
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-heading text-[9px] tracking-[0.15em] px-4 py-2 border transition-all duration-300 ${
                  active === f
                    ? "bg-[#0F3D2E] text-[#D4AF37] border-[#0F3D2E]"
                    : "bg-transparent text-neutral-600 dark:text-white/50 border-neutral-300 dark:border-white/15 hover:bg-[#0F3D2E] hover:text-[#D4AF37] hover:border-[#0F3D2E]"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((gem, i) => (
            <motion.div
              key={gem.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-pointer overflow-hidden border border-neutral-200 bg-[#F2EDE3] transition-transform duration-500 hover:-translate-y-2 dark:border-white/8 dark:bg-[#111]"
            >
              <div
                className="relative flex aspect-[3/4] items-center justify-center overflow-hidden"
                style={{ background: gem.bgColor }}
              >
                <span className={`absolute top-3 left-3 font-heading text-[8px] tracking-[0.15em] px-2.5 py-1 ${gem.badgeColor}`}>
                  {gem.badge}
                </span>
                <GemSVG gemColor={gem.gemColor} highlight={gem.highlight} />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-[#0F3D2E]/85 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <button className="w-40 border border-[#D4AF37] bg-[#D4AF37] py-2 font-heading text-[9px] tracking-[0.15em] text-[#0B0B0B] transition hover:bg-[#E8C547]">
                    ADD TO CART
                  </button>
                  <button className="w-40 border border-[#D4AF37]/60 py-2 font-heading text-[9px] tracking-[0.15em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0B0B0B]">
                    QUICK VIEW
                  </button>
                  <button className="w-40 border border-[#D4AF37]/60 py-2 font-heading text-[9px] tracking-[0.15em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0B0B0B]">
                    &#9825; WISHLIST
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="font-display text-lg text-neutral-900 dark:text-[#F0EAD6]">
                  {gem.name}
                </div>
                <div className="mt-1 text-[10px] tracking-[0.1em] text-neutral-500 dark:text-white/40">
                  {gem.origin}
                </div>
                <div className="mt-2 h-[2px] overflow-hidden rounded-full bg-neutral-200 dark:bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${gem.rarity}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="h-full bg-[#D4AF37]"
                  />
                </div>
                <div className="mt-2 flex items-center gap-2 text-[10px] text-neutral-500 dark:text-white/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0F3D2E]" />
                  {gem.cert}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-display text-xl text-[#0F3D2E] dark:text-[#00C853]">
                    {gem.price}
                  </span>
                  <span className="font-heading text-[9px] tracking-[0.1em] text-[#D4AF37]">
                    {gem.rarity} RARITY
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
