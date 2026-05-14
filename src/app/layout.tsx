import type { Metadata } from "next";
import { Instrument_Serif, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maison Noir — Luxury beauty & editorial",
    template: "%s · Maison Noir",
  },
  description:
    "Luxury hair and beauty studio with an editorial modeling portfolio — Los Angeles. Salon precision, campaign presence.",
  openGraph: {
    title: "Maison Noir Studio",
    description: "Luxury beauty studio and fashion-forward editorial model.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${syne.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-dvh">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
