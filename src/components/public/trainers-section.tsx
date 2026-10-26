import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MessageCircle, Award, Sparkles } from "lucide-react";
import { gymConfig, type GymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";
import { Button } from "@/components/ui/button";

export function TrainersSection({
  limit,
  showAllLink = true,
  config = gymConfig,
  basePath = "",
}: {
  limit?: number;
  showAllLink?: boolean;
  config?: GymConfig;
  basePath?: string;
}) {
  const prefix = basePath ? basePath : "";
  const displayTrainers = limit
    ? config.trainers.slice(0, limit)
    : config.trainers;

  return (
    <section id="trainers" className="relative bg-[#090b11] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] text-white font-sans overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.06),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Elite Coaching Staff"
            title="Trained by Certified Specialists."
            text="Our coaches analyze biomechanics, correct lifting trajectories, and construct tailored athletic progression cycles."
          />
          {showAllLink && (
            <Button
              asChild
              variant="outline"
              className="border-white/[0.12] bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-red-500/50 hover:text-white shrink-0 self-start md:self-auto shadow-xs text-xs font-bold uppercase tracking-wider"
            >
              <Link href={`${prefix}/trainers`}>
                <span>Meet All Coaches</span>
                <ChevronRight className="ml-1.5 size-4" />
              </Link>
            </Button>
          )}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-xl hover:border-red-500/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Trainer Photo */}
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b11] via-transparent to-black/30" />

                  {/* Experience Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md border border-red-500/40 bg-red-950/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-red-300 backdrop-blur-md shadow-xs">
                      {trainer.experience} Experience
                    </span>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-5">
                  <h3 className="text-lg font-black uppercase tracking-tight text-white group-hover:text-red-400 transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-red-400 uppercase tracking-wide">
                    {trainer.role}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {trainer.certifications.map((c) => (
                      <span
                        key={c}
                        className="rounded bg-slate-800/80 border border-white/[0.08] px-2 py-0.5 text-[9px] font-bold text-slate-300"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3.5 text-xs leading-relaxed text-slate-400">
                    {trainer.bio}
                  </p>
                </div>
              </div>

              {/* Coach Contact CTA */}
              <div className="p-5 pt-0 border-t border-white/[0.06] mt-2">
                <a
                  href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
                    `Hi ${config.name}! I would like to book a 1-on-1 consultation session with Coach ${trainer.name}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/[0.12] bg-slate-800/80 hover:bg-red-600 hover:border-red-500 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white transition-all shadow-xs"
                >
                  <MessageCircle className="size-3.5 fill-current text-emerald-400" />
                  <span>Consult Coach</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
