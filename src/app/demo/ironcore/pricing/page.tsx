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

      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <ShieldCheck className="mx-auto size-8 text-blue-600" />
              <h3 className="mt-4 text-base font-bold text-slate-900">
                Zero Hidden Admission Fees
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                What you see is exactly what you pay. No administrative overhead or unexpected renewal surcharges.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <Sparkles className="mx-auto size-8 text-amber-600" />
              <h3 className="mt-4 text-base font-bold text-slate-900">
                Flexible Freeze Policy
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Traveling or taking exams? Pause your quarterly or annual membership for up to 30 days without penalty.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <Trophy className="mx-auto size-8 text-emerald-600" />
              <h3 className="mt-4 text-base font-bold text-slate-900">
                Complimentary Body Assessment
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
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
