"use client";

import { motion } from "framer-motion";

const features = [
  { icon: "🔬", title: "GIA GRADING", text: "Color, clarity, cut and carat by certified experts" },
  { icon: "⛓", title: "BLOCKCHAIN ID", text: "Immutable provenance on distributed ledger" },
  { icon: "🤖", title: "AI VALUATION", text: "ML models trained on 10M+ transactions" },
  { icon: "🌍", title: "ETHICAL SOURCE", text: "Kimberley Process compliance verified" },
];

export function CertificationLandscape() {
  return (
    <section className="h-screen w-screen overflow-hidden bg-gradient-to-br from-[#0C3425] via-[#0F3D2E] to-[#0A2A1E]">
      <div className="pointer-events-none absolute inset-0 bg-botanical opacity-20" aria-hidden />

      <div className="relative z-10 flex h-full">
        {/* Left content */}
        <div className="flex w-[42%] flex-col justify-center px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-heading text-[10px] tracking-[0.35em] text-[#D4AF37]">VERDURA LABORATORY</span>
            <h1 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.08] text-[#F0EAD6]">
              Scientific Precision
              <br />
              Meets <em className="italic text-[#D4AF37]">Artistry</em>
            </h1>
            <p className="mt-5 max-w-sm text-[0.82rem] font-light leading-[1.8] text-white/45">
              Every gemstone undergoes rigorous grading by our GIA-certified gemologists using spectroscopic analysis, UV fluorescence testing, and AI-enhanced verification.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                  className="border border-[#D4AF37]/15 bg-[#D4AF37]/5 p-3">
                  <div className="text-lg mb-1.5">{f.icon}</div>
                  <div className="font-heading text-[8px] tracking-[0.15em] text-[#D4AF37] mb-1">{f.title}</div>
                  <div className="text-[10px] leading-[1.5] text-white/40">{f.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right - refraction visual */}
        <div className="flex-1 flex items-center justify-center relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,200,83,0.06) 0%, transparent 50%)" }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 1 }}>
            <svg viewBox="0 0 400 400" className="w-[min(380px,80%)]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="gc" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#66BB6A" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#1B5E20" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0A1F0F" stopOpacity="0.9" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="170" fill="none" stroke="rgba(212,175,55,0.15)" strokeWidth="1" strokeDasharray="8 4" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="0.8" strokeDasharray="4 8" />
              <circle cx="200" cy="200" r="110" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="0.8" />
              <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
              <g stroke="rgba(212,175,55,0.15)" strokeWidth="0.5">
                <line x1="200" y1="30" x2="200" y2="370" />
                <line x1="30" y1="200" x2="370" y2="200" />
                <line x1="76" y1="76" x2="324" y2="324" />
                <line x1="324" y1="76" x2="76" y2="324" />
              </g>
              <polygon points="200,100 255,135 255,205 200,240 145,205 145,135" fill="url(#gc)" stroke="rgba(212,175,55,0.8)" strokeWidth="2" />
              <polygon points="200,100 255,135 200,170 145,135" fill="rgba(102,187,106,0.3)" />
              <polygon points="200,170 255,135 255,205 200,240" fill="rgba(27,94,32,0.5)" />
              <circle cx="185" cy="135" r="6" fill="rgba(255,255,255,0.5)" />
              <circle cx="200" cy="50" r="5" fill="#FF6B6B" opacity="0.6" />
              <circle cx="270" cy="80" r="4" fill="#FFD700" opacity="0.6" />
              <circle cx="310" cy="160" r="4" fill="#66BB6A" opacity="0.6" />
              <circle cx="280" cy="330" r="5" fill="#90CAF9" opacity="0.6" />
              <circle cx="100" cy="280" r="4" fill="#CE93D8" opacity="0.6" />
              <rect x="20" y="20" width="100" height="32" rx="2" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.25)" strokeWidth="0.5" />
              <text x="28" y="33" fill="#D4AF37" fontSize="7" fontFamily="monospace" letterSpacing="1">REFRACTIVE INDEX</text>
              <text x="28" y="46" fill="#66BB6A" fontSize="9" fontFamily="monospace" fontWeight="bold">1.7650</text>
              <rect x="280" y="20" width="95" height="32" rx="2" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.25)" strokeWidth="0.5" />
              <text x="288" y="33" fill="#D4AF37" fontSize="7" fontFamily="monospace" letterSpacing="1">CHROMIUM PPM</text>
              <text x="288" y="46" fill="#66BB6A" fontSize="9" fontFamily="monospace" fontWeight="bold">5,240</text>
              <rect x="20" y="348" width="90" height="32" rx="2" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.25)" strokeWidth="0.5" />
              <text x="28" y="361" fill="#D4AF37" fontSize="7" fontFamily="monospace" letterSpacing="1">SPECIFIC GRAV</text>
              <text x="28" y="374" fill="#66BB6A" fontSize="9" fontFamily="monospace" fontWeight="bold">2.71</text>
              <rect x="290" y="348" width="90" height="32" rx="2" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.25)" strokeWidth="0.5" />
              <text x="298" y="361" fill="#D4AF37" fontSize="7" fontFamily="monospace" letterSpacing="1">FLUORESCENCE</text>
              <text x="298" y="374" fill="#66BB6A" fontSize="9" fontFamily="monospace" fontWeight="bold">INERT</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
