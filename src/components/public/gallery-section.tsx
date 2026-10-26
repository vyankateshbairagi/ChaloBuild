"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Eye, X } from "lucide-react";
import { gymConfig, type GymConfig, type GymGalleryItem } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";
import { Button } from "@/components/ui/button";

const categories = ["All", "Strength", "Cardio", "Coaching", "Facilities"] as const;

export function GallerySection({
  limit,
  showAllLink = true,
  config = gymConfig,
  basePath = "",
}: {
  limit?: number;
  showAllLink?: boolean;
  config?: GymConfig;
  basePath?: string;
}) {
  const prefix = basePath ? basePath : "";
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeImage, setActiveImage] = useState<GymGalleryItem | null>(null);

  const filtered = config.gallery.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const displayItems = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section id="gallery" className="relative bg-[#090b11] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] text-white font-sans overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.06),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Visual Experience"
            title="A Space Built for Showing Up."
            text="High ceilings, Olympic competition platforms, specialized dumbbell stations, and an electrifying atmosphere."
          />
          {showAllLink && (
            <Button
              asChild
              variant="outline"
              className="border-white/[0.12] bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-red-500/50 hover:text-white shrink-0 self-start md:self-auto shadow-xs text-xs font-bold uppercase tracking-wider"
            >
              <Link href={`${prefix}/gallery`}>
                <span>View Full Gallery</span>
                <ChevronRight className="ml-1.5 size-4" />
              </Link>
            </Button>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  active
                    ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-600/30 border border-red-400/40"
                    : "border border-white/[0.08] bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {displayItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950 shadow-xl transition-all duration-300 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* View Overlay Icon */}
              <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-slate-950/80 border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-sm backdrop-blur-md">
                <Eye className="size-4 text-red-400" />
              </div>

              {/* Image Caption */}
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[9px] font-bold uppercase tracking-wider text-red-400">
                  {item.category}
                </span>
                <p className="text-sm font-bold text-white truncate">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-slate-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-[80vw] max-w-4xl">
              <Image
                src={activeImage.image}
                alt={activeImage.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-900 border-t border-white/10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                  {activeImage.category}
                </span>
                <p className="text-sm font-bold text-white">
                  {activeImage.title}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
