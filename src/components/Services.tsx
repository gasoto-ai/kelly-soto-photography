const SERVICES = [
  {
    icon: "◎",
    title: "Portraits",
    description:
      "Individual and couple sessions in natural light. A few hours, a few real moments. Perfect for headshots, personal branding, or just because.",
    detail: "Starting at $250 · 1–2 hours · 30+ edited images",
  },
  {
    icon: "◈",
    title: "Family Sessions",
    description:
      "I specialize in keeping things relaxed — no stiff posing, just your family being yourselves in a beautiful setting. Kids included, chaos welcome.",
    detail: "Starting at $350 · 1–2 hours · 50+ edited images",
  },
  {
    icon: "◇",
    title: "Events",
    description:
      "Birthdays, engagements, milestones. I blend into the background and document the day as it unfolds — candid, genuine, yours.",
    detail: "Starting at $500 · half or full day · full gallery",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6" style={{ backgroundColor: "#f7f4f1" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-stone-400 mb-2">
          What I Offer
        </p>
        <h2
          className="text-center text-3xl md:text-4xl text-stone-700 mb-12"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Sessions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-sm text-center border border-stone-100 shadow-sm"
            >
              <div className="text-3xl text-rose-300 mb-4">{service.icon}</div>
              <h3
                className="text-xl text-stone-700 mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {service.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed font-light mb-4">
                {service.description}
              </p>
              <p className="text-xs text-stone-400 tracking-wide">{service.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
