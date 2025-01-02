'use client';

import { useFAQs } from '@/hooks/useFAQs';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const { faqs, loading, error } = useFAQs();

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 bg-gray-100 animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Error loading FAQs. Please try again later.
      </div>
    );
  }

  return (
    <div className="max-w-full md:max-w-3xl mx-auto">
      <div className="space-y-2">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection; 