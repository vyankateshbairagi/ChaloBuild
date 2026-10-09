import { Star, Trophy } from "lucide-react";
import { gymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative bg-[#0b0b0e] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Member Stories"
          title="Results Built on Consistency."
          text="Hear from members who train with us every week. Real discipline, measurable milestones, and a welcoming community."
          centered
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gymConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="gym-glow-card flex flex-col justify-between rounded-2xl p-6 transition-all duration-300"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 text-sm leading-relaxed text-zinc-300 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author & Milestone */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-rose-600 font-bold text-xs text-white uppercase tracking-wider shrink-0">
                    {t.avatarInitials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="truncate text-sm font-bold text-white">
                      {t.name}
                    </h4>
                    <p className="truncate text-[11px] text-zinc-400">
                      {t.membershipDuration}
                    </p>
                  </div>
                </div>

                {/* Milestone Badge */}
                <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-rose-500/10 px-2.5 py-1 text-[11px] font-semibold text-rose-300">
                  <Trophy className="size-3 text-rose-400 shrink-0" />
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
