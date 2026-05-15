import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const heading = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Verdura -- Where Nature Meets Elegance",
    template: "%s -- Verdura",
  },
  description:
    "Rare gemstones. Certified luxury. Timeless craftsmanship. Verdura is the world's premier gemstone marketplace featuring GIA-certified emeralds, rubies, sapphires, and diamonds.",
  openGraph: {
    title: "Verdura -- Where Nature Meets Elegance",
    description:
      "The premier luxury gemstone marketplace. GIA-certified rare gems with blockchain verification.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${heading.variable} ${sans.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main className="min-h-dvh">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
