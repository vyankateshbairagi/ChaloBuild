"use client";

import * as React from "react";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCw, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log unexpected errors for monitoring
    console.error("Unhandled Application Exception:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#080a11] text-white px-4 text-center selection:bg-rose-500/30 selection:text-rose-200">
      <div className="absolute w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.08),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-lg space-y-6">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 shadow-[0_0_25px_rgba(244,63,94,0.3)]">
          <AlertTriangle className="size-8" />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400">
            Runtime Error
          </p>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Something Went Off Track
          </h1>
          <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
            An unexpected error occurred while processing this request. You can attempt to retry the action or return to the main dashboard.
          </p>
          {error.digest && (
            <p className="font-mono text-[11px] text-slate-400">
              Reference Digest: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            onClick={() => reset()}
            className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-amber-600 text-white font-bold hover:brightness-110 shadow-lg shadow-rose-500/20"
          >
            <RefreshCw className="mr-2 size-4" />
            <span>Try Again</span>
          </Button>

          <Button asChild variant="outline" className="w-full sm:w-auto border-white/[0.1] bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white">
            <Link href="/" className="inline-flex items-center gap-2">
              <Home className="size-4" />
              <span>ChaloBuild Home</span>
            </Link>
          </Button>
        </div>

        <div className="pt-6 border-t border-white/[0.08]">
          <p className="text-xs text-slate-400">
            If this issue persists, contact engineering on WhatsApp:{" "}
            <a
              href={`${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(
                `Hi ChaloBuild! I encountered an error: ${error.message || "Unknown error"}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <MessageCircle className="size-3" />
              <span>+91 90750 97235</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
