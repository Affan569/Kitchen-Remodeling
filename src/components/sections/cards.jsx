import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container, Highlight, cardIcons } from "../ui";
import { cardsSection, cards } from "../../data";

const cardClass =
  "group relative flex flex-col overflow-hidden rounded-[4px] border border-brand/10 bg-white p-8 " +
  "shadow-[0_1px_2px_rgba(11,36,71,0.06)] transition-shadow duration-300 " +
  "hover:shadow-[0_30px_60px_-10px_rgba(11,36,71,0.25)] " +
  "[transform-style:preserve-3d] will-change-transform";

const iconBoxClass =
  "relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-[4px] " +
  "bg-brand-tint text-brand transition-colors duration-500 " +
  "group-hover:bg-brand group-hover:text-white";

function TiltCard({ children }) {
  const ref = useRef(null);

  function onMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateX = (-y * 10).toFixed(2);
    const rotateY = (x * 10).toFixed(2);
    el.style.transform =
      "perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateY(-6px)";
  }

  function onMouseLeave() {
    const el = ref.current;
    if (el) el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  }

  return (
    <article
      ref={ref}
      className={cardClass}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)" }}
    >
      {children}
    </article>
  );
}

export default function Cards() {
  return (
    <section
      id="services"
      className="relative z-10 bg-white py-20 shadow-[0_-24px_60px_rgba(0,0,0,0.25)] md:py-28"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-brand">
            {cardsSection.eyebrow}
          </p>
          <h1 className="text-ink pb-2">
            {cardsSection.titleStart} {cardsSection.titleHighlight}
          </h1>
          <div className="mx-auto mt-6 rounded-full bg-brand" style={{ height: "4px", width: "96px" }} />
          <p className="mt-5 text-muted">{cardsSection.text}</p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(function (card, i) {
            const Icon = cardIcons[card.icon];
            const number = "0" + (i + 1);
            return (
              <TiltCard key={card.title}>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-brand-tint opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="absolute right-6 top-6 font-heading text-4xl text-brand/10">
                  {number}
                </span>

                <div className={iconBoxClass}>
                  {Icon ? <Icon /> : null}
                </div>

                <h1 className="relative z-10 font-heading text-ink">{card.title}</h1>
                <p className="relative z-10 mt-3 flex-1 text-sm text-muted">{card.text}</p>

                <a
                  href={card.href || "#contact"}
                  className="relative z-10 mt-6 inline-flex items-center gap-2 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-brand"
                >
                  Learn more
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </TiltCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}