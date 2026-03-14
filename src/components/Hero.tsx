export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px]">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://picsum.photos/seed/kelly-hero/1600/900"
        alt="Kelly Soto Photography hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Soft warm overlay — not dark */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="text-xs tracking-[0.35em] uppercase text-stone-500 mb-4">
          Photography
        </p>
        <h1
          className="text-5xl md:text-7xl text-stone-800 mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Kelly Soto
        </h1>
        <p className="text-lg md:text-xl text-stone-600 font-light tracking-wide mb-8">
          Capturing light. Telling stories.
        </p>
        <a
          href="#gallery"
          className="text-xs tracking-widest uppercase text-stone-600 hover:text-stone-800 border-b border-stone-400 hover:border-stone-700 pb-0.5 transition-colors"
        >
          View the Work ↓
        </a>
      </div>
    </section>
  )
}
