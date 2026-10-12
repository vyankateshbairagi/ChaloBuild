"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles, LayoutDashboard } from "lucide-react";

export function ChaloBuildHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div className="sticky top-0 z-50 transition-all">
      {/* Top Launch Offer Announcement Bar - Compact */}
      {bannerVisible && (
        <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border-b border-cyan-500/20 px-3 py-1 text-center text-[11px] text-slate-300 flex items-center justify-center gap-2">
          <span className="flex size-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>
            <strong className="text-white font-semibold">Special Offer:</strong> Custom gym website &amp; software live in 48 hours.
          </span>
          <a
            href="#pricing"
            className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-2 ml-1"
          >
            View Plans →
          </a>
          <button
            type="button"
            onClick={() => setBannerVisible(false)}
            className="ml-2.5 text-slate-400 hover:text-white text-[11px]"
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Modern White Glass Navbar - Compact Window Proportion */}
      <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left Side: ChaloBuild Logo with Shadow in Background */}
          <Link href="/" className="flex items-center py-1 group">
            <div className="relative h-9 w-38 sm:h-10 sm:w-46 transition-transform duration-300 group-hover:scale-[1.03]">
              <Image
                src="/images/chalobuild-logo-transparent.png"
                alt="ChaloBuild by ThinkBuild"
                fill
                sizes="(max-width: 640px) 152px, 184px"
                priority
                className="object-contain object-left [filter:drop-shadow(0_1px_2px_rgba(15,23,42,0.95))_drop-shadow(0_3px_8px_rgba(15,23,42,0.7))_drop-shadow(0_6px_16px_rgba(2,132,199,0.3))]"
              />
            </div>
          </Link>

          {/* Center Navigation: Desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs font-semibold text-slate-600">
            <a
              href="#platform"
              className="hover:text-cyan-600 transition-colors py-1 px-2 rounded-md hover:bg-slate-50 relative group"
            >
              <span>Platform</span>
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
            <a
              href="#features"
              className="hover:text-cyan-600 transition-colors py-1 px-2 rounded-md hover:bg-slate-50 relative group"
            >
              <span>Features</span>
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
            <a
              href="#pricing"
              className="hover:text-cyan-600 transition-colors py-1 px-2 rounded-md hover:bg-slate-50 relative group"
            >
              <span>Pricing</span>
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
            <a
              href="#faq"
              className="hover:text-cyan-600 transition-colors py-1 px-2 rounded-md hover:bg-slate-50 relative group"
            >
              <span>FAQ</span>
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
            <Link
              href="/demo/ironcore"
              className="inline-flex items-center gap-1.5 text-cyan-700 bg-cyan-50/90 hover:bg-cyan-100 border border-cyan-200/80 transition-all py-1 px-2.5 rounded-lg group font-semibold shadow-2xs text-xs"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500" />
              </span>
              <span>Live Demo</span>
              <ArrowUpRight className="size-3 text-cyan-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </nav>

          {/* Right Side: CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-800 hover:border-cyan-500 hover:text-cyan-700 hover:bg-slate-50 shadow-2xs transition-all"
            >
              <LayoutDashboard className="size-3.5 text-cyan-600" />
              <span>Gym Management</span>
            </Link>
            <a
              href="#enquire"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:shadow-md hover:from-cyan-400 hover:to-blue-500 active:scale-[0.98] transition-all"
            >
              <Sparkles className="size-3" />
              <span>Book a Demo</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-1.5">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-[11px] font-bold text-cyan-700 shadow-2xs"
            >
              Gym App
            </Link>
            <a
              href="#enquire"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-2 py-1.5 text-[11px] font-bold text-white shadow-xs"
            >
              Demo
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="size-4.5 text-cyan-600" /> : <Menu className="size-4.5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl px-4 py-4 shadow-xl space-y-3">
            <nav className="flex flex-col gap-2.5 text-xs font-semibold text-slate-700">
              <a href="#platform" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-cyan-600">
                Platform
              </a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-cyan-600">
                Features
              </a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-cyan-600">
                Pricing
              </a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-cyan-600">
                FAQ
              </a>
              <Link
                href="/demo/ironcore"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-cyan-600 flex items-center justify-between"
              >
                <span>Live Demo (IronCore Fitness)</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2.5 rounded-lg bg-cyan-50 text-cyan-800 font-bold flex items-center justify-between border border-cyan-200/80"
              >
                <span className="flex items-center gap-2">
                  <LayoutDashboard className="size-3.5 text-cyan-600" />
                  <span>Gym Management Portal</span>
                </span>
                <ArrowUpRight className="size-3.5 text-cyan-600" />
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
