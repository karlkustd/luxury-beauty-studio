import type { Metadata } from "next";
import { HomeCinematicHero } from "@/components/sections/home-cinematic-hero";
import { HomeWorlds } from "@/components/sections/home-worlds";
import { SocialStrip } from "@/components/sections/social-strip";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Maison Noir — luxury beauty studio and editorial model. Cinematic portfolio, salon services, and private booking.",
};

export default function Home() {
  return (
    <>
      <HomeCinematicHero />
      <HomeWorlds />
      <SocialStrip />
    </>
  );
}
