"use client";

import Link from "next/link";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap, MessageCircle, LockOpen } from "lucide-react";

export function ChaloBuildPricing() {
  const plans = [
    {
      name: "Essential Web Build",
      badge: "SINGLE GYMS & STUDIOS",
      tagline: "High-converting branded website to capture local leads and showcase your facility.",
      priceOneTime: 14999,
      popular: false,
      whatsappMessage: "Hi ChaloBuild! I want to get the Essential Web Build (₹14,999 One-Time) for my gym.",
      features: [
        "Custom Branded Athletic Website",
        "WhatsApp 1-Day Pass Lead Magnet",
        "Google Maps & Local SEO Setup",
        "Programs, Trainers & Gallery Modules",
        "Mobile-Responsive on iPhone & Android",
        "Custom Domain Setup (.in / .com included)",
        "48-Hour Rapid Live Deployment",
        "100% Source Code & Asset Ownership",
      ],
      ctaText: "Request Web Build",
    },
    {
      name: "Complete Studio Turnkey",
      badge: "MOST POPULAR CHOICE",
      tagline: "The complete system: public gym website connected with front-desk staff dashboard.",
      priceOneTime: 24999,
      popular: true,
      whatsappMessage: "Hi ChaloBuild! I want the Complete Studio Turnkey (₹24,999 One-Time) with Website and Staff Dashboard for my gym.",
      features: [
        "Everything in Essential Web, plus:",
        "Connected GymFlow Staff Management Portal",
        "Up to 1,000 Active Member Database",
        "1-Tap Daily Attendance Check-In Console",
        "UPI & Cash Payment Ledger with Digital Receipts",
        "Membership Expiry Hub (7d & 30d Alerts)",
        "WhatsApp Renewal Reminder Automation",
        "Owner vs Staff Role Permissions",
        "Free 1-Click Excel Member Import",
        "Staff Training & Video Handover Session",
      ],
      ctaText: "Get Complete Turnkey Build",
    },
    {
      name: "Multi-Branch Enterprise",
      badge: "CHAINS & FRANCHISES",
      tagline: "For gym chains, fitness franchises, and high-volume commercial centers.",
      priceOneTime: 44999,
      popular: false,
      whatsappMessage: "Hi ChaloBuild! I want to discuss a Multi-Branch Enterprise build with biometric support for my gyms.",
      features: [
        "Everything in Complete Studio, plus:",
        "Multi-Location Branch Switcher in One Dashboard",
        "Unlimited Active Member Capacity",
        "Biometric Machine Attendance API Integration",
        "Custom Database Architecture & Backup Automation",
        "Tailored Reports & Finance Export Tools",
        "Dedicated Engineering Lead on WhatsApp & Call",
        "Onboarding & Custom Workflow Adjustments",
      ],
      ctaText: "Discuss Enterprise Scope",
    },
  ];

  return (
    <section id="pricing" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#080a10] border-b border-white/[0.08] overflow-hidden text-white font-sans">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.07),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
            <LockOpen className="size-3 text-emerald-400" />
            <span>ONE-TIME BUILD • 100% OWNERSHIP</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Transparent One-Time Pricing.{" "}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Zero Subscriptions Forever.
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Unlike SaaS platforms charging ₹2,000 to ₹5,000 every month indefinitely, ChaloBuild charges a flat one-time build fee. You own the code, the database, and 100% of your membership dues.
          </p>

          {/* Value Guarantee Pill */}
          <div className="mt-6 inline-flex items-center gap-2 p-1.5 px-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>No recurring monthly bills • 48-Hour Live Turnaround • Direct Engineer Handover</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3 items-stretch">
          {plans.map((plan) => {
            const encodedWa = encodeURIComponent(plan.whatsappMessage);
            const waUrl = `https://wa.me/919075097235?text=${encodedWa}`;

            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-cyan-400 bg-gradient-to-b from-[#0f172a] to-[#090e1a] shadow-2xl shadow-cyan-500/20 lg:-translate-y-2 ring-1 ring-cyan-400/50"
                    : "border border-white/[0.08] bg-[#0c101c]/90 backdrop-blur-xl hover:border-slate-700 hover:shadow-xl"
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-4 py-1 text-[10px] font-black uppercase tracking-wider text-slate-950 shadow-md flex items-center gap-1.5">
                    <Sparkles className="size-3 fill-slate-950 text-slate-950" />
                    <span>Most Popular Turnkey Build</span>
                  </div>
                )}

                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30">
                    {plan.badge}
                  </span>
                  <h3 className="text-xl font-black text-white mt-3">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed min-h-[36px]">
                    {plan.tagline}
                  </p>

                  {/* Pricing Display */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                        ₹{plan.priceOneTime.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        One-Time Flat
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      No monthly subscription • 100% Code &amp; Data Handover
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-2.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-300">What We Build &amp; Deliver:</p>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="size-4 text-cyan-400 shrink-0 mt-0.5 font-bold" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-800/80 space-y-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold shadow-md transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-extrabold shadow-cyan-500/25 active:scale-[0.98]"
                        : "bg-slate-800 hover:bg-slate-700 text-white active:scale-[0.98] border border-slate-700"
                    }`}
                  >
                    <MessageCircle className="size-4 fill-current" />
                    <span>{plan.ctaText} via WhatsApp</span>
                  </a>

                  <Link
                    href="/demo/ironcore"
                    className="inline-flex w-full items-center justify-center gap-1.5 text-[11px] text-slate-400 hover:text-cyan-400 transition-colors py-1"
                  >
                    <span>Inspect Demo First</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Assurance Strip */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400">
          <div className="flex items-center gap-2">
            <LockOpen className="size-4 text-emerald-400" />
            <span>100% Lifetime Code Ownership</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-cyan-400" />
            <span>0% Commission on Member Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="size-4 text-teal-400" />
            <span>48-Hour Turnkey Deployment</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="size-4 text-blue-400" />
            <span>Direct WhatsApp Support: +91 90750 97235</span>
          </div>
        </div>
      </div>
    </section>
  );
}
