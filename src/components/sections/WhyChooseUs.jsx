import React from "react";
import { Section, Icon, ScrollReveal } from "../ui";
import { whyChooseUsData } from "../../data";

const WhyChooseUs = () => {
  return (
    <Section id="why-choose-us" background="alt" padding="large">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            {whyChooseUsData.heading}
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            {whyChooseUsData.subheading}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyChooseUsData.benefits.map((benefit, index) => (
          <ScrollReveal key={benefit.title} delay={index * 100}>
            <div
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={benefit.icon} size={28} className="text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
