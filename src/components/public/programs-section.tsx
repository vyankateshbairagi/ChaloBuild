import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { gymConfig, type GymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";
import { Button } from "@/components/ui/button";

export function ProgramsSection({
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
  const displayPrograms = limit
    ? config.programs.slice(0, limit)
    : config.programs;

  return (
    <section id="programs" className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Targeted Training"
            title="Programs Built Around Your Ambition."
            text="Whether you want to build foundational strength, improve endurance, or achieve sustainable physical conditioning, our structured training programs deliver."
          />
          {showAllLink && (
            <Button
              asChild
              variant="outline"
              className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-blue-500 hover:text-blue-600 shrink-0 self-start md:self-auto shadow-xs"
            >
              <Link href={`${prefix}/programs`}>
                <span>View All Programs</span>
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
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Program Header Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                  {/* Intensity Tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="rounded-md border border-white/20 bg-white/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700 backdrop-blur-xs shadow-xs">
                      {program.intensity}
                    </span>
                    <span className="rounded-md border border-white/20 bg-white/90 px-2.5 py-1 text-[11px] font-medium text-slate-700 backdrop-blur-xs shadow-xs">
                      {program.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {program.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {program.description}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights
                    </p>
                    <ul className="space-y-1.5">
                      {program.highlights.slice(0, 3).map((hl) => (
                        <li
                          key={hl}
                          className="flex items-start gap-2 text-xs text-slate-700"
                        >
                          <Check className="size-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-slate-200 bg-slate-50 font-semibold text-xs uppercase tracking-wider text-slate-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <a
                    href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
                      `Hi ${config.name}! I would like to learn more about the ${program.title} program.`
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
