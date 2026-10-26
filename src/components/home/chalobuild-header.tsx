"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  LayoutDashboard,
  MessageCircle,
} from "lucide-react";

export function ChaloBuildHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div className="sticky top-0 z-50 transition-all font-sans">
      {/* Top Value Banner */}
      {bannerVisible && (
        <div className="bg-[#0b101b] border-b border-cyan-500/20 px-3 py-1.5 text-center text-[11px] text-slate-300 flex items-center justify-center gap-2">
          <span className="flex size-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>
            <strong className="text-white font-semibold">One-Time Project Build:</strong> Zero recurring software fees. You own 100% of your gym&apos;s custom website &amp; management software.
          </span>
          <a
            href="#pricing"
            className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-2 ml-1"
          >
            View Packages →
          </a>
          <button
            type="button"
            onClick={() => setBannerVisible(false)}
            className="ml-2.5 text-slate-400 hover:text-white text-[11px] p-0.5"
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Production Glass Navbar */}
      <header className="border-b border-white/[0.08] bg-[#080a10]/90 backdrop-blur-xl shadow-xl shadow-black/30">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Brand Logo */}
          <Link href="/" className="flex items-center gap-2 py-1 group">
            <div className="relative h-10 w-44 sm:h-11 sm:w-48 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/images/chalobuild-logo.svg"
                alt="ChaloBuild — Turnkey Gym Applications"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-medium text-slate-300">
            <a
              href="#workflow"
              className="hover:text-cyan-400 transition-colors py-1 relative group"
            >
              <span>How It Works</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
            <a
              href="#platform"
              className="hover:text-cyan-400 transition-colors py-1 relative group"
            >
              <span>Platform</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
            <a
              href="#features"
              className="hover:text-cyan-400 transition-colors py-1 relative group"
            >
              <span>Features</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
            <a
              href="#pricing"
              className="hover:text-cyan-400 transition-colors py-1 relative group"
            >
              <span>One-Time Packages</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
            <a
              href="#faq"
              className="hover:text-cyan-400 transition-colors py-1 relative group"
            >
              <span>FAQ</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
            <Link
              href="/demo/ironcore"
              className="inline-flex items-center gap-1.5 text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 transition-all py-1 px-3 rounded-full font-semibold shadow-[0_0_12px_rgba(0,245,255,0.12)] text-xs"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
              </span>
              <span>Live Gym Demo</span>
              <ArrowUpRight className="size-3 text-cyan-400" />
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:border-cyan-500 hover:text-white hover:bg-slate-800 transition-all"
            >
              <LayoutDashboard className="size-3.5 text-cyan-400" />
              <span>Staff Console</span>
            </Link>
            <a
              href="https://wa.me/919075097235?text=Hi%20ChaloBuild!%20I%20visited%20your%20website%20and%20tested%20the%20live%20demo.%20I%20want%20to%20discuss%20a%20one-time%20turnkey%20build%20for%20my%20gym."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-md shadow-emerald-500/15 active:scale-[0.98] transition-all"
            >
              <MessageCircle className="size-3.5 fill-current" />
              <span>Talk to Engineers</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-[11px] font-bold text-cyan-400"
            >
              App Demo
            </Link>
            <a
              href="https://wa.me/919075097235?text=Hi%20ChaloBuild!%20I%20am%20interested%20in%20a%20one-time%20turnkey%20gym%20website%20and%20software%20build."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-2.5 py-1.5 text-[11px] font-bold text-slate-950 shadow-xs"
            >
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="size-5 text-cyan-400" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#090c14]/98 backdrop-blur-2xl px-4 py-5 shadow-2xl space-y-3">
            <nav className="flex flex-col gap-3 text-xs font-semibold text-slate-300">
              <a
                href="#workflow"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-cyan-400 flex items-center justify-between"
              >
                <span>How It Works (4-Step Workflow)</span>
                <span className="text-[10px] text-cyan-400 font-bold bg-cyan-950/60 px-2 py-0.5 rounded">One-Time</span>
              </a>
              <a
                href="#platform"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-cyan-400"
              >
                Platform Showcase
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-cyan-400"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-cyan-400"
              >
                One-Time Packages (Zero Subscriptions)
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-cyan-400"
              >
                FAQ
              </a>
              <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
                <Link
                  href="/demo/ironcore"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg bg-cyan-950/40 text-cyan-300 font-bold flex items-center justify-between border border-cyan-500/30"
                >
                  <span>Explore Live Gym Demo (IronCore)</span>
                  <ArrowUpRight className="size-3.5 text-cyan-400" />
                </Link>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg bg-slate-900 text-slate-200 font-bold flex items-center justify-between border border-slate-800"
                >
                  <span className="flex items-center gap-2">
                    <LayoutDashboard className="size-3.5 text-cyan-400" />
                    <span>Enter Staff Dashboard</span>
                  </span>
                  <ArrowUpRight className="size-3.5 text-cyan-400" />
                </Link>
                <a
                  href="https://wa.me/919075097235?text=Hi%20ChaloBuild!%20I%20am%20interested%20in%20a%20one-time%20turnkey%20gym%20website%20and%20software%20build."
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold flex items-center justify-center gap-2 shadow-md shadow-emerald-500/15"
                >
                  <MessageCircle className="size-4 fill-current" />
                  <span>Chat With Engineers on WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
