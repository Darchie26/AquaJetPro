const steps = [
    {
      number: "01",
      title: "Book Online",
      description:
        "Choose your plan, enter your address, and check out securely in under 2 minutes. Pick a date that works for you — we sync around your trash pickup schedule.",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect x="6" y="8" width="28" height="26" rx="3" stroke="#ff00f3" strokeWidth="2" />
          <path d="M6 15H34" stroke="#ff00f3" strokeWidth="2" />
          <path d="M13 5V11" stroke="#ff00f3" strokeWidth="2" strokeLinecap="round" />
          <path d="M27 5V11" stroke="#ff00f3" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 22H20" stroke="#03ffff" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 28H17" stroke="#03ffff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="27" cy="27" r="4" stroke="#03ffff" strokeWidth="2" />
          <path d="M25.5 27L26.5 28L28.5 26" stroke="#03ffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      accent: "#ff00f3",
    },
    {
      number: "02",
      title: "We Show Up",
      description:
        "On your next trash day, our team arrives at your curb with a professional-grade hot water pressure washing unit. You don't need to be home.",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <path d="M4 28H30L27 18H7L4 28Z" stroke="#ff00f3" strokeWidth="2" strokeLinejoin="round" />
          <path d="M4 28H2V30H32V28" stroke="#ff00f3" strokeWidth="2" strokeLinecap="round" />
          <circle cx="10" cy="31" r="3" stroke="#03ffff" strokeWidth="2" />
          <circle cx="24" cy="31" r="3" stroke="#03ffff" strokeWidth="2" />
          <path d="M27 18L25 10H10L7 18" stroke="#ff00f3" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 10V6" stroke="#03ffff" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 6C20 6 23 4 26 6" stroke="#03ffff" strokeWidth="2" strokeLinecap="round" />
          <path d="M26 6L30 8" stroke="#03ffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      accent: "#03ffff",
    },
    {
      number: "03",
      title: "Done & Fresh",
      description:
        "Your bins are sanitized, deodorized, and back at the curb — spotless. You'll receive a before/after photo by text so you can see the difference.",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <path d="M12 8H28L30 32H10L12 8Z" stroke="#ff00f3" strokeWidth="2" strokeLinejoin="round" />
          <path d="M8 8H32" stroke="#ff00f3" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 8V6H24V8" stroke="#ff00f3" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 20L18.5 22.5L24 17" stroke="#03ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 14C34 16 35 19 34 22" stroke="#03ffff" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M34 22C33 25 31 27 28 28" stroke="#03ffff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      accent: "#ff00f3",
    },
  ];
  
  export default function HowItWorks() {
    return (
      <section id="how-it-works" className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-medium tracking-[2px] uppercase text-[#03ffff] mb-3">
              The Process
            </span>
            <h2 className="font-montserrat font-black text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-tight text-white mb-4">
              How It Works
            </h2>
            <p className="text-white/50 text-[16px] leading-relaxed max-w-md">
              Three simple steps — from booking to a spotless bin, we handle everything.
            </p>
          </div>
  
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
  
            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-[1px] bg-gradient-to-r from-[#ff00f3]/30 via-[#03ffff]/30 to-[#ff00f3]/30 z-0" />
  
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative z-10 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 flex flex-col gap-5 hover:border-white/20 transition-all duration-300 group"
              >
                {/* Step number + icon row */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-4">
                    {/* Number badge */}
                    <span
                      className="font-montserrat font-black text-[13px] tracking-[2px] px-3 py-1 rounded-full border w-fit"
                      style={{
                        color: step.accent,
                        borderColor: `${step.accent}40`,
                        backgroundColor: `${step.accent}10`,
                      }}
                    >
                      {step.number}
                    </span>
                    {/* Icon */}
                    <div>{step.icon}</div>
                  </div>
  
                  {/* Large faded step number */}
                  <span
                    className="font-montserrat font-black text-[72px] leading-none select-none mt-[-8px]"
                    style={{ color: `${step.accent}12` }}
                  >
                    {step.number}
                  </span>
                </div>
  
                {/* Text */}
                <div>
                  <h3 className="font-montserrat font-black text-[20px] tracking-tight text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-white/50 leading-[1.75]">
                    {step.description}
                  </p>
                </div>
  
                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to right, ${step.accent}, transparent)`,
                  }}
                />
              </div>
            ))}
          </div>
  
          {/* CTA */}
          <div className="flex justify-center mt-12">
            <button className="text-[15px] font-bold bg-[#ff00f3] text-black px-8 py-4 rounded-[10px] hover:brightness-110 transition-all border-none cursor-pointer">
              Book Your First Clean →
            </button>
          </div>
  
        </div>
      </section>
    );
  }