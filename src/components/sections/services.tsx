"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Luxury blowout & finish",
    duration: "60–90 min",
    price: "From $185",
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=85",
  },
  {
    title: "Color & gloss",
    duration: "2–4 hrs",
    price: "From $320",
    img: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2e6?w=600&q=85",
  },
  {
    title: "Braids & protective styling",
    duration: "3–6 hrs",
    price: "From $280",
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=85",
  },
  {
    title: "Wig install & custom cut",
    duration: "2–3 hrs",
    price: "From $350",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=85",
  },
  {
    title: "Makeup — camera ready",
    duration: "75 min",
    price: "From $200",
    img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=85",
  },
  {
    title: "Photoshoot styling",
    duration: "Half / full day",
    price: "From $900",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85",
  },
];

export function Services({ variant = "default" }: { variant?: "default" | "warm" }) {
  const warm = variant === "warm";
  return (
    <section
      id="services"
      className={`scroll-mt-24 border-y py-24 ${
        warm
          ? "border-[#e8ddd0] bg-[#fffdf9] text-[#2c241c]"
          : "border-black/5 bg-[#f0ebe3] text-neutral-900 dark:border-white/5 dark:bg-[#111] dark:text-[#f5f0e8]"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p
            className={`text-[10px] font-semibold uppercase tracking-[0.35em] ${
              warm ? "text-[#9a7b2e]" : "text-[#9a7b2e] dark:text-[#c9a962]"
            }`}
          >
            Beauty suite
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Salon services</h2>
          <p className={`mt-4 ${warm ? "text-[#5c524a]" : "text-neutral-600 dark:text-white/55"}`}>
            Braiding, color, wigs, makeup, and on-set styling — priced as a private studio. Final quotes after consult.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-sm border shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${
                warm
                  ? "border-[#eadfce] bg-white/80 backdrop-blur-sm"
                  : "border-black/5 bg-white/60 dark:border-white/10 dark:bg-white/[0.03]"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.img}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80" />
              </div>
              <div className="p-5">
                <h3 className={`font-display text-xl ${warm ? "text-[#2c241c]" : "text-neutral-900 dark:text-[#f5f0e8]"}`}>
                  {s.title}
                </h3>
                <p
                  className={`mt-1 text-xs uppercase tracking-widest ${
                    warm ? "text-[#7a6a5c]" : "text-neutral-500 dark:text-white/45"
                  }`}
                >
                  {s.duration}
                </p>
                <p className={`mt-3 text-sm font-medium ${warm ? "text-[#8a6d28]" : "text-[#8a6d28] dark:text-[#c9a962]"}`}>
                  {s.price}
                </p>
                <a
                  href="/contact#book"
                  className={`mt-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] underline-offset-4 transition hover:underline ${
                    warm ? "text-[#4a3818] hover:text-[#9a7b2e]" : "text-neutral-900 hover:text-[#9a7b2e] dark:text-white dark:hover:text-[#c9a962]"
                  }`}
                >
                  Book this service
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
