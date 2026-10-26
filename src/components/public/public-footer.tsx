import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { gymConfig, type GymConfig } from "@/config/gym";

export function PublicFooter({
  config = gymConfig,
  basePath = "",
}: {
  config?: GymConfig;
  basePath?: string;
}) {
  const prefix = basePath ? basePath : "";

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#06080d] text-slate-400 font-sans">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/[0.08] pb-16 lg:grid-cols-4 sm:grid-cols-2">
          {/* Gym Identity Column */}
          <div className="space-y-4 lg:pr-4">
            <Link href={prefix || "/"} className="inline-block">
              {config.logo.svg ? (
                <div className="relative h-11 w-48">
                  <Image
                    src={config.logo.svg}
                    alt={config.logo.alt || config.name}
                    fill
                    className="object-contain object-left"
                  />
                </div>
              ) : (
                <span className="text-xl font-black uppercase text-white">
                  {config.name}
                </span>
              )}
            </Link>
            <p className="text-xs font-bold uppercase tracking-wider text-red-400">
              {config.tagline}
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
              {config.shortDescription}
            </p>
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={config.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex size-9 items-center justify-center rounded-xl border border-white/[0.08] bg-slate-900 text-slate-300 hover:border-red-500 hover:bg-red-950/40 hover:text-red-400 transition-all shadow-xs"
                title="Instagram"
              >
                <svg
                  className="size-4 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
                  config.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex size-9 items-center justify-center rounded-xl border border-white/[0.08] bg-slate-900 text-slate-300 hover:border-emerald-500 hover:bg-emerald-950/40 hover:text-emerald-400 transition-all shadow-xs"
                title="WhatsApp"
              >
                <MessageCircle className="size-4 fill-current text-emerald-400" />
              </a>
              <a
                href={`tel:${config.contact.phoneRaw}`}
                className="flex size-9 items-center justify-center rounded-xl border border-white/[0.08] bg-slate-900 text-slate-300 hover:border-red-500 hover:bg-red-950/40 hover:text-red-400 transition-all shadow-xs"
                title="Call"
              >
                <Phone className="size-4 text-red-400" />
              </a>
            </div>
          </div>

          {/* Quick Explore Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href={prefix || "/"} className="hover:text-red-400 transition-colors">
                  Home Arena
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/about`}
                  className="hover:text-red-400 transition-colors"
                >
                  About the Facility
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/programs`}
                  className="hover:text-red-400 transition-colors"
                >
                  Training Programs
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/pricing`}
                  className="hover:text-red-400 transition-colors"
                >
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/trainers`}
                  className="hover:text-red-400 transition-colors"
                >
                  Coaching Staff
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/gallery`}
                  className="hover:text-red-400 transition-colors"
                >
                  Arena Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/contact`}
                  className="hover:text-red-400 transition-colors"
                >
                  Visiting &amp; Trial Pass
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Programs */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Featured Programs
            </h3>
            <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-400">
              {config.programs.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link
                    href={`${prefix}/programs#${p.id}`}
                    className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{p.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`${prefix}/programs`}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300 pt-1"
                >
                  <span>View all programs →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Visit &amp; Timings
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="size-4 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-300">
                  {config.contact.address.line1}, {config.contact.address.area}, {config.contact.address.city}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="size-4 text-red-400 shrink-0" />
                <a
                  href={`tel:${config.contact.phoneRaw}`}
                  className="hover:text-red-400 transition-colors"
                >
                  {config.contact.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="size-4 text-red-400 shrink-0" />
                <a
                  href={`mailto:${config.contact.email}`}
                  className="hover:text-red-400 transition-colors"
                >
                  {config.contact.email}
                </a>
              </p>
              <div className="pt-2 border-t border-white/[0.06] space-y-1 text-xs">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <Clock className="size-3.5 text-red-400" /> Facility Operating Hours
                </p>
                <p className="text-slate-400">Mon – Fri: {config.openingHours.weekdays}</p>
                <p className="text-slate-400">Saturday: {config.openingHours.saturday}</p>
                <p className="text-slate-400">Sunday: {config.openingHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ChaloBuild Commercial Platform Callout */}
        <div className="mt-12 rounded-2xl border border-cyan-500/30 bg-[#090d16] p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-1.5 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-cyan-950/80 border border-cyan-500/40 px-2.5 py-0.5 text-xs font-bold text-cyan-300 shadow-[0_0_10px_rgba(0,245,255,0.15)]">
                  <Sparkles className="size-3 text-cyan-400" />
                  ChaloBuild Studio
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Turnkey One-Time Build
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Want a custom athletic website and connected member management software for your gym?
                Get a one-time turnkey build with zero recurring subscriptions from <strong className="text-cyan-400 font-bold">ChaloBuild</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-slate-800 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 hover:bg-slate-700 hover:text-white transition-all shadow-xs"
              >
                <span>Enter Staff Console (No Login)</span>
                <ArrowUpRight className="size-3.5 text-cyan-400" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(0,245,255,0.3)] hover:shadow-[0_0_22px_rgba(0,245,255,0.45)] hover:from-cyan-400 hover:to-blue-500 transition-all"
              >
                <span>Explore ChaloBuild Studio</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & ChaloBuild Provider Credit */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {config.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <Link
              href="/"
              className="font-bold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
            >
              ChaloBuild
            </Link>
            <span className="text-slate-700">&bull;</span>
            <span className="text-slate-400 font-medium">{config.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
