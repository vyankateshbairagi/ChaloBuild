import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles, Zap, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChaloBuildCTA() {
  return (
    <section id="enquire" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 overflow-hidden">
      {/* Soft radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.08),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <div className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-white via-cyan-50/40 to-blue-50/40 p-6 sm:p-10 lg:p-12 shadow-xl shadow-cyan-500/10 text-center relative overflow-hidden">
          {/* Decorative Corner Glow */}
          <div className="absolute -top-12 -right-12 size-36 rounded-full bg-cyan-400/20 blur-xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 size-36 rounded-full bg-blue-500/20 blur-xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-100/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-800 shadow-2xs">
            <Zap className="size-3 text-cyan-600" />
            <span>POWERED BY THINKBUILD • 48-HOUR LAUNCH</span>
          </div>

          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Ready to Take Your Gym to the Next Level?
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Send us your gym name, logo, and pricing today. We will set up your custom website, connect your staff dashboard, and have you live in 48 hours.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/919075097235?text=Hi%20ChaloBuild!%20I%20am%20a%20gym%20owner%20interested%20in%20launching%20a%20website%20and%20dashboard%20for%20my%20gym."
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-500 hover:shadow-lg active:scale-[0.98] transition-all"
            >
              <MessageCircle className="size-4" />
              <span>Chat on WhatsApp (Instant Reply)</span>
            </a>

            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto border-slate-300 bg-white px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-50 hover:border-cyan-400 hover:text-cyan-700 shadow-xs active:scale-[0.98] transition-all h-auto"
            >
              <Link href="/demo/ironcore">
                <span>Explore Live Gym Demo</span>
                <ArrowRight className="ml-1.5 size-3.5" />
              </Link>
            </Button>
          </div>

          {/* Trust Assurances */}
          <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Clock className="size-3 text-cyan-600" />
              Direct response within 2 hours
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="size-3 text-emerald-600" />
              Zero pushy sales calls
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1">
              <Sparkles className="size-3 text-blue-600" />
              Full 48h launch guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
