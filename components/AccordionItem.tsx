"use client"; // Mark this as a Client Component

import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t last:border-b border-gray-700 bg-[#14121F] text-gray-400 p-4"> 
      <button
        type="button"
        className="w-full flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Question */}
        <span className="text-lg font-medium text-greay-400">{question}</span>

        {/* Chevron Icon (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Answer (Conditionally Rendered) */}
      {isOpen && <p className="mt-2 text-gray-400 text-base">{answer}</p>}
    </div>
  );
};

export default AccordionItem;