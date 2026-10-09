import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Flame,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { gymConfig } from "@/config/gym";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-[#09090b] text-white flex flex-col justify-between"
    >
      {/* Background Graphic & Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(225,29,72,0.22),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-rose-600/10 blur-[130px]"
      />

      {/* Main Hero Content Area */}
      <div className="relative z-10 mx-auto grid max-w-7xl flex-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-24">
        {/* Left Column: Headlines & Actions */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-rose-300">
            <span className="flex size-2 rounded-full bg-rose-500 animate-pulse" />
            <span>{gymConfig.hero.badge}</span>
          </div>

          <h1 className="text-4xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5rem]">
            {gymConfig.hero.headlinePart1}
            <br />
            <span className="bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
              {gymConfig.hero.headlineHighlight}
            </span>
          </h1>

          <p className="max-w-xl text-lg font-medium text-zinc-300 sm:text-xl leading-relaxed">
            {gymConfig.hero.subheadline}
          </p>

          <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {gymConfig.hero.description}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-rose-600 px-7 py-6 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-rose-950/70 hover:bg-rose-500 hover:scale-[1.02] transition-all"
            >
              <Link href="/pricing">
                <span>View Membership Plans</span>
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 px-7 py-6 text-sm font-bold uppercase tracking-wider text-white hover:border-white/40 hover:bg-white/10 transition-all"
            >
              <Link href="/contact#trial">
                <span>Claim Free Trial</span>
              </Link>
            </Button>
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-rose-500" />
              <span>Certified Strength Coaches</span>
            </span>
            <span className="flex items-center gap-2">
              <Flame className="size-4 text-amber-500" />
              <span>Olympic Lifting Grade Equipment</span>
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="size-4 text-rose-400" />
              <span>No Long-Term Lock-In</span>
            </span>
          </div>
        </div>

        {/* Right Column: High-Impact Visual Card */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-zinc-900 shadow-2xl shadow-black/80 group">
            <Image
              src={gymConfig.hero.image}
              alt="IronCore Fitness Gym Training Arena"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Bottom floating badge */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-zinc-950/80 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                    {gymConfig.name}
                  </p>
                  <p className="text-sm font-bold text-white">
                    {gymConfig.tagline}
                  </p>
                </div>
                <Link
                  href="/gallery"
                  className="inline-flex size-9 items-center justify-center rounded-xl bg-rose-600 text-white hover:bg-rose-500 transition-colors"
                  title="Explore Gallery"
                >
                  <ChevronRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 border-t border-white/10 bg-zinc-950/70 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
          {gymConfig.hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="px-4 py-5 text-center sm:px-6 sm:py-6"
            >
              <p className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
                <span className="text-rose-500">{stat.value}</span>
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-400 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
