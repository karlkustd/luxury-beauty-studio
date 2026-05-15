"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Search, Heart, ShoppingBag } from "lucide-react";
import { Wordmark } from "@/components/brand/wordmark";

const nav = [
  { href: "/", label: "Home" },
  { href: "/gemstones", label: "Gemstones" },
  { href: "/jewelry", label: "Jewelry" },
  { href: "/certification", label: "Certification" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/about", label: "Our World" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? "border-b border-white/5 bg-transparent"
          : "border-b border-[#D4AF37]/15 bg-[#0B0B0B]/85 backdrop-blur-2xl"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left nav links */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {nav.slice(0, 4).map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-[10px] font-heading font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                  active
                    ? "text-[#D4AF37]"
                    : transparent
                      ? "text-white/70 hover:text-[#D4AF37]"
                      : "text-white/60 hover:text-[#D4AF37]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[0.5px] bg-[#D4AF37] transition-all duration-400 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Center brand */}
        <div className="flex-shrink-0">
          <Wordmark size="sm" href="/" />
        </div>

        {/* Right nav links + actions */}
        <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {nav.slice(4).map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-[10px] font-heading font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                  active
                    ? "text-[#D4AF37]"
                    : transparent
                      ? "text-white/70 hover:text-[#D4AF37]"
                      : "text-white/60 hover:text-[#D4AF37]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[0.5px] bg-[#D4AF37] transition-all duration-400 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <div className="flex items-center gap-3 ml-4 border-l border-white/10 pl-4">
            <button
              type="button"
              className={`p-1.5 transition-colors ${transparent ? "text-white/60 hover:text-[#D4AF37]" : "text-white/50 hover:text-[#D4AF37]"}`}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              className={`p-1.5 transition-colors ${transparent ? "text-white/60 hover:text-[#D4AF37]" : "text-white/50 hover:text-[#D4AF37]"}`}
              aria-label="Wishlist"
            >
              <Heart className="h-4 w-4" />
            </button>
            <button
              type="button"
              className={`p-1.5 transition-colors ${transparent ? "text-white/60 hover:text-[#D4AF37]" : "text-white/50 hover:text-[#D4AF37]"}`}
              aria-label="Cart"
            >
              <ShoppingBag className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={`rounded-full p-2 lg:hidden ${transparent ? "text-white" : "text-white/80"}`}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#D4AF37]/10 bg-[#0B0B0B]/95 backdrop-blur-2xl px-4 py-5 lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-xs font-heading uppercase tracking-[0.28em] text-white/80 hover:text-[#D4AF37] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
