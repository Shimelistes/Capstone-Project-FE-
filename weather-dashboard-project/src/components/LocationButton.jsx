import React from 'react';
import { Navigation } from 'lucide-react';

const LocationButton = ({ onLocationClick, loading }) => {
  return (
    <button
      onClick={onLocationClick}
      disabled={loading}
      className={`flex items-center justify-center px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium transition-all duration-200 
        ${loading ? 'bg-white/20 cursor-not-allowed' : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'}`
      }
      title="Use current location"
    >
      {loading ? (
        <svg
          className="w-5 h-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      ) : (
        <Navigation className="w-5 h-5 mr-2" />
      )}
      {loading ? 'Locating...' : 'Use My Location'}
    </button>
  );
};

export default LocationButton;
