import { useEffect, useRef, useState } from "react";
import { Container, Highlight } from "../ui";
import { processSection, processSteps } from "../../data";

const stepCardClass =
  "group relative flex flex-col items-center rounded-2xl border border-brand/10 bg-white p-6 " +
  "shadow-[0_2px_8px_rgba(30,86,184,0.08)] transition-all duration-500 " +
  "hover:shadow-[0_8px_24px_rgba(30,86,184,0.15)] hover:-translate-y-1";

const numberBadgeClass =
  "relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full " +
  "bg-brand-tint text-brand font-heading transition-all duration-500 " +
  "group-hover:bg-brand group-hover:text-white group-hover:scale-110";

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef([]);

  useEffect(function () {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    refs.current.forEach(function (el) {
      if (el) observer.observe(el);
    });
    return function () {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="process"
      className="relative z-10 bg-brand-tint py-20 md:py-28"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-brand">
            {processSection.eyebrow}
          </p>
          <h1 className="text-ink pb-2">
            {processSection.titleStart}{" "}
            <Highlight>{processSection.titleHighlight}</Highlight>
          </h1>
          <div className="mx-auto mt-6 rounded-full bg-brand" style={{ height: "4px", width: "96px" }} />
          <p className="mt-5 text-muted">{processSection.text}</p>
        </div>

        {/* Progress line - desktop */}
        <div className="relative mb-12 hidden md:block">
          <div className="h-1 w-full rounded-full bg-brand/10" />
          <div
            className="absolute left-0 top-0 h-1 rounded-full bg-brand transition-all duration-500 ease-out"
            style={{
              width:
                ((activeIndex + 1) / processSteps.length) * 100 + "%",
            }}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map(function (step, i) {
            const isActive = i === activeIndex;
            const connectorClass =
              "absolute right-0 top-7 hidden h-0.5 w-12 -translate-x-1/2 transition-all duration-500 md:block " +
              (isActive ? "bg-brand" : "bg-brand/20");

            return (
              <div
                key={step.number}
                ref={function (el) {
                  refs.current[i] = el;
                }}
                data-index={i}
                className="relative"
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className={connectorClass} />
                )}

                <div className={stepCardClass}>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-brand/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className={numberBadgeClass}>{step.number}</div>
                  <h3 className="text-center text-ink font-heading">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-center text-sm text-muted leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}