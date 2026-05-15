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
    bgColor: "#0C2A1C",
    shape: "octagon" as const,
    colors: { main: "#1B5E20", mid: "#2E7D32", light: "#66BB6A", glow: "rgba(0,200,83,0.15)" },
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
    bgColor: "#1A0810",
    shape: "oval" as const,
    colors: { main: "#7B1A2E", mid: "#C62828", light: "#FF6B6B", glow: "rgba(198,40,40,0.15)" },
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
    bgColor: "#080E18",
    shape: "round" as const,
    colors: { main: "#4A7CB5", mid: "#90CAF9", light: "#FFFFFF", glow: "rgba(144,202,249,0.15)" },
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
    bgColor: "#060A1A",
    shape: "cushion" as const,
    colors: { main: "#0D47A1", mid: "#1565C0", light: "#90CAF9", glow: "rgba(21,101,192,0.15)" },
  },
];

function GemSVG({ shape, colors }: { shape: string; colors: typeof gems[0]["colors"] }) {
  const id = `gem-${colors.main.replace("#", "")}`;
  return (
    <svg viewBox="0 0 200 240" width="150" height="180" className="drop-shadow-[0_4px_20px_var(--glow)]" style={{ "--glow": colors.glow } as React.CSSProperties}>
      <defs>
        <radialGradient id={`rg-${id}`} cx="35%" cy="28%" r="65%">
          <stop offset="0%" stopColor={colors.light} />
          <stop offset="35%" stopColor={colors.mid} />
          <stop offset="70%" stopColor={colors.main} />
          <stop offset="100%" stopColor="#0A0A0A" />
        </radialGradient>
        <filter id={`glow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {shape === "octagon" && (
        <>
          <polygon points="100,25 150,48 170,95 170,155 150,200 100,220 50,200 30,155 30,95 50,48" fill={`url(#rg-${id})`} filter={`url(#glow-${id})`} />
          <polygon points="100,25 150,48 170,95 170,155 150,200 100,220 50,200 30,155 30,95 50,48" fill="none" stroke="rgba(212,175,55,0.5)" strokeWidth="1.5" />
          <line x1="100" y1="25" x2="100" y2="220" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" />
          <line x1="30" y1="125" x2="170" y2="125" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" />
          <polygon points="100,30 135,50 150,85 125,68 90,50" fill="rgba(255,255,255,0.2)" />
          <polygon points="100,80 125,95 125,155 100,170 75,155 75,95" fill={`${colors.light}25`} />
        </>
      )}
      {shape === "oval" && (
        <>
          <ellipse cx="100" cy="122" rx="68" ry="88" fill={`url(#rg-${id})`} filter={`url(#glow-${id})`} />
          <ellipse cx="100" cy="122" rx="68" ry="88" fill="none" stroke="rgba(212,175,55,0.45)" strokeWidth="1.5" />
          <ellipse cx="100" cy="122" rx="48" ry="62" fill={`${colors.light}18`} />
          <ellipse cx="82" cy="82" rx="20" ry="13" fill="rgba(255,255,255,0.22)" transform="rotate(-18 82 82)" />
          <line x1="100" y1="34" x2="100" y2="210" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />
          <line x1="32" y1="122" x2="168" y2="122" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />
          {/* Star effect for ruby */}
          <line x1="100" y1="45" x2="100" y2="200" stroke={`${colors.light}30`} strokeWidth="1.2" />
          <line x1="38" y1="85" x2="162" y2="160" stroke={`${colors.light}20`} strokeWidth="1.2" />
          <line x1="162" y1="85" x2="38" y2="160" stroke={`${colors.light}20`} strokeWidth="1.2" />
        </>
      )}
      {shape === "round" && (
        <>
          <circle cx="100" cy="122" r="82" fill={`url(#rg-${id})`} filter={`url(#glow-${id})`} />
          <circle cx="100" cy="122" r="82" fill="none" stroke="rgba(212,175,55,0.45)" strokeWidth="1.5" />
          <polygon points="100,52 140,72 155,122 140,172 100,192 60,172 45,122 60,72" fill={`${colors.light}25`} />
          <line x1="100" y1="52" x2="100" y2="192" stroke="rgba(255,255,255,0.3)" strokeWidth="0.7" />
          <line x1="45" y1="122" x2="155" y2="122" stroke="rgba(255,255,255,0.3)" strokeWidth="0.7" />
          <line x1="60" y1="72" x2="140" y2="172" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" />
          <line x1="140" y1="72" x2="60" y2="172" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" />
          {/* Fire colors */}
          <circle cx="130" cy="72" r="4" fill="#FF6B6B" opacity="0.4" />
          <circle cx="70" cy="172" r="3" fill="#6B8EFF" opacity="0.4" />
          <circle cx="155" cy="130" r="3" fill="#FFD700" opacity="0.5" />
          <circle cx="100" cy="122" r="8" fill="rgba(255,255,255,0.7)" />
          <circle cx="97" cy="118" r="3" fill="white" />
        </>
      )}
      {shape === "cushion" && (
        <>
          <path d="M55,48 Q100,36 145,48 Q168,88 168,122 Q168,156 145,198 Q100,208 55,198 Q32,156 32,122 Q32,88 55,48 Z" fill={`url(#rg-${id})`} filter={`url(#glow-${id})`} />
          <path d="M55,48 Q100,36 145,48 Q168,88 168,122 Q168,156 145,198 Q100,208 55,198 Q32,156 32,122 Q32,88 55,48 Z" fill="none" stroke="rgba(212,175,55,0.45)" strokeWidth="1.5" />
          <line x1="32" y1="122" x2="168" y2="122" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" />
          <line x1="100" y1="36" x2="100" y2="208" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" />
          <path d="M68,68 Q100,56 132,68 Q150,90 150,122 Q150,154 132,178 Q100,186 68,178 Q50,154 50,122 Q50,90 68,68" fill={`${colors.light}15`} />
          <ellipse cx="78" cy="78" rx="18" ry="11" fill="rgba(255,255,255,0.25)" transform="rotate(-15 78 78)" />
        </>
      )}

      {/* Universal sparkle points */}
      <circle cx="75" cy="65" r="2" fill="#D4AF37" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.15;0.8" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="135" cy="175" r="1.5" fill="#D4AF37" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export function GemCollection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? gems : gems.filter((g) => g.category === active);

  return (
    <section className="bg-[#F9F7F1] px-4 py-24 dark:bg-[#0B0B0B] sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-heading text-[10px] tracking-[0.35em] text-[#D4AF37]">
              CURATED SELECTION
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.8rem)] font-light leading-[1.12] text-neutral-900 dark:text-[#F0EAD6]">
              Featured Gemstone
              <br />
              Collection
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-heading text-[9px] tracking-[0.18em] px-5 py-2.5 border transition-all duration-300 ${
                  active === f
                    ? "bg-[#0F3D2E] text-[#D4AF37] border-[#0F3D2E] shadow-[0_2px_12px_rgba(15,61,46,0.3)]"
                    : "bg-transparent text-neutral-500 dark:text-white/40 border-neutral-200 dark:border-white/10 hover:bg-[#0F3D2E] hover:text-[#D4AF37] hover:border-[#0F3D2E]"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((gem, i) => (
            <motion.div
              key={gem.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="group cursor-pointer overflow-hidden border border-neutral-200/80 bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] dark:border-white/6 dark:bg-[#0E0E0E] dark:hover:shadow-[0_16px_48px_rgba(0,200,83,0.08)]"
            >
              <div
                className="relative flex aspect-[3/4] items-center justify-center overflow-hidden transition-all duration-500 group-hover:brightness-110"
                style={{ background: `radial-gradient(ellipse at 50% 40%, ${gem.colors.glow}, ${gem.bgColor} 70%)` }}
              >
                <span className={`absolute top-3 left-3 z-10 font-heading text-[8px] tracking-[0.15em] px-3 py-1.5 ${gem.badgeColor} shadow-sm`}>
                  {gem.badge}
                </span>
                <div className="transition-transform duration-700 group-hover:scale-110">
                  <GemSVG shape={gem.shape} colors={gem.colors} />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#0F3D2E]/80 via-[#0F3D2E]/90 to-[#0A2A1E]/95 opacity-0 transition-opacity duration-400 group-hover:opacity-100 backdrop-blur-[2px]">
                  <button className="w-44 border border-[#D4AF37] bg-[#D4AF37] py-2.5 font-heading text-[9px] tracking-[0.15em] text-[#0B0B0B] transition-all hover:bg-[#E8C547] hover:shadow-[0_0_16px_rgba(212,175,55,0.4)]">
                    ADD TO CART
                  </button>
                  <button className="w-44 border border-[#D4AF37]/50 py-2.5 font-heading text-[9px] tracking-[0.15em] text-[#D4AF37] transition-all hover:bg-[#D4AF37] hover:text-[#0B0B0B]">
                    QUICK VIEW
                  </button>
                  <button className="w-44 border border-white/20 py-2.5 font-heading text-[9px] tracking-[0.15em] text-white/70 transition-all hover:border-[#D4AF37]/50 hover:text-[#D4AF37]">
                    &#9825; WISHLIST
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="font-display text-[1.15rem] text-neutral-900 dark:text-[#F0EAD6]">
                  {gem.name}
                </div>
                <div className="mt-1.5 text-[10px] tracking-[0.12em] text-neutral-400 dark:text-white/35">
                  {gem.origin}
                </div>
                <div className="mt-3 h-[2px] overflow-hidden rounded-full bg-neutral-100 dark:bg-white/8">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${gem.rarity}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547]"
                  />
                </div>
                <div className="mt-2.5 flex items-center gap-2 text-[10px] text-neutral-400 dark:text-white/35">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0F3D2E] dark:bg-[#00C853]" />
                  {gem.cert}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-xl text-[#0F3D2E] dark:text-[#00C853]">
                    {gem.price}
                  </span>
                  <span className="font-heading text-[9px] tracking-[0.12em] text-[#D4AF37]">
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
