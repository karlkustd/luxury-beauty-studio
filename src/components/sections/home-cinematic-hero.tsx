"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Wordmark } from "@/components/brand/wordmark";

export function HomeCinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const vignette = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  const mx = useSpring(0, { stiffness: 26, damping: 18 });
  const my = useSpring(0, { stiffness: 26, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      mx.set(nx * 14);
      my.set(ny * 10);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] overflow-hidden bg-[#030303]">
      {/* Layered depth: mesh + grain */}
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-90" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.18] mix-blend-overlay" aria-hidden />

      <motion.div style={{ opacity: vignette }} className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030303_78%)]" aria-hidden />

      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 scale-110 animate-ken">
          <Image
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=88"
            alt=""
            fill
            priority
            className="object-cover opacity-55"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#120a14]/90 via-[#08060a]/80 to-[#050308]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-[#1a1018]/60" />
      </motion.div>

      {/* Owner portrait — partial silhouette, editorial */}
      <motion.div
        style={{ x: mx, y: my }}
        className="pointer-events-none absolute -right-4 bottom-0 top-24 w-[min(52vw,640px)] sm:top-16 md:right-0 md:w-[min(44vw,560px)]"
      >
        <motion.div style={{ y: fgY }} className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#030303]/20 to-[#030303] md:via-transparent" />
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=88"
            alt="Founder — beauty & editorial"
            fill
            className="object-cover object-[center_15%] mix-blend-normal opacity-95 [mask-image:linear-gradient(to_left,black_35%,transparent)] md:[mask-image:linear-gradient(to_left,black_55%,transparent)]"
            sizes="(max-width:768px) 60vw, 45vw"
            priority
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 mix-blend-soft-light" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-4 pb-20 pt-28 sm:px-6 md:justify-center md:pb-28 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.42em] text-[#c9a962]/90">
            Luxury beauty studio · Editorial model
          </p>
          <div className="relative">
            <Wordmark size="hero" asLink={false} animated />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-6 max-w-lg font-sans text-sm font-light leading-relaxed text-white/65 md:text-base"
            >
              A singular founder-led house where salon precision meets campaign presence — hair, skin-level finish, and
              a portfolio voice calibrated for luxury brands.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-full border border-[#c9a962]/50 bg-[#c9a962]/15 px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f8f1e4] backdrop-blur-md transition hover:border-[#dcc896] hover:bg-[#c9a962]/25"
            >
              <span className="relative z-10">Book appointment</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition group-hover:translate-x-full duration-700" />
            </Link>
            <Link
              href="/gallery"
              className="rounded-full border border-white/15 bg-white/[0.04] px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/85 backdrop-blur-md transition hover:border-[#c9a962]/35 hover:text-[#c9a962]"
            >
              View portfolio
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-14 hidden text-[10px] uppercase tracking-[0.35em] text-white/45 md:block"
          >
            Scroll to enter the house
          </motion.p>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 h-8 w-px -translate-x-1/2 bg-gradient-to-b from-[#c9a962] to-transparent opacity-60"
        aria-hidden
      />
    </section>
  );
}
