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
    <section id="why-us" className="relative bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={`Why Choose ${config.name}`}
          title="Engineered for Real Physical Progress."
          text={`We built ${config.name} to deliver an optimal training environment: no crowded stations, high-performance equipment, and expert coaching.`}
          centered
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Dumbbell;
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex size-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
                  <span>Feature 0{index + 1}</span>
                  <span className="h-px w-8 bg-slate-200 group-hover:bg-blue-300 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
