import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Flame,
  ShieldCheck,
  Sparkles,
  Activity,
  Dumbbell,
  CheckCircle2,
} from "lucide-react";

import { gymConfig, type GymConfig } from "@/config/gym";
import { Button } from "@/components/ui/button";

export function HeroSection({
  config = gymConfig,
  basePath = "",
}: {
  config?: GymConfig;
  basePath?: string;
}) {
  const prefix = basePath ? basePath : "";

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[#090b11] text-white flex flex-col justify-between border-b border-white/[0.08] font-sans"
    >
      {/* Background Lighting Accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.12),transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute top-1/3 right-0 w-[550px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.1),transparent_70%)] pointer-events-none blur-3xl" />

      {/* Subtle Micro-Grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Hero Content Area */}
      <div className="relative z-10 mx-auto grid max-w-7xl flex-1 items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-20">
        {/* Left Column: Headlines & Actions */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span>{config.hero.badge}</span>
          </div>

          <h1 className="text-4xl font-black uppercase leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {config.hero.headlinePart1}{" "}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-orange-400">
              {config.hero.headlineHighlight}
            </span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg font-medium text-slate-300 leading-relaxed">
            {config.hero.subheadline}
          </p>

          <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-slate-400">
            {config.hero.description}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 px-7 py-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/30 hover:from-red-500 hover:to-red-600 transition-all hover:scale-[1.01] border border-red-500/40"
            >
              <Link href={`${prefix}/contact#trial`}>
                <span>Claim Free 1-Day VIP Pass</span>
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/[0.12] bg-slate-900/80 px-7 py-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 hover:bg-slate-800 hover:text-white hover:border-red-500/40 transition-all shadow-xs"
            >
              <Link href={`${prefix}/pricing`}>
                <span>View Membership Plans</span>
              </Link>
            </Button>
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-red-500" />
              <span className="font-semibold">CSCS-Certified Coaches</span>
            </span>
            <span className="flex items-center gap-2">
              <Flame className="size-4 text-orange-500" />
              <span className="font-semibold">Olympic Lifting Turf</span>
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="size-4 text-emerald-400" />
              <span className="font-semibold">Zero Admission Charges</span>
            </span>
          </div>
        </div>

        {/* Right Column: Visual Showcase Card */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-600/20 blur-xl opacity-70" />

          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-white/[0.12] bg-[#0d101a] shadow-2xl group">
            <Image
              src={config.hero.image}
              alt={`${config.name} Training Arena`}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b11] via-transparent to-black/30" />

            {/* Top Live Status Pill */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Arena • 42 Athletes Training</span>
            </div>

            {/* Bottom Floating Badge */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/[0.12] bg-[#0c101d]/90 p-4 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-red-400">
                    {config.name}
                  </p>
                  <p className="text-sm font-bold text-white">
                    {config.tagline}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {config.contact.address.area}, {config.contact.address.city}
                  </p>
                </div>
                <Link
                  href={`${prefix}/gallery`}
                  className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white hover:from-red-500 hover:to-rose-500 transition-all shadow-md shadow-red-600/30"
                  title="Explore Gallery"
                >
                  <ChevronRight className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quantitative Stats Ticker */}
      <div className="relative z-10 border-t border-white/[0.08] bg-[#06080d]/80 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/[0.08] sm:grid-cols-4">
          {config.hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="px-4 py-4 sm:py-5 text-center sm:px-6"
            >
              <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  {stat.value}
                </span>
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
