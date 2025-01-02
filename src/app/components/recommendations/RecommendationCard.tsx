import Image from 'next/image';
import { Star } from 'lucide-react';
import { Recommendation } from '@/types/recommendation';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  return (
    <div className="group relative w-[300px] flex-shrink-0 rounded-2xl overflow-hidden">
      <div className="relative aspect-[4/5]">
        <Image
          src={recommendation.image}
          alt={recommendation.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium opacity-90">
              {recommendation.category}
            </span>
          </div>
          <h3 className="text-xl font-bold">{recommendation.title}</h3>
          
          <div className="flex gap-2 mt-3">
            {recommendation.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full 
                         bg-white/10 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard; 