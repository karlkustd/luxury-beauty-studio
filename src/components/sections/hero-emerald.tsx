"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useSpring } from "framer-motion";

function SparkleParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
      transition={{ duration: 2, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width={size} height={size} viewBox="0 0 20 20">
        <line x1="10" y1="0" x2="10" y2="20" stroke="#D4AF37" strokeWidth="1.5" />
        <line x1="0" y1="10" x2="20" y2="10" stroke="#D4AF37" strokeWidth="1.5" />
        <line x1="3" y1="3" x2="17" y2="17" stroke="#D4AF37" strokeWidth="0.8" />
        <line x1="17" y1="3" x2="3" y2="17" stroke="#D4AF37" strokeWidth="0.8" />
      </svg>
    </motion.div>
  );
}

function FloatingGem({ delay, x, y, color, size }: { delay: number; x: string; y: string; color: string; size: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      animate={{ y: [0, -15, 0, 10, 0], rotate: [0, 5, -5, 3, 0], opacity: [0.4, 0.7, 0.5, 0.8, 0.4] }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width={size} height={size * 1.2} viewBox="0 0 30 36">
        <polygon points="15,0 30,12 24,36 6,36 0,12" fill={color} opacity="0.7" />
        <polygon points="15,0 30,12 15,18 0,12" fill="white" opacity="0.15" />
      </svg>
    </motion.div>
  );
}

export function HeroEmerald() {
  const mx = useSpring(0, { stiffness: 20, damping: 15 });
  const my = useSpring(0, { stiffness: 20, damping: 15 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 16);
      my.set((e.clientY / window.innerHeight - 0.5) * 10);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section className="h-screen w-screen overflow-hidden">
      <div className="grid h-full lg:grid-cols-[45%_55%]">
        {/* ── LEFT PANEL ── */}
        <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0C3425] via-[#0F3D2E] to-[#0A2A1E] px-6 sm:px-10 md:px-14">
          <div className="pointer-events-none absolute inset-0 bg-botanical opacity-50" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-botanical opacity-30" style={{ backgroundSize: "180px", transform: "rotate(15deg) scale(1.2)" }} aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F3D2E]/60 via-transparent to-[#0A2A1E]/80" aria-hidden />
          <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)]" aria-hidden />

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-lg"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-5 font-heading text-[10px] font-medium uppercase tracking-[0.4em] text-[#D4AF37]"
            >
              Verdura Jewellery &middot; Est. MMXII
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.01em] text-[#F0EAD6]"
            >
              Where Nature
              <br />
              Meets{" "}
              <em className="italic bg-gradient-to-r from-[#F5DFA0] via-[#D4AF37] to-[#C9A227] bg-clip-text text-transparent">
                Elegance
              </em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-5 max-w-[340px] text-[0.82rem] font-light leading-[1.8] text-white/50"
            >
              Rare gemstones. Certified luxury. Timeless craftsmanship -- each
              stone a story written by the earth over millions of years.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/gemstones"
                className="group relative overflow-hidden border border-[#D4AF37] bg-[#D4AF37] px-7 py-3 font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-[#0B0B0B] transition-all duration-500 hover:bg-transparent hover:text-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <span className="relative z-10">Shop Jewelry</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
              <Link
                href="/gemstones"
                className="border border-[#D4AF37]/30 px-7 py-3 font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-[#F0EAD6]/80 transition-all duration-500 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Explore Gemstones
              </Link>
              <Link
                href="/contact"
                className="border border-white/15 px-7 py-3 font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 transition-all duration-500 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
              >
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats pinned to bottom */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-10 md:left-14 z-10 flex gap-10"
          >
            {[
              { num: "2,400+", label: "Certified Gems" },
              { num: "180+", label: "Countries Served" },
              { num: "GIA", label: "Certified Partner" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl font-light text-[#D4AF37]">{s.num}</div>
                <div className="mt-1 font-heading text-[8px] tracking-[0.22em] text-white/35 uppercase">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="relative hidden overflow-hidden lg:flex lg:items-center lg:justify-center"
          style={{ background: "linear-gradient(135deg, #E8E5D8 0%, #DDE4C8 30%, #D5DCBE 60%, #CED8B8 100%)" }}
        >
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 35%, rgba(0,200,83,0.12) 0%, transparent 55%)" }} aria-hidden />
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 55%, rgba(212,175,55,0.08) 0%, transparent 45%)" }} aria-hidden />

          <motion.div
            className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(0,200,83,0.25) 0%, rgba(0,200,83,0.08) 40%, transparent 70%)" }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />

          <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] animate-spin-slow opacity-15">
            <svg viewBox="0 0 520 520" className="w-full h-full">
              <circle cx="260" cy="260" r="245" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="4 12" />
              <circle cx="260" cy="260" r="210" fill="none" stroke="#00C853" strokeWidth="0.3" strokeDasharray="6 20" opacity="0.4" />
            </svg>
          </div>

          <motion.div style={{ x: mx, y: my }} className="relative z-10">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ scale: [1, 1.03, 1], y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 440 540" width="320" height="390" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="heg" cx="38%" cy="28%" r="68%">
                      <stop offset="0%" stopColor="#7CCD7A" />
                      <stop offset="20%" stopColor="#4CAF50" />
                      <stop offset="45%" stopColor="#2E7D32" />
                      <stop offset="70%" stopColor="#1B5E20" />
                      <stop offset="100%" stopColor="#0A3A12" />
                    </radialGradient>
                    <radialGradient id="hig" cx="42%" cy="35%" r="45%">
                      <stop offset="0%" stopColor="rgba(124,205,122,0.5)" />
                      <stop offset="100%" stopColor="rgba(27,94,32,0)" />
                    </radialGradient>
                    <linearGradient id="hge" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F5DFA0" />
                      <stop offset="50%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#8B6914" />
                    </linearGradient>
                    <filter id="eglow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="12" result="b" />
                      <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>

                  <ellipse cx="220" cy="510" rx="100" ry="12" fill="rgba(10,58,18,0.12)" />
                  <polygon points="220,40 305,82 345,172 345,368 305,458 220,500 135,458 95,368 95,172 135,82" fill="url(#heg)" filter="url(#eglow)" />
                  <polygon points="220,40 305,82 345,172 345,368 305,458 220,500 135,458 95,368 95,172 135,82" fill="none" stroke="url(#hge)" strokeWidth="2.5" />
                  <polygon points="220,55 295,92 330,172 330,368 295,448 220,485 145,448 110,368 110,172 145,92" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="0.8" />

                  <line x1="220" y1="40" x2="220" y2="500" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
                  <line x1="95" y1="270" x2="345" y2="270" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
                  <line x1="135" y1="82" x2="305" y2="458" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
                  <line x1="305" y1="82" x2="135" y2="458" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />

                  <polygon points="220,120 275,155 285,270 275,385 220,420 165,385 155,270 165,155" fill="rgba(76,175,80,0.2)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                  <polygon points="220,40 305,82 275,155 220,120 165,155 135,82" fill="rgba(124,205,122,0.15)" />
                  <polygon points="220,500 305,458 275,385 220,420 165,385 135,458" fill="rgba(10,58,18,0.25)" />
                  <ellipse cx="220" cy="250" rx="90" ry="120" fill="url(#hig)" />
                  <polygon points="220,45 285,78 310,130 260,115 195,80" fill="rgba(255,255,255,0.22)" />
                  <polygon points="220,48 250,68 265,105 235,95 210,72" fill="rgba(255,255,255,0.18)" />

                  <circle cx="160" cy="110" r="3.5" fill="#D4AF37" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;0.15;0.9" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="290" cy="400" r="3" fill="#D4AF37" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.1;0.7" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="108" cy="280" r="2.5" fill="#F5DFA0" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="320" cy="200" r="2.5" fill="white" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;0.05;0.5" dur="2.2s" repeatCount="indefinite" />
                  </circle>

                  <line x1="220" y1="40" x2="380" y2="-10" stroke="rgba(255,80,80,0.12)" strokeWidth="1.5" />
                  <line x1="220" y1="40" x2="400" y2="15" stroke="rgba(80,160,255,0.1)" strokeWidth="1.5" />
                  <line x1="220" y1="40" x2="50" y2="-5" stroke="rgba(255,215,0,0.1)" strokeWidth="1.5" />

                  {[220, 305, 345, 345, 305, 220, 135, 95, 95, 135].map((cx, i) => {
                    const cy = [40, 82, 172, 368, 458, 500, 458, 368, 172, 82][i];
                    return <circle key={i} cx={cx} cy={cy} r={i < 2 || i > 7 ? 4 : 3.5} fill={i < 5 ? "#D4AF37" : "#8B6914"} />;
                  })}
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>

          {mounted && (
            <>
              <SparkleParticle delay={0} x="15%" y="20%" size={14} />
              <SparkleParticle delay={1.5} x="80%" y="15%" size={12} />
              <SparkleParticle delay={0.8} x="85%" y="70%" size={11} />
              <SparkleParticle delay={2.2} x="10%" y="75%" size={12} />
              <FloatingGem delay={0} x="8%" y="30%" color="#2E7D32" size={16} />
              <FloatingGem delay={2} x="88%" y="60%" color="#C62828" size={12} />
              <FloatingGem delay={1} x="82%" y="25%" color="#1565C0" size={14} />
            </>
          )}

          {/* Glassmorphism info cards */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
            className="absolute bottom-16 left-8 z-20">
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-lg border border-white/10 bg-[#0F3D2E]/60 backdrop-blur-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00C853] animate-pulse" />
                <span className="font-heading text-[8px] tracking-[0.18em] text-[#D4AF37]">GIA CERTIFIED</span>
              </div>
              <div className="mt-1 text-[10px] text-white/55">4.82ct VVS Colombian</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}
            className="absolute top-28 right-10 z-20">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="rounded-lg border border-[#00C853]/20 bg-[#0A2A1E]/70 backdrop-blur-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              <div className="font-heading text-[8px] tracking-[0.18em] text-[#00C853]">BLOCKCHAIN VERIFIED</div>
              <div className="mt-1 font-mono text-[10px] text-white/45">0xA4F2...9C3B</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
            className="absolute bottom-16 right-14 z-20">
            <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="rounded-lg border border-white/8 bg-[#0A2A1E]/50 backdrop-blur-xl px-3 py-2">
              <div className="font-heading text-[8px] tracking-[0.15em] text-[#D4AF37]/80">RARITY</div>
              <div className="font-display text-lg text-white/70">92<span className="text-[10px] text-white/30">/100</span></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
