"use client";

import { motion } from "framer-motion";

const offices = [
  { city: "Geneva", address: "Rue du Rhone 48, 1204 Geneva, Switzerland", phone: "+41 22 310 1234" },
  { city: "London", address: "45 New Bond Street, Mayfair, London W1S 1DG", phone: "+44 20 7629 5678" },
  { city: "New York", address: "725 Fifth Avenue, Suite 1200, New York, NY 10022", phone: "+1 212 555 0199" },
];

export function ContactForm() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0B0B]">
      {/* Background emerald landscape */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(15,61,46,0.6) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(0,200,83,0.08) 0%, transparent 40%), linear-gradient(180deg, #0B0B0B 0%, #0A2A1E 50%, #0B0B0B 100%)",
          }}
        />
        <div className="absolute inset-0 bg-botanical opacity-20" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-heading text-[10px] tracking-[0.3em] text-[#D4AF37]">
              GET IN TOUCH
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] text-[#F0EAD6]">
              Let Us Find Your
              <br />
              <em className="italic text-[#D4AF37]">Perfect Stone</em>
            </h1>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/45">
              Whether you are searching for a rare Colombian emerald, commissioning
              a bespoke engagement ring, or seeking expert gem valuation -- our
              team of GIA-certified gemologists is here to help.
            </p>

            {/* Contact methods */}
            <div className="mt-10 space-y-4">
              <a
                href="mailto:concierge@verdura.com"
                className="flex items-center gap-3 text-sm text-[#D4AF37] transition hover:text-[#E8C547]"
              >
                <span className="flex h-10 w-10 items-center justify-center border border-[#D4AF37]/30 text-lg">
                  &#9993;
                </span>
                concierge@verdura.com
              </a>
              <a
                href="https://wa.me/41223101234"
                className="flex items-center gap-3 text-sm text-white/50 transition hover:text-[#D4AF37]"
              >
                <span className="flex h-10 w-10 items-center justify-center border border-white/15 text-lg">
                  &#9742;
                </span>
                WhatsApp Concierge
              </a>
            </div>

            {/* Offices */}
            <div className="mt-12">
              <div className="font-heading text-[10px] tracking-[0.2em] text-[#D4AF37] mb-4">
                SHOWROOMS
              </div>
              <div className="space-y-4">
                {offices.map((o) => (
                  <div key={o.city} className="border-l-2 border-[#D4AF37]/20 pl-4">
                    <div className="font-heading text-[10px] tracking-[0.15em] text-[#F0EAD6]">
                      {o.city.toUpperCase()}
                    </div>
                    <div className="mt-1 text-[11px] text-white/35">{o.address}</div>
                    <div className="text-[11px] text-white/35">{o.phone}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 rounded-sm border border-[#D4AF37]/15 bg-white/[0.03] p-8 backdrop-blur-sm lg:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-heading text-[9px] tracking-[0.15em] text-[#D4AF37]">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#D4AF37]/20 bg-transparent px-4 py-3 text-sm text-[#F0EAD6] outline-none transition-colors focus:border-[#D4AF37]/60 placeholder:text-white/20"
                    placeholder="Alexandra"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-heading text-[9px] tracking-[0.15em] text-[#D4AF37]">
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#D4AF37]/20 bg-transparent px-4 py-3 text-sm text-[#F0EAD6] outline-none transition-colors focus:border-[#D4AF37]/60 placeholder:text-white/20"
                    placeholder="Petrova"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-heading text-[9px] tracking-[0.15em] text-[#D4AF37]">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full border border-[#D4AF37]/20 bg-transparent px-4 py-3 text-sm text-[#F0EAD6] outline-none transition-colors focus:border-[#D4AF37]/60 placeholder:text-white/20"
                  placeholder="alexandra@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block font-heading text-[9px] tracking-[0.15em] text-[#D4AF37]">
                  INQUIRY TYPE
                </label>
                <select className="w-full appearance-none border border-[#D4AF37]/20 bg-transparent px-4 py-3 text-sm text-white/50 outline-none transition-colors focus:border-[#D4AF37]/60">
                  <option value="">Select an inquiry type</option>
                  <option value="consultation">Gem Consultation</option>
                  <option value="custom">Custom Design</option>
                  <option value="valuation">Valuation Services</option>
                  <option value="auction">Auction Inquiry</option>
                  <option value="wholesale">Wholesale / Trade</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block font-heading text-[9px] tracking-[0.15em] text-[#D4AF37]">
                  MESSAGE
                </label>
                <textarea
                  rows={5}
                  className="w-full resize-none border border-[#D4AF37]/20 bg-transparent px-4 py-3 text-sm text-[#F0EAD6] outline-none transition-colors focus:border-[#D4AF37]/60 placeholder:text-white/20"
                  placeholder="Tell us about the gemstone or design you're looking for..."
                />
              </div>
              <button
                type="submit"
                className="w-full border border-[#D4AF37] bg-[#D4AF37] py-3.5 font-heading text-[10px] tracking-[0.2em] text-[#0B0B0B] transition-all hover:bg-transparent hover:text-[#D4AF37]"
              >
                SEND INQUIRY
              </button>
              <p className="text-center text-[10px] text-white/25">
                We respond within 24 hours. For urgent inquiries, use WhatsApp.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
