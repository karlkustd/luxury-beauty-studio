"use client";

import { motion } from "framer-motion";

const offices = [
  { city: "GENEVA", address: "Rue du Rhone 48, 1204" },
  { city: "LONDON", address: "45 New Bond Street, Mayfair" },
  { city: "NEW YORK", address: "725 Fifth Avenue, Suite 1200" },
];

export function ContactLandscape() {
  return (
    <section className="h-screen w-screen overflow-hidden bg-[#0B0B0B]">
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 40%, rgba(15,61,46,0.5) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(0,200,83,0.05) 0%, transparent 40%)" }} aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-botanical opacity-15" aria-hidden />

      <div className="relative z-10 flex h-full">
        {/* Left info */}
        <div className="flex w-[40%] flex-col justify-center px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="font-heading text-[10px] tracking-[0.35em] text-[#D4AF37]">GET IN TOUCH</span>
            <h1 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.08] text-[#F0EAD6]">
              Let Us Find Your
              <br />
              <em className="italic text-[#D4AF37]">Perfect Stone</em>
            </h1>
            <p className="mt-5 max-w-sm text-[0.82rem] font-light leading-[1.8] text-white/40">
              Whether you&apos;re searching for a rare emerald or commissioning a bespoke ring, our GIA-certified gemologists are here.
            </p>

            <div className="mt-8 space-y-3">
              <a href="mailto:concierge@verdura.com" className="flex items-center gap-3 text-sm text-[#D4AF37] transition hover:text-[#E8C547]">
                <span className="flex h-8 w-8 items-center justify-center border border-[#D4AF37]/30 text-sm">&#9993;</span>
                concierge@verdura.com
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-white/40 transition hover:text-[#D4AF37]">
                <span className="flex h-8 w-8 items-center justify-center border border-white/15 text-sm">&#9742;</span>
                WhatsApp Concierge
              </a>
            </div>

            <div className="mt-8">
              <div className="font-heading text-[9px] tracking-[0.2em] text-[#D4AF37] mb-3">SHOWROOMS</div>
              <div className="flex gap-4">
                {offices.map((o) => (
                  <div key={o.city} className="border-l border-[#D4AF37]/20 pl-3">
                    <div className="font-heading text-[8px] tracking-[0.15em] text-[#F0EAD6]">{o.city}</div>
                    <div className="mt-0.5 text-[10px] text-white/30">{o.address}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right form */}
        <div className="flex-1 flex items-center justify-center px-10">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-lg space-y-4 border border-[#D4AF37]/12 bg-white/[0.02] p-8 backdrop-blur-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-heading text-[8px] tracking-[0.15em] text-[#D4AF37]">FIRST NAME</label>
                <input type="text" className="w-full border border-[#D4AF37]/15 bg-transparent px-3 py-2.5 text-sm text-[#F0EAD6] outline-none focus:border-[#D4AF37]/50 placeholder:text-white/15 transition" placeholder="Alexandra" />
              </div>
              <div>
                <label className="mb-1.5 block font-heading text-[8px] tracking-[0.15em] text-[#D4AF37]">LAST NAME</label>
                <input type="text" className="w-full border border-[#D4AF37]/15 bg-transparent px-3 py-2.5 text-sm text-[#F0EAD6] outline-none focus:border-[#D4AF37]/50 placeholder:text-white/15 transition" placeholder="Petrova" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block font-heading text-[8px] tracking-[0.15em] text-[#D4AF37]">EMAIL</label>
              <input type="email" className="w-full border border-[#D4AF37]/15 bg-transparent px-3 py-2.5 text-sm text-[#F0EAD6] outline-none focus:border-[#D4AF37]/50 placeholder:text-white/15 transition" placeholder="alexandra@example.com" />
            </div>
            <div>
              <label className="mb-1.5 block font-heading text-[8px] tracking-[0.15em] text-[#D4AF37]">INQUIRY TYPE</label>
              <select className="w-full appearance-none border border-[#D4AF37]/15 bg-transparent px-3 py-2.5 text-sm text-white/40 outline-none focus:border-[#D4AF37]/50 transition">
                <option value="">Select type</option>
                <option>Gem Consultation</option>
                <option>Custom Design</option>
                <option>Valuation</option>
                <option>Auction Inquiry</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block font-heading text-[8px] tracking-[0.15em] text-[#D4AF37]">MESSAGE</label>
              <textarea rows={3} className="w-full resize-none border border-[#D4AF37]/15 bg-transparent px-3 py-2.5 text-sm text-[#F0EAD6] outline-none focus:border-[#D4AF37]/50 placeholder:text-white/15 transition" placeholder="Tell us about the gemstone you seek..." />
            </div>
            <button type="submit" className="w-full border border-[#D4AF37] bg-[#D4AF37] py-3 font-heading text-[10px] tracking-[0.2em] text-[#0B0B0B] transition-all hover:bg-transparent hover:text-[#D4AF37]">
              SEND INQUIRY
            </button>
            <p className="text-center text-[9px] text-white/20">We respond within 24 hours.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
