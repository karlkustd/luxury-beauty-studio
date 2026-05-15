import type { Metadata } from "next";
import { GemstonesLandscape } from "@/components/sections/gemstones-landscape";

export const metadata: Metadata = {
  title: "Gemstones",
  description: "Explore our curated collection of GIA-certified emeralds, rubies, sapphires, and diamonds.",
};

export default function GemstonesPage() {
  return <GemstonesLandscape />;
}
