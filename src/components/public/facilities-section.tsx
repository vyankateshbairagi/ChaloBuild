import Image from "next/image";
import { Check } from "lucide-react";
import { gymConfig, type GymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";

export function FacilitiesSection({
  config = gymConfig,
}: {
  config?: GymConfig;
}) {
  return (
    <section id="facilities" className="relative bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="mx-auto max-w-7xl">
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
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              {/* Facility Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={fac.image}
                  alt={fac.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              {/* Facility Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {fac.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  {fac.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {fac.description}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Included Features
                  </p>
                  <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                    {fac.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <Check className="size-3 text-blue-600 shrink-0" />
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
