import type { Metadata } from "next";
import { MarketplaceSection } from "@/components/sections/marketplace-section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Live auctions, rare finds, and a premium ecommerce experience for gemstone collectors worldwide.",
};

export default function MarketplacePage() {
  return (
    <>
      <PageHero
        eyebrow="VERDURA MARKETPLACE"
        title="Live Auctions &"
        titleAccent="Rare Finds"
        subtitle="Bid on the world's most exceptional gemstones in our live marketplace. Crypto payments accepted. Full GIA certification on every lot."
      />
      <MarketplaceSection />
    </>
  );
}
