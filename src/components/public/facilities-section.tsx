import Image from "next/image";
import { Check } from "lucide-react";
import { gymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";

export function FacilitiesSection() {
  return (
    <section id="facilities" className="relative bg-[#0c0c10] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Facility"
          title="World-Class Training Infrastructure."
          text="Over 5,000 square feet of meticulously engineered training space built for serious lifters and fitness enthusiasts."
          centered
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gymConfig.facilities.map((fac) => (
            <div
              key={fac.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#141418] transition-all duration-300 hover:border-rose-500/40 hover:shadow-2xl hover:shadow-rose-950/30"
            >
              {/* Facility Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={fac.image}
                  alt={fac.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-transparent" />
              </div>

              {/* Facility Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-rose-400 transition-colors">
                  {fac.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-rose-400 uppercase tracking-wide">
                  {fac.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {fac.description}
                </p>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-2">
                    Included Features
                  </p>
                  <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                    {fac.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-xs text-zinc-300"
                      >
                        <Check className="size-3 text-rose-500 shrink-0" />
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
