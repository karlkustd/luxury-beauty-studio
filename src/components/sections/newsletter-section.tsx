"use client";

export function NewsletterSection() {
  return (
    <div className="border-t border-[#D4AF37]/15 bg-[#0F3D2E] px-4 py-16 text-center sm:px-6">
      <div className="mx-auto max-w-xl">
        <h3 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-light text-[#F0EAD6]">
          Join the Verdura Circle
        </h3>
        <p className="mt-3 text-[0.8rem] text-white/45">
          Receive exclusive access to rare acquisitions, private auctions, and
          gemological insights before they reach the world.
        </p>
        <form
          className="mt-8 flex max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 border border-[#D4AF37]/30 bg-white/5 px-5 py-3 text-sm text-[#F0EAD6] placeholder:text-white/30 outline-none focus:border-[#D4AF37]/60 transition-colors"
          />
          <button
            type="submit"
            className="bg-[#D4AF37] px-6 py-3 font-heading text-[10px] tracking-[0.2em] text-[#0B0B0B] transition-colors hover:bg-[#E8C547]"
          >
            JOIN
          </button>
        </form>
      </div>
    </div>
  );
}
