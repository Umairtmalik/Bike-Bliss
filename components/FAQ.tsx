"use client"; // Mark this as a Client Component

import AccordionItem from "./AccordionItem";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqData = [
    { question: 'Question text goes here', answer: 'Answer 1' },
    { question: 'Question text goes here', answer: 'Answer 2' },
    { question: 'Question text goes here', answer: 'Answer 3' },
    { question: 'Question text goes here', answer: 'Answer 4' },
    { question: 'Question text goes here', answer: 'Answer 5' },
  ];

  return (
    <section className="py-16 bg-[#14121F] text-white" id="faqs">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-8">Frequently asked questions</h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-center mb-12 text-lg">
          Find answers to common questions about our bikes, services, and more.
        </p>

        {/* Accordion Items */}
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <AccordionItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>

        {/* Still Have Questions Section */}
        <h2 className="text-4xl font-bold text-center mb-8 mt-20">Still have questions?</h2>

        <p className="text-gray-400 text-center mb-12 text-lg">
          Support details to capture customers that might be on the fence.
        </p>

        {/* Contact Button */}
        <div className="flex justify-center">
          <Button
            className="bg-[#14121F] text-white border border-purple-600 hover:bg-[#2d2646]"
            size="lg"
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;