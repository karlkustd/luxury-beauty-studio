import type { Metadata } from "next";
import Link from "next/link";
import { SalonHero } from "@/components/sections/salon-hero";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";

export const metadata: Metadata = {
  title: "Salon",
  description: "Luxury hairdressing, color, extensions, braiding, and private beauty suite — Maison Noir.",
};

export default function SalonPage() {
  return (
    <div className="bg-[#faf6ef]">
      <SalonHero />
      <Services variant="warm" />
      <Portfolio
        eyebrow="In the chair"
        title="Transformation gallery"
        description="A curated wall of finishes — color stories, extensions, and editorial-ready prep from the suite."
        variant="light"
      />
      <section className="border-t border-[#e8ddd0] bg-gradient-to-b from-[#fff9f3] to-[#f3e8dc] px-4 py-20 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#9a7b2e]">Ready when you are</p>
          <h2 className="font-display text-3xl text-[#2c241c] md:text-4xl">Reserve your chair</h2>
          <p className="max-w-lg text-sm text-[#5c524a]">
            Private appointments with unhurried timing — tell us your hair goals and we will tailor the session.
          </p>
          <Link
            href="/contact#book"
            className="rounded-full border border-[#c9a962]/60 bg-[#c9a962]/15 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#4a3818] transition hover:bg-[#c9a962]/25"
          >
            Open booking desk
          </Link>
        </div>
      </section>
    </div>
  );
}
