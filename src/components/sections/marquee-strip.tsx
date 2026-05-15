"use client";

const items = [
  "GIA CERTIFIED",
  "COLOMBIAN EMERALDS",
  "BURMA RUBIES",
  "KASHMIRI SAPPHIRES",
  "CONFLICT-FREE DIAMONDS",
  "BLOCKCHAIN VERIFIED",
  "ETHICAL SOURCING",
  "FREE WORLDWIDE SHIPPING",
];

export function MarqueeStrip() {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-[#D4AF37]/20 bg-[#0F3D2E] py-3.5">
      <div className="inline-block animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-block">
            <span className="mx-6 font-heading text-[10px] tracking-[0.25em] text-[#D4AF37]">
              {item}
            </span>
            <span className="text-[#D4AF37]/40">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
