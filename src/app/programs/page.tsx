import type { Metadata } from "next";
import { PageIntro, CtaSection, PublicPage } from "@/components/public/public-ui";
import { ProgramsSection } from "@/components/public/programs-section";
import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: `Training Programs — ${gymConfig.name}`,
  description: `Explore specialized workout programs at ${gymConfig.name}: Strength & Hypertrophy, Functional HIIT, 1-on-1 Personal Training, and Olympic Lifting.`,
};

export default function ProgramsPage() {
  return (
    <PublicPage>
      <PageIntro
        eyebrow="Specialized Coaching & Routines"
        title="Training Programs Engineered for Progress."
        text="Whether you want to build lean muscle mass, strip body fat, or prepare for competitive powerlifting, our coaches design structured, periodized training cycles tailored to you."
      />

      {/* Full Programs Grid */}
      <ProgramsSection showAllLink={false} />

      {/* Program Schedule & Weekly Rhythm Section */}
      <section className="bg-[#0c0c10] py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-rose-500">
              Structured Weekly Rhythm
            </span>
            <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
              How Our Members Train Throughout the Week.
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              All programs are designed with active recovery and workload management to maximize progress and prevent overtraining.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                day: "Monday & Thursday",
                focus: "Upper Body Hypertrophy & Power",
                desc: "Bench press, overhead pressing, rows, pull-ups, and targeted arm & shoulder accessory volume.",
                tag: "Strength",
              },
              {
                day: "Tuesday & Friday",
                focus: "Lower Body Mechanics & Squats",
                desc: "Back squats, Romanian deadlifts, Bulgarian split squats, calf work, and posterior chain development.",
                tag: "Hypertrophy",
              },
              {
                day: "Wednesday & Saturday",
                focus: "Turf Conditioning & Functional Agility",
                desc: "Sled sprints, kettlebell complexes, battle ropes, core stability, and high-intensity interval conditioning.",
                tag: "Metabolic",
              },
            ].map((schedule) => (
              <div
                key={schedule.day}
                className="rounded-2xl border border-white/10 bg-[#121217] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    {schedule.day}
                  </span>
                  <span className="rounded-md border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-300">
                    {schedule.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white uppercase">
                  {schedule.focus}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  {schedule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Need Advice on Which Program Fits Best?"
        text="Book a 1-on-1 assessment with our head coach. We will evaluate your movement, strength, and lifestyle to recommend the ideal routine."
        primary="Claim Free Assessment"
        href="/contact#trial"
      />
    </PublicPage>
  );
}
