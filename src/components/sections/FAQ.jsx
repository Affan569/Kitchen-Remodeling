import React, { useState } from "react";
import { Section, Icon, ScrollReveal } from "../ui";
import { faqData } from "../../data";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" background="alt" padding="large">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            {faqData.heading}
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            {faqData.subheading}
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.faqs.map((faq, index) => (
          <ScrollReveal key={faq.id} delay={index * 50}>
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-heading font-semibold text-primary-dark pr-4">
                  {faq.question}
                </span>
                <Icon
                  name="chevronDown"
                  size={20}
                  className={`text-primary transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4 text-text-light leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
