"use client";

import { motion } from "framer-motion";

const certFeatures = [
  { icon: "🔬", title: "GIA GRADING", text: "Professional color, clarity, cut and carat grading by certified experts" },
  { icon: "⛓", title: "BLOCKCHAIN ID", text: "Immutable provenance record stored on distributed ledger" },
  { icon: "🤖", title: "AI VALUATION", text: "Machine learning price models trained on 10M+ gem transactions" },
  { icon: "🌍", title: "ETHICAL SOURCE", text: "Full origin traceability with Kimberley Process compliance" },
];

export function GemologistSection() {
  return (
    <div className="grid min-h-[600px] lg:grid-cols-2">
      {/* Left - Content */}
      <div className="flex flex-col justify-center bg-[#0F3D2E] px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
        <span className="font-heading text-[10px] tracking-[0.3em] text-[#D4AF37]">
          VERDURA LABORATORY
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 font-display text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-[#F0EAD6]"
        >
          Scientific Precision
          <br />
          Meets <em className="italic text-[#D4AF37]">Artistry</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-5 max-w-sm text-[0.82rem] font-light leading-[1.9] text-white/55"
        >
          Every gemstone undergoes rigorous grading by our GIA-certified
          gemologists using spectroscopic analysis, UV fluorescence testing, and
          AI-enhanced authenticity verification.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 grid grid-cols-2 gap-3"
        >
          {certFeatures.map((f) => (
            <div
              key={f.title}
              className="border border-[#D4AF37]/15 bg-[#D4AF37]/5 p-4"
            >
              <div className="text-xl mb-2">{f.icon}</div>
              <div className="font-heading text-[9px] tracking-[0.15em] text-[#D4AF37] mb-1.5">
                {f.title}
              </div>
              <div className="text-[11px] leading-[1.6] text-white/45">
                {f.text}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right - Refraction Visual */}
      <div className="relative flex items-center justify-center overflow-hidden bg-[#0A2A1E] p-8">
        <svg
          viewBox="0 0 400 400"
          className="w-full max-w-[380px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="gemCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#66BB6A" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#1B5E20" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0A1F0F" stopOpacity="0.9" />
            </radialGradient>
          </defs>
          {/* Refraction rings */}
          <circle cx="200" cy="200" r="170" fill="none" stroke="rgba(212,175,55,0.15)" strokeWidth="1" strokeDasharray="8 4" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="0.8" strokeDasharray="4 8" />
          <circle cx="200" cy="200" r="110" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
          {/* Light rays */}
          <g stroke="rgba(212,175,55,0.15)" strokeWidth="0.5">
            <line x1="200" y1="30" x2="200" y2="370" />
            <line x1="30" y1="200" x2="370" y2="200" />
            <line x1="76" y1="76" x2="324" y2="324" />
            <line x1="324" y1="76" x2="76" y2="324" />
          </g>
          {/* Central hexagonal gem */}
          <polygon
            points="200,100 255,135 255,205 200,240 145,205 145,135"
            fill="url(#gemCore)"
            stroke="rgba(212,175,55,0.8)"
            strokeWidth="2"
          />
          <polygon points="200,100 255,135 200,170 145,135" fill="rgba(102,187,106,0.3)" />
          <polygon points="200,170 255,135 255,205 200,240" fill="rgba(27,94,32,0.5)" />
          <line x1="200" y1="100" x2="200" y2="240" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
          <circle cx="185" cy="135" r="6" fill="rgba(255,255,255,0.5)" />
          {/* Spectrum refraction colors */}
          <circle cx="200" cy="50" r="5" fill="#FF6B6B" opacity="0.6" />
          <circle cx="270" cy="80" r="4" fill="#FFD700" opacity="0.6" />
          <circle cx="310" cy="160" r="4" fill="#66BB6A" opacity="0.6" />
          <circle cx="280" cy="330" r="5" fill="#90CAF9" opacity="0.6" />
          <circle cx="100" cy="280" r="4" fill="#CE93D8" opacity="0.6" />
          {/* Analysis readouts */}
          <rect x="20" y="20" width="100" height="32" rx="2" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.25)" strokeWidth="0.5" />
          <text x="28" y="33" fill="#D4AF37" fontSize="7" fontFamily="monospace" letterSpacing="1">
            REFRACTIVE INDEX
          </text>
          <text x="28" y="46" fill="#66BB6A" fontSize="9" fontFamily="monospace" fontWeight="bold">
            1.7650
          </text>
          <rect x="280" y="20" width="95" height="32" rx="2" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.25)" strokeWidth="0.5" />
          <text x="288" y="33" fill="#D4AF37" fontSize="7" fontFamily="monospace" letterSpacing="1">
            CHROMIUM PPM
          </text>
          <text x="288" y="46" fill="#66BB6A" fontSize="9" fontFamily="monospace" fontWeight="bold">
            5,240
          </text>
          <rect x="20" y="348" width="90" height="32" rx="2" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.25)" strokeWidth="0.5" />
          <text x="28" y="361" fill="#D4AF37" fontSize="7" fontFamily="monospace" letterSpacing="1">
            SPECIFIC GRAV
          </text>
          <text x="28" y="374" fill="#66BB6A" fontSize="9" fontFamily="monospace" fontWeight="bold">
            2.71
          </text>
          <rect x="290" y="348" width="90" height="32" rx="2" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.25)" strokeWidth="0.5" />
          <text x="298" y="361" fill="#D4AF37" fontSize="7" fontFamily="monospace" letterSpacing="1">
            FLUORESCENCE
          </text>
          <text x="298" y="374" fill="#66BB6A" fontSize="9" fontFamily="monospace" fontWeight="bold">
            INERT
          </text>
        </svg>
      </div>
    </div>
  );
}
