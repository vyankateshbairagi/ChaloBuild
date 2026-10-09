"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Eye, X } from "lucide-react";
import { gymConfig, type GymGalleryItem } from "@/config/gym";
import { SectionHeading } from "@/components/public/public-ui";
import { Button } from "@/components/ui/button";

const categories = ["All", "Strength", "Cardio", "Coaching", "Facilities"] as const;

export function GallerySection({
  limit,
  showAllLink = true,
}: {
  limit?: number;
  showAllLink?: boolean;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeImage, setActiveImage] = useState<GymGalleryItem | null>(null);

  const filtered = gymConfig.gallery.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const displayItems = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section id="gallery" className="relative bg-[#09090b] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Visual Experience"
            title="A Space Built for Showing Up."
            text="High ceilings, competition barbells, curated music, and zero clutter. Take a tour of our training facility."
          />
          {showAllLink && (
            <Button
              asChild
              variant="outline"
              className="border-white/15 bg-white/5 text-zinc-300 hover:border-rose-500 hover:text-white shrink-0 self-start md:self-auto"
            >
              <Link href="/gallery">
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
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-950/50"
                    : "border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white"
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
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-lg transition-all duration-300 hover:border-rose-500/60 hover:shadow-2xl hover:shadow-rose-950/40"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* View Overlay Icon */}
              <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-black/60 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="size-4" />
              </div>

              {/* Image Caption */}
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-rose-300 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-4xl w-full overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-rose-600 transition-colors"
                aria-label="Close image modal"
              >
                <X className="size-5" />
              </button>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black">
                <Image
                  src={activeImage.image}
                  alt={activeImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-4 sm:p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-500">
                  {activeImage.category}
                </span>
                <h3 className="mt-1 text-xl font-bold uppercase text-white">
                  {activeImage.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-300">
                  {activeImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
