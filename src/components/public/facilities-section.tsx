import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import { gymConfig, type GymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";

export function FacilitiesSection({
  config = gymConfig,
}: {
  config?: GymConfig;
}) {
  return (
    <section id="facilities" className="relative bg-[#0b0d15] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] text-white font-sans overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.06),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Facility"
          title="World-Class Training Infrastructure."
          text={`Explore the meticulously planned training spaces at ${config.name}, equipped for comprehensive athletic development.`}
          centered
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.facilities.map((fac) => (
            <div
              key={fac.id}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-xl hover:border-red-500/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Facility Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <Image
                  src={fac.image}
                  alt={fac.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d15] via-transparent to-black/30" />
              </div>

              {/* Facility Body */}
              <div className="p-6">
                <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-red-400 transition-colors">
                  {fac.title}
                </h3>
                <p className="mt-1 text-xs font-bold text-red-400 uppercase tracking-wide">
                  {fac.tagline}
                </p>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-400">
                  {fac.description}
                </p>

                <div className="mt-5 border-t border-white/[0.06] pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Facility Amenities
                  </p>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {fac.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-xs text-slate-300"
                      >
                        <Check className="size-3.5 text-red-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
