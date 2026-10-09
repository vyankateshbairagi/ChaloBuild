import type { Metadata } from "next";
import { PageIntro, CtaSection, PublicPage } from "@/components/public/public-ui";
import { ProgramsSection } from "@/components/public/programs-section";
import { gymConfig } from "@/config/gym";

export const metadata: Metadata = {
  title: `Training Programs — ${gymConfig.name}`,
  description: `Explore specialized workout programs at ${gymConfig.name}: Strength & Hypertrophy, Functional Turf Conditioning, 1-on-1 Personal Training, and Powerlifting.`,
};

export default function ProgramsPage() {
  return (
    <PublicPage>
      <PageIntro
        eyebrow="Specialized Coaching & Routines"
        title="Training Programs Engineered for Progress."
        text="Whether you want to build lean muscle mass, improve cardiovascular conditioning, or prepare for athletic performance, our coaches design structured, periodized training cycles tailored to you."
      />

      {/* Full Programs Grid */}
      <ProgramsSection showAllLink={false} />

      {/* Program Schedule & Weekly Rhythm Section */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Structured Weekly Rhythm
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              How Our Members Train Throughout the Week.
            </h2>
            <p className="mt-3 text-sm text-slate-600">
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
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {schedule.day}
                  </span>
                  <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-700">
                    {schedule.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {schedule.focus}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
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
