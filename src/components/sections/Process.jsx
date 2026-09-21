import React from "react";
import { Section, Icon, ScrollReveal } from "../ui";
import { processData } from "../../data";

const Process = () => {
  return (
    <Section id="process" padding="large">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            {processData.heading}
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            {processData.subheading}
          </p>
        </div>
      </ScrollReveal>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-neutral-200" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {processData.steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150}>
              <div className="relative">
                {/* Step Number */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={step.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (hidden on last item and mobile) */}
                {index < processData.steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-4 w-8 h-8 items-center justify-center bg-white">
                    <Icon name="chevronRight" size={20} className="text-neutral-300" />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Process;
