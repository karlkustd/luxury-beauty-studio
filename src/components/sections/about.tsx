"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#faf8f5] py-24 text-neutral-900 dark:bg-[#0d0d0d] dark:text-[#ece8e0]">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] max-h-[560px] overflow-hidden rounded-sm"
        >
          <Image
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=85"
            alt="Beauty specialist portrait"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#9a7b2e] dark:text-[#c9a962]">Philosophy</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Precision, presence, polish.</h2>
          <p className="mt-6 text-neutral-600 dark:text-white/60">
            I built Maison Noir as a single founder-led studio: editorial-grade finishing for hair and beauty, and a
            modelling presence calibrated for luxury brands, magazines, and clothiers who need a face that understands
            the set — because I live on both sides of the camera.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-neutral-700 dark:text-white/70">
            <li className="flex gap-3 border-l-2 border-[#c9a962]/60 pl-4">Session styling for campaigns &amp; e‑commerce</li>
            <li className="flex gap-3 border-l-2 border-[#c9a962]/40 pl-4">On-set continuity for beauty and fashion teams</li>
            <li className="flex gap-3 border-l-2 border-[#c9a962]/25 pl-4">Select editorial bookings (see modelling section)</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
