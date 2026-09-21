import React, { useState } from "react";
import { Section, ScrollReveal } from "../ui";
import { beforeAfterData } from "../../data";

const BeforeAfterSlider = ({ comparison }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden bg-neutral-200">
      {/* Before Image */}
      <img
        src={comparison.beforeImage}
        alt={comparison.beforeLabel}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* After Image - Clipped */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={comparison.afterImage}
          alt={comparison.afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-medium">
        {comparison.beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-medium">
        {comparison.afterLabel}
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>

      {/* Slider Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        aria-label="Compare before and after"
      />

      {/* Description */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white px-4 py-2 rounded text-sm">
        {comparison.description}
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  return (
    <Section id="before-after" padding="large">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            {beforeAfterData.heading}
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            {beforeAfterData.subheading}
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-12">
        {beforeAfterData.comparisons.map((comparison, index) => (
          <ScrollReveal key={comparison.id} delay={index * 200}>
            <BeforeAfterSlider comparison={comparison} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default BeforeAfter;
