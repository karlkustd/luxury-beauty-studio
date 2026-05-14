"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function SalonHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#e8ddd0] bg-[#faf6ef]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&q=88"
          alt=""
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff9f3]/95 via-[#faf6ef]/92 to-[#f3e8dc]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(201,169,98,0.12),transparent_55%)]" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[#9a7b2e]"
        >
          Salon · hairdressing
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.75 }}
          className="mt-4 max-w-2xl font-display text-5xl tracking-tight text-[#2c241c] md:text-6xl"
        >
          Warm light.
          <span className="block text-[#7a6555]">Exacting hands.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-6 max-w-lg text-sm leading-relaxed text-[#5c524a] md:text-base"
        >
          A private beauty suite for color, extensions, braiding, and finishing — feminine, luminous, and obsessively
          detailed. Your booking opens the door.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.65 }}
          className="mt-10"
        >
          <Link
            href="/contact#book"
            className="inline-flex rounded-full border border-[#c9a962]/50 bg-white/70 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#5c4520] shadow-sm backdrop-blur-md transition hover:border-[#c9a962] hover:bg-white"
          >
            Reserve a session
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
