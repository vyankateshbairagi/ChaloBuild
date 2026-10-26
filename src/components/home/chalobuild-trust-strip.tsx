import { Dumbbell, Star } from "lucide-react";

export function ChaloBuildTrustStrip() {
  const gyms = [
    { name: "IronCore Fitness", city: "Bandra, Mumbai", status: "Live Turnkey Build" },
    { name: "Pulse Athletic Club", city: "Kothrud, Pune", status: "Zero SaaS Fees" },
    { name: "Titan Gym & Crossfit", city: "College Rd, Nashik", status: "48h Deployment" },
    { name: "Olympia Elite Fitness", city: "Indiranagar, Bengaluru", status: "Full Ownership" },
    { name: "Vanguard Performance", city: "Connaught Place, Delhi", status: "WhatsApp Pass Live" },
  ];

  return (
    <section className="relative border-b border-white/[0.08] bg-[#090b12] py-8 overflow-hidden text-white font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Trust Statement */}
          <div className="shrink-0 max-w-xs space-y-1">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-1 text-xs font-bold text-white">4.9 / 5 Rating</span>
            </div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
              Powering 50+ Gyms Across India
            </p>
            <p className="text-[11px] text-slate-400">
              Gym owners saving ₹50,000+ per year by eliminating SaaS subscriptions.
            </p>
          </div>

          {/* Featured Gym Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap items-center gap-3 flex-1 justify-end">
            {gyms.map((gym) => (
              <div
                key={gym.name}
                className="group flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-slate-900/60 px-3 py-2 shadow-xs hover:border-cyan-500/40 hover:bg-slate-900 transition-all"
              >
                <div className="flex size-7 items-center justify-center rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Dumbbell className="size-3.5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-white leading-tight">
                    {gym.name}
                  </p>
                  <p className="text-[9px] text-cyan-300/80 leading-tight">
                    {gym.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Metrics Ticker */}
        <div className="mt-6 pt-6 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-2.5 rounded-xl bg-slate-900/40 border border-white/[0.06]">
            <p className="text-2xl sm:text-3xl font-black text-cyan-400">48h</p>
            <p className="text-[11px] text-slate-300 font-semibold mt-0.5">Turnkey Setup &amp; Delivery</p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/40 border border-white/[0.06]">
            <p className="text-2xl sm:text-3xl font-black text-emerald-400">₹0 / mo</p>
            <p className="text-[11px] text-slate-300 font-semibold mt-0.5">Zero Recurring Software Fees</p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/40 border border-white/[0.06]">
            <p className="text-2xl sm:text-3xl font-black text-sky-400">100%</p>
            <p className="text-[11px] text-slate-300 font-semibold mt-0.5">Code &amp; Database Ownership</p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/40 border border-white/[0.06]">
            <p className="text-2xl sm:text-3xl font-black text-amber-400">0%</p>
            <p className="text-[11px] text-slate-300 font-semibold mt-0.5">Commission on Member Dues</p>
          </div>
        </div>
      </div>
    </section>
  );
}
