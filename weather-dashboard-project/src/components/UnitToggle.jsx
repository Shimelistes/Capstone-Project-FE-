import React from 'react';
import { Thermometer } from 'lucide-react';

const UnitToggle = ({ units, onToggle }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-full border border-white/20 p-1">
        <div className="flex items-center">
          <button
            onClick={() => onToggle('metric')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              units === 'metric'
                ? 'bg-white text-gray-800 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            °C
          </button>
          <button
            onClick={() => onToggle('imperial')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              units === 'imperial'
                ? 'bg-white text-gray-800 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnitToggle;