import { Star, Trophy } from "lucide-react";
import { gymConfig, type GymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";

export function TestimonialsSection({
  config = gymConfig,
}: {
  config?: GymConfig;
}) {
  if (!config.testimonials || config.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="relative bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Member Stories"
          title="Results Built on Consistency."
          text="Hear from members who train with us every week. Dedicated coaches, measurable milestones, and an encouraging culture."
          centered
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {config.testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 text-sm leading-relaxed text-slate-700 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author & Milestone */}
              <div className="mt-6 border-t border-slate-100 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-blue-600 font-bold text-xs text-white uppercase tracking-wider shrink-0 shadow-xs">
                    {t.avatarInitials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="truncate text-sm font-bold text-slate-900">
                      {t.name}
                    </h4>
                    <p className="truncate text-[11px] text-slate-500">
                      {t.membershipDuration}
                    </p>
                  </div>
                </div>

                {/* Milestone Badge */}
                <div className="mt-3 flex items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                  <Trophy className="size-3 text-blue-600 shrink-0" />
                  <span className="truncate">{t.goalAchieved}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
