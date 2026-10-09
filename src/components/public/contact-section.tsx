"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { gymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [slot, setSlot] = useState("Morning (6:00 AM – 10:00 AM)");
  const [goal, setGoal] = useState("Muscle Building & Strength");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hi ${gymConfig.name}! My name is ${fullName} (Phone: ${phone}). I would like to book a 1-Day Free Trial Pass. Preferred Slot: ${slot}, Goal: ${goal}.`;
    const waUrl = `https://wa.me/${gymConfig.contact.whatsappRaw}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }
  };

  return (
    <section id="contact" className="relative bg-[#0c0c10] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Visit & Connect"
          title="Start With a Free Trial Session."
          text="Fill out the quick request below or drop by during visiting hours. No pressure, no awkward sales pitches."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Interactive Trial Request Form */}
          <div
            id="trial"
            className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#121217] p-7 sm:p-10 shadow-2xl"
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-300">
                <Sparkles className="size-3 text-rose-400" />
                1-Day VIP Pass
              </span>
              <span className="text-xs text-zinc-400">• 100% Free</span>
            </div>

            <h3 className="mt-4 text-2xl font-black uppercase text-white sm:text-3xl">
              Claim Your Free Workout Pass
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Test out our equipment, check out the lockers, and experience the IronCore vibe before joining.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 text-center">
                <CheckCircle2 className="mx-auto size-12 text-emerald-400" />
                <h4 className="mt-3 text-lg font-bold text-white">
                  Trial Request Created!
                </h4>
                <p className="mt-1 text-sm text-zinc-300">
                  Opening WhatsApp to finalize your visit pass with the front desk.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="trial-name"
                      className="block text-xs font-bold uppercase tracking-wider text-zinc-300"
                    >
                      Your Full Name
                    </label>
                    <input
                      id="trial-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="trial-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-zinc-300"
                    >
                      WhatsApp / Phone
                    </label>
                    <input
                      id="trial-phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="trial-slot"
                      className="block text-xs font-bold uppercase tracking-wider text-zinc-300"
                    >
                      Preferred Slot
                    </label>
                    <select
                      id="trial-slot"
                      value={slot}
                      onChange={(e) => setSlot(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm text-white focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
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
                      className="block text-xs font-bold uppercase tracking-wider text-zinc-300"
                    >
                      Primary Goal
                    </label>
                    <select
                      id="trial-goal"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm text-white focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    >
                      <option>Muscle Building & Strength</option>
                      <option>Fat Loss & Toning</option>
                      <option>Athletic Conditioning</option>
                      <option>Personal Training Guidance</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-rose-600 py-6 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-rose-950/70 hover:bg-rose-500 transition-all"
                  >
                    <span>Confirm Free Trial Pass on WhatsApp</span>
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                  <p className="mt-2 text-center text-[11px] text-zinc-500">
                    No spam. Your pass will be generated instantly for the front desk.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Location, Hours & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address & Hours */}
            <div className="rounded-3xl border border-white/10 bg-[#121217] p-7">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
                Gym Location & Contact
              </h4>
              <div className="mt-5 space-y-4 text-sm text-zinc-300">
                <p className="flex items-start gap-3">
                  <MapPin className="size-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block font-semibold">
                      {gymConfig.name}
                    </strong>
                    {gymConfig.contact.address}
                    <br />
                    <span className="text-xs text-zinc-400">
                      Landmark: {gymConfig.contact.landmark}
                    </span>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Phone className="size-4 text-rose-500 shrink-0" />
                  <a
                    href={`tel:${gymConfig.contact.phoneRaw}`}
                    className="hover:text-rose-400 transition-colors font-medium text-white"
                  >
                    {gymConfig.contact.phoneFormatted}
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <MessageCircle className="size-4 text-emerald-400 shrink-0" />
                  <a
                    href={`https://wa.me/${gymConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                      gymConfig.contact.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-300 transition-colors font-medium text-white"
                  >
                    WhatsApp Front Desk
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Mail className="size-4 text-rose-500 shrink-0" />
                  <a
                    href={`mailto:${gymConfig.contact.email}`}
                    className="hover:text-rose-400 transition-colors"
                  >
                    {gymConfig.contact.email}
                  </a>
                </p>
              </div>

              {/* Operating Hours Box */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
                  <Clock className="size-3.5" /> Facility Operating Hours
                </p>
                <div className="mt-2 space-y-1 text-xs text-zinc-300">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-zinc-400">Monday – Friday</span>
                    <span className="font-semibold text-white">
                      {gymConfig.openingHours.weekdays}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-zinc-400">Saturday</span>
                    <span className="font-semibold text-white">
                      {gymConfig.openingHours.saturday}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-zinc-400">Sunday</span>
                    <span className="font-semibold text-white">
                      {gymConfig.openingHours.sunday}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Maps Link */}
              <div className="mt-5">
                <a
                  href={gymConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                >
                  <MapPin className="size-4 text-rose-500" />
                  <span>Open in Google Maps</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map preview */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-xl h-56 relative">
              <iframe
                title="IronCore Fitness Gym Map Location"
                src={gymConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.8) contrast(1.2) invert(0.9)" }}
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
