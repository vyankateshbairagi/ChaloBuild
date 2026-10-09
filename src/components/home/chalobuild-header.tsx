"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function ChaloBuildHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side: CB Logo + Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white font-extrabold text-base shadow-sm group-hover:bg-blue-700 transition-colors">
            CB
          </div>
          <div className="leading-tight">
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Chalo<span className="text-blue-600">Build</span>
            </span>
          </div>
        </Link>

        {/* Center Navigation: Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a
            href="#platform"
            className="hover:text-blue-600 transition-colors py-1"
          >
            Platform
          </a>
          <a
            href="#features"
            className="hover:text-blue-600 transition-colors py-1"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-blue-600 transition-colors py-1"
          >
            How It Works
          </a>
          <Link
            href="/demo/ironcore"
            className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors py-1"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="size-3 text-slate-400 group-hover:text-blue-600" />
          </Link>
        </nav>

        {/* Right Side: Desktop Login + Book a Demo */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors px-2 py-1"
          >
            Dashboard Login
          </Link>
          <a
            href="#enquire"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 active:scale-[0.99] transition-all"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="#enquire"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white shadow-xs"
          >
            Book Demo
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-5 shadow-lg space-y-4">
          <nav className="flex flex-col gap-3 text-sm font-semibold text-slate-700">
            <a
              href="#platform"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-blue-600"
            >
              Platform
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-blue-600"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-blue-600"
            >
              How It Works
            </a>
            <Link
              href="/demo/ironcore"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-blue-600 flex items-center justify-between"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
            >
              Dashboard Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
