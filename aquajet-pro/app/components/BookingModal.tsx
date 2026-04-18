"use client";

import { useState } from "react";

type Step = 1 | 2 | 3;

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  trashDay: string;
  notes: string;
};

type Props = {
  plan: { name: string; price: string; cadence: string } | null;
  onClose: () => void;
  onConfirm: (planName: string) => void;
};

export default function BookingModal({ plan, onClose, onConfirm }: Props) {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    trashDay: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  if (!plan) return null;

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep1 = () => {
    const e: Partial<FormData> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.address.trim()) e.address = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    if (!form.trashDay) {
      setErrors({ trashDay: "Please select a pickup day" });
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => (prev - 1) as Step);
  };

  const handleSubmit = () => {
    onConfirm(plan.name);
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-white/[0.05] border rounded-xl px-4 py-3 text-white text-[14px] outline-none transition-all placeholder:text-white/25 ${
      errors[field]
        ? "border-red-500/60 focus:border-red-500"
        : "border-white/[0.1] focus:border-[#03ffff]/50"
    }`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-lg bg-[#0f0f0f] border border-white/[0.08] rounded-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/[0.06]">
          <div>
            <p className="text-[11px] font-semibold tracking-[2px] uppercase text-[#ff00f3] mb-1">
              {plan.name}
            </p>
            <h2 className="font-montserrat font-black text-[22px] text-white leading-tight">
              {step === 1 && "Your Contact Info"}
              {step === 2 && "Pickup Schedule"}
              {step === 3 && "Anything Else?"}
            </h2>
            <p className="text-[13px] text-white/40 mt-1">
              {step === 1 && "So we know how to reach you and where to show up."}
              {step === 2 && "What day does the city pick up your trash?"}
              {step === 3 && "Any additional info helps us serve you better."}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center hover:bg-white/10 transition-colors border-none cursor-pointer shrink-0 ml-4"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
              <path d="M3 3L13 13M13 3L3 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-2 px-8 py-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-all"
                style={
                  s === step
                    ? { background: "#ff00f3", color: "#000" }
                    : s < step
                    ? { background: "#03ffff20", color: "#03ffff", border: "1px solid #03ffff40" }
                    : { background: "transparent", color: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.1)" }
                }
              >
                {s < step ? (
                  <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                    <path d="M2 6L5 9L10 3" stroke="#03ffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : s}
              </div>
              {s < 3 && (
                <div
                  className="h-px w-8 transition-all"
                  style={{ background: s < step ? "#03ffff30" : "rgba(255,255,255,0.08)" }}
                />
              )}
            </div>
          ))}
          <span className="text-[12px] text-white/30 ml-2">Step {step} of 3</span>
        </div>

        {/* Form body */}
        <div className="px-8 pb-8">

          {/* STEP 1 — Contact Info */}
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[12px] text-white/50 mb-1.5 block">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    className={inputClass("firstName")}
                  />
                  {errors.firstName && <p className="text-red-400 text-[11px] mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="text-[12px] text-white/50 mb-1.5 block">Last Name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    className={inputClass("lastName")}
                  />
                  {errors.lastName && <p className="text-red-400 text-[11px] mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="text-[12px] text-white/50 mb-1.5 block">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(704) 555-0100"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputClass("phone")}
                />
                {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="text-[12px] text-white/50 mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClass("email")}
                />
                {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="text-[12px] text-white/50 mb-1.5 block">Service Address</label>
                <input
                  type="text"
                  placeholder="123 Main St, Charlotte, NC 28202"
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                  className={inputClass("address")}
                />
                {errors.address && <p className="text-red-400 text-[11px] mt-1">{errors.address}</p>}
              </div>

              {/* Trust note */}
              <div className="flex items-start gap-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl p-3.5 mt-1">
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0 mt-[1px]">
                  <circle cx="8" cy="8" r="7" stroke="#03ffff" strokeWidth="1.5" strokeOpacity="0.5" />
                  <path d="M8 7V11" stroke="#03ffff" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="8" cy="5" r="0.75" fill="#03ffff" />
                </svg>
                <p className="text-[12px] text-white/35 leading-relaxed">
                  This is so we can contact you and show up on the right day. We&apos;ll never share your info with anyone.
                </p>
              </div>
            </div>
          )}

          {/* STEP 2 — Trash Pickup Day */}
          {step === 2 && (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                {DAYS.map((day) => (
                  <button
                    key={day}
                    onClick={() => update("trashDay", day)}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition-all cursor-pointer"
                    style={
                      form.trashDay === day
                        ? { background: "#ff00f315", borderColor: "#ff00f3", color: "#ff00f3" }
                        : { background: "transparent", borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }
                    }
                  >
                    <div
                      className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all"
                      style={
                        form.trashDay === day
                          ? { borderColor: "#ff00f3", background: "#ff00f3" }
                          : { borderColor: "rgba(255,255,255,0.2)" }
                      }
                    >
                      {form.trashDay === day && (
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      )}
                    </div>
                    <span className="text-[14px] font-medium">{day}</span>
                  </button>
                ))}
              </div>
              {errors.trashDay && (
                <p className="text-red-400 text-[12px]">{errors.trashDay}</p>
              )}
            </div>
          )}

          {/* STEP 3 — Notes */}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-[12px] text-white/50 mb-1.5 block">
                  Additional Notes <span className="text-white/25">(optional)</span>
                </label>
                <textarea
                  placeholder="e.g. Gate code is #1234, bins are in the backyard, have 3 bins instead of 2, special instructions..."
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  rows={5}
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-[14px] outline-none transition-all placeholder:text-white/25 focus:border-[#03ffff]/50 resize-none"
                />
              </div>

              {/* Summary */}
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 flex flex-col gap-2.5">
                <p className="text-[11px] font-semibold tracking-[1.5px] uppercase text-white/30 mb-1">
                  Booking Summary
                </p>
                {[
                  { label: "Plan", value: plan.name },
                  { label: "Price", value: `${plan.price} / ${plan.cadence}` },
                  { label: "Name", value: `${form.firstName} ${form.lastName}` },
                  { label: "Phone", value: form.phone },
                  { label: "Address", value: form.address },
                  { label: "Pickup Day", value: form.trashDay },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-start gap-4">
                    <span className="text-[12px] text-white/35 shrink-0">{row.label}</span>
                    <span className="text-[12px] text-white/70 text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nav buttons */}
          <div className={`flex gap-3 mt-6 ${step > 1 ? "justify-between" : "justify-end"}`}>
            {step > 1 && (
              <button
                onClick={handleBack}
                className="px-6 py-3 rounded-xl text-[14px] font-semibold text-white/50 border border-white/[0.1] bg-transparent hover:text-white hover:border-white/20 transition-all cursor-pointer"
              >
                ← Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={handleNext}
                className="px-8 py-3 rounded-xl text-[14px] font-bold text-black transition-all cursor-pointer border-none"
                style={{ background: "#ff00f3" }}
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 rounded-xl text-[14px] font-bold text-black transition-all cursor-pointer border-none"
                style={{ background: "#ff00f3" }}
              >
                Proceed to Payment →
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
