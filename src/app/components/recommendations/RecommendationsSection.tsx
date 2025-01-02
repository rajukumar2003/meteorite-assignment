'use client';

import { useState } from 'react';
import { Recommendation, RecommendationCategory } from '@/types/recommendation';
import { recommendations } from '@/data/recommendations';
import RecommendationCard from './RecommendationCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CategoryFilter from './CategoryFilter';


const RecommendationsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<RecommendationCategory | 'All'>('All');

  const filteredRecommendations = selectedCategory === 'All'
    ? recommendations
    : recommendations.filter(rec => rec.category === selectedCategory);

  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.getElementById('recommendations-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
      <div className="w-full md:w-1/4 space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Recommendations</h2>
          <p className="text-gray-500 mt-3 text-sm leading-relaxed">
            Get a curated list of all the best things to do with exact location, 
            detailed info and inspiring content
          </p>
        </div>

        <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory} 
            />
      </div>

      <div className="w-full md:w-3/4 relative">
        <div 
          id="recommendations-container"
          className="flex overflow-x-auto gap-6 pt-6 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {filteredRecommendations.map((recommendation) => (
            <div key={recommendation.id} className="snap-start">
              <RecommendationCard recommendation={recommendation} />
            </div>
          ))}
        </div>

        <button 
          onClick={() => scrollContainer('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 " />
        </button>
        <button 
          onClick={() => scrollContainer('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default RecommendationsSection;