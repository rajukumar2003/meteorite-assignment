import { RecommendationCategory } from "@/types/recommendation";

interface CategoryFilterProps {
  selectedCategory: RecommendationCategory | 'All';
  onCategoryChange: (category: RecommendationCategory | 'All') => void;
}

const categories: (RecommendationCategory | 'All')[] = ['All', 'Natural Wonder', 'City', 'Activity', 'Food', 'Culture'];

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedCategory === category 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter; 