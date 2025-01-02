export type RecommendationCategory = 'Natural Wonder' | 'City' | 'Activity' | 'Food' | 'Culture';

export interface Location {
  lat: number;
  lng: number;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  image: string;
  category: RecommendationCategory;
  rating: number;
  location: Location;
  tags: string[];
  isTrending?: boolean;
} 