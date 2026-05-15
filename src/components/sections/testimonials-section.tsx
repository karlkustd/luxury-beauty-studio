"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The Colombian emerald I acquired through Verdura exceeded every expectation. The depth of color, the blockchain certificate, the whole experience -- pure luxury from first contact.",
    name: "AMARA RICHARDSON",
    title: "Private Collector -- London",
    initials: "AR",
    color: "bg-[#0F3D2E]",
  },
  {
    text: "As a gemologist myself, I expected to find flaws. Instead I found a team with deeper expertise than most dealers I've encountered in 30 years. Their AI valuation system is extraordinary.",
    name: "DR. JEAN MOREAU",
    title: "GIA Fellow -- Geneva",
    initials: "JM",
    color: "bg-[#1A3A6B]",
  },
  {
    text: "We commissioned a custom ruby engagement ring and the process was seamless. The stone sourcing, the design collaboration, the craftsmanship -- a true heirloom for generations.",
    name: "SOREN & KIRA LUND",
    title: "Newlyweds -- Copenhagen",
    initials: "SK",
    color: "bg-[#8B1A2E]",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#F2EDE3] px-4 py-20 dark:bg-[#0A0A0A] sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="font-heading text-[10px] tracking-[0.3em] text-[#D4AF37]">
            CLIENT VOICES
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] text-neutral-900 dark:text-[#F0EAD6]"
          >
            Words of Our
            <br />
            <em className="italic">Collectors</em>
          </motion.h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative border border-neutral-200 bg-white p-6 dark:border-white/8 dark:bg-[#111]"
            >
              {/* Quote mark */}
              <span className="absolute -top-2 left-5 font-display text-6xl leading-none text-[#D4AF37]/30">
                &ldquo;
              </span>
              {/* Stars */}
              <div className="mb-3 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-sm text-[#D4AF37]">
                    &#9733;
                  </span>
                ))}
              </div>
              <p className="font-display text-base italic leading-[1.7] text-neutral-700 dark:text-white/70">
                {t.text}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${t.color} font-display text-sm text-[#D4AF37]`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-heading text-[10px] tracking-[0.1em] text-neutral-800 dark:text-[#F0EAD6]">
                    {t.name}
                  </div>
                  <div className="mt-0.5 text-[10px] text-neutral-500 dark:text-white/40">
                    {t.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
