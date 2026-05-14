"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ModelingHero() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden border-b border-white/10 bg-[#030303]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=88"
          alt=""
          fill
          priority
          className="object-cover opacity-40 grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#08060a]/90" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-36">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#c9a962]"
        >
          Modeling division
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.75 }}
          className="mt-4 max-w-3xl font-display text-5xl tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          Agency-grade
          <span className="block text-white/45">editorial presence.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-white/55 md:text-base"
        >
          Monochrome sets, cinematic scale, and layouts built like a fashion portfolio — magazine, luxury clothiers, and
          campaign teams book here first.
        </motion.p>
      </div>
    </section>
  );
}
