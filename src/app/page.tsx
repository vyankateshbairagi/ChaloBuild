import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  CreditCard,
  Globe,
  LayoutDashboard,
  Lock,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ChaloBuild — Turnkey Gym Websites & Management Platform",
  description:
    "Launch a high-converting branded website and streamlined management software for your gym in 48 hours. Member tracking, payments, attendance, and online leads.",
  openGraph: {
    title: "ChaloBuild — Turnkey Gym Websites & Management Platform",
    description:
      "Commercial platform for gym owners: professional public website plus connected member management system.",
    type: "website",
    url: "https://chalobuild.in",
  },
};

export default function ChaloBuildHomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ChaloBuild Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-lg shadow-sm group-hover:bg-blue-700 transition-colors">
              CB
            </div>
            <div className="leading-none">
              <span className="text-xl font-black tracking-tight text-slate-900">
                Chalo<span className="text-blue-600">Build</span>
              </span>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mt-0.5">
                Gym Platform
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#offering" className="hover:text-blue-600 transition-colors">
              The 2-in-1 Platform
            </a>
            <a href="#features" className="hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">
              How It Works
            </a>
            <Link
              href="/demo/ironcore"
              className="inline-flex items-center gap-1 text-blue-600 font-bold hover:text-blue-700 transition-colors"
            >
              <span>Interactive Demo</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-blue-600 transition-colors px-2 py-1"
            >
              Dashboard Login
            </Link>
            <Button
              asChild
              className="bg-blue-600 font-semibold uppercase tracking-wider text-xs text-white shadow-sm hover:bg-blue-700"
            >
              <a href="#enquire">Get Started</a>
            </Button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-20 px-4 sm:px-6 lg:px-8 lg:py-28 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Sparkles className="size-3.5 text-blue-600" />
              <span>Turnkey Solution for Gym Owners &amp; Fitness Studios</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.08]">
              A Professional Website &amp; Management System for{" "}
              <span className="text-blue-600">Your Gym.</span>
            </h1>

            <p className="text-lg text-slate-600 sm:text-xl leading-relaxed">
              Attract paying members with a custom-branded public website, and run daily operations with connected attendance, subscriptions, receipts, and member tracking.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-blue-600 px-8 py-6 text-sm font-semibold uppercase tracking-wider text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:scale-[1.01] transition-all"
              >
                <Link href="/demo/ironcore">
                  <span>Explore Live Gym Demo</span>
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-slate-300 bg-white px-8 py-6 text-sm font-semibold uppercase tracking-wider text-slate-800 hover:bg-slate-50 shadow-xs"
              >
                <a href="#enquire">
                  <span>Book Free Consultation</span>
                </a>
              </Button>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-blue-600" />
                <span>48-Hour Setup &amp; Deployment</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-blue-600" />
                <span>Custom Domain &amp; Branding</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-blue-600" />
                <span>Zero Coding Required</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 2-in-1 Platform Section */}
      <section id="offering" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              The Complete Offering
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Two Powerful Products. One Unified System.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Most gym management software leaves you without a website, while generic website builders can&apos;t manage your members. ChaloBuild bridges both seamlessly.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 items-stretch">
            {/* Left Card: The Public Website */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Globe className="size-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                  1. High-Converting Public Website
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  A modern, mobile-optimized showcase tailored with your gym&apos;s name, logo, programs, photos, membership tiers, and trainer credentials.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                    <span>Instant WhatsApp 1-Day pass generation for new leads</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                    <span>Published membership plans with transparent pricing</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                    <span>Trainer profiles with certifications and specialties</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                    <span>High-resolution facility photo gallery &amp; Google Map embed</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700 font-semibold">
                  <Link href="/demo/ironcore">
                    <span>Preview Demo Website (IronCore Fitness)</span>
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Card: The GymFlow Dashboard */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <LayoutDashboard className="size-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                  2. GymFlow Management Dashboard
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  A streamlined, information-dense operational dashboard built for gym owners and staff to run their facility efficiently every single day.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                    <span>Member directory with code generation &amp; contact logs</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                    <span>One-click daily check-in attendance tracking</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                    <span>Subscription statuses &amp; upcoming expiry warnings</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                    <span>Payment recording (Cash, UPI, Card) &amp; receipts</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <Button asChild variant="outline" className="w-full border-slate-300 bg-white text-slate-800 hover:bg-slate-50 font-semibold shadow-xs">
                  <Link href="/login">
                    <span>Explore Management Dashboard</span>
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Commercial Features
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Engineered for Real Gym Growth.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Built using cutting-edge Next.js and PostgreSQL architecture, tailored for high uptime, safety, and ease of use.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Complete Member Profiles",
                desc: "Store emergency contacts, joining dates, medical notes, phone numbers, and active membership plans.",
              },
              {
                icon: CalendarCheck,
                title: "Daily Attendance Check-Ins",
                desc: "Quick front-desk attendance marking with timestamp logs and duplicate prevention per member/day.",
              },
              {
                icon: CreditCard,
                title: "Payment & Receipt Tracking",
                desc: "Record UPI, cash, card, and bank transfers with sequential receipt numbering and status tracking.",
              },
              {
                icon: Clock,
                title: "Expiry & Renewal Alerts",
                desc: "Easily see which memberships expire in the next 7 to 30 days to follow up and prevent churn.",
              },
              {
                icon: ShieldCheck,
                title: "Role-Based Staff Access",
                desc: "Secure OWNER and STAFF roles with permission enforcement on sensitive financial actions.",
              },
              {
                icon: Lock,
                title: "Tenant Data Isolation",
                desc: "Every gym's member records and financial entries are strictly isolated in PostgreSQL.",
              },
            ].map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. How It Works: 3 Simple Steps */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Simple Onboarding
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              From Inquiry to Live Website in 48 Hours.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Send Us Your Gym Details",
                desc: "Share your gym name, logo, membership pricing, facility photos, and contact info via WhatsApp or email.",
              },
              {
                step: "02",
                title: "We Configure & Deploy",
                desc: "ChaloBuild sets up your dedicated website, connects your management database, and tests every feature.",
              },
              {
                step: "03",
                title: "Start Enrolling Members",
                desc: "Point your domain or use your slug, log into your staff dashboard, and begin tracking your gym seamlessly.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-xs"
              >
                <span className="text-3xl font-black text-blue-600">
                  {s.step}
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Gym Owner Inquiry & Demonstration Booking */}
      <section id="enquire" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Zap className="size-3.5 text-blue-600" />
              <span>Partner With ChaloBuild</span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Ready to Upgrade Your Gym&apos;s Online Presence?
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto">
              Get in touch with us to see how ChaloBuild can power your gym&apos;s website and back-office management.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/919876543210?text=Hi%20ChaloBuild!%20I%20am%20a%20gym%20owner%20interested%20in%20launching%20a%20website%20and%20dashboard%20for%20my%20gym."
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-md hover:bg-emerald-700 transition-all"
              >
                <MessageCircle className="size-5" />
                <span>Chat Directly on WhatsApp</span>
              </a>

              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-slate-300 bg-white px-7 py-6 text-sm font-semibold uppercase tracking-wider text-slate-800 hover:bg-slate-50"
              >
                <Link href="/demo/ironcore">
                  <span>Explore Live Gym Demo</span>
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Direct response within 2 hours • No pushy sales calls
            </p>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 px-4 sm:px-6 lg:px-8 text-slate-600 text-xs">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 text-sm">ChaloBuild</span>
            <span>•</span>
            <a href="https://chalobuild.in" className="hover:text-blue-600">
              chalobuild.in
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/demo/ironcore" className="hover:text-blue-600 font-medium">
              IronCore Fitness Demo
            </Link>
            <Link href="/login" className="hover:text-blue-600 font-medium">
              Staff Portal
            </Link>
            <a
              href="https://chalobuild.in"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              ChaloBuild Company
            </a>
          </div>

          <p>© {new Date().getFullYear()} ChaloBuild. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
