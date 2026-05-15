import type { Metadata } from "next";
import { CertificationLandscape } from "@/components/sections/certification-landscape";

export const metadata: Metadata = {
  title: "Certification",
  description: "GIA certification, blockchain verification, and AI-powered gem analysis at Verdura Laboratory.",
};

export default function CertificationPage() {
  return <CertificationLandscape />;
}
