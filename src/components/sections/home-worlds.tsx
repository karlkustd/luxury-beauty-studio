"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const worlds = [
  {
    href: "/modeling",
    title: "Modeling",
    subtitle: "Editorial · campaigns · agency book",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=85",
    tone: "dark" as const,
  },
  {
    href: "/salon",
    title: "Salon",
    subtitle: "Hairdressing · color · private suite",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=85",
    tone: "warm" as const,
  },
];

export function HomeWorlds() {
  return (
    <section className="relative bg-[#08060a] py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#c9a962]">Two worlds · one signature</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-[#f5f0e8] md:text-4xl">Choose your entrance</h2>
          <p className="mt-4 text-sm text-white/50">
            Distinct atmospheres — the same typography, gold thread, and uncompromising finish.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {worlds.map((w, i) => (
            <motion.div
              key={w.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.65 }}
            >
              <Link
                href={w.href}
                className={`group relative block overflow-hidden rounded-sm border ${
                  w.tone === "dark"
                    ? "border-white/10 bg-white/[0.03]"
                    : "border-[#e6d8c8]/80 bg-[#fdf8f2]/[0.06]"
                } backdrop-blur-sm transition hover:border-[#c9a962]/40`}
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={w.image}
                    alt=""
                    fill
                    className="object-cover transition duration-[1.2s] ease-out group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                  <div
                    className={`absolute inset-0 ${
                      w.tone === "dark"
                        ? "bg-gradient-to-t from-black via-black/40 to-transparent"
                        : "bg-gradient-to-t from-[#2a1810]/90 via-[#2a1810]/25 to-transparent"
                    }`}
                  />
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,169,98,0.2),transparent_55%)]" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a962]">{w.subtitle}</p>
                  <h3 className="mt-2 font-display text-3xl text-white md:text-4xl">{w.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80 transition group-hover:text-[#c9a962]">
                    Enter
                    <span aria-hidden className="translate-x-0 transition group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
