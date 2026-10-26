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

      <section className="relative bg-[#090b11] py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.06),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                <span className="h-px w-6 bg-red-500/80" />
                <span>Core Gym Standards</span>
              </div>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                The Principles That Guide Every Workout.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400">
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
                  className="group rounded-2xl border border-white/[0.08] bg-slate-900/50 backdrop-blur-xl p-5 shadow-xl transition-all hover:border-red-500/40 hover:bg-slate-900/80"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.2)] group-hover:scale-110 transition-transform">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-3 text-base font-black uppercase tracking-tight text-white">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
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
