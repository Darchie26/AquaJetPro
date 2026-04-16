"use client";

const plans = [
  {
    name: "One-Time Clean",
    price: "$45",
    original: null,
    cadence: "one-time",
    description: "A single deep clean whenever you need it. No commitment required.",
    features: [
      { title: "Hot Water Pressure Wash", desc: "High-pressure hot water blasts away grime and bacteria" },
      { title: "2 Bin Cleaning Included", desc: "Trash and recycling bins both cleaned in one visit" },
      { title: "Eco-Safe Deodorizer & Sanitize", desc: "Non-toxic solution that eliminates odors at the source" },
      { title: "Before & After Photo", desc: "Sent directly to your phone after every clean" },
      { title: "Curbside Service", desc: "We come to you — no need to drag bins anywhere" },
    ],
    cta: "Book a Clean",
    popular: false,
    accent: "#03ffff",
  },
  {
    name: "Never Touch Your Trash Again",
    price: "$55",
    original: null,
    cadence: "per month",
    description: "Never touch a dirty trash bin again—just clean, fresh bins delivered to your curb every month.",
    features: [
      { title: "Weekly Bin-to-Curb Service", desc: "We move your bins to the curb before pickup and return them after" },
      { title: "Monthly Trash Bin Power Wash", desc: "Deep power wash included every month at no extra charge" },

      { title: "2 Bin Cleaning Included", desc: "Trash, recycling, and compost bins supported" },
      { title: "Weekly Deodorizer", desc: "Fresh deodorizer applied to your bins each week" },
      { title: "Photo Updates & Notifications", desc: "Get notified when your bins are moved with photo confirmation" },
      { title: "Cancel Anytime", desc: "No long-term commitment — pause or cancel with one text" },
  
    ],
    cta: "Get Started",
    popular: true,
    accent: "#ff00f3",
  },
  {
    name: "Monthly Wash",
    price: "$35",
    original: null,
    cadence: "per month",
    description: "Recurring monthly power wash to keep your bins fresh all year long.",
    features: [
      { title: "Monthly Trash Bin Power Wash", desc: "Deep clean once a month on your trash day schedule" },
      { title: "2 Bin Cleaning Included", desc: "Trash and recycling bins both cleaned every month" },
      { title: "Hot Water Pressure Wash", desc: "High-pressure hot water blasts away grime and bacteria" },
      { title: "Eco-Safe Deodorizer & Sanitize", desc: "Non-toxic solution that eliminates odors at the source" },
      { title: "Photo Updates & Notifications", desc: "Get notified after each clean with before & after photos" },
      { title: "Cancel Anytime", desc: "No long-term commitment — pause or cancel with one text" },
    ],
    cta: "Subscribe Now",
    popular: false,
    accent: "#03ffff",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 md:px-12 py-24 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-medium tracking-[2px] uppercase text-[#ff00f3] mb-3">
            Simple Pricing
          </span>
          <h2 className="font-montserrat font-black text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-tight text-white mb-4">
            Never Touch Your <span className="text-[#ff00f3]">Trash</span> Again
          </h2>
          <p className="text-white/50 text-[16px] leading-relaxed max-w-md">
            No hidden fees. No contracts unless you want one. Just clean bins.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-[#ff00f3] bg-[#ff00f3]/[0.04]"
                  : "border border-white/[0.08] bg-white/[0.03] hover:border-white/20"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-[14px] left-1/2 -translate-x-1/2">
                  <span className="bg-[#ff00f3] text-black text-[11px] font-bold tracking-[1.5px] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <p
                className="text-[12px] font-semibold tracking-[2px] uppercase mb-4"
                style={{ color: plan.accent }}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div className="flex items-end gap-2 mb-5">
                <span className="font-montserrat font-black text-[52px] leading-none text-white">
                  {plan.price}
                </span>
                <span className="text-[14px] text-white/40 pb-2">
                  / {plan.cadence}
                </span>
              </div>

              <p className="text-[13px] text-white/40 leading-relaxed mb-6">
                {plan.description}
              </p>

              {/* Divider */}
              <div className="border-t border-white/[0.07] mb-6" />

              {/* Features */}
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature.title}
                    className="flex items-start gap-3"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 shrink-0 mt-[3px]"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7"
                        stroke={plan.accent}
                        strokeWidth="1.5"
                        strokeOpacity="0.4"
                      />
                      <path
                        d="M5 8L7 10L11 6"
                        stroke={plan.accent}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <p className="text-[13px] font-semibold text-white leading-snug">
                        {feature.title}
                      </p>
                      <p className="text-[12px] text-white/35 leading-relaxed mt-0.5">
                        {feature.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className="w-full py-3.5 rounded-xl font-bold text-[15px] transition-all duration-200 cursor-pointer"
                style={
                  plan.popular
                    ? {
                        background: "#ff00f3",
                        color: "#000000",
                        border: "none",
                      }
                    : {
                        background: "transparent",
                        color: plan.accent,
                        border: `1px solid ${plan.accent}40`,
                      }
                }
              >
                {plan.cta} →
              </button>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p className="text-center text-[13px] text-white/30 mt-8">
          All plans include curbside service in the Charlotte, NC area.
          Cancel subscriptions anytime with no penalty.
        </p>

      </div>
    </section>
  );
}