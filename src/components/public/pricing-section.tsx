import Link from "next/link";
import { ArrowRight, Check, Flame, Sparkles } from "lucide-react";
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
    <section id="plans" className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Membership Plans"
          title="Transparent Pricing. Maximum Value."
          text="No surprise admission fees or hidden clauses. Pick the membership tier tailored to your routine and start training immediately."
          centered
        />

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3 items-stretch">
          {config.plans.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  isPopular
                    ? "border-2 border-red-600 bg-red-50/20 shadow-xl shadow-red-900/5 lg:-translate-y-2"
                    : "border border-slate-200 bg-white shadow-xs hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm ${
                        isPopular
                          ? "bg-red-600"
                          : "bg-slate-800"
                      }`}
                    >
                      <Sparkles className="size-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="border-b border-slate-100 pb-6">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 font-medium">
                      {plan.tagline}
                    </p>

                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-red-600">
                        ₹
                      </span>
                      <span className="text-5xl font-black tracking-tight text-slate-900">
                        {plan.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-sm font-semibold text-slate-500">
                        / {plan.period}
                      </span>
                    </div>

                    <p className="mt-2 text-xs font-medium text-slate-400">
                      {plan.billingText}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="py-6 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Everything Included:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-xs text-slate-700"
                        >
                          <div className="rounded-full bg-red-50 p-0.5 mt-0.5">
                            <Check className="size-3 text-red-600 shrink-0" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 border-t border-slate-100 space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className={`w-full font-semibold uppercase tracking-wider text-xs transition-all ${
                      isPopular
                        ? "bg-red-600 text-white shadow-md shadow-red-600/20 hover:bg-red-700"
                        : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 shadow-xs"
                    }`}
                  >
                    <a
                      href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
                        `Hi ${config.name}! I would like to sign up for the ${plan.name} membership plan (₹${plan.price}/${plan.period}).`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="ml-1.5 size-3.5" />
                    </a>
                  </Button>

                  <p className="text-center text-[11px] text-slate-400">
                    Instant WhatsApp confirmation
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guest Pass Banner */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 flex items-center gap-1.5">
                <Flame className="size-3.5 text-red-600" /> Not sure which plan fits?
              </span>
              <h4 className="text-lg font-bold text-slate-900">
                Book a 1-Day Trial Session — 100% Free
              </h4>
              <p className="text-xs text-slate-600">
                Experience our machines, facilities, and coaching before making any financial commitment.
              </p>
            </div>

            <Button
              asChild
              className="bg-red-600 shrink-0 font-semibold uppercase tracking-wider text-xs text-white hover:bg-red-700 shadow-sm"
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
