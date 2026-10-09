import type { Metadata } from "next";
import { HeartHandshake, ShieldCheck, Target } from "lucide-react";
import { PageIntro, CtaSection, PublicPage } from "@/components/public/public-ui";
import { TrainersSection } from "@/components/public/trainers-section";
import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: `Elite Coaches — ${gymConfig.name}`,
  description: `Meet the certified personal trainers and strength coaches at ${gymConfig.name}. Specialized in barbell mechanics, fat loss, and athletic performance.`,
};

export default function TrainersPage() {
  return (
    <PublicPage>
      <PageIntro
        eyebrow="Certified Strength Coaches"
        title="Guidance for the Work You Want to Do."
        text="Every coach at IronCore is thoroughly certified, continually educated, and deeply dedicated to teaching proper technique and building resilient lifters."
      />

      {/* Full Coaches Grid */}
      <TrainersSection showAllLink={false} />

      {/* Coaching Standards */}
      <section className="bg-[#0c0c10] py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-rose-500">
              Coaching Code of Conduct
            </span>
            <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
              What Sets Our Coaches Apart.
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              We hold our training staff to strict international fitness standards to ensure your safety and continuous progression.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Accredited Certifications Only",
                desc: "All trainers must hold accredited credentials (CSCS, ACE, NSCA, K11) and up-to-date CPR/AED certifications.",
              },
              {
                icon: Target,
                title: "Individualized Biomechanics",
                desc: "We adjust barbell setup, stance, and grip based on your unique limb lengths and mobility restrictions.",
              },
              {
                icon: HeartHandshake,
                title: "Zero Ego, 100% Encouragement",
                desc: "Our coaches prioritize education and confidence-building so you become self-sufficient on the gym floor.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#121217] p-7 transition-colors hover:border-rose-500/30"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white uppercase">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Work 1-on-1 With an Elite Coach?"
        text="Book a private movement consultation. We'll identify mobility restrictions, assess your baseline strength, and build your custom roadmap."
        primary="Book Coach Consultation"
        href="/contact#trial"
      />
    </PublicPage>
  );
}
