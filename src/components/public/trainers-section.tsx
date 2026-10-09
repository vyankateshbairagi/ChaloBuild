import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import { gymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";
import { Button } from "@/components/ui/button";

export function TrainersSection({
  limit,
  showAllLink = true,
}: {
  limit?: number;
  showAllLink?: boolean;
}) {
  const displayTrainers = limit
    ? gymConfig.trainers.slice(0, limit)
    : gymConfig.trainers;

  return (
    <section id="trainers" className="relative bg-[#0b0b0e] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Expert Guidance"
            title="Coached by Certified Specialists."
            text="Our coaches don't just count reps. They analyze biomechanics, adjust movement patterns, and build customized progression models."
          />
          {showAllLink && (
            <Button
              asChild
              variant="outline"
              className="border-white/15 bg-white/5 text-zinc-300 hover:border-rose-500 hover:text-white shrink-0 self-start md:self-auto"
            >
              <Link href="/trainers">
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
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#141418] transition-all duration-300 hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-950/40"
            >
              <div>
                {/* Trainer Photo */}
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-transparent" />

                  {/* Experience Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md border border-white/20 bg-black/75 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-400 backdrop-blur-sm">
                      {trainer.experience}
                    </span>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-5">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-rose-400 transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-rose-400/90 uppercase tracking-wide">
                    {trainer.role}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {trainer.certifications.map((c) => (
                      <span
                        key={c}
                        className="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-semibold text-zinc-300"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-zinc-400">
                    {trainer.bio}
                  </p>
                </div>
              </div>

              {/* Coach Contact CTA */}
              <div className="p-5 pt-0 border-t border-white/5 mt-2">
                <a
                  href={`https://wa.me/${gymConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                    `Hi IronCore! I would like to book a 1-on-1 consultation session with Coach ${trainer.name}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:border-emerald-500/50 hover:bg-emerald-950/20 hover:text-emerald-300 transition-all"
                >
                  <MessageCircle className="size-3.5 text-emerald-400" />
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
