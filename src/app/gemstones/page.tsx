import type { Metadata } from "next";
import { GemCollection } from "@/components/sections/gem-collection";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Gemstones",
  description: "Explore our curated collection of GIA-certified emeralds, rubies, sapphires, and diamonds.",
};

export default function GemstonesPage() {
  return (
    <>
      <PageHero
        eyebrow="THE COLLECTION"
        title="Rare Gemstones"
        titleAccent="Certified"
        subtitle="Browse our curated selection of the world's finest GIA-certified gemstones. Each stone is hand-selected, ethically sourced, and blockchain verified."
      />
      <MarqueeStrip />
      <GemCollection />
    </>
  );
}
