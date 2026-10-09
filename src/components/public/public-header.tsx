"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Clock,
  LogIn,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

import { gymConfig, type GymConfig } from "@/config/gym";
import { Button } from "@/components/ui/button";

export function PublicHeader({
  config = gymConfig,
  basePath = "",
}: {
  config?: GymConfig;
  basePath?: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Create links dynamically supporting either root or subpath / demo route
  const prefix = basePath ? basePath : "";
  const navLinks = [
    { label: "Home", href: prefix || "/" },
    { label: "About", href: `${prefix}/about` },
    { label: "Programs", href: `${prefix}/programs` },
    { label: "Plans", href: `${prefix}/pricing` },
    { label: "Trainers", href: `${prefix}/trainers` },
    { label: "Gallery", href: `${prefix}/gallery` },
    { label: "Contact", href: `${prefix}/contact` },
  ];

  const isCurrent = (href: string) => {
    if (href === "/" || href === prefix) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Bar — Subtle ChaloBuild Provider context and Quick Actions */}
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-600">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <a
              href="https://chalobuild.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700 hover:bg-blue-100 transition-colors"
            >
              <Sparkles className="size-3 text-blue-600" />
              <span>ChaloBuild Platform</span>
            </a>
            <span className="hidden sm:inline text-slate-500">
              Turnkey Gym Websites &amp; Management Platform
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${config.contact.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-1 font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Phone className="size-3 text-blue-600" />
              <span>{config.contact.phoneFormatted}</span>
            </a>
            <span className="hidden md:inline text-slate-300">|</span>
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              <LogIn className="size-3.5 text-slate-500" />
              <span>Staff Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky White Navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Gym Logo / Identity */}
          <Link
            href={prefix || "/"}
            className="flex items-center gap-3 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            {config.logo.svg ? (
              <div className="relative h-11 w-44 sm:w-52 transition-transform group-hover:scale-[1.01]">
                <Image
                  src={config.logo.svg}
                  alt={config.logo.alt || config.name}
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            ) : (
              <span className="text-xl font-black uppercase tracking-tight text-slate-900">
                {config.name}
              </span>
            )}
          </Link>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 xl:gap-8 lg:flex"
          >
            {navLinks.map((item) => {
              const active = isCurrent(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                    active
                      ? "text-blue-600 font-bold"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
                config.contact.whatsappMessage
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 transition-all hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700"
              title="Chat with front desk on WhatsApp"
            >
              <MessageCircle className="size-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <Button
              asChild
              className="bg-blue-600 font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-blue-700 transition-all"
            >
              <Link href={`${prefix}/contact#trial`}>
                <span>Free Trial Pass</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 lg:hidden transition hover:bg-slate-100"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-slate-200 bg-white px-5 py-6 lg:hidden shadow-xl"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1.5">
              {navLinks.map((item) => {
                const active = isCurrent(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wider transition ${
                      active
                        ? "bg-blue-50 text-blue-700 font-bold border-l-3 border-blue-600"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-3">
                <Button
                  asChild
                  className="w-full bg-blue-600 py-3 font-semibold uppercase tracking-wider text-white hover:bg-blue-700"
                >
                  <Link
                    href={`${prefix}/contact#trial`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Claim 1-Day Free Trial
                  </Link>
                </Button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
                      config.contact.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 py-2.5 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300"
                  >
                    <MessageCircle className="size-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${config.contact.phoneRaw}`}
                    className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    <Phone className="size-3.5 text-blue-600" />
                    <span>Call Us</span>
                  </a>
                </div>

                <div className="mt-2 text-xs text-slate-500 space-y-1.5 px-1">
                  <p className="flex items-center gap-2">
                    <MapPin className="size-3.5 text-blue-600 shrink-0" />
                    <span>{config.contact.city}, {config.contact.state}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="size-3.5 text-blue-600 shrink-0" />
                    <span>{config.openingHours.weekdays}</span>
                  </p>
                </div>

                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-600 hover:text-blue-600"
                >
                  <LogIn className="size-3.5" />
                  <span>Management Staff / Owner Login</span>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
