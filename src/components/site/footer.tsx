import Link from "next/link";

const shopLinks = [
  { href: "/gemstones", label: "Gemstones" },
  { href: "/jewelry", label: "Jewelry" },
  { href: "#", label: "Engagement" },
  { href: "#", label: "Bridal Collections" },
  { href: "#", label: "Limited Editions" },
];

const serviceLinks = [
  { href: "/contact", label: "Gem Consultation" },
  { href: "#", label: "Custom Design" },
  { href: "/certification", label: "Certification" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "#", label: "AI Valuation" },
];

const companyLinks = [
  { href: "/about", label: "Our World" },
  { href: "#", label: "Ethical Sourcing" },
  { href: "#", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/10 bg-[#0A2A1E] dark:bg-[#060606]">
      {/* Animated divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="font-heading text-xl tracking-[0.3em] text-[#D4AF37]">
              VERDURA
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">
              Where nature meets elegance. Certified rare gemstones, ethical
              sourcing, and luxury craftsmanship since 2012.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {["Instagram", "Pinterest", "WeChat", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-heading text-[9px] tracking-[0.15em] text-white/35 transition-colors hover:text-[#D4AF37]"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <div className="font-heading text-[10px] tracking-[0.2em] text-[#D4AF37] mb-4">
              SHOP
            </div>
            <ul className="space-y-2">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/40 transition-colors hover:text-[#D4AF37]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="font-heading text-[10px] tracking-[0.2em] text-[#D4AF37] mb-4">
              SERVICES
            </div>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/40 transition-colors hover:text-[#D4AF37]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-heading text-[10px] tracking-[0.2em] text-[#D4AF37] mb-4">
              COMPANY
            </div>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/40 transition-colors hover:text-[#D4AF37]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#D4AF37]/8 pt-6 sm:flex-row">
          <span className="text-[11px] text-white/20">
            &copy; {new Date().getFullYear()} Verdura Jewellery. All rights
            reserved. GIA Certified Partner.
          </span>
          <div className="flex gap-6">
            {["Instagram", "Pinterest", "WeChat", "WhatsApp"].map((s) => (
              <a
                key={s}
                href="#"
                className="font-heading text-[9px] tracking-[0.15em] text-white/25 transition-colors hover:text-[#D4AF37]"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
