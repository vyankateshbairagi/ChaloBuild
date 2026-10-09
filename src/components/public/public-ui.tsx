import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PublicFooter } from "@/components/public/public-footer";
import { PublicHeader } from "@/components/public/public-header";
import { FloatingCta } from "@/components/public/floating-cta";
import { gymConfig } from "@/config/gym";

export function PublicPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="public-site min-h-screen flex flex-col bg-[#09090b] text-zinc-100 selection:bg-rose-600/30 selection:text-white">
      <PublicHeader />
      <main className="flex-1">{children}</main>
      <FloatingCta />
      <PublicFooter />
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
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-rose-500 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-6 bg-rose-500" />
        <span>{eyebrow}</span>
        {centered && <span className="h-px w-6 bg-rose-500" />}
      </div>
      <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
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
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#0d0d11] py-16 sm:py-24">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.15),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(225,29,72,0.06),transparent_40%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-rose-300">
            <Sparkles className="size-3 text-rose-400" />
            {eyebrow}
          </div>
          <h1 className="mt-5 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}

export function CtaSection({
  title = "Ready to Build Your Strongest Routine?",
  text = "Claim your complimentary 1-Day Trial Pass and experience the difference first-hand.",
  primary = "Claim Free Trial Pass",
  href = "/contact#trial",
}: {
  title?: string;
  text?: string;
  primary?: string;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0d0d12] py-20 px-4 sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.18),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-5xl rounded-3xl border border-rose-500/30 bg-gradient-to-b from-rose-950/20 via-zinc-900/60 to-zinc-950/90 p-8 sm:p-14 text-center backdrop-blur-xl shadow-2xl shadow-rose-950/40">
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-rose-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-rose-300">
          <Sparkles className="size-3.5" />
          START YOUR JOURNEY TODAY
        </div>
        <h2 className="mt-5 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          {text}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-rose-600 px-8 py-6 font-bold uppercase tracking-wider text-white shadow-xl shadow-rose-950/60 hover:bg-rose-500 transition-all hover:scale-[1.02]"
          >
            <Link href={href}>
              {primary} <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <a
            href={`https://wa.me/${gymConfig.contact.whatsappRaw}?text=${encodeURIComponent(
              gymConfig.contact.whatsappMessage
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:border-emerald-500/50 hover:bg-emerald-950/30 hover:text-emerald-300 transition-all"
          >
            <MessageCircle className="size-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function BackLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-rose-400 transition-colors"
    >
      <ArrowLeft className="size-3.5" /> Back to Home
    </Link>
  );
}
