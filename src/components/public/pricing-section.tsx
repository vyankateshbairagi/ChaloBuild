import Link from "next/link";
import { ArrowRight, Check, Flame, Sparkles, MessageCircle } from "lucide-react";
import { gymConfig, type GymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";
import { Button } from "@/components/ui/button";

export function PricingSection({
  config = gymConfig,
  basePath = "",
}: {
  showDetailedComparison?: boolean;
  config?: GymConfig;
  basePath?: string;
}) {
  const prefix = basePath ? basePath : "";

  return (
    <section id="plans" className="relative bg-[#0b0d15] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] text-white font-sans overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.06),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Membership Plans"
          title="Transparent Pricing. Maximum Value."
          text="Zero surprise admission fees, zero lock-in contracts. Pick the membership tier tailored to your routine and start training immediately."
          centered
        />

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3 items-stretch">
          {config.plans.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 backdrop-blur-xl ${
                  isPopular
                    ? "border-2 border-red-500/80 bg-gradient-to-b from-red-950/40 via-slate-900/90 to-[#0b0e17]/95 shadow-2xl shadow-red-500/15 lg:-translate-y-2 ring-1 ring-red-500/30"
                    : "border border-white/[0.08] bg-slate-900/60 shadow-xl hover:border-slate-700 hover:bg-slate-900/80"
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-lg ${
                        isPopular
                          ? "bg-gradient-to-r from-red-600 to-rose-600 shadow-red-600/40 border border-red-400/40"
                          : "bg-slate-800 border border-slate-700"
                      }`}
                    >
                      <Sparkles className="size-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="border-b border-white/[0.08] pb-6">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 font-medium">
                      {plan.tagline}
                    </p>

                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-2xl font-black text-red-400">
                        ₹
                      </span>
                      <span className="text-5xl font-black tracking-tight text-white">
                        {plan.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-sm font-semibold text-slate-400">
                        / {plan.period}
                      </span>
                    </div>

                    <p className="mt-2 text-[11px] font-semibold text-red-400/80">
                      {plan.billingText}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="py-6 space-y-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Everything Included:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-xs text-slate-300"
                        >
                          <div className="rounded-full bg-red-950/80 border border-red-500/40 p-0.5 mt-0.5">
                            <Check className="size-3 text-red-400 shrink-0" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 border-t border-white/[0.08] space-y-2.5">
                  <Button
                    asChild
                    size="lg"
                    className={`w-full font-bold uppercase tracking-wider text-xs transition-all ${
                      isPopular
                        ? "bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-lg shadow-red-600/30 hover:from-red-500 hover:to-red-600 border border-red-500/40"
                        : "border border-white/[0.12] bg-slate-800 text-white hover:bg-slate-700 hover:border-red-500/40 shadow-xs"
                    }`}
                  >
                    <a
                      href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
                        `Hi ${config.name}! I want to sign up for the ${plan.name} membership plan (₹${plan.price}/${plan.period}). Please share the onboarding details.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="size-3.5 fill-current text-emerald-400" />
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="ml-1 size-3.5" />
                    </a>
                  </Button>

                  <p className="text-center text-[10px] text-slate-400 font-medium">
                    1-Tap WhatsApp instant confirmation &amp; digital invoice
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free VIP Guest Pass Banner */}
        <div className="mt-14 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-slate-900/90 via-[#111625]/90 to-slate-900/90 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                <Flame className="size-4 text-red-500" /> Not sure which plan fits your schedule?
              </span>
              <h4 className="text-lg font-black uppercase text-white">
                Claim a 1-Day VIP Workout Pass — 100% Free
              </h4>
              <p className="text-xs text-slate-400">
                Experience our Olympic platforms, functional turf, and coach assistance before committing.
              </p>
            </div>

            <Button
              asChild
              className="bg-gradient-to-r from-red-600 to-rose-600 shrink-0 font-bold uppercase tracking-wider text-xs text-white hover:from-red-500 hover:to-rose-500 shadow-md shadow-red-600/30 border border-red-500/40"
            >
              <Link href={`${prefix}/contact#trial`}>
                <span>Claim Free Workout Pass</span>
                <ArrowRight className="ml-2 size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
