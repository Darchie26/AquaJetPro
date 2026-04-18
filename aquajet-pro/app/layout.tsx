import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AquaJet Pro — Charlotte's Trash Can Cleaning Service",
  description:
    "Professional trash can sanitizing at your curb. Serving Charlotte, NC. Book online in minutes.",
  metadataBase: new URL("https://aquajet.pro"),
  openGraph: {
    title: "AquaJet Pro — Charlotte's Trash Can Cleaning Service",
    description:
      "We come to your curb, pressure wash your bins, and leave them spotless. Book in 2 minutes.",
    url: "https://aquajet.pro",
    siteName: "AquaJet Pro",
    images: [
      {
        url: "/AquaJetPro-Logo.png",
        width: 1200,
        height: 630,
        alt: "AquaJet Pro — Professional Trash Can Cleaning in Charlotte NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AquaJet Pro — Charlotte's Trash Can Cleaning Service",
    description:
      "We come to your curb, pressure wash your bins, and leave them spotless. Book in 2 minutes.",
    images: ["/AquaJetPro-Logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}