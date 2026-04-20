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

async function saveToAirtable(data: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  plan: string;
  trashDay: string;
  notes: string;
}) {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || "Bookings";
  const apiKey = process.env.AIRTABLE_API_KEY;

  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          "First Name": data.firstName,
          "Last Name": data.lastName,
          "Phone": data.phone,
          "Email": data.email,
          "Address": data.address,
          "Plan": data.plan,
          "Trash Day": data.trashDay,
          "Notes": data.notes,
          "Created At": new Date().toISOString().split("T")[0],
        },
      }),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    console.error("Airtable error:", error);
    throw new Error("Failed to save to Airtable");
  }

  return res.json();
}

export async function POST(req: NextRequest) {
  try {
    const { plan, firstName, lastName, phone, email, address, trashDay, notes } =
      await req.json();

    const priceConfig = PRICES[plan as keyof typeof PRICES];

    if (!priceConfig) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    // Save to Airtable first
    await saveToAirtable({
      firstName,
      lastName,
      phone,
      email,
      address,
      plan,
      trashDay,
      notes: notes || "",
    });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    let session;

    if (priceConfig.mode === "payment") {
      session = await stripe.checkout.sessions.create({
        mode: "payment",
        customer_email: email,
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
        customer_email: email,
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
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}