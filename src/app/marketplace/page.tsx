import type { Metadata } from "next";
import { MarketplaceLandscape } from "@/components/sections/marketplace-landscape";

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Live auctions, rare finds, and a premium ecommerce experience for gemstone collectors.",
};

export default function MarketplacePage() {
  return <MarketplaceLandscape />;
}
