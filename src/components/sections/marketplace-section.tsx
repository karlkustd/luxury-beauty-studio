"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const tabs = ["Live Auctions", "Buy Now", "Private Sales", "Sell Your Gems"];

const auctions = [
  {
    name: "Burmese Amethyst",
    desc: "Natural unheated -- 12.4ct -- GIA certified -- Exceptional deep violet color",
    bid: "$28,400",
    bidders: "17 bidders -- 42 bids",
    timer: { h: 2, m: 14, s: 38 },
    live: true,
    bgColor: "#1A0A20",
    gemColor: "#CE93D8",
    gemHighlight: "#7B1FA2",
  },
  {
    name: "Ceylon Yellow Sapphire",
    desc: "Natural -- 8.92ct -- Vivid canary yellow -- Sri Lankan origin -- GIA",
    bid: "$41,200",
    bidders: "23 bidders -- 61 bids",
    timer: { h: 4, m: 52, s: 11 },
    live: true,
    bgColor: "#1A1500",
    gemColor: "#FFF9C4",
    gemHighlight: "#F9A825",
  },
  {
    name: "Padparadscha Sapphire",
    desc: "Lotus pink-orange -- 3.81ct -- Ceylon -- Rarest sapphire variety -- GIA",
    bid: "$85,000",
    bidders: "Reserve not met yet",
    timer: null,
    live: false,
    bgColor: "#0A1020",
    gemColor: "#FFCCBC",
    gemHighlight: "#FF7043",
  },
];

function AuctionTimer({ initial }: { initial: { h: number; m: number; s: number } }) {
  const [time, setTime] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else if (m > 0) { m--; s = 59; }
        else if (h > 0) { h--; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-heading text-[10px] tracking-[0.1em]">
      {String(time.h).padStart(2, "0")}:{String(time.m).padStart(2, "0")}:
      {String(time.s).padStart(2, "0")}
    </span>
  );
}

export function MarketplaceSection() {
  const [activeTab, setActiveTab] = useState("Live Auctions");

  return (
    <section className="bg-[#F9F7F1] px-4 py-20 dark:bg-[#0B0B0B] sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-heading text-[10px] tracking-[0.3em] text-[#D4AF37]">
            VERDURA MARKETPLACE
          </span>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] text-neutral-900 dark:text-[#F0EAD6]">
            Live Auctions &amp;
            <br />
            Rare Finds
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="mt-8 flex gap-0 border-b border-neutral-200 dark:border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-heading text-[10px] tracking-[0.2em] px-6 py-3 border-b-2 -mb-[1px] transition-all duration-300 ${
                activeTab === tab
                  ? "text-[#0F3D2E] dark:text-[#D4AF37] border-[#0F3D2E] dark:border-[#D4AF37]"
                  : "text-neutral-400 dark:text-white/30 border-transparent hover:text-neutral-600 dark:hover:text-white/50"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Auction cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {auctions.map((auction, i) => (
            <motion.div
              key={auction.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="overflow-hidden border border-neutral-200 bg-white transition-transform duration-400 hover:-translate-y-2 dark:border-white/8 dark:bg-[#111]"
            >
              <div
                className="relative flex h-48 items-center justify-center overflow-hidden"
                style={{ background: auction.bgColor }}
              >
                {auction.live && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#8B1A2E] px-2.5 py-1 font-heading text-[8px] tracking-[0.15em] text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    LIVE
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-[#0B0B0B]/80 px-2.5 py-1 text-[#D4AF37]">
                  {auction.timer ? (
                    <AuctionTimer initial={auction.timer} />
                  ) : (
                    <span className="font-heading text-[10px] tracking-[0.1em] text-[#C0C0C0]">
                      Ends: 3 Days
                    </span>
                  )}
                </div>
                {/* Gem illustration */}
                <svg viewBox="0 0 180 160" width="140" height="120">
                  <defs>
                    <radialGradient id={`ag-${i}`} cx="35%" cy="30%" r="65%">
                      <stop offset="0%" stopColor={auction.gemColor} />
                      <stop offset="50%" stopColor={auction.gemHighlight} />
                      <stop offset="100%" stopColor="#0A0A0A" />
                    </radialGradient>
                  </defs>
                  <ellipse cx="90" cy="80" rx="60" ry="65" fill={`url(#ag-${i})`} />
                  <ellipse
                    cx="90"
                    cy="80"
                    rx="60"
                    ry="65"
                    fill="none"
                    stroke="rgba(212,175,55,0.4)"
                    strokeWidth="1.5"
                  />
                  <ellipse cx="90" cy="80" rx="40" ry="45" fill={`${auction.gemColor}30`} />
                  <ellipse
                    cx="75"
                    cy="55"
                    rx="14"
                    ry="9"
                    fill="rgba(255,255,255,0.25)"
                    transform="rotate(-20 75 55)"
                  />
                </svg>
              </div>
              <div className="p-5">
                <div className="font-display text-lg text-neutral-900 dark:text-[#F0EAD6]">
                  {auction.name}
                </div>
                <div className="mt-1 text-[11px] leading-[1.5] text-neutral-500 dark:text-white/40">
                  {auction.desc}
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <div className="font-heading text-[9px] tracking-[0.1em] text-neutral-400 dark:text-white/30">
                      {auction.live ? "CURRENT BID" : "STARTING BID"}
                    </div>
                    <div className="font-display text-2xl text-[#0F3D2E] dark:text-[#00C853]">
                      {auction.bid}
                    </div>
                    <div className="mt-0.5 text-[10px] text-neutral-400 dark:text-white/30">
                      {auction.bidders}
                    </div>
                  </div>
                  <button className="font-heading text-[9px] tracking-[0.15em] bg-[#0F3D2E] px-4 py-2.5 text-[#D4AF37] transition hover:bg-[#0A2A1E]">
                    PLACE BID
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
