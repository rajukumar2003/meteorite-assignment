export enum FAQCategory {
  TRAVEL_PLANNING = 'TRAVEL_PLANNING',
  TRANSPORTATION = 'TRANSPORTATION',
  ACCOMMODATION = 'ACCOMMODATION',
  ACTIVITIES = 'ACTIVITIES',
  WEATHER_CLIMATE = 'WEATHER_CLIMATE',
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

export interface FAQQueryResponse {
  faqs: FAQ[];
} 