import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Phone, ShieldCheck, Heart } from "lucide-react";

export function ChaloBuildFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#06080d] pt-12 pb-8 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs font-sans">
      <div className="mx-auto max-w-7xl">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/[0.08]">
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block relative h-10 w-44 transition-transform hover:scale-[1.02]">
              <Image
                src="/images/chalobuild-logo.svg"
                alt="ChaloBuild — Turnkey Gym Applications"
                fill
                priority
                className="object-contain object-left"
              />
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              We engineer custom-branded athletic gym websites connected with real-time front-desk member management, attendance tracking, and UPI fee collection as a <strong className="text-slate-200">one-time turnkey build</strong>. Zero monthly SaaS subscriptions.
            </p>

            <div className="pt-1 flex items-center gap-2">
              <span className="flex size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-semibold text-slate-300">
                Turnkey Engineering Studio • Live &amp; Accepting Gym Clients
              </span>
            </div>

            <div className="pt-2 text-slate-400 text-xs space-y-1">
              <p className="font-bold text-slate-200">
                ChaloBuild Engineering Studio
              </p>
              <p className="text-[11px] text-slate-500">
                Nashik • Pune • Mumbai • Bengaluru • Delhi NCR
              </p>
            </div>
          </div>

          {/* Column 1: Platform Capabilities */}
          <div className="space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-white">Platform</p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#platform" className="hover:text-cyan-400 transition-colors">
                  Branded Gym Website
                </a>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-cyan-400 transition-colors">
                  GymFlow Staff Console
                </Link>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  1-Tap Daily Attendance
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  WhatsApp 1-Day Trial Passes
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  Membership Expiry Hub
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  UPI &amp; Cash Payment Ledger
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Live Hands-on Demos */}
          <div className="space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-white">Live Test Demos</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/demo/ironcore"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5 text-cyan-400 font-semibold"
                >
                  <span>IronCore Website Demo</span>
                  <ArrowUpRight className="size-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-semibold"
                >
                  <span>Front-Desk Console Demo</span>
                  <ArrowUpRight className="size-3 text-cyan-400" />
                </Link>
              </li>
              <li>
                <a href="#workflow" className="hover:text-cyan-400 transition-colors">
                  48-Hour Turnkey Workflow
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  One-Time Build Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Consultation */}
          <div className="space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-white">Direct Connect</p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://wa.me/919075097235?text=Hi%20ChaloBuild!%20I%20am%20interested%20in%20a%20one-time%20turnkey%20build%20for%20my%20gym."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
                >
                  <MessageCircle className="size-3.5 fill-current" />
                  <span>WhatsApp: +91 90750 97235</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919075097235"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="size-3.5 text-cyan-400" />
                  <span>Call: +91 90750 97235</span>
                </a>
              </li>
              <li className="pt-1">
                <div className="rounded-lg border border-white/[0.08] bg-slate-900/60 p-2 text-[11px] space-y-1">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <ShieldCheck className="size-3.5" />
                    <span>One-Time Guarantee</span>
                  </div>
                  <p className="text-slate-400 text-[10px] leading-tight">
                    100% full source code &amp; PostgreSQL database handover upon launch.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Badges */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-[11px]">
            &copy; {new Date().getFullYear()} <strong className="text-slate-300 font-semibold">ChaloBuild</strong>. All rights reserved. Built with precision for modern gyms.
          </p>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <a href="#faq" className="hover:text-cyan-400 transition-colors">
              Terms &amp; Delivery
            </a>
            <span className="text-slate-700">&bull;</span>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">
              Code Ownership Agreement
            </a>
            <span className="text-slate-700">&bull;</span>
            <a
              href="https://wa.me/919075097235"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              Direct WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
