import React from "react";
import { Section, Icon, ScrollReveal } from "../ui";
import { servicesData } from "../../data";

const Services = () => {
  return (
    <Section id="services" background="alt" padding="large">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            {servicesData.heading}
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            {servicesData.subheading}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.services.map((service, index) => (
          <ScrollReveal key={service.title} delay={index * 100}>
            <div
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name={service.icon} size={28} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-dark mb-3">
                {service.title}
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default Services;
