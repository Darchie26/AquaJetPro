import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center max-w-md">

        {/* Icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-8 border-2"
          style={{ background: "#03ffff15", borderColor: "#03ffff40" }}
        >
          <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
            <path
              d="M10 20L17 27L30 13"
              stroke="#03ffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="font-montserrat font-black text-[42px] leading-tight tracking-tight text-white mb-4">
          You&apos;re All{" "}
          <span style={{ color: "#ff00f3" }}>Set!</span>
        </h1>

        <p className="text-white/50 text-[16px] leading-relaxed mb-3">
          Your booking is confirmed. We&apos;ll text you within 24 hours to
          schedule your first clean.
        </p>

        <p className="text-white/30 text-[14px] leading-relaxed mb-10">
          Check your email for a receipt from Stripe. Questions? Reach us
          at{" "}
          <span style={{ color: "#03ffff" }}>hello@aquajetpro.com</span>
        </p>

        {/* Divider */}
        <div className="w-full border-t border-white/[0.07] mb-10" />

        {/* What happens next */}
        <div className="w-full flex flex-col gap-4 mb-10 text-left">
          {[
            { step: "01", text: "Check your email for a payment receipt" },
            { step: "02", text: "We'll text you within 24hrs to confirm your schedule" },
            { step: "03", text: "Sit back — we'll handle everything on trash day" },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-4">
              <span
                className="font-montserrat font-black text-[12px] tracking-[2px] px-2.5 py-1 rounded-full shrink-0"
                style={{
                  color: "#ff00f3",
                  background: "#ff00f315",
                  border: "1px solid #ff00f330",
                }}
              >
                {item.step}
              </span>
              <p className="text-[14px] text-white/60">{item.text}</p>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="text-[15px] font-bold text-black px-8 py-3.5 rounded-[10px] no-underline transition-all"
          style={{ background: "#ff00f3" }}
        >
          Back to Home →
        </Link>
      </div>
    </main>
  );
}