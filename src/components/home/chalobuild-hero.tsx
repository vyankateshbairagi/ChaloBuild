import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users,
  MessageCircle,
  CreditCard,
  Activity,
  Dumbbell,
  Star,
  LayoutDashboard,
} from "lucide-react";

export function ChaloBuildHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-5 pb-8 lg:pt-8 lg:pb-12 border-b border-slate-200/80">
      {/* Background Decorative Mesh Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.08),transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute top-1/4 right-0 w-[550px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(2,132,199,0.07),transparent_70%)] pointer-events-none blur-3xl" />

      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headlines, Copy, CTAs, Benefits & Social Proof */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-4 text-left">
            {/* Introductory Badge with Live Beacon */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/90 bg-cyan-50/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-800 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                <span>BY THINKBUILD • POWERING 50+ GYMS ACROSS INDIA</span>
              </div>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black tracking-tight text-slate-900 leading-[1.12]">
              The Operating System for{" "}
              <span className="block mt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600 drop-shadow-xs">
                Modern Indian Gyms.
              </span>
            </h1>

            {/* Hero Description */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-lg">
              Get a custom-branded website connected to a lightning-fast member
              management dashboard, 1-tap front desk attendance, WhatsApp trial
              passes, and automated renewal alerts — live in 48 hours.
            </p>

            {/* High-Impact CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <Link
                href="/demo/ironcore"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-cyan-500/25 hover:shadow-lg hover:from-cyan-400 hover:to-blue-500 active:scale-[0.99] transition-all"
              >
                <span>Explore Live Gym Demo</span>
                <ArrowRight className="size-3.5" />
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs sm:text-sm font-bold text-slate-800 hover:bg-slate-50 hover:border-cyan-400 hover:text-cyan-700 shadow-xs active:scale-[0.99] transition-all"
              >
                <LayoutDashboard className="size-3.5 text-cyan-600" />
                <span>Gym Management</span>
              </Link>

              <a
                href="#enquire"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-transparent bg-slate-100 hover:bg-slate-200 px-3.5 py-3 text-xs font-semibold text-slate-600 transition-all"
              >
                <Sparkles className="size-3 text-cyan-600" />
                <span>Consult</span>
              </a>
            </div>

            {/* Benefit Checkmarks */}
            <div className="pt-1 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-cyan-600 shrink-0" />
                <span>Custom Domain &amp; Branding</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-cyan-600 shrink-0" />
                <span>0% Commission on Member Fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-cyan-600 shrink-0" />
                <span>48-Hour Live Turnaround</span>
              </div>
            </div>

            {/* Social Proof Rating */}
            <div className="pt-3 border-t border-slate-200/80 flex items-center gap-3">
              <div className="flex -space-x-1.5 overflow-hidden">
                <div className="inline-block size-7 rounded-full ring-2 ring-white bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center">
                  V
                </div>
                <div className="inline-block size-7 rounded-full ring-2 ring-white bg-cyan-600 text-white font-bold text-[10px] flex items-center justify-center">
                  S
                </div>
                <div className="inline-block size-7 rounded-full ring-2 ring-white bg-sky-500 text-white font-bold text-[10px] flex items-center justify-center">
                  A
                </div>
                <div className="inline-block size-7 rounded-full ring-2 ring-white bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center">
                  R
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-2.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] font-bold text-slate-900 ml-1">4.9 / 5</span>
                </div>
                <p className="text-[10px] text-slate-500 font-medium">
                  Rated by 50+ gym owners in Mumbai, Pune &amp; Nashik
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-End 3D Product Stage Sized to Window */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="relative mx-auto w-full max-w-2xl">
              {/* Floating Ambient Mesh Glow Behind Devices */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-400/20 via-sky-400/15 to-blue-500/20 rounded-3xl blur-xl -z-10" />

              {/* 1. Main Anchor: Desktop Dashboard Console Window */}
              <div className="relative rounded-2xl border border-slate-200/90 bg-white/95 shadow-xl shadow-slate-900/10 backdrop-blur-xl overflow-hidden transition-all duration-300">
                {/* Window Top Navigation Bar */}
                <div className="flex items-center justify-between px-3.5 py-2 border-b border-slate-100 bg-slate-50/80">
                  <div className="flex items-center gap-1.5">
                    <div className="size-2.5 rounded-full bg-rose-500/80" />
                    <div className="size-2.5 rounded-full bg-amber-500/80" />
                    <div className="size-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px] font-bold text-slate-700 hidden sm:inline">
                      IronCore Fitness • Front-Desk Console
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="flex size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      Live Cloud Sync
                    </span>
                  </div>
                </div>

                {/* Dashboard KPI Summary Ribbon */}
                <div className="grid grid-cols-3 gap-2 p-2.5 sm:p-3 bg-slate-50/40 border-b border-slate-100">
                  {/* Metric 1 */}
                  <div className="rounded-xl border border-slate-200/80 bg-white p-2 sm:p-2.5 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase font-bold text-slate-400">Active Members</span>
                      <Users className="size-3 text-cyan-600" />
                    </div>
                    <p className="text-base sm:text-xl font-black text-slate-900 mt-0.5 leading-none">248</p>
                    <span className="text-[9px] font-bold text-emerald-600 inline-flex items-center gap-0.5 mt-0.5">
                      <TrendingUp className="size-2" /> +18% MoM
                    </span>
                  </div>

                  {/* Metric 2 */}
                  <div className="rounded-xl border border-slate-200/80 bg-white p-2 sm:p-2.5 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase font-bold text-slate-400">Today Check-Ins</span>
                      <Activity className="size-3 text-sky-600" />
                    </div>
                    <p className="text-base sm:text-xl font-black text-sky-600 mt-0.5 leading-none">42</p>
                    <span className="text-[9px] font-semibold text-slate-500 mt-0.5 block">
                      Peak 6-8 PM
                    </span>
                  </div>

                  {/* Metric 3 */}
                  <div className="rounded-xl border border-slate-200/80 bg-white p-2 sm:p-2.5 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase font-bold text-slate-400">Today Collection</span>
                      <CreditCard className="size-3 text-emerald-600" />
                    </div>
                    <p className="text-base sm:text-xl font-black text-slate-900 mt-0.5 leading-none">₹38,500</p>
                    <span className="text-[9px] font-bold text-emerald-600 mt-0.5 block">
                      UPI QR + Cash
                    </span>
                  </div>
                </div>

                {/* Dashboard Split Viewport */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 p-2.5 sm:p-3">
                  {/* Left Sub-Column: Real-time Member Check-In Feed */}
                  <div className="md:col-span-7 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 px-0.5">
                      <span>Attendance Queue</span>
                      <span className="text-[9px] text-cyan-600 font-semibold cursor-pointer hover:underline">
                        1-Tap Search →
                      </span>
                    </div>

                    <div className="space-y-1">
                      {[
                        {
                          name: "Rahul Deshmukh",
                          plan: "12-Month Annual",
                          code: "MEM-1082",
                          time: "Just now",
                          avatarBg: "bg-slate-900",
                          status: "Checked In",
                        },
                        {
                          name: "Pooja Kulkarni",
                          plan: "6-Month Strength",
                          code: "MEM-1054",
                          time: "8m ago",
                          avatarBg: "bg-cyan-600",
                          status: "Checked In",
                        },
                        {
                          name: "Vikram Shinde",
                          plan: "3-Month Cardio",
                          code: "MEM-0992",
                          time: "14m ago",
                          avatarBg: "bg-sky-500",
                          status: "Expiring (3d)",
                        },
                      ].map((member) => (
                        <div
                          key={member.name}
                          className="flex items-center justify-between p-2 rounded-lg border border-slate-100 bg-slate-50/70 hover:bg-white hover:border-cyan-200 transition-colors text-xs"
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`size-6 rounded-md ${member.avatarBg} text-white font-bold text-[10px] flex items-center justify-center shrink-0`}
                            >
                              {member.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-bold text-slate-900 leading-tight text-[11px]">{member.name}</p>
                              <p className="text-[9px] text-slate-500">
                                {member.code} • {member.plan}
                              </p>
                            </div>
                          </div>

                          <div className="text-right">
                            <span
                              className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${
                                member.status.includes("Expiring")
                                  ? "bg-amber-50 text-amber-700 border border-amber-200"
                                  : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              }`}
                            >
                              {member.status}
                            </span>
                            <p className="text-[8px] text-slate-400 mt-0.5">{member.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Sub-Column: Embedded Gym Facility Visual Card */}
                  <div className="md:col-span-5 relative aspect-[16/10] md:aspect-auto rounded-lg overflow-hidden border border-slate-200 group">
                    <Image
                      src="/images/chalobuild-hero-gym.jpg"
                      alt="IronCore Gym Training Floor"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-2.5 flex flex-col justify-end">
                      <div className="flex items-center gap-1.5 text-white text-[10px] font-bold">
                        <Dumbbell className="size-3 text-cyan-400" />
                        <span>IronCore Main Turf</span>
                      </div>
                      <p className="text-[9px] text-slate-300">
                        Public Website Gallery
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Overlapping Foreground Device: Mobile Smartphone Showing Public Website */}
              <div className="hidden sm:block absolute -bottom-5 right-1 md:right-0 w-44 sm:w-48 rounded-[28px] border-[4px] border-slate-900 bg-slate-950 p-1.5 shadow-2xl shadow-cyan-950/30 transition-transform duration-300 hover:scale-[1.03] z-20">
                {/* Speaker Notch */}
                <div className="mx-auto mb-1.5 h-3 w-16 rounded-full bg-slate-800 flex items-center justify-center">
                  <div className="size-1 rounded-full bg-slate-600" />
                </div>

                {/* Simulated Smartphone Screen */}
                <div className="relative aspect-[9/15] rounded-[20px] overflow-hidden bg-slate-900 flex flex-col justify-between p-2.5 text-white">
                  <Image
                    src="/images/strength-zone.jpg"
                    alt="IronCore Mobile Site Preview"
                    fill
                    className="object-cover opacity-60"
                  />
                  <div className="relative z-10 space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black tracking-tight text-white">
                        IRONCORE<span className="text-cyan-400">FITNESS</span>
                      </span>
                      <span className="text-[7px] bg-cyan-500/80 px-1 py-0.2 rounded font-bold">
                        OPEN
                      </span>
                    </div>
                    <p className="text-[8px] text-slate-300 leading-tight">
                      Bandra West • Mumbai
                    </p>
                  </div>

                  <div className="relative z-10 space-y-1.5">
                    <div className="p-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80">
                      <p className="text-[7px] uppercase tracking-wider text-cyan-300 font-bold">
                        Free Trial Pass
                      </p>
                      <p className="text-[9px] font-bold text-white">
                        1-Day Free Access
                      </p>
                    </div>

                    <a
                      href="https://wa.me/919075097235"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1 w-full py-1.5 rounded-md bg-emerald-500 text-white font-bold text-[9px] shadow-sm hover:bg-emerald-400 transition-colors"
                    >
                      <MessageCircle className="size-2.5" />
                      <span>WhatsApp Pass</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* 3. Floating Notification Pill (Top Right) */}
              <div className="absolute -top-3 right-2 sm:right-3 rounded-xl border border-cyan-200 bg-white/98 px-2.5 py-1.5 shadow-lg shadow-cyan-900/10 backdrop-blur-md flex items-center gap-2 animate-bounce-subtle z-30">
                <div className="flex size-6 items-center justify-center rounded-md bg-emerald-50 text-emerald-600 shrink-0">
                  <MessageCircle className="size-3" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold text-slate-900 leading-tight">
                    New WhatsApp Lead!
                  </p>
                  <p className="text-[8px] text-emerald-700 font-semibold">
                    Arjun M. claimed 1-Day Trial
                  </p>
                </div>
              </div>

              {/* 4. Floating Payment Pill (Bottom Left) */}
              <div className="absolute -bottom-4 -left-2 sm:-left-3 rounded-xl border border-slate-200 bg-white/98 px-2.5 py-1.5 shadow-lg shadow-slate-900/10 backdrop-blur-md flex items-center gap-2 z-30">
                <div className="flex size-6 items-center justify-center rounded-md bg-cyan-50 text-cyan-600 shrink-0">
                  <CreditCard className="size-3" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold text-slate-900 leading-tight">
                    UPI Payment Logged
                  </p>
                  <p className="text-[8px] text-cyan-700 font-semibold">
                    ₹18,000 Annual Plan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
