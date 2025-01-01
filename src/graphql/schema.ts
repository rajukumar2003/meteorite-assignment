export const typeDefs = `#graphql
  enum FAQCategory {
    TRAVEL_PLANNING
    TRANSPORTATION
    ACCOMMODATION
    ACTIVITIES
    WEATHER_CLIMATE
  }

  type FAQ {
    id: ID!
    question: String!
    answer: String!
    category: FAQCategory!
  }

  type Query {
    faqs: [FAQ!]!
    faqsByCategory(category: FAQCategory): [FAQ!]!
    faqsBySearch(searchTerm: String!): [FAQ!]!
  }
`; 