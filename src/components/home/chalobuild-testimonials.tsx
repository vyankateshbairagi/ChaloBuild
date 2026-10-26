import { Star, Quote, Dumbbell, Sparkles, CheckCircle2 } from "lucide-react";

export function ChaloBuildTestimonials() {
  const testimonials = [
    {
      quote:
        "Within 3 weeks of launching our ChaloBuild website, our online walk-ins increased by 45%. The WhatsApp 1-day trial pass brings us 10 to 15 qualified leads every weekend without running expensive ads.",
      author: "Vikram Samant",
      role: "Owner & Head Coach",
      gym: "IronCore Fitness",
      location: "Bandra West, Mumbai",
      metric: "+45% Walk-in Leads",
      members: "280+ Members",
    },
    {
      quote:
        "We used to manage 320 members on Excel spreadsheets and constantly lost track of renewals. ChaloBuild paid for itself in week one just from recovered expired memberships that we previously missed.",
      author: "Sneha Patil",
      role: "General Manager",
      gym: "Pulse Athletic Club",
      location: "Kothrud, Pune",
      metric: "₹1.4L Recovered Renewals",
      members: "340+ Members",
    },
    {
      quote:
        "The onboarding was ridiculously fast. We sent our membership price list, photos, and UPI QR on Tuesday afternoon, and by Thursday evening our website and dashboard were live on our domain.",
      author: "Amit Deshmukh",
      role: "Founder",
      gym: "Titan Functional Gym",
      location: "College Road, Nashik",
      metric: "48-Hour Live Launch",
      members: "210+ Members",
    },
  ];

  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#090b12] border-b border-white/[0.08] overflow-hidden text-white font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.06),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.15)]">
            <Sparkles className="size-3 text-amber-400" />
            <span>REAL RESULTS FROM REAL GYM OWNERS</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Trusted by Ambitious Gym Owners.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Hear directly from fitness entrepreneurs running their daily business and growing member counts on ChaloBuild.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="group relative rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl p-6 flex flex-col justify-between hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Header Row: Stars + Metric */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded-md border border-cyan-500/30">
                    {t.metric}
                  </span>
                </div>

                <Quote className="size-6 text-cyan-500/30 mb-2" />
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-md shrink-0">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{t.author}</span>
                      <CheckCircle2 className="size-3.5 text-cyan-400" />
                    </h4>
                    <p className="text-[10px] text-slate-400">{t.role}</p>
                    <p className="text-[10px] font-semibold text-cyan-400 flex items-center gap-1 mt-0.5">
                      <Dumbbell className="size-2.5" />
                      <span>{t.gym}</span>
                      <span className="text-slate-600">&bull;</span>
                      <span className="text-slate-400">{t.location}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Scale</span>
                  <span className="text-[11px] font-extrabold text-white">{t.members}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
