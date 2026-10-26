"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  LayoutDashboard,
  Smartphone,
  Laptop,
  Sparkles,
} from "lucide-react";

export function ChaloBuildInteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<"website" | "dashboard">("website");

  return (
    <section id="platform" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#090b12] border-b border-white/[0.08] overflow-hidden text-white font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.06),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_12px_rgba(0,245,255,0.15)]">
            <Sparkles className="size-3 text-cyan-400" />
            <span>2-IN-1 UNIFIED PLATFORM</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Inspect What We Build For Your Gym.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Generic website builders can&apos;t manage your front desk, and isolated gym software leaves you with an outdated website. ChaloBuild seamlessly connects both as one synchronized, one-time build.
          </p>

          {/* Interactive Switcher Tabs */}
          <div className="mt-6 inline-flex items-center p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("website")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "website"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Globe className="size-3.5" />
              <span>1. Branded Gym Website</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "dashboard"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutDashboard className="size-3.5" />
              <span>2. Staff &amp; Owner Dashboard</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Public Website Showcase */}
        {activeTab === "website" && (
          <div className="mt-10 grid gap-8 lg:grid-cols-12 items-center">
            {/* Features Breakdown */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-md bg-cyan-950/60 border border-cyan-500/40 px-2.5 py-0.5 text-[11px] font-bold text-cyan-300">
                <Globe className="size-3 text-cyan-400" />
                <span>Conversion-First Public Presence</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                Turn Local Google Searchers Into Committed Walk-In Members.
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Your custom website is optimized for lightning-fast mobile loading and built with athletic styling, high-res photo galleries, trainer credentials, and direct lead magnets.
              </p>

              <div className="space-y-2.5 pt-1">
                {[
                  {
                    title: "Instant 1-Day Trial Pass Lead Magnet",
                    desc: "Visitors tap one button to generate a free day pass straight to your gym's WhatsApp with their name and phone number.",
                  },
                  {
                    title: "Transparent Membership Tiers",
                    desc: "Display clear 1, 3, 6, and 12-month packages with features, batch timings, and personal trainer add-ons.",
                  },
                  {
                    title: "Trainer Profiles & Transformations",
                    desc: "Highlight certified coaches, competition records, and client transformation stories to build instant authority.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.06]">
                    <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="/demo/ironcore"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-4 py-2.5 text-xs shadow-md shadow-cyan-500/20 transition-all"
                >
                  <span>Test-Drive IronCore Website</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                >
                  <span>View Build Specs</span>
                </a>
              </div>
            </div>

            {/* Visual Preview Device Frame */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0c101c] p-3 sm:p-5 shadow-2xl">
                {/* Browser Toolbar Mock */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="size-2.5 rounded-full bg-rose-500 inline-block" />
                      <span className="size-2.5 rounded-full bg-amber-500 inline-block" />
                      <span className="size-2.5 rounded-full bg-emerald-500 inline-block" />
                    </div>
                    <div className="rounded-md bg-slate-900 px-3 py-1 text-[10px] text-slate-400 font-mono border border-slate-800">
                      https://ironcorefitness.demo
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Laptop className="size-3.5 text-cyan-400" />
                    <Smartphone className="size-3.5 text-slate-500" />
                  </div>
                </div>

                {/* Hero Gym Image Preview */}
                <div className="relative mt-3 aspect-video w-full rounded-xl overflow-hidden border border-slate-800 group">
                  <Image
                    src="/images/chalobuild-hero-gym.jpg"
                    alt="IronCore Fitness Gym Website Template"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-4 sm:p-6">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-md w-fit border border-cyan-500/30">
                      LIVE TEMPLATE PREVIEW
                    </span>
                    <h4 className="text-lg sm:text-2xl font-black text-white mt-1.5">
                      IronCore Fitness — Flagship Bandra Gym
                    </h4>
                    <p className="text-xs text-slate-300 max-w-md line-clamp-2 mt-1">
                      Featuring full program listings, trainer bios, gym gallery, flexible membership tiers, and WhatsApp 1-day guest pass button.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Connected Dashboard Showcase */}
        {activeTab === "dashboard" && (
          <div className="mt-10 grid gap-8 lg:grid-cols-12 items-center">
            {/* Features Breakdown */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-md bg-blue-950/60 border border-blue-500/40 px-2.5 py-0.5 text-[11px] font-bold text-blue-300">
                <LayoutDashboard className="size-3 text-blue-400" />
                <span>Front-Desk Operating System</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                Say Goodbye to Paper Registers and Messy Excel Spreadsheets.
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Empower your trainers and front-desk reception with a lightning-fast dashboard that works smoothly on any tablet, mobile phone, or computer.
              </p>

              <div className="space-y-2.5 pt-1">
                {[
                  {
                    title: "1-Tap Attendance Check-Ins",
                    desc: "Quick search by name, member code, or phone. Instant check-in status with daily duplicate check protection.",
                  },
                  {
                    title: "UPI & Cash Payment Ledger",
                    desc: "Record UPI reference numbers, cash collections, and generate digital receipt PDFs with your gym logo.",
                  },
                  {
                    title: "Automated Expiry & Renewal Alerts",
                    desc: "Filter members expiring in the next 7 or 30 days. Send WhatsApp reminder templates to protect your cash flow.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.06]">
                    <CheckCircle2 className="size-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-4 py-2.5 text-xs shadow-md shadow-blue-500/25 transition-all"
                >
                  <LayoutDashboard className="size-3.5" />
                  <span>Enter Live Management Console</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <span>View Package Pricing</span>
                </a>
              </div>
            </div>

            {/* Visual Dashboard Mockup */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0c101c] p-4 sm:p-5 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="flex size-6 items-center justify-center rounded-md bg-blue-950 border border-blue-500/40 text-blue-400">
                      <LayoutDashboard className="size-3.5" />
                    </div>
                    <span className="text-xs font-bold text-white">ChaloBuild GymFlow • Active Operations</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    Mock Data Live
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-3">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Monthly Active</span>
                    <p className="text-xl font-black text-white mt-0.5">248 Members</p>
                    <p className="text-[9px] text-cyan-400 mt-0.5">94% Retention</p>
                  </div>
                  <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-3">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Today&apos;s Check-ins</span>
                    <p className="text-xl font-black text-teal-400 mt-0.5">42 Verified</p>
                    <p className="text-[9px] text-slate-400 mt-0.5">0 Duplicate Errors</p>
                  </div>
                  <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-3">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">SaaS Bill</span>
                    <p className="text-xl font-black text-emerald-400 mt-0.5">₹0 / month</p>
                    <p className="text-[9px] text-slate-400 mt-0.5">Zero Subscriptions</p>
                  </div>
                </div>

                {/* Interactive Check-In Row Demo */}
                <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-3.5">
                  <p className="text-[11px] font-bold text-slate-300 mb-2">1-Tap Live Front-Desk Check-In Demo:</p>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xs">
                        AM
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Aniket More (98201-XXXXX)</p>
                        <p className="text-[10px] text-slate-400">Plan: 1-Year Platinum Strength • Expires in 184d</p>
                      </div>
                    </div>
                    <Link
                      href="/dashboard/attendance"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 text-xs font-bold text-white transition-colors"
                    >
                      <CheckCircle2 className="size-3.5" />
                      <span>Mark Present</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
