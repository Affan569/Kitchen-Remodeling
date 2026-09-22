import { useEffect, useRef, useState } from "react";
import { Container, Highlight } from "../ui";
import { processSection, processSteps } from "../../data";

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
      { rootMargin: "-45% 0px -45% 0px" }
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
      className="relative z-10 flex h-svh w-full flex-col justify-center overflow-hidden bg-brand-dark py-10 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Container className="relative grid h-full grid-rows-[auto_1fr] gap-8">
        <div className="mx-auto max-w-2xl pt-6 text-center">
          <p className="mb-4 text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-brand-light">
            {processSection.eyebrow}
          </p>
          <h2 className="text-white">
            {processSection.titleStart}{" "}
            <Highlight onDark>{processSection.titleHighlight}</Highlight>
          </h2>
          <p className="mt-4 text-white/70">{processSection.text}</p>
        </div>

        <div className="flex min-h-0 flex-col justify-center">
          {/* Progress line */}
          <div className="relative mb-10 hidden md:block">
            <div className="h-px w-full bg-white/15" />
            <div
              className="absolute left-0 top-0 h-px bg-brand-light transition-all duration-500 ease-out"
              style={{
                width:
                  ((activeIndex + 1) / processSteps.length) * 100 + "%",
              }}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-5 md:gap-6">
            {processSteps.map(function (step, i) {
              const isActive = i === activeIndex;
              const numberClass =
                "font-heading text-3xl transition-colors duration-500 " +
                (isActive ? "text-brand-light" : "text-white/25");
              const dotClass =
                "mb-5 hidden h-3 w-3 rounded-full transition-all duration-500 md:block " +
                (isActive
                  ? "scale-125 bg-brand-light"
                  : "bg-white/25");

              return (
                <div
                  key={step.number}
                  ref={function (el) {
                    refs.current[i] = el;
                  }}
                  data-index={i}
                  className="flex flex-col md:items-start"
                >
                  <span className={dotClass} />
                  <span className={numberClass}>{step.number}</span>
                  <h3 className="mt-2 text-white">{step.title}</h3>
                  <p className="mt-3 max-w-[22ch] text-sm text-white/65">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}