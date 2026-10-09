import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Flame,
  ShieldCheck,
  Sparkles,
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
      className="relative isolate overflow-hidden bg-white text-slate-900 flex flex-col justify-between"
    >
      {/* Main Hero Content Area */}
      <div className="relative z-10 mx-auto grid max-w-7xl flex-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-24">
        {/* Left Column: Headlines & Actions */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-700">
            <span className="flex size-2 rounded-full bg-red-600 animate-pulse" />
            <span>{config.hero.badge}</span>
          </div>

          <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            {config.hero.headlinePart1}{" "}
            <span className="text-red-600">
              {config.hero.headlineHighlight}
            </span>
          </h1>

          <p className="max-w-xl text-lg font-medium text-slate-700 sm:text-xl leading-relaxed">
            {config.hero.subheadline}
          </p>

          <p className="max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            {config.hero.description}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-red-600 px-7 py-6 text-sm font-semibold uppercase tracking-wider text-white shadow-md shadow-red-600/20 hover:bg-red-700 transition-all hover:scale-[1.01]"
            >
              <Link href={`${prefix}/pricing`}>
                <span>View Membership Plans</span>
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-300 bg-white px-7 py-6 text-sm font-semibold uppercase tracking-wider text-slate-800 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-xs"
            >
              <Link href={`${prefix}/contact#trial`}>
                <span>Claim Free Trial</span>
              </Link>
            </Button>
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-600">
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-red-600" />
              <span>Certified Strength Coaches</span>
            </span>
            <span className="flex items-center gap-2">
              <Flame className="size-4 text-amber-600" />
              <span>Olympic Lifting Equipment</span>
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="size-4 text-emerald-600" />
              <span>No Hidden Charges</span>
            </span>
          </div>
        </div>

        {/* Right Column: Visual Showcase Card */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-900/5 group">
            <Image
              src={config.hero.image}
              alt={`${config.name} Training Arena`}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            {/* Bottom Floating Badge */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur-md shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                    {config.name}
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    {config.tagline}
                  </p>
                </div>
                <Link
                  href={`${prefix}/gallery`}
                  className="inline-flex size-9 items-center justify-center rounded-xl bg-red-600 text-white hover:bg-red-700 transition-colors"
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
      <div className="relative z-10 border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">
          {config.hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="px-4 py-5 text-center sm:px-6 sm:py-6"
            >
              <p className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                <span className="text-red-600">{stat.value}</span>
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
