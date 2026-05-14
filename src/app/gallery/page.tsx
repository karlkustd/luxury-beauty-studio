import type { Metadata } from "next";
import { Portfolio, EditorialGallerySection } from "@/components/sections/portfolio";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Salon transformations and editorial modeling portfolio — Maison Noir.",
};

export default function GalleryPage() {
  return (
    <div className="pt-6">
      <Portfolio />
      <EditorialGallerySection />
    </div>
  );
}
