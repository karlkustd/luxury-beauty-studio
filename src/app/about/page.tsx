import type { Metadata } from "next";
import { AboutLandscape } from "@/components/sections/about-landscape";

export const metadata: Metadata = {
  title: "Our World",
  description: "The Verdura story -- ethical mining, sustainability, and luxury craftsmanship since 2012.",
};

export default function AboutPage() {
  return <AboutLandscape />;
}
