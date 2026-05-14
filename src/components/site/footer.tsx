import Link from "next/link";
import { Wordmark } from "@/components/brand/wordmark";

const links = [
  { href: "/modeling", label: "Modeling" },
  { href: "/salon", label: "Salon · Hair" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact#book", label: "Book" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f5f0e8] py-16 text-neutral-800 dark:border-white/10 dark:bg-[#060606] dark:text-white/80">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:grid-cols-[1.2fr_1fr_1fr] sm:px-6">
        <div>
          <div className="scale-90 origin-left">
            <Wordmark size="md" href="/" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-white/55">
            Luxury beauty studio and editorial model portfolio — Los Angeles. Magazine-grade presentation with salon
            warmth when you need it.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-white/45">Explore</p>
          <ul className="mt-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-neutral-700 transition hover:text-[#9a7b2e] dark:text-white/70 dark:hover:text-[#c9a962]">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/about" className="text-neutral-700 transition hover:text-[#9a7b2e] dark:text-white/70 dark:hover:text-[#c9a962]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-neutral-700 transition hover:text-[#9a7b2e] dark:text-white/70 dark:hover:text-[#c9a962]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-white/45">Studio</p>
          <p className="mt-4 text-neutral-700 dark:text-white/70">Los Angeles · By appointment</p>
          <a href="mailto:book@maisonnoir.studio" className="mt-2 block text-[#9a7b2e] hover:underline dark:text-[#c9a962]">
            book@maisonnoir.studio
          </a>
          <div className="mt-4 flex flex-col gap-1">
            <a href="#" className="hover:text-[#9a7b2e] dark:hover:text-[#c9a962]">
              Instagram
            </a>
            <a href="#" className="hover:text-[#9a7b2e] dark:hover:text-[#c9a962]">
              TikTok
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-6xl px-4 text-center text-xs text-neutral-500 dark:text-white/40 sm:px-6">
        © {new Date().getFullYear()} Maison Noir Studio. All rights reserved.
      </p>
    </footer>
  );
}
