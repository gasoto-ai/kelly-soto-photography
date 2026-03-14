// Varied seeds and dimensions to simulate a natural masonry feel
const GALLERY_IMAGES = [
  { seed: "ks-g1", w: 600, h: 800, alt: "Portrait session" },
  { seed: "ks-g2", w: 600, h: 600, alt: "Family moment" },
  { seed: "ks-g3", w: 600, h: 900, alt: "Outdoor portrait" },
  { seed: "ks-g4", w: 600, h: 700, alt: "Natural light portrait" },
  { seed: "ks-g5", w: 600, h: 600, alt: "Event photography" },
  { seed: "ks-g6", w: 600, h: 800, alt: "Lifestyle session" },
  { seed: "ks-g7", w: 600, h: 650, alt: "Family portrait" },
  { seed: "ks-g8", w: 600, h: 900, alt: "Golden hour portrait" },
  { seed: "ks-g9", w: 600, h: 700, alt: "Candid moment" },
  { seed: "ks-g10", w: 600, h: 600, alt: "Studio portrait" },
  { seed: "ks-g11", w: 600, h: 800, alt: "Outdoor family" },
  { seed: "ks-g12", w: 600, h: 750, alt: "Portrait close-up" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6" style={{ backgroundColor: "#fafaf8" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-stone-400 mb-2">
          Portfolio
        </p>
        <h2
          className="text-center text-3xl md:text-4xl text-stone-700 mb-12"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          The Work
        </h2>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.seed}
              className="group relative overflow-hidden rounded-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://picsum.photos/seed/${img.seed}/${img.w}/${img.h}`}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ aspectRatio: `${img.w}/${img.h}` }}
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
