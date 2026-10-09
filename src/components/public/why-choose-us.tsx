import {
  CalendarCheck,
  Dumbbell,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { gymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";

const iconMap = {
  Dumbbell,
  ShieldCheck,
  Target,
  Sparkles,
  CalendarCheck,
  Users,
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-[#0b0b0e] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose IronCore"
          title="Engineered for Real Physical Progress."
          text="We built IronCore Fitness to solve everything frustrating about typical commercial gyms: no crowded racks, no broken machines, and no unhelpful staff."
          centered
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gymConfig.whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Dumbbell;
            return (
              <div
                key={item.title}
                className="gym-glow-card group rounded-2xl p-7 transition-all duration-300"
              >
                <div className="flex size-12 items-center justify-center rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400 group-hover:bg-rose-600 group-hover:text-white transition-all">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold uppercase tracking-tight text-white group-hover:text-rose-400 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 group-hover:text-rose-400/80 transition-colors">
                  <span>Standard 0{index + 1}</span>
                  <span className="h-px w-8 bg-zinc-800 group-hover:bg-rose-500/40 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
