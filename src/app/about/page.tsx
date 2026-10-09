import type { Metadata } from "next";
import { ShieldCheck, Target, Trophy, Users } from "lucide-react";
import { PageIntro, CtaSection, PublicPage } from "@/components/public/public-ui";
import { AboutSection } from "@/components/public/about-section";
import { WhyChooseUs } from "@/components/public/why-choose-us";
import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: `About Us — ${gymConfig.name}`,
  description: `Discover the philosophy, facility standards, and coaching approach behind ${gymConfig.name}.`,
};

export default function AboutPage() {
  return (
    <PublicPage>
      <PageIntro
        eyebrow="Our Mission & Philosophy"
        title="Training Built for Real Human Strength."
        text={`${gymConfig.name} is built around a singular principle: real progress comes from disciplined consistency, competition-grade equipment, and science-backed programming.`}
      />

      {/* Core Narrative & Stats */}
      <AboutSection />

      {/* 6 Core Pillars */}
      <WhyChooseUs />

      {/* Gym Values & Culture */}
      <section className="bg-[#0e0e13] py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-500">
                Core Gym Standards
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                The Principles That Guide Every Workout.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                We believe that fitness should elevate your daily life, not wear you down with injuries or burnout. Every squat rack, dumbbell set, and training session is designed around longevity, joint integrity, and measurable performance.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: "Progression First",
                  desc: "We track load and form, so you make real progress every 4-week block.",
                },
                {
                  icon: ShieldCheck,
                  title: "Safety & Biomechanics",
                  desc: "Proper movement patterns are prioritized before adding heavy resistance.",
                },
                {
                  icon: Users,
                  title: "Supportive Culture",
                  desc: "A positive, encouraging environment where lifters push each other.",
                },
                {
                  icon: Trophy,
                  title: "Long-Term Habits",
                  desc: "Routines built for sustainability, longevity, and everyday energy.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-[#141419] p-5 transition-colors hover:border-rose-500/30"
                >
                  <Icon className="size-6 text-rose-500" />
                  <h3 className="mt-3 text-base font-bold text-white uppercase">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Tour the Gym in Person?"
        text="Claim your complimentary 1-Day Trial Pass and see why members call IronCore Pune's premier strength club."
        primary="Claim 1-Day Pass"
        href="/contact#trial"
      />
    </PublicPage>
  );
}
