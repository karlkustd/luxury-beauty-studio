"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "ORIGIN", text: "Ethical sourcing from certified mines across Colombia, Myanmar, Kashmir, and Botswana -- partnering directly with mining communities." },
  { year: "GRADING", text: "Every stone assessed by our in-house GIA gemologists using spectroscopy, UV analysis, and AI-assisted valuation models." },
  { year: "CRAFTING", text: "Master artisans with generations of expertise transform each stone into heirloom-quality jewelry in our Geneva atelier." },
  { year: "LEGACY", text: "Delivered with full blockchain certification and a lifetime authenticity guarantee -- yours to treasure forever." },
];

export function StoryTimeline() {
  return (
    <section className="bg-[#0F3D2E] px-4 py-20 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-3xl">
        <span className="font-heading text-[10px] tracking-[0.3em] text-[#D4AF37]">
          OUR HERITAGE
        </span>
        <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-[#F0EAD6]">
          From Mine to <em className="italic text-[#D4AF37]">Masterpiece</em>
        </h2>
        <div className="mt-12 space-y-0">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="h-2 w-2 rounded-full border border-[#D4AF37] mt-1.5" />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-[#D4AF37]/25 mt-1.5" />
                )}
              </div>
              <div className="pb-10">
                <div className="font-heading text-[10px] tracking-[0.2em] text-[#D4AF37]">
                  {item.year}
                </div>
                <div className="mt-2 text-sm leading-[1.7] text-white/50">
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
