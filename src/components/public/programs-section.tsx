import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { gymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";
import { Button } from "@/components/ui/button";

export function ProgramsSection({
  limit,
  showAllLink = true,
}: {
  limit?: number;
  showAllLink?: boolean;
}) {
  const displayPrograms = limit
    ? gymConfig.programs.slice(0, limit)
    : gymConfig.programs;

  return (
    <section id="programs" className="relative bg-[#09090b] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Targeted Training"
            title="Programs Built Around Your Ambition."
            text="Whether you want to shatter personal strength records, shred body fat, or build functional athletic durability, our structured training programs deliver."
          />
          {showAllLink && (
            <Button
              asChild
              variant="outline"
              className="border-white/15 bg-white/5 text-zinc-300 hover:border-rose-500 hover:text-white shrink-0 self-start md:self-auto"
            >
              <Link href="/programs">
                <span>View All 6 Programs</span>
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          )}
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayPrograms.map((program) => (
            <article
              key={program.id}
              id={program.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#121216] transition-all duration-300 hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-950/40"
            >
              <div>
                {/* Program Header Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/40 to-transparent" />

                  {/* Intensity Tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="rounded-md border border-white/20 bg-black/75 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-400 backdrop-blur-sm">
                      {program.intensity} Intensity
                    </span>
                    <span className="rounded-md border border-white/15 bg-black/75 px-2.5 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur-sm">
                      {program.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-rose-400 transition-colors">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-rose-400/90 uppercase tracking-wide">
                    {program.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {program.description}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                      Key Highlights
                    </p>
                    <ul className="space-y-1.5">
                      {program.highlights.slice(0, 3).map((hl) => (
                        <li
                          key={hl}
                          className="flex items-start gap-2 text-xs text-zinc-300"
                        >
                          <Check className="size-3.5 text-rose-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white/10 bg-white/5 font-semibold text-xs uppercase tracking-wider text-zinc-200 hover:border-rose-500 hover:bg-rose-600 hover:text-white transition-all"
                >
                  <a
                    href={`https://wa.me/${gymConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                      `Hi IronCore! I would like to learn more about the ${program.title} program.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Inquire About Program</span>
                    <ArrowRight className="ml-1.5 size-3.5" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
