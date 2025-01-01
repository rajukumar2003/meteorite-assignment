'use client';

import { useState } from 'react';
import { FAQ } from '@/types/faq';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  faq: FAQ;
}

const FAQItem = ({ faq }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-medium">{faq.question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem; 