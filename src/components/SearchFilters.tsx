import React from 'react';
import { Filter, MapPin, School, Clock, DollarSign } from 'lucide-react';

const SearchFilters = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-orange-500" />
        <h3 className="text-lg font-semibold">Filters</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter location"
              className="pl-10 w-full input-primary"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Institute Type</label>
          <select className="w-full input-primary">
            <option value="">All Types</option>
            <option value="school">Schools</option>
            <option value="hobby">Hobby Classes</option>
            <option value="tuition">Tuition Centers</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Distance</label>
          <input
            type="range"
            min="0"
            max="50"
            className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>0 km</span>
            <span>50 km</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <div className="flex gap-2">
            <input type="number" placeholder="Min" className="w-1/2 input-primary" />
            <input type="number" placeholder="Max" className="w-1/2 input-primary" />
          </div>
        </div>

        <button className="w-full btn-primary">Apply Filters</button>
      </div>
    </div>
  );
};

export default SearchFilters;