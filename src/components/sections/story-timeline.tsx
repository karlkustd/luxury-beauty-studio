"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "ORIGIN", text: "Ethical sourcing from certified mines across Colombia, Myanmar, Kashmir, and Botswana -- partnering directly with mining communities.", icon: "&#9670;" },
  { year: "GRADING", text: "Every stone assessed by our in-house GIA gemologists using spectroscopy, UV analysis, and AI-assisted valuation models.", icon: "&#9674;" },
  { year: "CRAFTING", text: "Master artisans with generations of expertise transform each stone into heirloom-quality jewelry in our Geneva atelier.", icon: "&#10022;" },
  { year: "LEGACY", text: "Delivered with full blockchain certification and a lifetime authenticity guarantee -- yours to treasure forever.", icon: "&#10025;" },
];

export function StoryTimeline() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F3D2E] to-[#0A2A1E] px-4 py-24 sm:px-6 lg:px-12 xl:px-20">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-botanical opacity-20" aria-hidden />
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,transparent_60%)]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-heading text-[10px] tracking-[0.35em] text-[#D4AF37]">
            OUR HERITAGE
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,3.5vw,3.5rem)] font-light leading-[1.12] text-[#F0EAD6]">
            From Mine to <em className="italic bg-gradient-to-r from-[#F5DFA0] via-[#D4AF37] to-[#C9A227] bg-clip-text text-transparent">Masterpiece</em>
          </h2>
        </motion.div>

        <div className="mt-16 space-y-0">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/5 mt-0.5">
                  <span className="text-[10px] text-[#D4AF37]" dangerouslySetInnerHTML={{ __html: item.icon }} />
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-[#D4AF37]/30 to-[#D4AF37]/5 mt-2" />
                )}
              </div>
              <div className="pb-12">
                <div className="font-heading text-[10px] tracking-[0.25em] text-[#D4AF37]">
                  {item.year}
                </div>
                <div className="mt-2.5 text-[0.84rem] leading-[1.8] text-white/45 max-w-md">
                  {item.text}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
