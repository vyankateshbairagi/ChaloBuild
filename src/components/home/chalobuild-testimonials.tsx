import { Star, Quote, Dumbbell } from "lucide-react";

export function ChaloBuildTestimonials() {
  const testimonials = [
    {
      quote:
        "Within 3 weeks of launching our ChaloBuild website, our online walk-ins increased by 45%. The WhatsApp 1-day trial pass brings us 10 to 15 qualified leads every weekend.",
      author: "Vikram Samant",
      role: "Owner & Head Coach",
      gym: "IronCore Fitness",
      location: "Bandra West, Mumbai",
      metric: "+45% Walk-in Leads",
    },
    {
      quote:
        "We used to manage 320 members on Excel spreadsheets and constantly lost track of renewals. ChaloBuild paid for itself in week one just from recovered expired memberships.",
      author: "Sneha Patil",
      role: "General Manager",
      gym: "Pulse Athletic Club",
      location: "Kothrud, Pune",
      metric: "₹1.4L Recovered Renewals",
    },
    {
      quote:
        "The onboarding was ridiculously smooth. We sent our membership price list and photos on Tuesday afternoon, and by Thursday evening our website and dashboard were live.",
      author: "Amit Deshmukh",
      role: "Founder",
      gym: "Titan Functional Gym",
      location: "College Road, Nashik",
      metric: "48-Hour Live Launch",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1 text-amber-500 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Trusted by Passionate Gym Owners.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Hear directly from fitness entrepreneurs running their daily business on ChaloBuild.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="relative rounded-2xl border border-slate-200 bg-slate-50/60 p-5 sm:p-6 flex flex-col justify-between hover:border-cyan-300 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Metric Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-2.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase text-cyan-700 bg-cyan-100/70 px-2 py-0.5 rounded border border-cyan-200">
                    {t.metric}
                  </span>
                </div>

                <Quote className="size-5 text-cyan-500/30 mb-2" />
                <p className="text-xs leading-relaxed text-slate-700 font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-xs shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{t.author}</h4>
                  <p className="text-[10px] text-slate-500">{t.role}</p>
                  <p className="text-[10px] font-semibold text-cyan-700 flex items-center gap-1 mt-0.5">
                    <Dumbbell className="size-2.5" />
                    <span>{t.gym}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400">{t.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
