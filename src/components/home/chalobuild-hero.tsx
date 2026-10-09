import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export function ChaloBuildHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 lg:pt-14 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Headlines, Copy, CTAs, Benefits */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            {/* Small Introductory Badge */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-600">
                <Sparkles className="size-3.5 text-blue-600 shrink-0" />
                <span>THE COMPLETE GYM GROWTH PLATFORM</span>
              </div>
            </div>

            {/* Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Your Gym Deserves a{" "}
              <span className="text-blue-600 block mt-1">
                Stronger Online Presence.
              </span>
            </h1>

            {/* Hero Description */}
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
              Get a custom-branded gym website, connected with powerful member
              management, attendance tracking, subscriptions and payments — all
              in one platform.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/demo/ironcore"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 active:scale-[0.99] transition-all"
              >
                <span>Explore Live Demo</span>
                <ArrowRight className="size-4" />
              </Link>

              <a
                href="#enquire"
                className="inline-flex items-center justify-center rounded-xl border border-blue-600 bg-white px-7 py-3.5 text-sm sm:text-base font-semibold text-blue-600 hover:bg-blue-50 active:scale-[0.99] transition-all shadow-xs"
              >
                Book a Free Consultation
              </a>
            </div>

            {/* Benefit Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                <span>Custom gym branding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                <span>Website + management in one platform</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                <span>Built for your workflow</span>
              </div>
            </div>
          </div>

          {/* Right Column: Gym Photograph + Floating Dashboard Preview Cards */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto w-full max-w-2xl aspect-[16/11] sm:aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100 shadow-2xl shadow-slate-900/10">
              {/* Gym Photograph */}
              <Image
                src="/images/chalobuild-hero-gym.jpg"
                alt="Modern bright commercial gym interior with professional fitness equipment"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Card 1: Membership Overview (Top-Left) */}
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 rounded-2xl border border-slate-200/90 bg-white/95 p-2.5 sm:p-4 shadow-xl shadow-slate-900/10 backdrop-blur-md transition-transform scale-[0.85] sm:scale-100 origin-top-left hover:scale-[1.02]">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="flex size-5 sm:size-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Users className="size-3 sm:size-4" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    MEMBERSHIP OVERVIEW
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="text-xl sm:text-3xl font-extrabold text-slate-900 leading-none">
                    248
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-500">
                    Active Members
                  </span>
                </div>
                <div className="mt-1.5 sm:mt-2 flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-emerald-600">
                    <TrendingUp className="size-2.5 sm:size-3" />
                    +12%
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-400">
                    vs last month
                  </span>
                </div>
              </div>

              {/* Card 2: Attendance (Bottom-Left) */}
              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 rounded-2xl border border-slate-200/90 bg-white/95 p-2.5 sm:p-4 shadow-xl shadow-slate-900/10 backdrop-blur-md min-w-[145px] sm:min-w-[190px] transition-transform scale-[0.82] sm:scale-100 origin-bottom-left hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-900">
                    Attendance
                  </span>
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-emerald-600">
                    <TrendingUp className="size-2 sm:size-2.5" />
                    +18%
                  </span>
                </div>
                {/* CSS Bar Chart Visual */}
                <div className="flex items-end gap-1 sm:gap-1.5 h-6 sm:h-7 mb-2 pt-1">
                  <div className="w-2 sm:w-2.5 bg-blue-200 rounded-t h-[40%]" />
                  <div className="w-2 sm:w-2.5 bg-blue-300 rounded-t h-[65%]" />
                  <div className="w-2 sm:w-2.5 bg-blue-400 rounded-t h-[50%]" />
                  <div className="w-2 sm:w-2.5 bg-blue-500 rounded-t h-[80%]" />
                  <div className="w-2 sm:w-2.5 bg-blue-400 rounded-t h-[60%]" />
                  <div className="w-2 sm:w-2.5 bg-blue-600 rounded-t h-[100%]" />
                  <div className="w-2 sm:w-2.5 bg-blue-500 rounded-t h-[75%]" />
                </div>
                <div className="flex items-baseline justify-between border-t border-slate-100 pt-1">
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                    Today&apos;s check-ins
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900">
                    42
                  </span>
                </div>
              </div>

              {/* Card 3: New Membership (Bottom-Right) */}
              <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 rounded-2xl border border-slate-200/90 bg-white/95 p-2 sm:p-3.5 shadow-xl shadow-slate-900/10 backdrop-blur-md flex items-center gap-2 sm:gap-3 max-w-[180px] sm:max-w-[240px] transition-transform scale-[0.82] sm:scale-100 origin-bottom-right hover:scale-[1.02]">
                <div className="flex size-7 sm:size-10 items-center justify-center rounded-lg sm:rounded-xl bg-blue-50 text-blue-600 shrink-0">
                  <Sparkles className="size-3.5 sm:size-5" />
                </div>
                <div className="min-w-0 pr-0.5">
                  <p className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-400 leading-none">
                    New membership
                  </p>
                  <p className="text-[11px] sm:text-sm font-bold text-slate-900 truncate mt-0.5">
                    Premium Plan
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-blue-600 mt-0.5">
                    1 month · ₹2,499
                  </p>
                </div>
                <div className="ml-auto text-blue-600 shrink-0">
                  <ChevronRight className="size-3.5 sm:size-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
