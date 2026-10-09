import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { PageIntro, PublicPage, CtaSection } from "@/components/public/public-ui";
import { Button } from "@/components/ui/button";
import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: `Join ${gymConfig.name} — Getting Started`,
  description: `How to join ${gymConfig.name}. Step-by-step onboarding guide, membership selection, and free trial pass reservation.`,
};

export default function JoinPage() {
  const steps = [
    {
      num: "01",
      title: "Claim a Free 1-Day Trial",
      desc: "Experience the facility, test out our machines, and meet our coaches without any commitment.",
      href: "/contact#trial",
      cta: "Book Trial Pass",
    },
    {
      num: "02",
      title: "Choose Your Membership Tier",
      desc: "Select between our Starter (₹999/mo), Pro (₹1,499/mo), or Elite (₹2,499/mo) plans based on your workout frequency.",
      href: "/pricing",
      cta: "Compare Plans",
    },
    {
      num: "03",
      title: "Complete Movement Walkthrough",
      desc: "Receive a complimentary 30-minute equipment screening and form check with our lead coach on day one.",
      href: `https://wa.me/${gymConfig.contact.whatsappRaw}?text=${encodeURIComponent(
        `Hi ${gymConfig.name}! I'm ready to get started with my membership onboarding.`
      )}`,
      cta: "Connect via WhatsApp",
      external: true,
    },
  ];

  return (
    <PublicPage>
      <PageIntro
        eyebrow="Simple Onboarding"
        title="Start Where You Are. Build From There."
        text={`Joining ${gymConfig.name} is quick and straightforward. No pushy sales pressure, no hidden fees, and no confusing contracts.`}
      />

      <section className="bg-[#09090b] py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.num}
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121217] p-8 transition-all hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-950/40"
              >
                <div>
                  <span className="text-3xl font-black text-rose-500">
                    {step.num}
                  </span>
                  <h3 className="mt-4 text-xl font-bold uppercase text-white group-hover:text-rose-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/5 mt-6">
                  {step.external ? (
                    <Button
                      asChild
                      className="w-full bg-emerald-600 font-bold uppercase tracking-wider text-xs text-white hover:bg-emerald-500"
                    >
                      <a
                        href={step.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MessageCircle className="mr-2 size-4" />
                        <span>{step.cta}</span>
                      </a>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      className="w-full bg-rose-600 font-bold uppercase tracking-wider text-xs text-white hover:bg-rose-500"
                    >
                      <Link href={step.href}>
                        <span>{step.cta}</span>
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Member Guarantees */}
          <div className="mt-16 rounded-3xl border border-white/10 bg-[#141419] p-8 sm:p-12">
            <h3 className="text-2xl font-black uppercase text-white">
              The IronCore Membership Promise
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-sm text-zinc-300">
              <div className="flex items-start gap-3">
                <Check className="size-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Zero administrative joining fees or surprise desk surcharges.</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="size-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Complimentary locker and rainfall shower access with every active tier.</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="size-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Freedom to freeze your membership for up to 30 days during travel.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Take Your First Step?"
        text="Claim your 1-day free guest pass and come train with us."
        primary="Claim Free Workout Pass"
        href="/contact#trial"
      />
    </PublicPage>
  );
}
