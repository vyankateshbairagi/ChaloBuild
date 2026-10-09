import type { Metadata } from "next";
import { ShieldCheck, Target, Trophy, Users } from "lucide-react";
import { PageIntro, CtaSection, PublicPage } from "@/components/public/public-ui";
import { AboutSection } from "@/components/public/about-section";
import { WhyChooseUs } from "@/components/public/why-choose-us";
import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: `About Us — ${gymConfig.name} (ChaloBuild Demo)`,
  description: `Discover the philosophy, facility standards, and coaching approach behind ${gymConfig.name}.`,
};

export default function DemoAboutPage() {
  return (
    <PublicPage config={gymConfig} basePath="/demo/ironcore">
      <PageIntro
        eyebrow="Our Mission & Philosophy"
        title="Training Built for Real Human Strength."
        text={`${gymConfig.name} is built around a singular principle: real progress comes from disciplined consistency, competition-grade equipment, and science-backed programming.`}
      />

      <AboutSection config={gymConfig} basePath="/demo/ironcore" />
      <WhyChooseUs config={gymConfig} />

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                Core Gym Standards
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The Principles That Guide Every Workout.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
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
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-xs transition-colors hover:border-red-300 hover:bg-white"
                >
                  <Icon className="size-6 text-red-600" />
                  <h3 className="mt-3 text-base font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
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
        text={`Claim your complimentary 1-Day Trial Pass and experience why members choose ${gymConfig.name}.`}
        primary="Claim 1-Day Pass"
        href="/demo/ironcore/contact#trial"
        config={gymConfig}
      />
    </PublicPage>
  );
}
