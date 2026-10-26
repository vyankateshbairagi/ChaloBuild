"use client";

import { useActionState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { gymConfig, type GymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";
import { Button } from "@/components/ui/button";
import { submitLeadEnquiryAction, type EnquiryActionState } from "@/actions/enquiry";

const initialState: EnquiryActionState = {};

export function ContactSection({
  config = gymConfig,
  slug,
}: {
  config?: GymConfig;
  slug?: string;
}) {
  const [state, formAction, isPending] = useActionState(
    submitLeadEnquiryAction,
    initialState
  );

  return (
    <section id="contact" className="relative bg-[#07090e] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] text-white font-sans overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.08),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Visit & Connect"
          title="Start With a Free Trial Session."
          text="Fill out the quick request below or drop by during visiting hours. Zero aggressive sales pitches, 100% free workout."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Server-Validated Trial Request Form */}
          <div
            id="trial"
            className="lg:col-span-7 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#101422]/95 to-[#0b0e17]/95 p-7 sm:p-10 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-950/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                <Sparkles className="size-3 text-red-400" />
                1-Day VIP Pass
              </span>
              <span className="text-xs text-slate-400">• 100% Free • No Lock-in</span>
            </div>

            <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              Claim Your Free Workout Pass
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Test out our Olympic platforms, free weights, and coaching vibe at {config.name} before committing.
            </p>

            {state.success ? (
              <div className="mt-8 rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-6 text-center backdrop-blur-md">
                <CheckCircle2 className="mx-auto size-12 text-emerald-400" />
                <h4 className="mt-3 text-lg font-bold text-white">
                  Trial Request Confirmed!
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Your pass has been recorded in our system. Tap below to connect directly with the front desk on WhatsApp.
                </p>
                {state.whatsappUrl && (
                  <div className="mt-5">
                    <a
                      href={state.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-600/30 transition-all"
                    >
                      <MessageCircle className="size-4 fill-current" />
                      <span>Chat on WhatsApp Front Desk</span>
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <form action={formAction} className="mt-8 space-y-4">
                <input type="hidden" name="slug" value={slug || ""} />

                {state.error && (
                  <div className="rounded-xl border border-rose-500/40 bg-rose-950/60 p-3.5 text-xs font-bold text-rose-300">
                    {state.error}
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="trial-name"
                      className="block text-[11px] font-bold uppercase tracking-wider text-slate-300"
                    >
                      Full Name *
                    </label>
                    <input
                      id="trial-name"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                    />
                    {state.fieldErrors?.fullName && (
                      <p className="mt-1 text-xs text-rose-400">{state.fieldErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="trial-phone"
                      className="block text-[11px] font-bold uppercase tracking-wider text-slate-300"
                    >
                      WhatsApp / Phone *
                    </label>
                    <input
                      id="trial-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                    />
                    {state.fieldErrors?.phone && (
                      <p className="mt-1 text-xs text-rose-400">{state.fieldErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="trial-slot"
                      className="block text-[11px] font-bold uppercase tracking-wider text-slate-300"
                    >
                      Preferred Slot
                    </label>
                    <select
                      id="trial-slot"
                      name="slot"
                      defaultValue="Morning (6:00 AM – 10:00 AM)"
                      className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-xs sm:text-sm text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                    >
                      <option className="bg-slate-900 text-white">Morning (6:00 AM – 10:00 AM)</option>
                      <option className="bg-slate-900 text-white">Afternoon (11:00 AM – 4:00 PM)</option>
                      <option className="bg-slate-900 text-white">Evening (5:00 PM – 10:00 PM)</option>
                      <option className="bg-slate-900 text-white">Weekend Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="trial-goal"
                      className="block text-[11px] font-bold uppercase tracking-wider text-slate-300"
                    >
                      Primary Goal
                    </label>
                    <select
                      id="trial-goal"
                      name="goal"
                      defaultValue="Muscle Building & Strength"
                      className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-xs sm:text-sm text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                    >
                      <option className="bg-slate-900 text-white">Muscle Building &amp; Strength</option>
                      <option className="bg-slate-900 text-white">Fat Loss &amp; Toning</option>
                      <option className="bg-slate-900 text-white">Athletic Conditioning</option>
                      <option className="bg-slate-900 text-white">Personal Training Guidance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="trial-email"
                    className="block text-[11px] font-bold uppercase tracking-wider text-slate-300"
                  >
                    Email Address (Optional)
                  </label>
                  <input
                    id="trial-email"
                    name="email"
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                  />
                  {state.fieldErrors?.email && (
                    <p className="mt-1 text-xs text-rose-400">{state.fieldErrors.email}</p>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isPending}
                    className="w-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 py-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/30 hover:from-red-500 hover:to-red-600 transition-all disabled:opacity-70 border border-red-500/40"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 size-4 animate-spin" />
                        <span>Generating VIP Pass...</span>
                      </>
                    ) : (
                      <>
                        <span>Claim Free 1-Day Trial Pass</span>
                        <ArrowRight className="ml-2 size-4" />
                      </>
                    )}
                  </Button>
                  <p className="mt-2 text-center text-[10px] text-slate-400">
                    No spam. Your pass will be created and forwarded instantly to the front desk console.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Location, Hours & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address & Hours */}
            <div className="rounded-3xl border border-white/[0.08] bg-slate-900/60 p-7 shadow-xl backdrop-blur-xl">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                Gym Location &amp; Contact
              </h4>
              <div className="mt-5 space-y-4 text-xs sm:text-sm text-slate-300">
                <p className="flex items-start gap-3">
                  <MapPin className="size-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block font-bold">
                      {config.name}
                    </strong>
                    {config.contact.address}, {config.contact.city}
                    {config.contact.landmark && (
                      <>
                        <br />
                        <span className="text-xs text-slate-400">
                          Landmark: {config.contact.landmark}
                        </span>
                      </>
                    )}
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Phone className="size-4 text-red-500 shrink-0" />
                  <a
                    href={`tel:${config.contact.phoneRaw}`}
                    className="hover:text-red-400 transition-colors font-medium text-white"
                  >
                    {config.contact.phoneFormatted}
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <MessageCircle className="size-4 text-emerald-400 shrink-0" />
                  <a
                    href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
                      config.contact.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-300 transition-colors font-semibold text-emerald-400"
                  >
                    WhatsApp Front Desk (+91 {config.contact.whatsappRaw})
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Mail className="size-4 text-red-500 shrink-0" />
                  <a
                    href={`mailto:${config.contact.email}`}
                    className="hover:text-red-400 transition-colors text-slate-300"
                  >
                    {config.contact.email}
                  </a>
                </p>
              </div>

              {/* Operating Hours Box */}
              <div className="mt-6 rounded-2xl border border-white/[0.06] bg-slate-950/60 p-4">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white">
                  <Clock className="size-3.5 text-red-500" /> Facility Operating Hours
                </p>
                <div className="mt-2 space-y-1 text-xs text-slate-400">
                  <div className="flex justify-between py-1 border-b border-white/[0.06]">
                    <span className="text-slate-400">Monday – Friday</span>
                    <span className="font-bold text-white">
                      {config.openingHours.weekdays}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.06]">
                    <span className="text-slate-400">Saturday</span>
                    <span className="font-bold text-white">
                      {config.openingHours.saturday}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Sunday</span>
                    <span className="font-bold text-white">
                      {config.openingHours.sunday}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Maps Link */}
              <div className="mt-5">
                <a
                  href={config.contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-slate-800/80 hover:bg-slate-700 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors shadow-sm"
                >
                  <MapPin className="size-4 text-red-500" />
                  <span>Open in Google Maps</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map preview */}
            <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-950 shadow-xl h-56 relative">
              <iframe
                title={`${config.name} Map Location`}
                src={config.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
