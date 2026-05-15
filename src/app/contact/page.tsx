import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Verdura. Book a gem consultation, inquire about custom designs, or visit our showrooms worldwide.",
};

export default function ContactPage() {
  return <ContactForm />;
}
