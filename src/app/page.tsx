import type { Metadata } from "next";
import { HeroEmerald } from "@/components/sections/hero-emerald";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { GemCollection } from "@/components/sections/gem-collection";
import { GemologistSection } from "@/components/sections/gemologist-section";
import { MarketplaceSection } from "@/components/sections/marketplace-section";
import { AboutEthical } from "@/components/sections/about-ethical";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export const metadata: Metadata = {
  title: "Verdura -- Where Nature Meets Elegance",
  description:
    "The premier luxury gemstone marketplace. GIA-certified emeralds, rubies, sapphires and diamonds with blockchain verification and ethical sourcing.",
};

export default function Home() {
  return (
    <>
      <HeroEmerald />
      <MarqueeStrip />
      <GemCollection />
      <GemologistSection />
      <MarketplaceSection />
      <AboutEthical />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
