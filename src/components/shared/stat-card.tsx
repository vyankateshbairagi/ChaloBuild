import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  icon: Icon,
  tone = "default",
  trend,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  tone?: "default" | "positive" | "warning";
  trend?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl p-5 shadow-xl hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-200">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {label}
          </p>
          <p className="mt-1.5 text-2xl sm:text-3xl font-black tracking-tight text-white">
            {value}
          </p>
          {trend && (
            <p className="mt-1 text-[10px] font-semibold text-emerald-400">
              {trend}
            </p>
          )}
        </div>
        <div
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-md transition-transform group-hover:scale-105",
            tone === "positive" && "border-emerald-500/40 bg-emerald-950/60 text-emerald-400 shadow-emerald-950/40",
            tone === "warning" && "border-amber-500/40 bg-amber-950/60 text-amber-400 shadow-amber-950/40",
            tone === "default" && "border-cyan-500/40 bg-cyan-950/60 text-cyan-400 shadow-cyan-950/40"
          )}
        >
          <Icon className="size-5.5" />
        </div>
      </div>
    </div>
  );
}
