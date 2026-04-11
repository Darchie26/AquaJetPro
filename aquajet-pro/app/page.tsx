import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/Hero";
import HowItWorks from "@/app/components/HowItWorks";
import Pricing from "@/app/components/Pricing";
import Results from "@/app/components/Results";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Results />
      <Pricing />

      {/* More sections go here: HowItWorks, Pricing, Reviews, BookingForm */}
    </main>
  );
}