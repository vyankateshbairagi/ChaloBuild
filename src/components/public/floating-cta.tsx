"use client";

import { MessageCircle, Phone } from "lucide-react";
import { gymConfig } from "@/config/gym";

export function FloatingCta() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${gymConfig.contact.whatsappRaw}?text=${encodeURIComponent(
          gymConfig.contact.whatsappMessage
        )}`}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2.5 rounded-full bg-emerald-500 p-3.5 sm:px-4 sm:py-3 text-white shadow-2xl shadow-emerald-950/60 transition-all hover:scale-105 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="size-5 shrink-0 fill-current" />
        <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
          Chat on WhatsApp
        </span>
      </a>

      {/* Direct Call Button (Visible on mobile/tablet) */}
      <a
        href={`tel:${gymConfig.contact.phoneRaw}`}
        className="flex sm:hidden size-12 items-center justify-center rounded-full bg-rose-600 text-white shadow-xl shadow-rose-950/50 hover:bg-rose-500 transition-all"
        title="Call Gym"
      >
        <Phone className="size-5" />
      </a>
    </aside>
  );
}
