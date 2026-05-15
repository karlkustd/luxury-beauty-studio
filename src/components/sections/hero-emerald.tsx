"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function HeroEmerald() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const vignette = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  const mx = useSpring(0, { stiffness: 26, damping: 18 });
  const my = useSpring(0, { stiffness: 26, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      mx.set(nx * 8);
      my.set(ny * 6);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] overflow-hidden">
      {/* Split layout */}
      <div className="grid min-h-[100dvh] lg:grid-cols-[45%_55%]">
        {/* LEFT PANEL - Emerald green with botanical watermarks */}
        <div className="relative flex flex-col justify-center overflow-hidden bg-[#0F3D2E] px-6 pb-20 pt-28 sm:px-10 md:px-14 lg:pb-8 lg:pt-24">
          {/* Botanical watermark pattern */}
          <div className="pointer-events-none absolute inset-0 bg-botanical opacity-60" aria-hidden />
          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F3D2E]/40 via-transparent to-[#0F3D2E]/60" aria-hidden />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-lg"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-5 font-heading text-[10px] font-medium uppercase tracking-[0.35em] text-[#D4AF37]/90"
            >
              Verdura Jewellery &middot; Est. MMXII
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="font-display text-[clamp(2.8rem,5vw,4.5rem)] font-light leading-[1.08] text-[#F0EAD6]"
            >
              Where Nature
              <br />
              Meets <em className="italic text-[#D4AF37]">Elegance</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 max-w-sm text-[0.82rem] font-light leading-[1.8] text-white/55"
            >
              Rare gemstones. Certified luxury. Timeless craftsmanship -- each
              stone a story written by the earth itself over millions of years.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.75 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/gemstones"
                className="group relative overflow-hidden border border-[#D4AF37] bg-[#D4AF37] px-7 py-3 font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-[#0B0B0B] transition-all duration-400 hover:bg-transparent hover:text-[#D4AF37]"
              >
                <span className="relative z-10">Shop Jewelry</span>
              </Link>
              <Link
                href="/gemstones"
                className="border border-[#D4AF37]/40 bg-transparent px-7 py-3 font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-[#F0EAD6] transition-all duration-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Explore Gemstones
              </Link>
              <Link
                href="/contact"
                className="border border-[#D4AF37]/40 bg-transparent px-7 py-3 font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-[#F0EAD6] transition-all duration-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="relative z-10 mt-auto flex gap-8 pt-12 lg:gap-12"
          >
            {[
              { num: "2,400+", label: "Certified Gems" },
              { num: "180+", label: "Countries Served" },
              { num: "GIA", label: "Certified Partner" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-light text-[#D4AF37]">
                  {s.num}
                </div>
                <div className="mt-1 font-heading text-[9px] tracking-[0.2em] text-white/45">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT PANEL - Emerald gemstone animation */}
        <div className="relative hidden overflow-hidden bg-[#DDE4C8] lg:flex lg:items-center lg:justify-center">
          {/* Radial glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, rgba(0,200,83,0.15) 0%, transparent 50%), radial-gradient(ellipse at 60% 60%, rgba(212,175,55,0.1) 0%, transparent 50%)",
            }}
            aria-hidden
          />

          {/* Volumetric green glow behind gem */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full animate-pulse-glow"
            style={{ background: "radial-gradient(circle, rgba(0,200,83,0.3) 0%, transparent 70%)" }}
            aria-hidden
          />

          {/* Rotating outer ring */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] animate-spin-slow opacity-20">
            <svg viewBox="0 0 500 500" className="w-full h-full">
              <circle cx="250" cy="250" r="220" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="8 12" />
              <circle cx="250" cy="250" r="190" fill="none" stroke="#D4AF37" strokeWidth="0.3" strokeDasharray="4 16" />
            </svg>
          </div>

          {/* Main emerald gemstone SVG */}
          <motion.div
            style={{ x: mx, y: my }}
            className="relative z-10"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="animate-gem-breathe"
            >
              <svg viewBox="0 0 400 480" width="340" height="408" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="heroEmeraldGrad" cx="35%" cy="30%" r="65%">
                    <stop offset="0%" stopColor="#6DBF67" />
                    <stop offset="35%" stopColor="#2E7D32" />
                    <stop offset="70%" stopColor="#1B5E20" />
                    <stop offset="100%" stopColor="#0A3A12" />
                  </radialGradient>
                  <radialGradient id="innerGlow" cx="40%" cy="35%" r="50%">
                    <stop offset="0%" stopColor="rgba(102,187,106,0.6)" />
                    <stop offset="100%" stopColor="rgba(27,94,32,0)" />
                  </radialGradient>
                  <linearGradient id="goldEdge" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5DFA0" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#8B6914" />
                  </linearGradient>
                  <filter id="emeraldGlow">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="softGlow">
                    <feGaussianBlur stdDeviation="4" />
                  </filter>
                </defs>

                {/* Outer glow ring */}
                <ellipse cx="200" cy="240" rx="180" ry="200" fill="none" stroke="rgba(0,200,83,0.1)" strokeWidth="1" />
                <ellipse cx="200" cy="240" rx="160" ry="180" fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="0.5" />

                {/* Main emerald body - octagonal emerald cut */}
                <polygon
                  points="200,40 280,80 320,160 320,320 280,400 200,440 120,400 80,320 80,160 120,80"
                  fill="url(#heroEmeraldGrad)"
                  filter="url(#emeraldGlow)"
                />
                {/* Gold edge outline */}
                <polygon
                  points="200,40 280,80 320,160 320,320 280,400 200,440 120,400 80,320 80,160 120,80"
                  fill="none"
                  stroke="url(#goldEdge)"
                  strokeWidth="2"
                />

                {/* Facet lines */}
                <line x1="200" y1="40" x2="200" y2="440" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
                <line x1="80" y1="240" x2="320" y2="240" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
                <line x1="120" y1="80" x2="280" y2="400" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
                <line x1="280" y1="80" x2="120" y2="400" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />

                {/* Inner table facet */}
                <polygon
                  points="200,120 250,150 260,240 250,330 200,360 150,330 140,240 150,150"
                  fill="rgba(102,187,106,0.25)"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="0.5"
                />

                {/* Inner glow */}
                <ellipse cx="200" cy="220" rx="80" ry="100" fill="url(#innerGlow)" />

                {/* Top highlight reflection */}
                <polygon
                  points="200,45 260,78 290,130 240,110 180,85"
                  fill="rgba(255,255,255,0.2)"
                />

                {/* Secondary highlights */}
                <polygon
                  points="200,50 220,65 230,100 210,90 195,70"
                  fill="rgba(255,255,255,0.15)"
                />

                {/* Sparkle points */}
                <circle cx="160" cy="120" r="3" fill="#D4AF37" opacity="0.9">
                  <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="260" cy="350" r="2.5" fill="#D4AF37" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.1;0.7" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="110" cy="260" r="2" fill="#F5DFA0" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.15;0.6" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="290" cy="180" r="2" fill="#FFFFFF" opacity="0.5">
                  <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.8s" repeatCount="indefinite" />
                </circle>

                {/* Light dispersion / rainbow refraction */}
                <line x1="200" y1="40" x2="340" y2="10" stroke="rgba(255,100,100,0.15)" strokeWidth="1.5" />
                <line x1="200" y1="40" x2="360" y2="30" stroke="rgba(100,180,255,0.12)" strokeWidth="1.5" />
                <line x1="200" y1="40" x2="60" y2="15" stroke="rgba(255,215,0,0.12)" strokeWidth="1.5" />

                {/* Floating sparkle stars */}
                <g opacity="0.8">
                  <line x1="340" y1="100" x2="340" y2="88" stroke="#D4AF37" strokeWidth="1.5">
                    <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="334" y1="94" x2="346" y2="94" stroke="#D4AF37" strokeWidth="1.5">
                    <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                  </line>
                </g>
                <g opacity="0.6">
                  <line x1="70" y1="350" x2="70" y2="340" stroke="#D4AF37" strokeWidth="1">
                    <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="65" y1="345" x2="75" y2="345" stroke="#D4AF37" strokeWidth="1">
                    <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                  </line>
                </g>
              </svg>
            </motion.div>
          </motion.div>

          {/* Glassmorphism floating particles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-20 left-8 rounded-lg glass px-4 py-3 animate-float"
            style={{ animationDelay: "0s" }}
          >
            <div className="font-heading text-[8px] tracking-[0.15em] text-[#D4AF37]">GIA CERTIFIED</div>
            <div className="mt-0.5 text-[10px] text-white/60">4.82ct VVS Colombian</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute top-32 right-10 rounded-lg glass px-4 py-3 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div className="font-heading text-[8px] tracking-[0.15em] text-[#00C853]">BLOCKCHAIN VERIFIED</div>
            <div className="mt-0.5 text-[10px] text-white/60">0xA4F2...9C3B</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="absolute top-1/2 right-6 rounded-lg glass px-3 py-2 animate-float"
            style={{ animationDelay: "4s" }}
          >
            <div className="text-[9px] text-[#D4AF37]">RI: 1.765</div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <motion.div
        style={{ opacity: vignette }}
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0B]/30 to-transparent lg:hidden"
        aria-hidden
      />
    </section>
  );
}
