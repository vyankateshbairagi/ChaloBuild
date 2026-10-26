import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  MessageCircle,
  CreditCard,
  Activity,
  ShieldCheck,
  LayoutDashboard,
  Globe,
  LockOpen,
} from "lucide-react";

export function ChaloBuildHero() {
  return (
    <section className="relative overflow-hidden bg-[#080a10] pt-8 pb-14 lg:pt-14 lg:pb-20 border-b border-white/[0.08] text-white">
      {/* Background Lighting Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.09),transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute top-1/3 right-0 w-[550px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(2,132,199,0.1),transparent_70%)] pointer-events-none blur-3xl" />

      {/* Subtle Micro-Grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            {/* Introductory Badge */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_15px_rgba(0,245,255,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                <span>ONE-TIME TURNKEY BUILD • ZERO MONTHLY SUBSCRIPTIONS</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black tracking-tight text-white leading-[1.12]">
              The Custom Operating System for{" "}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Modern Gyms &amp; Fitness Studios.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl">
              Inspect our live interactive demo. We engineer your custom-branded gym website and connected staff management dashboard as a <strong className="text-white font-semibold">one-time build</strong>. No recurring SaaS bills. No 15% aggregator cuts. 100% full ownership, deployed in 48 hours.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/demo/ironcore"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-5 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:from-cyan-400 hover:to-blue-500 active:scale-[0.99] transition-all"
              >
                <Globe className="size-4" />
                <span>Test Live Gym Website Demo</span>
                <ArrowRight className="size-3.5" />
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800 px-4 py-3.5 text-xs sm:text-sm font-bold text-slate-200 hover:border-cyan-400 hover:text-white shadow-xs active:scale-[0.99] transition-all"
              >
                <LayoutDashboard className="size-4 text-cyan-400" />
                <span>Test Staff Dashboard</span>
              </Link>

              <a
                href="https://wa.me/919075097235?text=Hi%20ChaloBuild!%20I%20am%20a%20gym%20owner.%20I%20checked%20the%20live%20demo%20and%20want%20to%20get%20a%20one-time%20turnkey%20build%20quote%20for%20my%20gym."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/60 px-4 py-3.5 text-xs sm:text-sm font-bold text-emerald-300 transition-all shadow-[0_0_12px_rgba(16,185,129,0.15)]"
              >
                <MessageCircle className="size-4 text-emerald-400 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Differentiator Strip */}
            <div className="pt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <LockOpen className="size-4 text-emerald-400 shrink-0" />
                <span>100% Lifetime Code Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-cyan-400 shrink-0" />
                <span>Zero Monthly Software Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-teal-400 shrink-0" />
                <span>48-Hour Rapid Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-sky-400 shrink-0" />
                <span>0% Commission on Memberships</span>
              </div>
            </div>
          </div>

          {/* Right Column: Console Preview Frame */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/25 via-blue-500/20 to-emerald-500/20 blur-xl opacity-60" />

            <div className="relative rounded-2xl border border-white/[0.08] bg-[#0c101c]/95 backdrop-blur-2xl shadow-2xl p-4 sm:p-5 text-slate-100 overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="size-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="size-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 ml-1">
                    IronCore Fitness • Front-Desk Console Demo
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync
                </span>
              </div>

              {/* Metric Cards Row */}
              <div className="mt-3.5 grid grid-cols-3 gap-2.5">
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-2.5">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-[10px] font-bold uppercase tracking-wider">Active Members</span>
                    <Users className="size-3.5 text-cyan-400" />
                  </div>
                  <p className="mt-1 text-lg sm:text-xl font-black text-white">248</p>
                  <p className="text-[9px] text-emerald-400 font-semibold">+18% this month</p>
                </div>

                <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-2.5">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-[10px] font-bold uppercase tracking-wider">Today&apos;s Check-Ins</span>
                    <Activity className="size-3.5 text-teal-400" />
                  </div>
                  <p className="mt-1 text-lg sm:text-xl font-black text-white">42</p>
                  <p className="text-[9px] text-slate-400 font-semibold">Peak 6-8 PM</p>
                </div>

                <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-2.5">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-[10px] font-bold uppercase tracking-wider">Monthly Fees</span>
                    <CreditCard className="size-3.5 text-sky-400" />
                  </div>
                  <p className="mt-1 text-lg sm:text-xl font-black text-emerald-400">₹0 / mo</p>
                  <p className="text-[9px] text-cyan-300 font-semibold">One-Time Build</p>
                </div>
              </div>

              {/* Queue List Preview */}
              <div className="mt-3.5 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 px-1">
                  <span>Front-Desk Queue</span>
                  <Link href="/dashboard" className="text-cyan-400 hover:text-cyan-300 hover:underline">
                    Open Full Console →
                  </Link>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/70 border border-slate-800/80 text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-cyan-950 text-cyan-300 font-bold text-[11px]">
                        RD
                      </div>
                      <div>
                        <p className="font-bold text-white text-[11px]">Rahul Deshmukh</p>
                        <p className="text-[9px] text-slate-400">MEM-1082 • 12-Month Strength</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                      Checked In Just Now
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/70 border border-slate-800/80 text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-blue-950 text-blue-300 font-bold text-[11px]">
                        PK
                      </div>
                      <div>
                        <p className="font-bold text-white text-[11px]">Pooja Kulkarni</p>
                        <p className="text-[9px] text-slate-400">MEM-1054 • 6-Month Crossfit</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                      Checked In 8m ago
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/70 border border-slate-800/80 text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-amber-950 text-amber-300 font-bold text-[11px]">
                        VS
                      </div>
                      <div>
                        <p className="font-bold text-white text-[11px]">Vikram Shinde</p>
                        <p className="text-[9px] text-slate-400">MEM-0992 • 3-Month Cardio</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                      Renewal Due (3d)
                    </span>
                  </div>
                </div>
              </div>

              {/* Lead Capture Alert Bar */}
              <div className="mt-3.5 p-2.5 rounded-xl border border-emerald-500/40 bg-emerald-950/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-full bg-emerald-500 text-slate-950">
                    <MessageCircle className="size-4 fill-current" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white">New Walk-In Lead via Website!</p>
                    <p className="text-[9px] text-emerald-300">Arjun M. claimed Free 1-Day Trial Pass</p>
                  </div>
                </div>
                <Link
                  href="/demo/ironcore"
                  className="text-[10px] font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-2.5 py-1 rounded-md transition-colors"
                >
                  View Lead Flow
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
