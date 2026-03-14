"use client"

import { useState } from "react"
import Masonry from "react-masonry-css"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

export type GalleryCategory = "all" | "portraits" | "families" | "events"

export interface GalleryImage {
  seed: string
  w: number
  h: number
  alt: string
  category: Exclude<GalleryCategory, "all">
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { seed: "ks-g1", w: 600, h: 800, alt: "Portrait session", category: "portraits" },
  { seed: "ks-g2", w: 600, h: 600, alt: "Family moment", category: "families" },
  { seed: "ks-g3", w: 600, h: 900, alt: "Outdoor portrait", category: "portraits" },
  { seed: "ks-g4", w: 600, h: 700, alt: "Natural light portrait", category: "portraits" },
  { seed: "ks-g5", w: 600, h: 600, alt: "Event photography", category: "events" },
  { seed: "ks-g6", w: 600, h: 800, alt: "Lifestyle session", category: "portraits" },
  { seed: "ks-g7", w: 600, h: 650, alt: "Family portrait", category: "families" },
  { seed: "ks-g8", w: 600, h: 900, alt: "Golden hour portrait", category: "portraits" },
  { seed: "ks-g9", w: 600, h: 700, alt: "Candid moment", category: "events" },
  { seed: "ks-g10", w: 600, h: 600, alt: "Studio portrait", category: "portraits" },
  { seed: "ks-g11", w: 600, h: 800, alt: "Outdoor family", category: "families" },
  { seed: "ks-g12", w: 600, h: 750, alt: "Portrait close-up", category: "portraits" },
]

const CATEGORIES: { value: GalleryCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "portraits", label: "Portraits" },
  { value: "families", label: "Families" },
  { value: "events", label: "Events" },
]

const MASONRY_BREAKPOINTS = {
  default: 3,
  1024: 2,
  640: 1,
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all")
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const filtered = GALLERY_IMAGES.filter(
    (img) => activeCategory === "all" || img.category === activeCategory
  )

  const lightboxSlides = filtered.map((img) => ({
    src: `https://picsum.photos/seed/${img.seed}/${img.w}/${img.h}`,
    alt: img.alt,
    width: img.w,
    height: img.h,
  }))

  return (
    <section id="gallery" className="py-24 px-6" style={{ backgroundColor: "#fafaf8" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-stone-400 mb-2">
          Portfolio
        </p>
        <h2
          className="text-center text-3xl md:text-4xl text-stone-700 mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          The Work
        </h2>

        {/* Category tabs */}
        <div role="tablist" className="flex justify-center gap-1 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              role="tab"
              aria-selected={activeCategory === cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 text-xs tracking-widest uppercase transition-colors rounded-sm ${
                activeCategory === cat.value
                  ? "bg-stone-800 text-white"
                  : "text-stone-500 hover:text-stone-800 border border-stone-200 hover:border-stone-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <Masonry
          breakpointCols={MASONRY_BREAKPOINTS}
          className="flex gap-4"
          columnClassName="flex flex-col gap-4"
        >
          {filtered.map((img, idx) => (
            <button
              key={img.seed}
              onClick={() => setLightboxIndex(idx)}
              className="group relative overflow-hidden rounded-sm w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-300"
              aria-label={`Open ${img.alt} in lightbox`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://picsum.photos/seed/${img.seed}/${img.w}/${img.h}`}
                alt={img.alt}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            </button>
          ))}
        </Masonry>

        {/* Lightbox */}
        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={lightboxSlides}
        />
      </div>
    </section>
  )
}
