"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const auctions = [
  { name: "Burmese Amethyst", desc: "Natural unheated 12.4ct GIA", bid: "$28,400", bidders: "17 bidders", timer: { h: 2, m: 14, s: 38 }, live: true, color: "#CE93D8" },
  { name: "Ceylon Yellow Sapphire", desc: "Vivid canary 8.92ct Sri Lanka", bid: "$41,200", bidders: "23 bidders", timer: { h: 4, m: 52, s: 11 }, live: true, color: "#FFF9C4" },
  { name: "Padparadscha Sapphire", desc: "Lotus pink-orange 3.81ct Ceylon", bid: "$85,000", bidders: "Reserve not met", timer: null, live: false, color: "#FFCCBC" },
];

function Timer({ initial }: { initial: { h: number; m: number; s: number } }) {
  const [t, setT] = useState(initial);
  useEffect(() => {
    const iv = setInterval(() => {
      setT((p) => {
        let { h, m, s } = p;
        if (s > 0) s--; else if (m > 0) { m--; s = 59; } else if (h > 0) { h--; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(iv);
  }, []);
  return <span>{String(t.h).padStart(2,"0")}:{String(t.m).padStart(2,"0")}:{String(t.s).padStart(2,"0")}</span>;
}

export function MarketplaceLandscape() {
  return (
    <section className="h-screen w-screen overflow-hidden bg-gradient-to-br from-[#0C3425] via-[#0F3D2E] to-[#0A2A1E]">
      <div className="pointer-events-none absolute inset-0 bg-botanical opacity-20" aria-hidden />

      <div className="relative z-10 flex h-full">
        {/* Left info */}
        <div className="flex w-[32%] flex-col justify-center px-10 lg:px-14">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="font-heading text-[10px] tracking-[0.35em] text-[#D4AF37]">VERDURA MARKETPLACE</span>
            <h1 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.08] text-[#F0EAD6]">
              Live Auctions
              <br />
              <em className="italic text-[#D4AF37]">&amp; Rare Finds</em>
            </h1>
            <p className="mt-5 max-w-sm text-[0.82rem] font-light leading-[1.8] text-white/45">
              Bid on the world&apos;s most exceptional gemstones. Crypto accepted. Full GIA certification on every lot.
            </p>
            <div className="mt-8 flex gap-0 border-b border-white/10">
              {["LIVE", "BUY NOW", "PRIVATE", "SELL"].map((t, i) => (
                <button key={t} className={`font-heading text-[8px] tracking-[0.15em] px-4 py-2.5 border-b-2 -mb-px transition ${i === 0 ? "text-[#D4AF37] border-[#D4AF37]" : "text-white/25 border-transparent hover:text-white/40"}`}>
                  {t}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right auction cards */}
        <div className="flex-1 flex items-center gap-5 px-6 pt-20 pb-6 overflow-hidden">
          {auctions.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.7 }}
              className="flex-1 flex flex-col h-[75%] border border-white/8 bg-white/[0.03] overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/25"
            >
              <div className="relative flex-1 flex items-center justify-center" style={{ background: `radial-gradient(ellipse, ${a.color}10, #0A0A0A 70%)` }}>
                {a.live && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#8B1A2E] px-2 py-1 font-heading text-[7px] tracking-[0.15em] text-white">
                    <span className="h-1 w-1 rounded-full bg-white animate-pulse" /> LIVE
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-[#0B0B0B]/80 px-2 py-1 font-heading text-[9px] text-[#D4AF37]">
                  {a.timer ? <Timer initial={a.timer} /> : <span className="text-[#C0C0C0]">3 Days</span>}
                </div>
                <svg viewBox="0 0 80 80" width="60" height="60">
                  <ellipse cx="40" cy="40" rx="30" ry="32" fill={a.color} opacity="0.5" />
                  <ellipse cx="40" cy="40" rx="30" ry="32" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
                  <ellipse cx="35" cy="30" rx="8" ry="5" fill="rgba(255,255,255,0.2)" transform="rotate(-15 35 30)" />
                </svg>
              </div>
              <div className="p-4 border-t border-white/5">
                <div className="font-display text-base text-[#F0EAD6]">{a.name}</div>
                <div className="mt-1 text-[10px] text-white/30">{a.desc}</div>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <div className="font-heading text-[8px] tracking-[0.1em] text-white/25">{a.live ? "CURRENT BID" : "STARTING"}</div>
                    <div className="font-display text-xl text-[#00C853]">{a.bid}</div>
                    <div className="text-[9px] text-white/25">{a.bidders}</div>
                  </div>
                  <button className="font-heading text-[8px] tracking-[0.15em] bg-[#0F3D2E] border border-[#D4AF37]/30 px-3 py-2 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0B0B0B]">
                    BID
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
