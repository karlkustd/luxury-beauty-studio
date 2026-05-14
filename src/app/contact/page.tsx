import type { Metadata } from "next";
import { BookContact } from "@/components/sections/book-contact";
import { ShopTeaser } from "@/components/sections/shop-teaser";

export const metadata: Metadata = {
  title: "Contact & booking",
  description: "Book Maison Noir — luxury beauty studio and editorial inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-8">
      <BookContact />
      <ShopTeaser />
    </div>
  );
}
