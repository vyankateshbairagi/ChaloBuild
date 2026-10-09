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
    <footer className="relative border-t border-slate-200 bg-slate-50 text-slate-700">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-slate-200 pb-16 lg:grid-cols-4 sm:grid-cols-2">
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
                <span className="text-xl font-black uppercase text-slate-900">
                  {config.name}
                </span>
              )}
            </Link>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {config.tagline}
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              {config.shortDescription}
            </p>
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={config.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-all shadow-xs"
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
                className="flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 transition-all shadow-xs"
                title="WhatsApp"
              >
                <MessageCircle className="size-4" />
              </a>
              <a
                href={`tel:${config.contact.phoneRaw}`}
                className="flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-all shadow-xs"
                title="Call"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Explore Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
              Quick Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>
                <Link href={prefix || "/"} className="hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/about`}
                  className="hover:text-blue-600 transition-colors"
                >
                  About the Gym
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/programs`}
                  className="hover:text-blue-600 transition-colors"
                >
                  Training Programs
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/pricing`}
                  className="hover:text-blue-600 transition-colors"
                >
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/trainers`}
                  className="hover:text-blue-600 transition-colors"
                >
                  Elite Coaches
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/gallery`}
                  className="hover:text-blue-600 transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/contact`}
                  className="hover:text-blue-600 transition-colors"
                >
                  Contact &amp; Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
              Featured Programs
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {config.programs.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link
                    href={`${prefix}/programs#${p.id}`}
                    className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
                  >
                    <span>{p.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`${prefix}/programs`}
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-blue-600 hover:text-blue-700 pt-2"
                >
                  <span>View all programs →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
              Visit &amp; Timings
            </h3>
            <div className="space-y-3 text-sm text-slate-600">
              <p className="flex items-start gap-2.5">
                <MapPin className="size-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {config.contact.address}, {config.contact.city}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="size-4 text-blue-600 shrink-0" />
                <a
                  href={`tel:${config.contact.phoneRaw}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {config.contact.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="size-4 text-blue-600 shrink-0" />
                <a
                  href={`mailto:${config.contact.email}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {config.contact.email}
                </a>
              </p>
              <div className="pt-2 border-t border-slate-200 space-y-1 text-xs">
                <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Clock className="size-3.5 text-blue-600" /> Opening Hours
                </p>
                <p className="text-slate-500">Mon – Fri: {config.openingHours.weekdays}</p>
                <p className="text-slate-500">Saturday: {config.openingHours.saturday}</p>
                <p className="text-slate-500">Sunday: {config.openingHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ChaloBuild Commercial Platform Callout */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-1.5 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 border border-blue-200 px-2 py-0.5 text-xs font-bold text-blue-700">
                  <Sparkles className="size-3 text-blue-600" />
                  ChaloBuild Commercial Solution
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  For Gym Owners
                </span>
              </div>
              <p className="text-sm text-slate-600">
                Want a high-converting website and complete member management software for your gym?
                Launch your branded website in days with <strong>ChaloBuild</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="https://chalobuild.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-blue-700 transition-all"
              >
                <span>Explore ChaloBuild</span>
                <ArrowUpRight className="size-4" />
              </a>
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:bg-slate-100 transition-all"
              >
                <span>Gym Dashboard</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Mandatory ChaloBuild Provider Credit */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {config.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <a
              href="https://chalobuild.in"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
            >
              ChaloBuild
            </a>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-medium">{config.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
