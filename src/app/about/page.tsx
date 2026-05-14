import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { SocialStrip } from "@/components/sections/social-strip";

export const metadata: Metadata = {
  title: "About",
  description: "The story and philosophy behind Maison Noir — luxury beauty and editorial model.",
};

export default function AboutPage() {
  return (
    <div className="pt-6">
      <About />
      <SocialStrip />
    </div>
  );
}
