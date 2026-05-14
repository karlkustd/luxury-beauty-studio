"use client";

import { motion } from "framer-motion";

export function BookContact() {
  const wa = "https://wa.me/15551234567?text=Hi%20Maison%20Noir%20%E2%80%94%20I%27d%20like%20to%20book";

  return (
    <>
      <section id="book" className="scroll-mt-24 bg-[#faf8f5] py-24 dark:bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-sm border border-black/10 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#9a7b2e] dark:text-[#c9a962]">Booking</p>
              <h2 className="mt-3 font-display text-3xl text-neutral-900 dark:text-[#f5f0e8]">Appointments</h2>
              <p className="mt-3 text-sm text-neutral-600 dark:text-white/55">
                Full Stripe + calendar flow can plug in here (see README). For now: WhatsApp for fast holds, email for
                detailed briefs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center border border-[#25D366]/40 bg-[#25D366]/10 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#128C7E] transition hover:bg-[#25D366]/20 dark:text-[#5fe08a]"
                >
                  WhatsApp booking
                </a>
                <a
                  href="mailto:book@maisonnoir.studio"
                  className="inline-flex flex-1 items-center justify-center border border-black/15 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-neutral-900 transition hover:border-[#c9a962] dark:border-white/20 dark:text-[#f5f0e8] dark:hover:border-[#c9a962]"
                >
                  Email concierge
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="flex flex-col justify-center rounded-sm border border-dashed border-black/15 p-8 dark:border-white/15"
            >
              <p className="text-sm text-neutral-600 dark:text-white/55">
                Next steps for full-stack: <strong className="text-neutral-900 dark:text-white/85">MongoDB</strong> or{" "}
                <strong className="text-neutral-900 dark:text-white/85">Supabase</strong> for slots,{" "}
                <strong className="text-neutral-900 dark:text-white/85">Stripe</strong> for deposits, and an{" "}
                <strong className="text-neutral-900 dark:text-white/85">admin</strong> route for confirmations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-black/5 bg-[#f0ebe3] py-24 dark:border-white/5 dark:bg-[#060606]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#9a7b2e] dark:text-[#c9a962]">Contact</p>
            <h2 className="mt-3 font-display text-4xl text-neutral-900 dark:text-[#f5f0e8]">Visit the studio</h2>
            <p className="mt-4 text-neutral-600 dark:text-white/55">
              Replace with your address. Map embed uses Google Maps iframe pattern — add your own embed URL.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-neutral-800 dark:text-white/70">
              <li>Maison Noir Studio</li>
              <li>9000 Melrose Ave — Suite 000</li>
              <li>Los Angeles, CA</li>
            </ul>
            <a href="#book" className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6d28] underline-offset-4 hover:underline dark:text-[#c9a962]">
              Book appointment →
            </a>
          </div>
          <div className="min-h-[280px] overflow-hidden rounded-sm ring-1 ring-black/10 dark:ring-white/10">
            <iframe
              title="Studio map"
              className="h-full min-h-[280px] w-full border-0 grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Melrose+Avenue+West+Hollywood+CA&z=14&output=embed"
            />
          </div>
        </div>
      </section>
    </>
  );
}
