import {
  CalendarCheck,
  Dumbbell,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { gymConfig, type GymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";

const iconMap = {
  Dumbbell,
  ShieldCheck,
  Target,
  Sparkles,
  CalendarCheck,
  Users,
};

export function WhyChooseUs({
  config = gymConfig,
}: {
  config?: GymConfig;
}) {
  return (
    <section id="why-us" className="relative bg-[#0b0d15] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] text-white font-sans overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.06),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={`Why Train At ${config.name}`}
          title="Engineered for Real Physical Progress."
          text={`We built ${config.name} to deliver an optimal training environment: zero crowded stations, competition-spec Olympic bars, and CSCS-certified coaching.`}
          centered
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Dumbbell;
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl p-7 hover:border-red-500/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-rose-700 text-white shadow-md shadow-red-600/30 group-hover:scale-110 transition-transform">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 text-lg font-black uppercase tracking-tight text-white group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <span className="text-red-400">Standard 0{index + 1}</span>
                  <span className="text-slate-400 group-hover:text-white transition-colors">Verified Standard &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
