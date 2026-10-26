import type { Metadata } from "next";
import { ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { PageIntro, CtaSection, PublicPage } from "@/components/public/public-ui";
import { PricingSection } from "@/components/public/pricing-section";
import { FaqSection } from "@/components/public/faq-section";
import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: `Membership Plans & Pricing — ${gymConfig.name} (ChaloBuild Demo)`,
  description: `Flexible membership plans at ${gymConfig.name}. Transparent pricing with zero hidden admission fees.`,
};

export default function DemoPricingPage() {
  return (
    <PublicPage config={gymConfig} basePath="/demo/ironcore">
      <PageIntro
        eyebrow="Simple & Transparent Pricing"
        title="Choose a Membership That Honors Your Commitment."
        text={`All ${gymConfig.name} memberships include full access to our calibrated strength floor, modern cardio equipment, and pristine amenities.`}
      />

      <PricingSection showDetailedComparison={true} config={gymConfig} basePath="/demo/ironcore" />

      <section className="relative bg-[#090b11] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.04),transparent_70%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="group rounded-2xl border border-white/[0.08] bg-slate-900/50 backdrop-blur-xl p-6 text-center shadow-xl transition-all hover:border-red-500/40 hover:bg-slate-900/80">
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)] group-hover:scale-110 transition-transform">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="mt-4 text-base font-black uppercase tracking-tight text-white">
                Zero Hidden Admission Fees
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                What you see is exactly what you pay. No administrative overhead or unexpected renewal surcharges.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/[0.08] bg-slate-900/50 backdrop-blur-xl p-6 text-center shadow-xl transition-all hover:border-amber-500/40 hover:bg-slate-900/80">
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:scale-110 transition-transform">
                <Sparkles className="size-6" />
              </div>
              <h3 className="mt-4 text-base font-black uppercase tracking-tight text-white">
                Flexible Freeze Policy
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Traveling or taking exams? Pause your quarterly or annual membership for up to 30 days without penalty.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/[0.08] bg-slate-900/50 backdrop-blur-xl p-6 text-center shadow-xl transition-all hover:border-emerald-500/40 hover:bg-slate-900/80">
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform">
                <Trophy className="size-6" />
              </div>
              <h3 className="mt-4 text-base font-black uppercase tracking-tight text-white">
                Complimentary Body Assessment
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Track muscle mass and composition trends periodically with our trainer-guided assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection config={gymConfig} />

      <CtaSection
        title="Want to Test the Facility Before Deciding?"
        text="Claim a complimentary 1-Day Trial Pass and work out with full floor access at zero cost."
        primary="Claim 1-Day Trial Pass"
        href="/demo/ironcore/contact#trial"
        config={gymConfig}
      />
    </PublicPage>
  );
}
