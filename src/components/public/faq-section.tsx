"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { gymConfig, type GymConfig } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";

export function FaqSection({
  config = gymConfig,
}: {
  config?: GymConfig;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions."
          text={`Everything you need to know about starting your fitness journey at ${config.name}.`}
          centered
        />

        <div className="mt-12 space-y-3">
          {config.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition hover:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 text-blue-600" : ""
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-6 pt-3 sm:px-6 text-sm leading-relaxed text-slate-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp assistance note */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm text-slate-700">
            Have a question that isn&apos;t answered here?
          </p>
          <a
            href={`https://wa.me/${config.contact.whatsappRaw}?text=${encodeURIComponent(
              `Hi ${config.name}! I have a question about your memberships.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 font-semibold text-xs uppercase tracking-wider text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <MessageCircle className="size-4 text-emerald-600" />
            <span>Ask our team on WhatsApp →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
