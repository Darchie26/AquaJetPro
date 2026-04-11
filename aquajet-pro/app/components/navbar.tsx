"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Service Area", href: "#service-area" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/[0.08]">
      {/* MAIN NAV */}
      <nav className="flex items-center justify-between px-6 md:px-12 h-[72px]">

        {/* Logo */}
        <Link href="#" className="flex items-center no-underline">
          <Image
            src="/AquaJetPro-Logo.png"
            alt="AquaJet Pro"
            width={160}
            height={48}
            className="h-24 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-200 no-underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-white/60 border border-white/15 px-[18px] py-[9px] rounded-lg hover:border-[#03ffff]/40 hover:text-[#03ffff] transition-all duration-200 bg-transparent cursor-pointer">
            Sign In
          </button>
          <button className="text-sm font-bold text-black bg-[#ff00f3] px-5 py-[9px] rounded-lg hover:brightness-110 transition-all duration-200 border-none cursor-pointer">
            Book a Clean →
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-[2px] rounded-sm transition-all duration-200 ${mobileOpen ? "bg-[#ff00f3] rotate-45 translate-y-[7px]" : "bg-white/60"}`} />
          <span className={`block w-[22px] h-[2px] rounded-sm transition-all duration-200 ${mobileOpen ? "opacity-0" : "bg-white/60"}`} />
          <span className={`block w-[22px] h-[2px] rounded-sm transition-all duration-200 ${mobileOpen ? "bg-[#ff00f3] -rotate-45 -translate-y-[7px]" : "bg-white/60"}`} />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-b border-white/[0.07] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[15px] font-medium text-white/60 py-3 border-b border-white/[0.06] last:border-b-0 hover:text-white transition-colors no-underline"
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-3 w-full bg-[#ff00f3] text-black font-bold text-[15px] py-3 rounded-lg hover:brightness-110 transition-all border-none cursor-pointer">
            Book a Clean →
          </button>
        </div>
      )}
    </header>
  );
}