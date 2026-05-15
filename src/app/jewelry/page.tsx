import type { Metadata } from "next";
import { GemCollection } from "@/components/sections/gem-collection";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Jewelry",
  description: "Luxury jewelry collections crafted by master artisans in our Geneva atelier.",
};

export default function JewelryPage() {
  return (
    <>
      <PageHero
        eyebrow="LUXURY JEWELRY"
        title="Heirloom"
        titleAccent="Masterpieces"
        subtitle="Each piece is handcrafted in our Geneva atelier by master artisans with generations of expertise, using only the finest certified gemstones."
      />
      <GemCollection />
    </>
  );
}
