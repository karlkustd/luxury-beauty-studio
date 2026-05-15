import type { Metadata } from "next";
import { GemologistSection } from "@/components/sections/gemologist-section";
import { PageHero } from "@/components/sections/page-hero";
import { AboutEthical } from "@/components/sections/about-ethical";

export const metadata: Metadata = {
  title: "Certification",
  description: "GIA certification, blockchain verification, and AI-powered gem analysis at Verdura Laboratory.",
};

export default function CertificationPage() {
  return (
    <>
      <PageHero
        eyebrow="VERDURA LABORATORY"
        title="Scientific"
        titleAccent="Certification"
        subtitle="Every gemstone is graded by our GIA-certified gemologists using spectroscopic analysis, UV fluorescence testing, and AI-enhanced authenticity verification."
      />
      <GemologistSection />
      <AboutEthical />
    </>
  );
}
