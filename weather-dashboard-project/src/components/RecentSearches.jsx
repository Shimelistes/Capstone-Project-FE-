import React from 'react';
import { Clock } from 'lucide-react';

const RecentSearches = ({ searches, onSelect }) => {
  return (
    <div className="mt-4 max-w-2xl mx-auto">
      <div className="flex items-center text-white/70 text-sm mb-2">
        <Clock className="w-4 h-4 mr-1" />
        <span>Recent searches</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {searches.map((city, index) => (
          <button
            key={index}
            onClick={() => onSelect(city)}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 text-white text-sm transition-all duration-200 hover:scale-105"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;