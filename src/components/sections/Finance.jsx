import React from "react";
import { Section, Button, Icon, ScrollReveal } from "../ui";
import { financeData } from "../../data";

const Finance = () => {
  return (
    <Section background="primary" padding="large">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            {financeData.heading}
          </h2>
          <p className="text-lg text-neutral-200 max-w-2xl mx-auto">
            {financeData.subheading}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {financeData.features.map((feature, index) => (
              <ScrollReveal key={feature} delay={index * 100}>
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="check" size={20} className="text-accent" />
                  <span className="text-sm">{feature}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <Button
            href={financeData.cta.href}
            variant="secondary"
            size="lg"
            className="mt-8"
          >
            {financeData.cta.text}
          </Button>
        </div>
      </ScrollReveal>
    </Section>
  );
};

export default Finance;
