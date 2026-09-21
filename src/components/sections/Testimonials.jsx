import React, { useState, useEffect } from "react";
import { Section, Icon, ScrollReveal } from "../ui";
import { testimonialsData } from "../../data";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonialsData.testimonials.length) %
        testimonialsData.testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonialsData.testimonials[currentIndex];

  return (
    <Section id="reviews" padding="large">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            {testimonialsData.heading}
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            {testimonialsData.subheading}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-accent/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-16 h-16"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="relative">
              <p className="text-lg md:text-xl text-text-light leading-relaxed mb-8 italic">
                "{currentTestimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-heading font-semibold text-primary-dark text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-sm text-text-light">
                    {currentTestimonial.location} • {currentTestimonial.project}
                  </p>
                  <div className="flex mt-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Icon key={i} name="star" size={16} className="text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <Icon name="chevronLeft" size={24} className="text-primary-dark" />
              </button>
              <div className="flex items-center space-x-2">
                {testimonialsData.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-accent" : "bg-neutral-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                aria-label="Next testimonial"
              >
                <Icon name="chevronRight" size={24} className="text-primary-dark" />
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
};

export default Testimonials;
