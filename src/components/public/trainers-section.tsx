import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
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
    <section id="trainers" className="relative bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Expert Guidance"
            title="Coached by Certified Specialists."
            text="Our coaches analyze movement biomechanics, correct form, and design individual progression roadmaps for lasting results."
          />
          {showAllLink && (
            <Button
              asChild
              variant="outline"
              className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-red-500 hover:text-red-600 shrink-0 self-start md:self-auto shadow-xs"
            >
              <Link href={`${prefix}/trainers`}>
                <span>Meet All Coaches</span>
                <ChevronRight className="ml-1.5 size-4" />
              </Link>
            </Button>
          )}
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {displayTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-red-300 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Trainer Photo */}
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                  {/* Experience Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md border border-white/20 bg-white/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-red-700 backdrop-blur-xs shadow-xs">
                      {trainer.experience}
                    </span>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-red-600 uppercase tracking-wide">
                    {trainer.role}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {trainer.certifications.map((c) => (
                      <span
                        key={c}
                        className="rounded bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-semibold text-slate-700"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-slate-600">
                    {trainer.bio}
                  </p>
                </div>
              </div>

              {/* Coach Contact CTA */}
              <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                <a
                  href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
                    `Hi ${config.name}! I would like to book a 1-on-1 consultation session with Coach ${trainer.name}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 transition-all"
                >
                  <MessageCircle className="size-3.5 text-emerald-600" />
                  <span>Book with {trainer.name.split(" ")[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
