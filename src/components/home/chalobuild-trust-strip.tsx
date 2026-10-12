import { Dumbbell, Star } from "lucide-react";

export function ChaloBuildTrustStrip() {
  const gyms = [
    { name: "IronCore Fitness", city: "Bandra, Mumbai" },
    { name: "Pulse Athletic Club", city: "Kothrud, Pune" },
    { name: "Titan Gym & Crossfit", city: "College Rd, Nashik" },
    { name: "Olympia Elite Fitness", city: "Indiranagar, Bengaluru" },
    { name: "Vanguard Performance", city: "Connaught Place, Delhi" },
  ];

  return (
    <section className="relative border-y border-slate-200/80 bg-slate-50/70 py-6 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Trust Statement */}
          <div className="shrink-0 max-w-xs">
            <div className="flex items-center gap-1 text-amber-500 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-1 text-[11px] font-bold text-slate-800">4.9 / 5 Rating</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Trusted by 50+ Gyms Across India
            </p>
          </div>

          {/* Featured Gym Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap items-center gap-2.5 flex-1 justify-end">
            {gyms.map((gym) => (
              <div
                key={gym.name}
                className="group flex items-center gap-2 rounded-lg border border-slate-200/90 bg-white px-2.5 py-1.5 shadow-2xs hover:border-cyan-300 transition-all"
              >
                <div className="flex size-6 items-center justify-center rounded-md bg-cyan-50 border border-cyan-100 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <Dumbbell className="size-3" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-slate-900 leading-tight">
                    {gym.name}
                  </p>
                  <p className="text-[9px] text-slate-500 leading-tight">
                    {gym.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Quantitative Metrics Ticker */}
        <div className="mt-5 pt-4 border-t border-slate-200/70 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900">48h</p>
            <p className="text-[11px] text-slate-500 font-medium">Turnkey Setup &amp; Launch</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-extrabold text-cyan-600">3.4x</p>
            <p className="text-[11px] text-slate-500 font-medium">More Online Walk-Ins</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900">94%</p>
            <p className="text-[11px] text-slate-500 font-medium">Renewal Retention Rate</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-extrabold text-cyan-600">0%</p>
            <p className="text-[11px] text-slate-500 font-medium">Commission on Member Fees</p>
          </div>
        </div>
      </div>
    </section>
  );
}
