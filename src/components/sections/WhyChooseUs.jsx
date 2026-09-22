import { useEffect, useRef, useState } from "react";
import { whyChooseUsRows } from "../../data";

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(
    function () {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              setInView(true);
              observer.disconnect();
            }
          });
        },
        { threshold: threshold }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return function () {
        observer.disconnect();
      };
    },
    [threshold]
  );

  return [ref, inView];
}

function useParallaxSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(function () {
    const handleScroll = function () {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section has been scrolled through
      const sectionHeight = rect.height;
      const scrolled = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight + windowHeight)));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [sectionRef, scrollProgress];
}

function WhyChooseUsRow({ row, index, scrollProgress }) {
  const [ref, inView] = useInView(0.2);
  // Row 0: text left / image right. Row 1: image left / text right. Alternates.
  const imageOnLeft = index % 2 === 1;

  // Calculate row-specific animation based on scroll progress
  const rowStart = index * 0.25; // Each row starts at 25% intervals
  const rowEnd = (index + 1) * 0.25;
  const rowProgress = Math.max(0, Math.min(1, (scrollProgress - rowStart) / (rowEnd - rowStart)));
  
  const textHiddenX = imageOnLeft ? "translateX(40px)" : "translateX(-40px)";
  const imageHiddenX = imageOnLeft ? "translateX(-40px)" : "translateX(40px)";

  const imagePanel = (
    <div
      className="relative w-full overflow-hidden bg-gray-100"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? `translateX(0)` : imageHiddenX,
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      <img
        src={row.image}
        alt={row.imageAlt}
        className="w-full object-cover"
        style={{
          maxHeight: "440px",
          minHeight: "300px",
          height: "auto",
          imageRendering: "auto",
          willChange: "transform",
          transform: `translateY(${(rowProgress - 0.5) * 30}px) scale(${1 + Math.abs(rowProgress - 0.5) * 0.1})`,
          transition: "transform 0.1s ease-out",
        }}
        onError={function (e) {
          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%236b7280'%3EImage not found%3C/text%3E%3C/svg%3E";
        }}
      />
    </div>
  );

  const textPanel = (
    <div
      className="flex flex-col justify-center gap-4 bg-brand px-8 py-14 md:px-16"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : textHiddenX,
        transition: "opacity 0.7s ease-out 0.12s, transform 0.7s ease-out 0.12s",
      }}
    >
      <h3 className="font-heading text-white">{row.title}</h3>
      <p className="leading-relaxed text-white/85">{row.text}</p>

      {row.buttonText ? (
        <a
          href={row.href || "#"}
          className="group mt-2 inline-flex w-fit items-center gap-3 border border-white/40 py-3 pl-4 pr-6 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-brand-dark"
        >
          <span className="h-5 w-1.5 bg-brand-light transition-colors duration-300" />
          {row.buttonText}
        </a>
      ) : null}
    </div>
  );

  return (
    <div ref={ref} className="grid md:grid-cols-2">
      {imageOnLeft ? imagePanel : textPanel}
      {imageOnLeft ? textPanel : imagePanel}
    </div>
  );
}

export default function WhyChooseUs() {
  const [headingRef, headingInView] = useInView(0.4);
  const [sectionRef, scrollProgress] = useParallaxSection();

  return (
    <section ref={sectionRef} id="why-choose-us" className="relative z-10 overflow-hidden bg-white">
      {/* Centered heading bar */}
      <div ref={headingRef} className="bg-white py-16 text-center md:py-20">
        <h1 className="font-heading text-ink">
          Why Customers Choose Us
        </h1>
        <div
          className="mx-auto mt-6 rounded-full bg-brand"
          style={{
            height: "4px",
            width: headingInView ? "96px" : "0px",
            transition: "width 0.8s ease-out",
          }}
        />
      </div>

      {/* Alternating image / text rows */}
      {whyChooseUsRows.map(function (row, index) {
        return <WhyChooseUsRow key={row.title} row={row} index={index} scrollProgress={scrollProgress} />;
      })}
    </section>
  );
}