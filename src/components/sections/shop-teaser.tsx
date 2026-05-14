"use client";

import { motion } from "framer-motion";

const items = [
  { name: "Virgin lace units", note: "Custom color & cut" },
  { name: "Luxury extensions", note: "Weft & tape-in" },
  { name: "Pro styling kits", note: "Heat tools & care" },
];

export function ShopTeaser() {
  return (
    <section className="bg-[#111] py-20 text-[#ece8e0]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a962]">Shop (optional)</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Wigs · extensions · accessories</h2>
            <p className="mt-3 max-w-lg text-sm text-white/55">
              Drop in Shopify Snippet, Stripe Checkout links, or a headless cart. These cards are static placeholders.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 border border-white/20 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a962] hover:border-[#c9a962]/50"
          >
            Request product list
          </a>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-sm border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <h3 className="font-display text-xl text-[#f5f0e8]">{item.name}</h3>
              <p className="mt-2 text-sm text-white/50">{item.note}</p>
              <span className="mt-4 inline-block text-xs uppercase tracking-widest text-[#c9a962]/80">Coming soon</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
