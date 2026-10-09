import type { Metadata } from "next";
import { ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { PageIntro, CtaSection, PublicPage } from "@/components/public/public-ui";
import { PricingSection } from "@/components/public/pricing-section";
import { FaqSection } from "@/components/public/faq-section";
import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: `Membership Plans & Pricing — ${gymConfig.name}`,
  description: `Flexible membership plans at ${gymConfig.name}. Starter at ₹999/mo, Pro at ₹1,499/mo, and Elite at ₹2,499/mo. No hidden admission fees.`,
};

export default function PricingPage() {
  return (
    <PublicPage>
      <PageIntro
        eyebrow="Simple & Transparent Pricing"
        title="Choose a Membership That Honors Your Commitment."
        text="All IronCore memberships include full access to our calibrated strength floor, high-tech cardio deck, and pristine locker amenities. Zero lock-in traps."
      />

      {/* Main Pricing Cards with full feature comparison table */}
      <PricingSection showDetailedComparison={true} />

      {/* Membership Guarantee & Policy */}
      <section className="bg-[#0b0b0e] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#121217] p-6 text-center">
              <ShieldCheck className="mx-auto size-8 text-rose-500" />
              <h3 className="mt-4 text-base font-bold uppercase text-white">
                Zero Hidden Admission Fees
              </h3>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                What you see is exactly what you pay. No administrative overhead or unexpected renewal surcharges.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#121217] p-6 text-center">
              <Sparkles className="mx-auto size-8 text-amber-500" />
              <h3 className="mt-4 text-base font-bold uppercase text-white">
                Flexible Freeze Policy
              </h3>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Traveling or taking exams? Pause your quarterly or annual membership for up to 30 days without penalty.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#121217] p-6 text-center">
              <Trophy className="mx-auto size-8 text-emerald-400" />
              <h3 className="mt-4 text-base font-bold uppercase text-white">
                Complimentary InBody Scans
              </h3>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Track skeletal muscle mass and visceral fat percentages with our medical-grade bioelectrical impedance analyzer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <FaqSection />

      <CtaSection
        title="Want to Test the Facility Before Deciding?"
        text="Claim a complimentary 1-Day Trial Pass and work out with full floor access at zero cost."
        primary="Claim 1-Day Trial Pass"
        href="/contact#trial"
      />
    </PublicPage>
  );
}
