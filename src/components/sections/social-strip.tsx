"use client";

import { motion } from "framer-motion";
import { Camera, Clapperboard, Star } from "lucide-react";

const testimonials = [
  { quote: "She styled the campaign and stepped in as talent — zero friction on set.", name: "Creative Director, LA" },
  { quote: "The chair work is obsessive; the editorial presence is effortless.", name: "Beauty Editor" },
];

export function SocialStrip() {
  return (
    <section className="border-y border-black/5 bg-[#f0ebe3] py-20 dark:border-white/5 dark:bg-[#0d0d0d]">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:justify-between">
        <div className="max-w-md">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#9a7b2e] dark:text-[#c9a962]">Social</p>
          <h2 className="mt-3 font-display text-3xl text-neutral-900 dark:text-[#f5f0e8]">Influencer presence</h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-white/55">
            Wire your Instagram Basic Display or oEmbed here. Below: placeholders for reels and collaborations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-800 backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-[#f5f0e8]"
            >
              <Camera className="h-4 w-4" /> Instagram
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-800 backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-[#f5f0e8]"
            >
              <Clapperboard className="h-4 w-4" /> TikTok / Reels
            </a>
          </div>
        </div>
        <div className="grid flex-1 gap-4 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-sm border border-black/5 bg-white/60 p-6 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <Star className="h-4 w-4 text-[#c9a962]" aria-hidden />
              <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-white/75">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-xs uppercase tracking-widest text-neutral-500 dark:text-white/45">{t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
