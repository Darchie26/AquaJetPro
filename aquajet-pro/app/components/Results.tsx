"use client";

import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/app/components/ui/image-comparison";

const comparisons = [
  {
    label: "Residential Bin",
    location: "Myers Park, Charlotte",
    before: "/results/before-1.jpg",
    afterImg: "/results/after-1.jpg",
  },
  {
    label: "Large Recycling Bin",
    location: "Ballantyne, Charlotte",
    before: "/results/before-2.jpg",
    afterImg: "/results/after-2.jpg",
  },
  {
    label: "Commercial Bin",
    location: "University City, Charlotte",
    before: "/results/before-3.jpg",
    afterImg: "/results/after-3.jpg",
  },
];

function PlaceholderComparison({ label }: { label: string }) {
  return (
    <ImageComparison className="w-full h-full rounded-xl" enableHover>
      {/* Before placeholder */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900">
        <div className="w-16 h-16 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center mb-3">
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white/20">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M21 15L16 10L9 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-white/20 text-xs tracking-widest uppercase">Before Photo</p>
        <p className="text-white/10 text-[11px] mt-1">{label}</p>
      </div>

      {/* After placeholder */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #0f1a0f 100%)" }}
      >
        <div
          className="w-16 h-16 rounded-full border-2 border-dashed flex items-center justify-center mb-3"
          style={{ borderColor: "#03ffff40" }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" style={{ color: "#03ffff50" }}>
            <path d="M12 2C12 2 6 7.5 6 12C6 15.314 8.686 18 12 18C15.314 18 18 15.314 18 12C18 7.5 12 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M9 14L11 16L15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[11px] tracking-widest uppercase" style={{ color: "#03ffff60" }}>After Photo</p>
        <p className="text-[11px] mt-1" style={{ color: "#03ffff30" }}>{label}</p>
      </div>

      {/* Slider */}
      <ImageComparisonSlider className="bg-white/80 w-[2px]">
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
            <path d="M6 10H14M6 10L8.5 7.5M6 10L8.5 12.5M14 10L11.5 7.5M14 10L11.5 12.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </ImageComparisonSlider>
    </ImageComparison>
  );
}

export default function Results() {
  return (
    <section id="results" className="px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-medium tracking-[2px] uppercase text-[#03ffff] mb-3">
            Real Results
          </span>
          <h2 className="font-montserrat font-black text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-tight text-white mb-4">
            Before &{" "}
            <span className="text-[#ff00f3]">After</span>
          </h2>
          <p className="text-white/50 text-[16px] leading-relaxed max-w-md">
            Drag the slider to see the difference. Photos sent to every customer after each clean.
          </p>

          {/* Drag hint */}
          <div className="inline-flex items-center gap-2 mt-5 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
              <path d="M4 10H16M4 10L7 7M4 10L7 13M16 10L13 7M16 10L13 13" stroke="#ff00f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[12px] text-white/40 tracking-wide">Drag or hover to compare</span>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparisons.map((item) => (
            <div key={item.label} className="flex flex-col gap-3">
              {/* Card */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.08]">
                <PlaceholderComparison label={item.label} />
              </div>

              {/* Labels */}
              <div className="flex items-center justify-between px-1">
                <div>
                  <p className="text-[13px] font-semibold text-white">{item.label}</p>
                  <p className="text-[12px] text-white/40">{item.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.06] text-white/40 border border-white/[0.06]">
                    Before
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full border" style={{ background: "#03ffff15", color: "#03ffff", borderColor: "#03ffff30" }}>
                    After
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon note */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <p className="text-[12px] text-white/25 tracking-widest uppercase whitespace-nowrap">
            Real photos coming soon
          </p>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

      </div>
    </section>
  );
}