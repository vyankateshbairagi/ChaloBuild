"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  LockOpen,
  ArrowRight,
  Calculator,
  Sliders,
  Check,
} from "lucide-react";

export function ChaloBuildContactSection() {
  const [selectedPlan, setSelectedPlan] = useState<"essential" | "turnkey" | "enterprise">("turnkey");
  const [includeBiometric, setIncludeBiometric] = useState(false);
  const [includeWhatsAppBot, setIncludeWhatsAppBot] = useState(true);
  const [gymName, setGymName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Price Calculation
  const basePrices = {
    essential: 14999,
    turnkey: 24999,
    enterprise: 44999,
  };

  const planTitles = {
    essential: "Essential Web Build (₹14,999)",
    turnkey: "Complete Studio Turnkey (₹24,999) — Website + Console",
    enterprise: "Multi-Branch Enterprise (₹44,999)",
  };

  let totalPrice = basePrices[selectedPlan];
  if (includeBiometric) totalPrice += 5000;
  if (includeWhatsAppBot && selectedPlan === "essential") totalPrice += 3500;

  const handleWhatsAppDirect = () => {
    let msg = `Hi ChaloBuild! I visited your website and checked the live demo.\n\n`;
    msg += `I am interested in a One-Time Turnkey Build for my gym:\n`;
    msg += `• Selected Package: ${planTitles[selectedPlan]}\n`;
    if (gymName) msg += `• Gym Name: ${gymName}\n`;
    if (ownerName) msg += `• Owner / Contact: ${ownerName}\n`;
    if (city) msg += `• City / Location: ${city}\n`;
    if (phone) msg += `• WhatsApp / Phone: ${phone}\n`;
    
    msg += `• Add-ons Selected:\n`;
    if (includeBiometric) msg += `  - Biometric Hardware Integration (+₹5,000)\n`;
    if (includeWhatsAppBot) msg += `  - WhatsApp Expiry Reminders Automation\n`;
    msg += `  - Free Excel Member Import & Custom Domain Included\n`;
    msg += `• Estimated Total: ₹${totalPrice.toLocaleString("en-IN")} One-Time Fixed\n\n`;
    msg += `Please let me know the next steps to launch in 48 hours.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919075097235?text=${encoded}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    handleWhatsAppDirect();
  };

  return (
    <section id="contact" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#07090e] border-b border-white/[0.08] overflow-hidden text-white font-sans">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.08),transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute -bottom-10 right-10 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.07),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0d111a]/95 to-[#080b12]/95 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_12px_rgba(0,245,255,0.15)]">
              <Sparkles className="size-3 text-cyan-400" />
              <span>STEP 3 • DIRECT ENGINEER CONSULTATION</span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Ready to Own Your Gym&apos;s Digital Platform?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Tested our demo and like what you see? Select your package, customize your options, and talk directly with our engineering team on WhatsApp.
            </p>
          </div>

          {/* Quick Contact Buttons Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/919075097235?text=Hi%20ChaloBuild!%20I%20checked%20your%20demo%20and%20want%20to%20discuss%20a%20one-time%20turnkey%20build%20for%20my%20gym."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all"
            >
              <MessageCircle className="size-4 fill-current" />
              <span>Chat on WhatsApp (+91 90750 97235)</span>
            </a>

            <a
              href="tel:+919075097235"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition-all shadow-xs"
            >
              <Phone className="size-4 text-cyan-400" />
              <span>Call Engineers (+91 90750 97235)</span>
            </a>

            <Link
              href="/demo/ironcore"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-950/40 hover:bg-cyan-900/60 px-5 py-3.5 text-xs sm:text-sm font-bold text-cyan-300 transition-all"
            >
              <span>Test Live Demo Again</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Interactive Consultation Form & Scope Builder */}
          <div className="mt-10 pt-8 border-t border-slate-800/80">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <Calculator className="size-4 text-cyan-400" />
                  <span>Build Scope &amp; Instant WhatsApp Quote Generator</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Select your desired setup below to formulate an exact one-time scope with zero recurring fees.
                </p>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                <LockOpen className="size-3" />
                <span>One-Time Build</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Package Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  1. Select Your Base Package:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan("essential")}
                    className={`p-3.5 rounded-xl border text-left transition-all relative ${
                      selectedPlan === "essential"
                        ? "border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-500/10"
                        : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Essential Web</span>
                      {selectedPlan === "essential" && <Check className="size-4 text-cyan-400" />}
                    </div>
                    <p className="mt-1 text-base font-extrabold text-cyan-300">₹14,999</p>
                    <p className="mt-1 text-[10px] text-slate-400">Public branded website only</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan("turnkey")}
                    className={`p-3.5 rounded-xl border text-left transition-all relative ${
                      selectedPlan === "turnkey"
                        ? "border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/50"
                        : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Complete Turnkey</span>
                      <span className="text-[9px] font-bold bg-cyan-500 text-slate-950 px-1.5 py-0.2 rounded">
                        POPULAR
                      </span>
                    </div>
                    <p className="mt-1 text-base font-extrabold text-cyan-300">₹24,999</p>
                    <p className="mt-1 text-[10px] text-slate-400">Website + Staff Management Console</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan("enterprise")}
                    className={`p-3.5 rounded-xl border text-left transition-all relative ${
                      selectedPlan === "enterprise"
                        ? "border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-500/10"
                        : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Multi-Branch</span>
                      {selectedPlan === "enterprise" && <Check className="size-4 text-cyan-400" />}
                    </div>
                    <p className="mt-1 text-base font-extrabold text-cyan-300">₹44,999</p>
                    <p className="mt-1 text-[10px] text-slate-400">Multiple gym branches &amp; biometric</p>
                  </button>
                </div>
              </div>

              {/* Add-ons & Inclusions */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  2. Inclusions &amp; Custom Add-ons:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-400" />
                      <span className="text-xs text-slate-200">Free Excel Member Import</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
                      Included (₹0)
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-400" />
                      <span className="text-xs text-slate-200">Custom Domain (.in / .com) Setup</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
                      Included (₹0)
                    </span>
                  </div>

                  <label className="p-3 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 flex items-center justify-between cursor-pointer select-none">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeWhatsAppBot}
                        onChange={(e) => setIncludeWhatsAppBot(e.target.checked)}
                        className="rounded border-slate-700 text-cyan-500 focus:ring-cyan-400 size-4 bg-slate-800"
                      />
                      <span className="text-xs text-slate-200">Automated WhatsApp Renewal Alerts</span>
                    </div>
                    <span className="text-[10px] font-bold text-cyan-400">
                      {selectedPlan !== "essential" ? "Included" : "+₹3,500"}
                    </span>
                  </label>

                  <label className="p-3 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 flex items-center justify-between cursor-pointer select-none">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeBiometric}
                        onChange={(e) => setIncludeBiometric(e.target.checked)}
                        className="rounded border-slate-700 text-cyan-500 focus:ring-cyan-400 size-4 bg-slate-800"
                      />
                      <span className="text-xs text-slate-200">Biometric Machine Integration</span>
                    </div>
                    <span className="text-[10px] font-bold text-cyan-400">
                      {selectedPlan === "enterprise" ? "Included" : "+₹5,000"}
                    </span>
                  </label>
                </div>
              </div>

              {/* Gym Details Inputs */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  3. Your Gym Information:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">
                      Gym / Fitness Studio Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={gymName}
                      onChange={(e) => setGymName(e.target.value)}
                      placeholder="e.g. IronCore Fitness Club"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">
                      Owner / Manager Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="e.g. Vikram Sharma"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">
                      City / Area *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Pune, Mumbai, Nashik"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Total & Submit Button */}
              <div className="p-4 sm:p-5 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900/80 to-blue-950/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Calculated One-Time Investment:
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-black text-white">
                      ₹{totalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold">
                      One-Time Fixed (₹0 Monthly SaaS Fee)
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Includes 100% code ownership, 48h launch, staff onboarding &amp; direct WhatsApp engineer support.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all shrink-0"
                >
                  <MessageCircle className="size-4 fill-current" />
                  <span>Send Scope &amp; Launch in 48h →</span>
                </button>
              </div>

              {submitted && (
                <div className="p-3 rounded-xl border border-emerald-500/40 bg-emerald-950/60 text-emerald-300 text-xs font-semibold text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  <span>Redirecting to WhatsApp chat with our engineers (+91 90750 97235)...</span>
                </div>
              )}
            </form>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-8 pt-6 border-t border-slate-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-base font-black text-white">48 Hours</p>
              <p className="text-[10px] text-slate-400">Guaranteed Turnkey Launch</p>
            </div>
            <div>
              <p className="text-base font-black text-emerald-400">₹0 / month</p>
              <p className="text-[10px] text-slate-400">Zero Recurring SaaS Bills</p>
            </div>
            <div>
              <p className="text-base font-black text-cyan-400">100% Ownership</p>
              <p className="text-[10px] text-slate-400">Code &amp; Database Handover</p>
            </div>
            <div>
              <p className="text-base font-black text-sky-400">Direct WhatsApp</p>
              <p className="text-[10px] text-slate-400">+91 90750 97235 Hotline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
