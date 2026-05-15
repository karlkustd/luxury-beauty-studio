import type { Metadata } from "next";
import { HeroEmerald } from "@/components/sections/hero-emerald";

export const metadata: Metadata = {
  title: "Verdura -- Where Nature Meets Elegance",
  description:
    "The premier luxury gemstone marketplace. GIA-certified emeralds, rubies, sapphires and diamonds with blockchain verification and ethical sourcing.",
};

export default function Home() {
  return <HeroEmerald />;
}
