"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function ChaloBuildPricing() {
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">("annual");

  const plans = [
    {
      name: "Starter Gym",
      badge: "INDEPENDENT STUDIOS",
      tagline: "Perfect for single-location gyms and crossfit boxes launching online.",
      priceMonthly: 1999,
      priceAnnual: 1499,
      popular: false,
      features: [
        "Custom Branded Public Website",
        "Up to 150 Active Members",
        "WhatsApp 1-Day Pass Lead Magnet",
        "1-Tap Daily Attendance Check-Ins",
        "Basic Payment Recording (UPI / Cash)",
        "Mobile Responsive Staff Portal",
        "48-Hour Turnkey Deployment",
      ],
      ctaText: "Launch Starter Gym",
      ctaLink: "#enquire",
    },
    {
      name: "Growth Club",
      badge: "MOST POPULAR",
      tagline: "For ambitious fitness clubs wanting automated renewals and full control.",
      priceMonthly: 3499,
      priceAnnual: 2699,
      popular: true,
      features: [
        "Everything in Starter, plus:",
        "Up to 600 Active Members",
        "WhatsApp Expiry & Renewal Alerts",
        "Digital Receipts with Gym Logo",
        "Owner vs Staff Role Permissions",
        "Custom Domain (.in / .com included)",
        "Priority WhatsApp Support",
        "Free 1-Click Excel Member Import",
      ],
      ctaText: "Get Growth Club",
      ctaLink: "#enquire",
    },
    {
      name: "Multi-Branch Pro",
      badge: "CHAINS & FRANCHISES",
      tagline: "For gym chains, fitness franchises, and high-volume commercial centers.",
      priceMonthly: 6999,
      priceAnnual: 5499,
      popular: false,
      features: [
        "Everything in Growth Club, plus:",
        "Unlimited Active Members",
        "Multi-Branch Switching in One Dashboard",
        "Custom Feature Integrations & Reports",
        "Biometric Machine API Support",
        "Dedicated Account Engineer",
        "99.9% Uptime SLA Guarantee",
        "Staff Training & Onboarding Session",
      ],
      ctaText: "Talk to Our Team",
      ctaLink: "#enquire",
    },
  ];

  return (
    <section id="pricing" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-100/70 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-cyan-800 shadow-2xs">
            <Sparkles className="size-3 text-cyan-600" />
            <span>TRANSPARENT VALUE</span>
          </div>
          <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Simple, Transparent Pricing. Zero Commission.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Unlike aggregators that take 15-20% of your membership fees, ChaloBuild charges a flat predictable software fee. Every rupee of your members&apos; dues is 100% yours.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-6 inline-flex items-center gap-2 p-1 rounded-xl bg-white border border-slate-200 shadow-xs">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                billingCycle === "annual"
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Annual Billing</span>
              <span className="rounded-full bg-emerald-400 text-slate-950 font-extrabold text-[9px] px-1.5 py-0.2">
                Save 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === "annual" ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-cyan-400 bg-white shadow-xl shadow-cyan-500/10 lg:-translate-y-1 ring-4 ring-cyan-100"
                    : "border border-slate-200 bg-white shadow-sm hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm flex items-center gap-1">
                    <Sparkles className="size-2.5" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-100">
                    {plan.badge}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-2">{plan.name}</h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed min-h-[30px]">
                    {plan.tagline}
                  </p>

                  {/* Pricing Display */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-baseline gap-1.5">
                    <span className="text-3xl font-black tracking-tight text-slate-900">
                      ₹{price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">/ month</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {billingCycle === "annual" ? "Billed annually • 48h setup included" : "Billed monthly • Cancel anytime"}
                  </p>

                  {/* Features List */}
                  <div className="mt-5 space-y-2.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-900">What&apos;s Included:</p>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="size-3.5 text-cyan-600 shrink-0 mt-0.5 font-bold" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={plan.ctaLink}
                    className={`inline-flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-bold shadow-sm transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/20 active:scale-[0.98]"
                        : "bg-slate-900 hover:bg-slate-800 text-white active:scale-[0.98]"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Assurance Strip */}
        <div className="mt-8 text-center flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-[11px] font-semibold text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-emerald-600" />
            <span>0% Commission on Member Fees</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="size-3.5 text-cyan-600" />
            <span>Live on Your Domain in 48 Hours</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="size-3.5 text-blue-600" />
            <span>Direct WhatsApp &amp; Phone Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
