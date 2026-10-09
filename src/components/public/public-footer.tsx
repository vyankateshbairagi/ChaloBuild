import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

import { gymConfig } from "@/config/gym";

export function PublicFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070709] text-white">
      {/* Top accent line */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-rose-600 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-36 size-96 rounded-full bg-rose-600/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-4 sm:grid-cols-2">
          {/* Gym Identity Column */}
          <div className="space-y-5 lg:pr-4">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-52">
                <Image
                  src={gymConfig.logo.svg}
                  alt={gymConfig.logo.alt}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm font-semibold uppercase tracking-wider text-rose-500">
              {gymConfig.tagline}
            </p>
            <p className="text-sm leading-relaxed text-zinc-400">
              {gymConfig.shortDescription}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={gymConfig.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:border-rose-500/50 hover:bg-rose-500/10 hover:text-white transition-all"
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
                href={`https://wa.me/${gymConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                  gymConfig.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-white transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="size-4" />
              </a>
              <a
                href={`tel:${gymConfig.contact.phoneRaw}`}
                className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:border-rose-500/50 hover:bg-rose-500/10 hover:text-white transition-all"
                title="Call"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Explore Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-rose-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-rose-400 transition-colors"
                >
                  About the Gym
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-rose-400 transition-colors"
                >
                  Training Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-rose-400 transition-colors"
                >
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/trainers"
                  className="hover:text-rose-400 transition-colors"
                >
                  Elite Coaches
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-rose-400 transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-rose-400 transition-colors"
                >
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
              Training Programs
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-zinc-400">
              {gymConfig.programs.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/programs#${p.id}`}
                    className="hover:text-rose-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{p.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-rose-400 hover:text-rose-300 pt-2"
                >
                  <span>View all programs →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
              Visit & Timings
            </h3>
            <div className="space-y-3 text-sm text-zinc-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="size-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {gymConfig.contact.address}, {gymConfig.contact.city}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="size-4 text-rose-500 shrink-0" />
                <a
                  href={`tel:${gymConfig.contact.phoneRaw}`}
                  className="hover:text-rose-400 transition-colors"
                >
                  {gymConfig.contact.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="size-4 text-rose-500 shrink-0" />
                <a
                  href={`mailto:${gymConfig.contact.email}`}
                  className="hover:text-rose-400 transition-colors"
                >
                  {gymConfig.contact.email}
                </a>
              </p>
              <div className="pt-2 border-t border-white/5 space-y-1 text-xs">
                <p className="font-semibold text-zinc-200 flex items-center gap-1.5">
                  <Clock className="size-3.5 text-rose-500" /> Opening Hours
                </p>
                <p className="text-zinc-400">Mon – Fri: {gymConfig.openingHours.weekdays}</p>
                <p className="text-zinc-400">Saturday: {gymConfig.openingHours.saturday}</p>
                <p className="text-zinc-400">Sunday: {gymConfig.openingHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ChaloBuild Technology Provider & Demo Badge Section */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-1.5 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 text-xs font-bold text-blue-400">
                  <Sparkles className="size-3 text-blue-400" />
                  {gymConfig.provider.name} Platform
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Gym Website & Management Solution
                </span>
              </div>
              <p className="text-sm text-zinc-300">
                This public website demonstrates the{" "}
                <strong className="text-white">ChaloBuild Gym Website Template</strong>
                , designed for gyms, fitness clubs, and sports centers. Powered by our
                GymFlow integrated management system.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={gymConfig.provider.ctaWhatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-900/40 hover:bg-blue-500 transition-all"
              >
                <span>Get This For Your Gym</span>
                <ArrowUpRight className="size-4" />
              </a>
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:bg-white/10 hover:text-white transition-all"
              >
                <span>GymFlow Dashboard</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Rights */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 {gymConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>{gymConfig.provider.footerText}</span>
            <span className="text-zinc-600">•</span>
            <span className="text-rose-400 font-semibold">{gymConfig.tagline}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
