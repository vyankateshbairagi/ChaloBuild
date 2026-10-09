"use client";

import { MessageCircle, Phone } from "lucide-react";
import { gymConfig, type GymConfig } from "@/config/gym";

export function FloatingCta({
  config = gymConfig,
}: {
  config?: GymConfig;
}) {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
          config.contact.whatsappMessage
        )}`}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2.5 rounded-full bg-emerald-600 p-3.5 sm:px-4 sm:py-3 text-white shadow-xl shadow-emerald-950/20 transition-all hover:scale-105 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="size-5 shrink-0 fill-current" />
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">
          Chat on WhatsApp
        </span>
      </a>

      {/* Direct Call Button (Visible on mobile/tablet) */}
      <a
        href={`tel:${config.contact.phoneRaw}`}
        className="flex sm:hidden size-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-950/20 hover:bg-blue-700 transition-all"
        title="Call Gym"
      >
        <Phone className="size-5" />
      </a>
    </aside>
  );
}
