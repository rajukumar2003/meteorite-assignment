import { useQuery } from '@apollo/client';
import { FAQQueryResponse } from '@/types/faq';
import { gql } from '@apollo/client';


export const useFAQs = () => {
  const { data, loading, error } = useQuery<FAQQueryResponse>(GET_FAQS);

  return {
    faqs: data?.faqs || [],
    loading,
    error,
  };
}; 

export const GET_FAQS = gql`
  query GetFAQs {
    faqs {
      id
      question
      answer
      category
    }
  }
`;