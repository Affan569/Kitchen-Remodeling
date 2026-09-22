import { Container } from "../ui";

export default function ServiceCards({ cards }) {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Decorative soft background glow elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none rounded-full blur-3xl" />

      <Container>
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-brand" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand">
              What We Do
            </span>
          </div>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-ink md:text-5xl leading-tight">
            Everything for your perfect kitchen
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">
            From the first sketch to the final handover, one expert team handles every detail.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge: Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand/10 text-brand font-heading font-bold text-lg group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    {card.number || `0${index + 1}`}
                  </span>
                </div>

                {/* Card Image with curved container */}
                <div className="relative h-52 rounded-2xl overflow-hidden mb-6 bg-slate-50">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Title & Description */}
                <h3 className="font-heading text-ink text-xl font-bold mb-2 group-hover:text-brand transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Action Button / Link Style */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={card.href || "#"}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand group-hover:translate-x-1 transition-transform duration-300"
                >
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Subtext Branding */}
        <div className="mt-20 text-center flex items-center justify-center gap-4 text-xs font-medium tracking-widest text-slate-400 uppercase">
          <span className="h-px w-12 bg-slate-200" />
          <span>Better Spaces / Brighter Living</span>
          <span className="h-px w-12 bg-slate-200" />
        </div>
      </Container>
    </section>
  );
}