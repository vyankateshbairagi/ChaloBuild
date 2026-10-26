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
  LayoutDashboard,
  ArrowRight,
  ArrowLeft,
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
    { label: "Plans & Pricing", href: `${prefix}/pricing` },
    { label: "Coaches", href: `${prefix}/trainers` },
    { label: "Gallery", href: `${prefix}/gallery` },
    { label: "Contact", href: `${prefix}/contact` },
  ];

  const isCurrent = (href: string) => {
    if (href === "/" || href === prefix) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Demo & Studio Status Bar */}
      <div className="border-b border-white/[0.08] bg-[#06080d] px-4 py-2 text-xs text-slate-400 font-sans">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-2.5 py-0.5 text-[11px] font-bold text-cyan-300 hover:bg-cyan-900/80 transition-colors shadow-[0_0_10px_rgba(0,245,255,0.15)]"
            >
              <ArrowLeft className="size-3" />
              <span>← Back to ChaloBuild</span>
            </Link>
            <span className="hidden sm:inline text-slate-500 text-[11px]">
              Turnkey Gym Website &amp; Connected Console Demo
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${config.contact.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-white transition-colors"
            >
              <Phone className="size-3 text-red-500" />
              <span>{config.contact.phoneFormatted}</span>
            </a>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 rounded-lg border border-red-500/40 bg-red-950/40 hover:bg-red-900/60 px-3 py-1 text-[11px] font-bold text-red-300 transition-all shadow-[0_0_10px_rgba(239,68,68,0.2)]"
            >
              <LayoutDashboard className="size-3 text-red-400" />
              <span>Open Staff Console</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Dark Athletic Glass Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#090b11]/95 backdrop-blur-xl shadow-xl shadow-black/40 font-sans text-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Gym Logo / Identity */}
          <Link
            href={prefix || "/"}
            className="flex items-center gap-3 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            {config.logo.svg ? (
              <div className="relative h-11 w-44 sm:w-52 transition-transform group-hover:scale-[1.02]">
                <Image
                  src={config.logo.svg}
                  alt={config.logo.alt || config.name}
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            ) : (
              <span className="text-xl font-black uppercase tracking-tight text-white">
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
                  className={`text-xs font-bold uppercase tracking-wider transition-colors relative py-1 group ${
                    active
                      ? "text-red-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 transition-transform duration-200 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
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
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 hover:bg-emerald-900/60 px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-emerald-300 transition-all shadow-[0_0_10px_rgba(16,185,129,0.15)]"
              title="Chat with front desk on WhatsApp"
            >
              <MessageCircle className="size-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>

            <Button
              asChild
              className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/30 hover:from-red-500 hover:to-red-600 transition-all hover:scale-[1.02] border border-red-500/40"
            >
              <Link href={`${prefix}/contact#trial`}>
                <span>Claim Free Pass</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1 rounded-lg border border-red-500/40 bg-red-950/40 px-2.5 py-1.5 text-[11px] font-bold text-red-300"
            >
              <LayoutDashboard className="size-3" />
              <span>Console</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2.5 text-slate-300 hover:bg-slate-800 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/[0.08] bg-[#0c0e17] px-4 pt-3 pb-6 space-y-3">
            <div className="space-y-1">
              {navLinks.map((item) => {
                const active = isCurrent(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-xl px-3 py-2 text-sm font-bold uppercase tracking-wider ${
                      active
                        ? "bg-red-950/60 text-red-400 border border-red-500/30"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/[0.08] space-y-2">
              <Button
                asChild
                className="w-full bg-red-600 text-white font-bold uppercase text-xs tracking-wider py-3"
              >
                <Link
                  href={`${prefix}/contact#trial`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Claim 1-Day Free Trial Pass
                </Link>
              </Button>

              <a
                href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
                  config.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/40 py-2.5 text-xs font-bold text-emerald-300"
              >
                <MessageCircle className="size-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
