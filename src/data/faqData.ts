import { FAQCategory } from '@/types/faq';

export const faqs = [
  {
    id: '1',
    question: 'What is the best time to visit Iceland?',
    answer: 'Summer (June-August) offers midnight sun and mild weather, while winter (November-February) is ideal for Northern Lights viewing.',
    category: FAQCategory.TRAVEL_PLANNING,
  },
  {
    id: '2',
    question: 'How do I get around Iceland?',
    answer: 'Renting a car is the most popular option. Iceland also has public buses and organized tours. The Ring Road circles the entire country.',
    category: FAQCategory.TRANSPORTATION,
  },
  {
    id: '3',
    question: 'Where should I stay in Iceland?',
    answer: 'Options range from hotels in Reykjavik to guesthouses, hostels, and camping sites. Book in advance during peak season.',
    category: FAQCategory.ACCOMMODATION,
  },
]; 