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
import { Button } from "@/components/ui/button";

export function ChaloBuildInteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<"website" | "dashboard">("website");

  return (
    <section id="platform" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 overflow-hidden">
      {/* Subtle ambient light gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.06),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50/80 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-cyan-800 shadow-2xs">
            <Sparkles className="size-3 text-cyan-600" />
            <span>2-IN-1 UNIFIED ARCHITECTURE</span>
          </div>
          <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            One Platform. Every Tool Your Gym Needs.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Generic website builders can&apos;t manage your front desk, and clunky management software leaves you without a proper website. ChaloBuild seamlessly connects both.
          </p>

          {/* Interactive Switcher Tabs */}
          <div className="mt-6 inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("website")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "website"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Globe className={`size-3.5 ${activeTab === "website" ? "text-cyan-600" : "text-slate-400"}`} />
              <span>1. Public Gym Website</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "dashboard"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <LayoutDashboard className={`size-3.5 ${activeTab === "dashboard" ? "text-cyan-600" : "text-slate-400"}`} />
              <span>2. Staff &amp; Owner Dashboard</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Public Website Showcase */}
        {activeTab === "website" && (
          <div className="mt-8 grid gap-8 lg:grid-cols-12 items-center">
            {/* Features Breakdown */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-md bg-cyan-50 border border-cyan-200 px-2.5 py-0.5 text-[11px] font-bold text-cyan-800">
                <Globe className="size-3 text-cyan-600" />
                <span>Modern Public Front</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                Turn Local Google Searchers Into Committed Walk-In Members.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your custom website is optimized for lightning-fast mobile loading and built with proven athletic layouts, high-res photo galleries, trainer credentials, and direct lead magnets.
              </p>

              <div className="space-y-2.5 pt-1">
                {[
                  {
                    title: "Instant 1-Day Pass Lead Magnet",
                    desc: "Visitors generate a trial day pass directly to your WhatsApp with their name and phone number.",
                  },
                  {
                    title: "Transparent Membership Tiers",
                    desc: "Clear 1, 3, 6, and 12-month packages with features, batch timings, and personal trainer add-ons.",
                  },
                  {
                    title: "Trainer Profiles & Specialties",
                    desc: "Highlight certified coaches, competition records, and client body transformation stories.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                    <CheckCircle2 className="size-4 text-cyan-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-1">
                <Button asChild className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold h-10 px-5 rounded-xl shadow-sm text-xs">
                  <Link href="/demo/ironcore">
                    <span>Preview Live Demo Website</span>
                    <ArrowRight className="ml-1.5 size-3.5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Interactive Visual Window */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl border border-slate-200 bg-slate-900 p-2 shadow-xl shadow-cyan-900/10">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-800 bg-slate-950/80 rounded-t-xl">
                  <div className="flex items-center gap-1.5">
                    <div className="size-2 rounded-full bg-rose-500/80" />
                    <div className="size-2 rounded-full bg-amber-500/80" />
                    <div className="size-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md bg-slate-800/80 px-2.5 py-0.5 text-[10px] text-slate-400 font-mono">
                    <span className="text-emerald-400">https://</span>
                    <span>ironcore.chalobuild.in</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Smartphone className="size-3" />
                    <Laptop className="size-3 text-cyan-400" />
                  </div>
                </div>

                {/* Simulated Screen */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-b-xl bg-slate-950">
                  <Image
                    src="/images/chalobuild-hero-gym.jpg"
                    alt="IronCore Fitness Website Preview"
                    fill
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 flex flex-col justify-end">
                    <span className="inline-flex items-center gap-1 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-2 py-0.5 text-[10px] font-bold w-fit">
                      <Sparkles className="size-2.5" />
                      Live Gym Website Preview
                    </span>
                    <h4 className="mt-1 text-base sm:text-lg font-black text-white">
                      IronCore Fitness Club • Bandra West
                    </h4>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="rounded-md bg-emerald-500/90 text-white text-[10px] font-bold px-2.5 py-1">
                        WhatsApp 1-Day Pass Active
                      </span>
                      <span className="rounded-md bg-slate-800/90 text-slate-200 text-[10px] font-medium px-2.5 py-1">
                        4 Tier Plans Published
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Dashboard Showcase */}
        {activeTab === "dashboard" && (
          <div className="mt-8 grid gap-8 lg:grid-cols-12 items-center">
            {/* Features Breakdown */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-md bg-cyan-50 border border-cyan-200 px-2.5 py-0.5 text-[11px] font-bold text-cyan-800">
                <LayoutDashboard className="size-3 text-cyan-600" />
                <span>Operational Control Center</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                Run Your Front Desk, Attendance &amp; Memberships Without Friction.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Replace unorganized physical notebooks and lost Excel rows. The GymFlow dashboard gives your front desk staff and owner account real-time control over every member interaction.
              </p>

              <div className="space-y-2.5 pt-1">
                {[
                  {
                    title: "1-Tap Attendance Check-In",
                    desc: "Front desk marks member attendance by phone number or code in less than 2 seconds.",
                  },
                  {
                    title: "Subscription Expiry Warnings",
                    desc: "Automated alert lists showing memberships expiring in the next 7 to 30 days to follow up.",
                  },
                  {
                    title: "Payment Recording & Digital Receipts",
                    desc: "Log UPI, cash, or card transactions with automated sequential receipt numbers.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                    <CheckCircle2 className="size-4 text-cyan-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <Button asChild className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold h-10 px-5 rounded-xl shadow-sm text-xs">
                  <Link href="/dashboard">
                    <LayoutDashboard className="mr-1.5 size-3.5" />
                    <span>Enter Gym Management Dashboard</span>
                    <ArrowRight className="ml-1.5 size-3.5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-700 hover:text-cyan-700 hover:border-cyan-400 h-10 px-4 rounded-xl text-xs font-semibold">
                  <Link href="/demo/ironcore">
                    <span>Preview Public Site</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Simulated Dashboard UI Mockup */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xl shadow-cyan-900/10">
                {/* Dashboard Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-cyan-600 text-white font-black text-xs">
                      CB
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900 leading-none">IronCore Management Portal</p>
                      <p className="text-[9px] text-slate-500 mt-0.5">Staff Front Desk • Active Session</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href="/dashboard"
                      className="text-[10px] font-bold text-white bg-cyan-600 hover:bg-cyan-500 px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <span>Open Live System</span>
                      <ArrowRight className="size-2.5" />
                    </Link>
                  </div>
                </div>

                {/* Dashboard Quick Stats */}
                <div className="grid grid-cols-3 gap-2 my-3">
                  <div className="rounded-lg border border-slate-200/70 bg-slate-50/80 p-2">
                    <span className="text-[9px] uppercase font-bold text-slate-500">Active Members</span>
                    <p className="text-base font-black text-slate-900 mt-0.5">248</p>
                  </div>
                  <div className="rounded-lg border border-slate-200/70 bg-slate-50/80 p-2">
                    <span className="text-[9px] uppercase font-bold text-slate-500">Today Check-Ins</span>
                    <p className="text-base font-black text-cyan-600 mt-0.5">42</p>
                  </div>
                  <div className="rounded-lg border border-slate-200/70 bg-slate-50/80 p-2">
                    <span className="text-[9px] uppercase font-bold text-slate-500">Expiring in 7d</span>
                    <p className="text-base font-black text-amber-600 mt-0.5">6</p>
                  </div>
                </div>

                {/* Simulated Member List Table */}
                <div className="rounded-lg border border-slate-200/80 overflow-hidden">
                  <div className="bg-slate-50 px-2.5 py-1.5 text-[10px] font-bold text-slate-600 border-b border-slate-200 flex justify-between items-center">
                    <span>Recent Front-Desk Check-Ins</span>
                    <span className="text-cyan-600 font-semibold cursor-pointer">View All 248 Members →</span>
                  </div>
                  <div className="divide-y divide-slate-100 text-xs">
                    {[
                      { name: "Rahul Deshmukh", plan: "12-Month Annual", code: "MEM-1082", status: "Active" },
                      { name: "Pooja Kulkarni", plan: "6-Month Strength", code: "MEM-1054", status: "Active" },
                    ].map((row) => (
                      <div key={row.name} className="flex items-center justify-between p-2 hover:bg-slate-50/70 text-[11px]">
                        <div className="flex items-center gap-2">
                          <div className="size-6 rounded-md bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-[9px]">
                            {row.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 leading-tight">{row.name}</p>
                            <p className="text-[9px] text-slate-500">{row.code} • {row.plan}</p>
                          </div>
                        </div>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {row.status}
                        </span>
                      </div>
                    ))}
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
