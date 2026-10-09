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
    <div className="public-site min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-100 selection:text-red-900">
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
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-red-600 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-6 bg-red-600" />
        <span>{eyebrow}</span>
        {centered && <span className="h-px w-6 bg-red-600" />}
      </div>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
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
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-red-700">
            <Sparkles className="size-3.5 text-red-600" />
            {eyebrow}
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
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
    <section className="relative overflow-hidden border-t border-slate-200 bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 sm:p-14 text-center shadow-lg shadow-slate-900/5">
        <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-red-700">
          <Sparkles className="size-3.5 text-red-600" />
          START YOUR JOURNEY TODAY
        </div>
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {text}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-red-600 px-8 py-6 font-semibold uppercase tracking-wider text-white shadow-md shadow-red-600/20 hover:bg-red-700 transition-all hover:scale-[1.01]"
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
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-700 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 transition-all shadow-sm"
          >
            <MessageCircle className="size-4 text-emerald-600" />
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
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-red-600 transition-colors"
    >
      <ArrowLeft className="size-3.5" /> Back to Home
    </Link>
  );
}
