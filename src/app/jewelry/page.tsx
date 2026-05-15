import type { Metadata } from "next";
import { JewelryLandscape } from "@/components/sections/jewelry-landscape";

export const metadata: Metadata = {
  title: "Jewelry",
  description: "Luxury jewelry collections crafted by master artisans in our Geneva atelier.",
};

export default function JewelryPage() {
  return <JewelryLandscape />;
}
