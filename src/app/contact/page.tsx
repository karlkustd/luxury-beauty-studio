import type { Metadata } from "next";
import { ContactLandscape } from "@/components/sections/contact-landscape";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Verdura. Book a gem consultation or visit our showrooms worldwide.",
};

export default function ContactPage() {
  return <ContactLandscape />;
}
