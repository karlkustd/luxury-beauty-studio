"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const hairTiles = [
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=85", h: "tall" as const },
  { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=85", h: "short" as const },
  { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=85", h: "short" as const },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=85", h: "tall" as const },
  { src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=85", h: "short" as const },
  { src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=85", h: "short" as const },
];

const editorialTiles = [
  { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85", h: "tall" as const },
  { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85", h: "short" as const },
  { src: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=85", h: "short" as const },
  { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85", h: "tall" as const },
];

type Tile = (typeof hairTiles)[number];

export function Portfolio({
  id = "portfolio",
  eyebrow = "Hair transformations",
  title = "Salon portfolio",
  description = "Before/after stories, color corrections, and editorial prep — masonry layout, hover zoom. Replace with your own client imagery.",
  variant = "light",
  tiles = hairTiles,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  variant?: "light" | "dark";
  tiles?: Tile[];
}) {
  const shell =
    variant === "dark"
      ? "bg-[#030303] text-[#ece8e0]"
      : "bg-[#faf8f5] text-neutral-900 dark:bg-[#080808] dark:text-[#f5f0e8]";
  const eyebrowC = variant === "dark" ? "text-[#c9a962]" : "text-[#9a7b2e] dark:text-[#c9a962]";
  const bodyC = variant === "dark" ? "text-white/55" : "text-neutral-600 dark:text-white/55";
  const ring = variant === "dark" ? "ring-white/10" : "ring-black/5 dark:ring-white/10";

  return (
    <section id={id} className={`scroll-mt-24 py-24 ${shell}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className={`text-[10px] font-semibold uppercase tracking-[0.35em] ${eyebrowC}`}>{eyebrow}</p>
        <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">{title}</h2>
        <p className={`mt-4 max-w-xl ${bodyC}`}>{description}</p>
        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {tiles.map((t, i) => (
            <motion.div
              key={`${t.src}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`group relative mb-4 break-inside-avoid overflow-hidden rounded-sm ring-1 ${ring} ${
                t.h === "tall" ? "min-h-[320px]" : "min-h-[200px]"
              }`}
            >
              <Image
                src={t.src}
                alt=""
                width={600}
                height={t.h === "tall" ? 900 : 500}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EditorialGallerySection() {
  return (
    <Portfolio
      id="editorial-gallery"
      eyebrow="Modeling & campaigns"
      title="Editorial frames"
      description="Runway-adjacent stills, clothier campaigns, and magazine pacing — cinematic crops and negative space."
      variant="dark"
      tiles={editorialTiles}
    />
  );
}
