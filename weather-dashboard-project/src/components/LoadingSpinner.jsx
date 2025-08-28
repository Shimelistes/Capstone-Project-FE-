import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
        <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white text-lg">Fetching weather data...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;

