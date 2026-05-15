import type { Metadata } from "next";
import { AboutEthical } from "@/components/sections/about-ethical";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PageHero } from "@/components/sections/page-hero";
import { StoryTimeline } from "@/components/sections/story-timeline";

export const metadata: Metadata = {
  title: "Our World",
  description: "The Verdura story -- ethical mining, sustainability, and luxury craftsmanship since 2012.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR HERITAGE"
        title="From Mine to"
        titleAccent="Masterpiece"
        subtitle="Verdura was founded on a simple belief: that the world's most beautiful gemstones should be sourced responsibly and presented with the scientific rigor they deserve."
      />
      <StoryTimeline />
      <AboutEthical />
      <TestimonialsSection />
    </>
  );
}
