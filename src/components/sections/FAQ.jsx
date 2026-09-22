import { useState } from "react";
import { Container, Highlight } from "../ui";
import { faqSection, faqs } from "../../data";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleFAQ(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section id="faq" className="relative z-10 bg-white py-20">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-brand">
            {faqSection.eyebrow}
          </p>
          <h1 className="text-ink pb-2">
            {faqSection.titleStart} {faqSection.titleHighlight}
          </h1>
          <div className="mx-auto mt-6 rounded-full bg-brand" style={{ height: "4px", width: "96px" }} />
          <p className="mt-5 text-muted">{faqSection.text}</p>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqs.map(function (faq, index) {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between py-6 text-left transition-colors duration-200 hover:bg-gray-50"
                >
                  <span className="font-heading text-ink pr-4 text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-brand transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-muted leading-relaxed">
                    {faq.answer}
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