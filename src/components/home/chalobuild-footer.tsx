import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ChaloBuildFooter() {
  return (
    <footer className="border-t border-slate-800 bg-[#070b14] pt-10 pb-8 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-slate-800/80">
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <Link href="/" className="inline-block relative h-9 w-42 transition-transform hover:scale-[1.02]">
              <Image
                src="/images/chalobuild-logo-transparent.png"
                alt="ChaloBuild by ThinkBuild"
                fill
                sizes="168px"
                className="object-contain object-left"
              />
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Turnkey gym websites connected with modern front-desk management, attendance tracking, and digital payments. Engineered for ambitious fitness club owners.
            </p>

            <div className="pt-1 flex items-center gap-2">
              <span className="flex size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-semibold text-slate-300">
                All Systems Operational • Cloud Hosted
              </span>
            </div>

            <div className="pt-1 text-slate-400 text-[11px] space-y-0.5">
              <p className="font-semibold text-slate-300">
                A Product of{" "}
                <a
                  href="https://www.thinkbuild.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 hover:underline font-bold"
                >
                  Think Build
                </a>
              </p>
              <p className="text-[10px] text-slate-500">
                Yashoda Heights, Lawathe Nagar, Nashik, Maharashtra
              </p>
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-200">Product</p>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#platform" className="hover:text-cyan-400 transition-colors">
                  Public Gym Website
                </a>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-cyan-400 transition-colors">
                  Staff Management Portal
                </Link>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  Daily Attendance Tracker
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  WhatsApp 1-Day Passes
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Live Demos */}
          <div className="space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-200">Live Demos</p>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link
                  href="/demo/ironcore"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1 text-cyan-400 font-semibold"
                >
                  <span>IronCore Fitness Website</span>
                  <ArrowUpRight className="size-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1 text-slate-300 hover:text-white font-semibold"
                >
                  <span>Gym Management Portal</span>
                  <ArrowUpRight className="size-3 text-cyan-400" />
                </Link>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">
                  48-Hour Launch Guide
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Company */}
          <div className="space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-200">Connect</p>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="https://wa.me/919075097235"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  WhatsApp: +91 9075097235
                </a>
              </li>
              <li>
                <a
                  href="https://www.thinkbuild.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>thinkbuild.in</span>
                  <ArrowUpRight className="size-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@thinkbuild.in"
                  className="hover:text-cyan-400 transition-colors"
                >
                  contact@thinkbuild.in
                </a>
              </li>
              <li>
                <span className="text-slate-500 text-[11px]">Nashik • Pune • Mumbai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="text-[11px]">
            © {new Date().getFullYear()} ChaloBuild by{" "}
            <a
              href="https://www.thinkbuild.in"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              ThinkBuild
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-slate-500 text-[10px]">
            <a href="#faq" className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </a>
            <span>•</span>
            <a href="#faq" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#enquire" className="hover:text-slate-300 transition-colors">
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
