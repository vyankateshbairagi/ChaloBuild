import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PublicFooter } from "@/components/public/public-footer";
import { PublicHeader } from "@/components/public/public-header";
import { FloatingCta } from "@/components/public/floating-cta";
import { gymConfig, type GymConfig } from "@/config/gym";

export function PublicPage({
  children,
  config = gymConfig,
  basePath = "",
}: {
  children: React.ReactNode;
  config?: GymConfig;
  basePath?: string;
}) {
  return (
    <div className="public-site min-h-screen flex flex-col bg-[#090b11] text-slate-100 dark selection:bg-red-500/30 selection:text-red-200 font-sans antialiased">
      <PublicHeader config={config} basePath={basePath} />
      <main className="flex-1">{children}</main>
      <FloatingCta config={config} />
      <PublicFooter config={config} basePath={basePath} />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <div
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-red-500 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-6 bg-red-500/80" />
        <span>{eyebrow}</span>
        {centered && <span className="h-px w-6 bg-red-500/80" />}
      </div>
      <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
          {text}
        </p>
      )}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#0c0e17] py-16 sm:py-24 text-white">
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.1),transparent_70%)] pointer-events-none blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
            <Sparkles className="size-3.5 text-red-400" />
            {eyebrow}
          </div>
          <h1 className="mt-5 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl leading-[1.08]">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}

export function CtaSection({
  title = "Ready to Build Your Strongest Routine?",
  text = "Claim your complimentary 1-Day Trial Pass and experience our athletic training facility first-hand.",
  primary = "Claim Free Trial Pass",
  href = "#contact",
  config = gymConfig,
}: {
  title?: string;
  text?: string;
  primary?: string;
  href?: string;
  config?: GymConfig;
}) {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.08] bg-[#07090e] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.12),transparent_70%)] pointer-events-none blur-3xl" />
      <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#101422]/95 to-[#0b0e17]/95 p-8 sm:p-14 text-center shadow-2xl backdrop-blur-xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
          <Sparkles className="size-3.5 text-red-400" />
          START YOUR JOURNEY TODAY
        </div>
        <h2 className="mt-5 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl leading-tight">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          {text}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 px-8 py-6 font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/30 hover:from-red-500 hover:to-red-600 transition-all hover:scale-[1.01]"
          >
            <Link href={href}>
              {primary} <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <a
            href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
              config.contact.whatsappMessage
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-white transition-all shadow-sm"
          >
            <MessageCircle className="size-4 text-emerald-400 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function BackLink({ href = "/" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-red-400 transition-colors"
    >
      <ArrowLeft className="size-3.5" /> Back to Home
    </Link>
  );
}
