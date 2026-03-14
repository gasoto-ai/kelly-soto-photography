"use client"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-stone-400 mb-2">
          Get in Touch
        </p>
        <h2
          className="text-center text-3xl md:text-4xl text-stone-700 mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Let&apos;s Make Something Beautiful
        </h2>
        <p className="text-center text-stone-500 font-light leading-relaxed mb-10">
          I&apos;d love to hear about your vision. Whether you know exactly what you want
          or you&apos;re just starting to dream it up, reach out and let&apos;s talk.
        </p>

        {/* Form — UI only, no backend */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs tracking-widest uppercase text-stone-400 mb-1.5">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-stone-200 rounded-sm px-4 py-3 text-stone-700 placeholder-stone-300 focus:outline-none focus:border-rose-200 bg-white text-sm"
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase text-stone-400 mb-1.5">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-stone-200 rounded-sm px-4 py-3 text-stone-700 placeholder-stone-300 focus:outline-none focus:border-rose-200 bg-white text-sm"
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase text-stone-400 mb-1.5">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell me about your session..."
              className="w-full border border-stone-200 rounded-sm px-4 py-3 text-stone-700 placeholder-stone-300 focus:outline-none focus:border-rose-200 bg-white text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-xs tracking-widest uppercase text-white bg-rose-300 hover:bg-rose-400 transition-colors rounded-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
