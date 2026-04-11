const stats = [
  { num: "600", suffix: "+", label: "Happy Customers" },
  { num: "99", suffix: "%", label: "Satisfaction Rate" },
  { num: "48", suffix: "hr", label: "Booking Response" },
  { num: "100", suffix: "%", label: "Eco-Safe Products" },
];

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 md:px-12 pt-20 md:pt-24 pb-0">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-[#03ffff]/10 border border-[#03ffff]/25 rounded-full px-4 py-1.5 mb-7">
        <span className="w-1.5 h-1.5 rounded-full bg-[#03ffff] shrink-0" />
        <span className="text-xs font-medium tracking-[1.5px] uppercase text-[#03ffff]">
          Now serving Charlotte, NC
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-montserrat font-black text-[clamp(40px,5vw,64px)] leading-[1.05] tracking-tight text-white mb-5 max-w-2xl">
        Your Bins Deserve<br />
        a <em className="not-italic text-[#ff00f3]">Power Wash</em>{" "}
        <em className="not-italic text-[#03ffff]">Too.</em>
      </h1>

      {/* Subtext */}
      <p className="text-[17px] text-white/50 leading-[1.75] mb-9 max-w-lg">
        AquaJet Pro brings professional trash can sanitizing straight to your
        curb — on trash day, no effort required.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        <button className="text-[15px] font-bold bg-[#ff00f3] text-black px-7 py-3.5 rounded-[10px] hover:brightness-110 transition-all border-none cursor-pointer">
          Book Your First Clean →
        </button>
        <button className="text-[15px] font-medium bg-transparent text-white/60 border border-white/15 px-6 py-3.5 rounded-[10px] hover:text-[#03ffff] hover:border-[#03ffff]/30 transition-all cursor-pointer">
          See How It Works
        </button>
      </div>

      {/* Stats Bar */}
      <div className="w-full border-t border-white/[0.06]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center py-7 border-white/[0.07] ${
                i % 2 === 0 && i !== stats.length - 1 ? "border-r" : ""
              } ${i < 2 ? "border-b md:border-b-0" : ""} ${
                i < 3 ? "md:border-r" : ""
              }`}
            >
              <span className="font-montserrat font-black text-[28px] text-white leading-none">
                {stat.num}
                <span
                  className={
                    i % 2 === 0 ? "text-[#ff00f3]" : "text-[#03ffff]"
                  }
                >
                  {stat.suffix}
                </span>
              </span>
              <span className="text-xs text-white/40 tracking-wide mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}