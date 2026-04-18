import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

const PRICES = {
  "One-Time Clean": {
    amount: 4500,
    name: "AquaJet Pro — One-Time Clean (2 Bins)",
    mode: "payment" as const,
  },
  "Never Touch Your Trash Again": {
    amount: 5500,
    name: "AquaJet Pro — Never Touch Your Trash Again ($55/mo)",
    mode: "subscription" as const,
  },
  "Monthly Wash": {
    amount: 3500,
    name: "AquaJet Pro — Monthly Wash (2 Bins)",
    mode: "subscription" as const,
  },
};

export async function POST(req: NextRequest) {
  try {
    const { plan } = await req.json();
    const priceConfig = PRICES[plan as keyof typeof PRICES];

    if (!priceConfig) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    let session;

    if (priceConfig.mode === "payment") {
      session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: priceConfig.amount,
              product_data: {
                name: priceConfig.name,
                description: "Professional trash can cleaning — Charlotte, NC",
              },
            },
            quantity: 1,
          },
        ],
        success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/#pricing`,
      });
    } else {
      session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: priceConfig.amount,
              recurring: { interval: "month" },
              product_data: {
                name: priceConfig.name,
                description: "Professional trash can cleaning — Charlotte, NC",
              },
            },
            quantity: 1,
          },
        ],
        success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/#pricing`,
      });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
console.log("Key loaded:", !!process.env.STRIPE_SECRET_KEY)