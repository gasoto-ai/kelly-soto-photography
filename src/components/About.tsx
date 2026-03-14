export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Headshot */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-stone-100 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://picsum.photos/seed/kelly-headshot/400/400"
                alt="Kelly Soto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="text-center md:text-left">
            <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-3">
              About
            </p>
            <h2
              className="text-3xl md:text-4xl text-stone-700 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Hello, I&apos;m Kelly
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed font-light">
              <p>
                I believe the best photographs happen in between the posed ones — in the
                laugh you didn&apos;t plan, the glance across the room, the quiet moment
                nobody else noticed. My job is to be there when it happens.
              </p>
              <p>
                Based in the southwest, I specialize in portraits, family sessions, and
                events that deserve to be remembered. I work with natural light whenever
                possible, because nothing flatters people the way the sun does.
              </p>
              <p>
                When I&apos;m not behind a camera, I&apos;m usually outside chasing that
                golden hour with my own family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
