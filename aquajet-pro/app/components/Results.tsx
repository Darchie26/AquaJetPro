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
    before: "/Before1.jpg",
    afterImg: "/After1.jpg",
  },
  {
    label: "Large Recycling Bin",
    location: "Ballantyne, Charlotte",
    before: "/Before2.jpg",
    afterImg: "/After2.jpg",
  },
  {
    label: "Commercial Bin",
    location: "University City, Charlotte",
    before: "/Before3.jpg",
    afterImg: "/After3.jpg",
  },
];

function RealComparison({ before, after, label }: { before: string; after: string; label: string }) {
  return (
    <ImageComparison className="w-full h-full rounded-xl" enableHover>
      <ImageComparisonImage src={before} alt={`Before — ${label}`} position="right" />
      <ImageComparisonImage src={after} alt={`After — ${label}`} position="left" />

      {/* Slider */}
      <ImageComparisonSlider className="bg-white/80 w-[2px]">
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
            <path
              d="M6 10H14M6 10L8.5 7.5M6 10L8.5 12.5M14 10L11.5 7.5M14 10L11.5 12.5"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Before / After labels on the slider */}
        <div className="absolute top-3 right-3 text-[11px] font-semibold text-white bg-black/50 px-2 py-0.5 rounded-full">
          Before
        </div>
        <div
          className="absolute top-3 left-3 text-[11px] font-semibold px-2 py-0.5 rounded-full"
          style={{ background: "#03ffff20", color: "#03ffff", border: "1px solid #03ffff40" }}
        >
          After
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
                <RealComparison
                  before={item.before}
                  after={item.afterImg}
                  label={item.label}
                />
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

        {/* Remove coming soon note since we have real photos now */}

      </div>
    </section>
  );
}