"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Wordmark } from "@/components/brand/wordmark";

const nav = [
  { href: "/", label: "Home" },
  { href: "/modeling", label: "Modeling" },
  { href: "/salon", label: "Salon · Hair" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setScrolled(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const isHome = pathname === "/";
  const warm = pathname === "/salon" || pathname === "/about";
  const transparent = isHome && !scrolled;

  const shell = transparent
    ? "border-white/10 bg-transparent text-white"
    : warm
      ? "border-[#e5d9cc]/70 bg-[#fffaf5]/80 text-[#2c241c] backdrop-blur-2xl"
      : "border-black/10 bg-[#0a0a0a]/80 text-white backdrop-blur-2xl dark:border-white/10";

  const linkClass = transparent
    ? "text-white/70 hover:text-[#c9a962]"
    : warm
      ? "text-[#5c524a] hover:text-[#8a6d28]"
      : "text-white/65 hover:text-[#c9a962] dark:text-white/65";

  const ctaClass = transparent
    ? "border-[#c9a962]/60 bg-[#c9a962]/15 text-[#f8f1e4] hover:bg-[#c9a962]/25"
    : warm
      ? "border-[#c9a962]/55 bg-[#c9a962]/12 text-[#4a3818] hover:bg-[#c9a962]/20"
      : "border-[#c9a962]/45 bg-[#c9a962]/10 text-[#c9a962] hover:bg-[#c9a962]/20";

  const iconBtn = transparent
    ? "text-white/75 hover:bg-white/10 hover:text-[#c9a962]"
    : warm
      ? "text-[#5c524a] hover:bg-black/5 hover:text-[#8a6d28]"
      : "text-white/70 hover:bg-white/10 hover:text-[#c9a962]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${shell} ${
        scrolled && isHome ? "border-white/10 bg-[#08060a]/88 backdrop-blur-2xl" : ""
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="scale-[0.82] origin-left sm:scale-90">
          <Wordmark size="md" href="/" />
        </div>
        <nav className="hidden items-center gap-7 lg:gap-9 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[10px] font-semibold uppercase tracking-[0.22em] transition ${linkClass} ${
                  active ? "text-[#c9a962]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact#book"
            className={`rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition ${ctaClass}`}
          >
            Book
          </Link>
        </nav>
        <div className="flex items-center gap-1">
          {mounted && (
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className={`rounded-full p-2 transition ${iconBtn}`}
            >
              {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <button
            type="button"
            className={`rounded-full p-2 lg:hidden ${warm ? "text-[#2c241c]" : "text-white"}`}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div
          className={`border-t px-4 py-5 lg:hidden ${
            warm ? "border-[#e8ddd0] bg-[#fffaf5]" : "border-white/10 bg-[#0a0a0a]"
          }`}
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-xs uppercase tracking-[0.28em] ${warm ? "text-[#2c241c]" : "text-white/85"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact#book"
              onClick={() => setOpen(false)}
              className="py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a962]"
            >
              Book appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
