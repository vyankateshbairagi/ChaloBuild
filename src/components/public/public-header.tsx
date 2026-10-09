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
  Zap,
} from "lucide-react";

import { gymConfig } from "@/config/gym";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Plans", href: "/pricing" },
  { label: "Trainers", href: "/trainers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function PublicHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isCurrent = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Demo Bar — Shows ChaloBuild Provider context tastefully */}
      <div className="border-b border-rose-950/40 bg-zinc-950/90 px-4 py-2 text-xs text-zinc-300">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-rose-300">
              <Sparkles className="size-3 text-rose-400" />
              {gymConfig.provider.badgeText}
            </span>
            <span className="hidden sm:inline text-zinc-400">
              • Turnkey Website + GymFlow Management Software
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${gymConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                "Hi ChaloBuild! I am a gym owner interested in getting a website like IronCore Fitness."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-rose-400 hover:text-rose-300 transition-colors"
            >
              <Zap className="size-3" />
              <span>Get this for your gym →</span>
            </a>
            <span className="text-zinc-600">|</span>
            <Link
              href="/login"
              className="inline-flex items-center gap-1 font-medium text-zinc-300 hover:text-white transition-colors"
            >
              <LogIn className="size-3 text-zinc-400" />
              <span>Staff Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#09090b]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Gym Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative h-12 w-48 sm:w-56 transition-transform group-hover:scale-[1.02]">
              <Image
                src={gymConfig.logo.svg}
                alt={gymConfig.logo.alt}
                fill
                priority
                className="object-contain object-left"
              />
            </div>
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
                      ? "text-rose-500 font-bold"
                      : "text-zinc-300 hover:text-rose-400"
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
              href={`https://wa.me/${gymConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                gymConfig.contact.whatsappMessage
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-200 transition-all hover:border-emerald-500/50 hover:bg-emerald-950/30 hover:text-emerald-300"
              title="Chat with front desk on WhatsApp"
            >
              <MessageCircle className="size-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <Button
              asChild
              className="bg-rose-600 font-bold uppercase tracking-wider text-white shadow-lg shadow-rose-950/50 hover:bg-rose-500 transition-all hover:shadow-rose-600/25"
            >
              <Link href="/contact#trial">
                <span>Free Trial Pass</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white lg:hidden transition hover:bg-white/10"
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
            className="border-t border-white/10 bg-[#0d0d10] px-5 py-6 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navLinks.map((item) => {
                const active = isCurrent(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wider transition ${
                      active
                        ? "bg-rose-500/15 text-rose-400 border-l-2 border-rose-500"
                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <Button
                  asChild
                  className="w-full bg-rose-600 py-3 font-bold uppercase tracking-wider text-white hover:bg-rose-500"
                >
                  <Link
                    href="/contact#trial"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Claim 1-Day Free Trial
                  </Link>
                </Button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/${gymConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                      gymConfig.contact.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-950/20 py-2.5 text-xs font-semibold text-emerald-300"
                  >
                    <MessageCircle className="size-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${gymConfig.contact.phoneRaw}`}
                    className="flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 py-2.5 text-xs font-semibold text-zinc-200"
                  >
                    <Phone className="size-3.5" />
                    <span>Call Us</span>
                  </a>
                </div>

                <div className="mt-2 text-xs text-zinc-400 space-y-1.5 px-1">
                  <p className="flex items-center gap-2">
                    <MapPin className="size-3.5 text-rose-500 shrink-0" />
                    <span>{gymConfig.contact.city}, {gymConfig.contact.state}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="size-3.5 text-rose-500 shrink-0" />
                    <span>{gymConfig.openingHours.weekdays}</span>
                  </p>
                </div>

                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 py-2 text-xs font-semibold text-zinc-400 hover:text-zinc-200"
                >
                  <LogIn className="size-3.5" />
                  <span>GymFlow Staff / Owner Sign In</span>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
