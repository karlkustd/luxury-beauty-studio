"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Lock, Sparkles } from "lucide-react";

const editorialGeneral = [
  {
    label: "Magazine",
    title: "Cover & feature stories",
    copy: "High-gloss editorial pacing, controlled light, and silhouette-first framing for fashion monthlies and independents.",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=85",
    alt: "Editorial runway-style fashion",
  },
  {
    label: "Brand",
    title: "Campaign & lookbook",
    copy: "Clothiers and accessories houses: consistent mood across hero, detail, and e‑commerce grids — styled and modeled with one creative line.",
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&q=85",
    alt: "Fashion brand clothing campaign",
  },
  {
    label: "Clothing",
    title: "Designer & prêt-à-porter",
    copy: "Runway walk-throughs, showroom pulls, and studio sets where tailoring reads on camera — movement-aware posing for drape and structure.",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=85",
    alt: "High fashion clothing editorial",
  },
];

const editorialMature = [
  {
    title: "Swim & resort editorials",
    copy: "Sun-drenched sets and minimal wardrobe — confidence-led, art-directed frames for resort capsules and summer issues.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85",
    alt: "Resort swim editorial silhouette",
  },
  {
    title: "Intimates & silhouette studies",
    copy: "Moonlight studios, negative space, and fabric as texture — for brands that sell mood as much as garment. Closed sets, small crews, NDAs on request.",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=85",
    alt: "Fashion editorial silhouette study",
  },
];

const STORAGE_KEY = "mn_mature_editorial_ok";

export function ModelEditorial() {
  const [unlocked, setUnlocked] = useState(false);
  const [ageConfirm, setAgeConfirm] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY) === "1") setUnlocked(true);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const unlock = useCallback(() => {
    if (!ageConfirm) return;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setUnlocked(true);
  }, [ageConfirm]);

  return (
    <section id="editorial" className="scroll-mt-24 bg-[#0a0a0a] py-24 text-[#ece8e0]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a962]">
              <Sparkles className="h-3 w-3" />
              Modelling &amp; editorial
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[#f5f0e8] md:text-5xl">Magazine, brands &amp; clothiers.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55 md:text-base">
              Available for editorial, campaign, and runway-adjacent bookings where a founder who also crafts hair and
              makeup keeps the line coherent. Rates and usage are quoted per brief — including limited mature fashion
              editorials (swim, intimates mood, silhouette-led art direction) behind an age gate below.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 border border-white/15 bg-white/5 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a962] backdrop-blur transition hover:border-[#c9a962]/40"
          >
            Request modelling deck
          </a>
        </div>

        <div className="mt-16 space-y-20">
          {editorialGeneral.map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.05 }}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={`relative aspect-[16/10] overflow-hidden rounded-sm ring-1 ring-white/10 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image src={block.img} alt={block.alt} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#c9a962] backdrop-blur">
                  {block.label}
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-display text-3xl text-[#f5f0e8] md:text-4xl">{block.title}</h3>
                <p className="mt-4 text-white/55">{block.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mature fashion editorial — 18+ gate; tasteful industry framing */}
        <div className="mt-28 rounded-sm border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h3 className="flex items-center gap-2 font-display text-2xl text-[#f5f0e8] md:text-3xl">
                <Lock className="h-5 w-5 text-[#c9a962]" aria-hidden />
                Mature editorial (18+)
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-white/50">
                This subsection is for art-directed fashion work that may include swimwear, body-conscious styling, or
                implied silhouettes — always professional, consensual, and crewed like any campaign set. It is not adult
                content; it is <strong className="font-medium text-white/70">editorial fashion for mature audiences</strong>.
                Swap placeholders in <code className="rounded bg-white/10 px-1 text-xs">public/</code> with your own licensed imagery.
              </p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!hydrated ? null : !unlocked ? (
              <motion.div
                key="gate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-8 flex flex-col gap-6 rounded-sm border border-white/10 bg-black/40 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <label className="flex cursor-pointer items-start gap-3 text-sm text-white/70">
                  <input
                    type="checkbox"
                    checked={ageConfirm}
                    onChange={(e) => setAgeConfirm(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-white/30 bg-transparent text-[#c9a962] focus:ring-[#c9a962]"
                  />
                  <span>
                    I am 18 or older and understand this section may show <strong className="text-white/85">suggestive fashion editorial</strong>{" "}
                    (not explicit sexual content on this demo site).
                  </span>
                </label>
                <button
                  type="button"
                  onClick={unlock}
                  disabled={!ageConfirm}
                  className="shrink-0 border border-[#c9a962]/60 bg-[#c9a962]/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a962] transition enabled:hover:bg-[#c9a962]/25 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Reveal portfolio row
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="mature"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 grid gap-8 md:grid-cols-2"
              >
                {editorialMature.map((item) => (
                  <article key={item.title} className="group overflow-hidden rounded-sm ring-1 ring-white/10">
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width:768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 p-6">
                        <h4 className="font-display text-xl text-[#f5f0e8]">{item.title}</h4>
                        <p className="mt-2 text-sm text-white/60">{item.copy}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
