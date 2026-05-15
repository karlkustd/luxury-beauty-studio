import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/site/header";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${heading.variable} ${sans.variable} font-sans antialiased h-screen overflow-hidden`}
      >
        <ThemeProvider>
          <Header />
          <main className="h-screen overflow-hidden">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
