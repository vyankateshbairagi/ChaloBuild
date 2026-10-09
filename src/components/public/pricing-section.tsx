import Link from "next/link";
import { ArrowRight, Check, Flame, Sparkles } from "lucide-react";
import { gymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";
import { Button } from "@/components/ui/button";

export function PricingSection({
  showDetailedComparison = false,
}: {
  showDetailedComparison?: boolean;
}) {
  return (
    <section id="plans" className="relative bg-[#09090b] py-20 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.1),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Membership Plans"
          title="Transparent Pricing. Maximum Return."
          text="No surprise registration fees or hidden clauses. Pick the membership tier tailored to your routine and start training immediately."
          centered
        />

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3 items-stretch">
          {gymConfig.plans.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  isPopular
                    ? "border-2 border-rose-500 bg-[#16161c] shadow-2xl shadow-rose-950/60 lg:-translate-y-3"
                    : "border border-white/10 bg-[#111115] hover:border-white/25"
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-white shadow-lg ${
                        isPopular
                          ? "bg-rose-600 shadow-rose-950/80"
                          : "bg-zinc-800 border border-white/20"
                      }`}
                    >
                      <Sparkles className="size-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="border-b border-white/10 pb-6">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400 font-medium">
                      {plan.tagline}
                    </p>

                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-rose-500">
                        ₹
                      </span>
                      <span className="text-5xl font-black tracking-tight text-white">
                        {plan.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-sm font-semibold text-zinc-400">
                        / {plan.period}
                      </span>
                    </div>

                    <p className="mt-2 text-xs font-medium text-zinc-400">
                      {plan.billingText}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="py-6 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Everything Included:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-xs text-zinc-300"
                        >
                          <div className="rounded-full bg-rose-500/20 p-0.5 mt-0.5">
                            <Check className="size-3 text-rose-400 shrink-0" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 border-t border-white/10 space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className={`w-full font-bold uppercase tracking-wider text-xs transition-all ${
                      isPopular
                        ? "bg-rose-600 text-white shadow-xl shadow-rose-950/80 hover:bg-rose-500 hover:shadow-rose-600/30"
                        : "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    <a
                      href={`https://wa.me/${gymConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                        `Hi IronCore! I would like to sign up for the ${plan.name} membership plan (₹${plan.price}/${plan.period}).`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="ml-1.5 size-3.5" />
                    </a>
                  </Button>

                  <p className="text-center text-[11px] text-zinc-400">
                    Instant WhatsApp confirmation
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guest Pass Banner */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <Flame className="size-3.5 text-rose-500" /> Not sure which plan fits?
              </span>
              <h4 className="text-lg font-bold text-white">
                Book a 1-Day Trial Session — 100% Free
              </h4>
              <p className="text-xs text-zinc-400">
                Experience our machines, lockers, and trainers before making any financial commitment.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button
                asChild
                className="bg-zinc-800 text-white hover:bg-zinc-700 font-semibold text-xs uppercase tracking-wider border border-white/10"
              >
                <Link href="/contact#trial">
                  Claim Free Trial
                </Link>
              </Button>
              <a
                href={`tel:${gymConfig.contact.phoneRaw}`}
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
              >
                Call Desk
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table if requested */}
        {showDetailedComparison && (
          <div className="mt-16 overflow-x-auto rounded-2xl border border-white/10 bg-[#121216] p-6">
            <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-6">
              Full Feature Comparison
            </h3>
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 text-zinc-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4 text-center">Starter</th>
                  <th className="py-3 px-4 text-center text-rose-400 font-bold">Pro</th>
                  <th className="py-3 px-4 text-center">Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                {[
                  ["Full Strength Floor Access", "Yes", "Yes", "Yes"],
                  ["Cardio Deck Access", "Yes", "Yes", "Yes"],
                  ["Locker & Shower Amenities", "Yes", "Yes", "Yes"],
                  ["Functional Turf & Sled Track", "—", "Unlimited", "Unlimited"],
                  ["1-on-1 PT Coaching Sessions", "—", "2 Sessions", "4 / Month"],
                  ["InBody Composition Scans", "1 Initial", "Bi-Weekly", "Weekly"],
                  ["Complimentary Guest Passes", "—", "1 / Month", "Unlimited (Weekends)"],
                  ["Membership Freeze Allowance", "—", "15 Days", "30 Days"],
                ].map(([feat, s, p, e]) => (
                  <tr key={feat} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-medium text-white">{feat}</td>
                    <td className="py-3 px-4 text-center text-zinc-400">{s}</td>
                    <td className="py-3 px-4 text-center font-semibold text-rose-400">{p}</td>
                    <td className="py-3 px-4 text-center text-zinc-200">{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
