import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-6 h-6 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city (e.g., London, New York, Tokyo)"
          className="w-full pl-12 pr-6 py-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 text-lg"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
        >
          <Search className="w-5 h-5 text-white" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;