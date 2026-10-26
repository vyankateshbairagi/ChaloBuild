import { Star, Trophy, Quote } from "lucide-react";
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
    <section id="testimonials" className="relative bg-[#0b0d15] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] text-white font-sans overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.06),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Athlete Proof"
          title="Results Built on Consistency."
          text="Hear from dedicated members who train with us every week. Measurable strength gains, body composition transformations, and supportive coaching."
          centered
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {config.testimonials.map((t) => (
            <div
              key={t.id}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl p-6 shadow-xl hover:border-red-500/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author & Milestone */}
              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-rose-700 font-black text-xs text-white uppercase tracking-wider shrink-0 shadow-md shadow-red-600/30">
                    {t.avatarInitials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="truncate text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                      {t.name}
                    </h4>
                    <p className="truncate text-[10px] text-slate-400">
                      {t.membershipDuration} Member
                    </p>
                  </div>
                </div>

                {/* Milestone Badge */}
                <div className="mt-3 flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-950/60 px-2.5 py-1 text-[10px] font-bold text-red-300">
                  <Trophy className="size-3 text-red-400 shrink-0" />
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
