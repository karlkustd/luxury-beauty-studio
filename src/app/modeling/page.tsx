import type { Metadata } from "next";
import { ModelingHero } from "@/components/sections/modeling-hero";
import { ModelEditorial } from "@/components/sections/model-editorial";

export const metadata: Metadata = {
  title: "Modeling",
  description: "Editorial modeling, magazine, luxury brands, and campaign portfolio — Maison Noir.",
};

export default function ModelingPage() {
  return (
    <>
      <ModelingHero />
      <ModelEditorial />
    </>
  );
}
