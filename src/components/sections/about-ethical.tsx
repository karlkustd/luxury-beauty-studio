"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { num: "100%", text: "Conflict-free certified across all diamond and gemstone supply chains" },
  { num: "48", text: "Artisan mining communities directly partnered globally" },
  { num: "0.3%", text: "Carbon-offset operational footprint -- the most sustainable in luxury" },
  { num: "$2M+", text: "Reinvested annually into mining community health and education programs" },
];

export function AboutEthical() {
  return (
    <div className="grid min-h-[500px] lg:grid-cols-2">
      {/* Left */}
      <div className="flex flex-col justify-center bg-[#0F3D2E] px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
        <span className="font-heading text-[10px] tracking-[0.3em] text-[#D4AF37]">
          SUSTAINABLY SOURCED
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 font-display text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-[#F0EAD6]"
        >
          Luxury with a
          <br />
          <em className="italic text-[#D4AF37]">Conscience</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-5 max-w-sm text-[0.82rem] font-light leading-[1.9] text-white/55"
        >
          We believe beauty should not come at the cost of people or planet. Every
          gemstone is sourced with full traceability, fair trade practices, and
          minimal environmental impact.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/about"
            className="mt-8 inline-block border border-[#D4AF37]/40 px-7 py-3 font-heading text-[10px] tracking-[0.2em] text-[#F0EAD6] transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            LEARN OUR STORY
          </Link>
        </motion.div>
      </div>
      {/* Right - Stats grid */}
      <div className="grid grid-cols-2 gap-px bg-[#145A41]">
        {stats.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col justify-center bg-[#0F3D2E]/90 p-8 lg:p-10"
          >
            <div className="font-display text-[clamp(2rem,3vw,2.8rem)] font-light text-[#D4AF37]">
              {s.num}
            </div>
            <div className="mt-2 text-[11px] leading-[1.5] text-white/45">
              {s.text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
