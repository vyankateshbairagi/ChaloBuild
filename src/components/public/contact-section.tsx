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
    <section id="contact" className="relative bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Visit & Connect"
          title="Start With a Free Trial Session."
          text="Fill out the quick request below or drop by during visiting hours. No pressure, no aggressive sales pitches."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Server-Validated Trial Request Form */}
          <div
            id="trial"
            className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                <Sparkles className="size-3 text-blue-600" />
                1-Day VIP Pass
              </span>
              <span className="text-xs text-slate-500">• 100% Free</span>
            </div>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Claim Your Free Workout Pass
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Test out our equipment, check out the amenities, and experience the {config.name} training vibe before joining.
            </p>

            {state.success ? (
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <CheckCircle2 className="mx-auto size-12 text-emerald-600" />
                <h4 className="mt-3 text-lg font-bold text-slate-900">
                  Trial Request Confirmed!
                </h4>
                <p className="mt-1 text-sm text-slate-600">
                  Your request has been logged in our system. You can connect immediately with the front desk on WhatsApp.
                </p>
                {state.whatsappUrl && (
                  <div className="mt-5">
                    <a
                      href={state.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-emerald-700 transition-colors"
                    >
                      <MessageCircle className="size-4" />
                      <span>Chat on WhatsApp Front Desk</span>
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <form action={formAction} className="mt-8 space-y-4">
                <input type="hidden" name="slug" value={slug || ""} />

                {state.error && (
                  <div className="rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-xs font-medium text-rose-700">
                    {state.error}
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="trial-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Full Name *
                    </label>
                    <input
                      id="trial-name"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                    {state.fieldErrors?.fullName && (
                      <p className="mt-1 text-xs text-rose-600">{state.fieldErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="trial-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      WhatsApp / Phone *
                    </label>
                    <input
                      id="trial-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                    {state.fieldErrors?.phone && (
                      <p className="mt-1 text-xs text-rose-600">{state.fieldErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="trial-slot"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Preferred Slot
                    </label>
                    <select
                      id="trial-slot"
                      name="slot"
                      defaultValue="Morning (6:00 AM – 10:00 AM)"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    >
                      <option>Morning (6:00 AM – 10:00 AM)</option>
                      <option>Afternoon (11:00 AM – 4:00 PM)</option>
                      <option>Evening (5:00 PM – 10:00 PM)</option>
                      <option>Weekend Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="trial-goal"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Primary Goal
                    </label>
                    <select
                      id="trial-goal"
                      name="goal"
                      defaultValue="Muscle Building & Strength"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    >
                      <option>Muscle Building & Strength</option>
                      <option>Fat Loss & Toning</option>
                      <option>Athletic Conditioning</option>
                      <option>Personal Training Guidance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="trial-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
                  >
                    Email Address (Optional)
                  </label>
                  <input
                    id="trial-email"
                    name="email"
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                  {state.fieldErrors?.email && (
                    <p className="mt-1 text-xs text-rose-600">{state.fieldErrors.email}</p>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isPending}
                    className="w-full bg-blue-600 py-6 text-sm font-semibold uppercase tracking-wider text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-all disabled:opacity-70"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 size-4 animate-spin" />
                        <span>Submitting Pass Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Claim Free 1-Day Trial Pass</span>
                        <ArrowRight className="ml-2 size-4" />
                      </>
                    )}
                  </Button>
                  <p className="mt-2 text-center text-[11px] text-slate-500">
                    No spam. Your pass will be created and forwarded instantly to the front desk.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Location, Hours & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address & Hours */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Gym Location &amp; Contact
              </h4>
              <div className="mt-5 space-y-4 text-sm text-slate-600">
                <p className="flex items-start gap-3">
                  <MapPin className="size-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 block font-semibold">
                      {config.name}
                    </strong>
                    {config.contact.address}
                    <br />
                    <span className="text-xs text-slate-500">
                      Landmark: {config.contact.landmark}
                    </span>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Phone className="size-4 text-blue-600 shrink-0" />
                  <a
                    href={`tel:${config.contact.phoneRaw}`}
                    className="hover:text-blue-600 transition-colors font-medium text-slate-900"
                  >
                    {config.contact.phoneFormatted}
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <MessageCircle className="size-4 text-emerald-600 shrink-0" />
                  <a
                    href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
                      config.contact.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-700 transition-colors font-medium text-slate-900"
                  >
                    WhatsApp Front Desk
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Mail className="size-4 text-blue-600 shrink-0" />
                  <a
                    href={`mailto:${config.contact.email}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {config.contact.email}
                  </a>
                </p>
              </div>

              {/* Operating Hours Box */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                  <Clock className="size-3.5 text-blue-600" /> Facility Operating Hours
                </p>
                <div className="mt-2 space-y-1 text-xs text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Monday – Friday</span>
                    <span className="font-semibold text-slate-900">
                      {config.openingHours.weekdays}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Saturday</span>
                    <span className="font-semibold text-slate-900">
                      {config.openingHours.saturday}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Sunday</span>
                    <span className="font-semibold text-slate-900">
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <MapPin className="size-4 text-blue-600" />
                  <span>Open in Google Maps</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map preview */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm h-56 relative">
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
