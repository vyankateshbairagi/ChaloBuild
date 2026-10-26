import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, MessageCircle } from "lucide-react";
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
    <section id="programs" className="relative bg-[#090b11] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] text-white font-sans overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.06),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Targeted Training"
            title="Programs Built Around Your Ambition."
            text="Whether you want to build foundational strength, master Olympic lifts, or achieve athletic body composition, our structured training programs deliver."
          />
          {showAllLink && (
            <Button
              asChild
              variant="outline"
              className="border-white/[0.12] bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-red-500/50 hover:text-white shrink-0 self-start md:self-auto shadow-xs text-xs font-bold uppercase tracking-wider"
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
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-xl hover:border-red-500/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Program Header Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b11] via-transparent to-black/40" />

                  {/* Intensity & Duration Tags */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="rounded-md border border-red-500/40 bg-red-950/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-red-300 backdrop-blur-md shadow-xs">
                      {program.intensity}
                    </span>
                    <span className="rounded-md border border-white/20 bg-slate-950/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300 backdrop-blur-md shadow-xs">
                      {program.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-red-400 transition-colors">
                    {program.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-bold text-red-400 uppercase tracking-wide">
                    {program.tagline}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-400">
                    {program.description}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-white/[0.06] pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Program Highlights
                    </p>
                    <ul className="space-y-1.5">
                      {program.highlights.slice(0, 3).map((hl) => (
                        <li
                          key={hl}
                          className="flex items-start gap-2 text-xs text-slate-300"
                        >
                          <Check className="size-3.5 text-red-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0 border-t border-white/[0.06] mt-4">
                <Button
                  asChild
                  className="w-full bg-slate-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-600 border border-white/[0.08] hover:border-red-500/50 font-bold text-xs uppercase tracking-wider text-white transition-all shadow-md"
                >
                  <a
                    href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
                      `Hi ${config.name}! I would like to book a trial session for the ${program.title} program.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="size-3.5 fill-current text-emerald-400" />
                    <span>Inquire / Book Trial</span>
                    <ArrowRight className="ml-1 size-3.5" />
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
