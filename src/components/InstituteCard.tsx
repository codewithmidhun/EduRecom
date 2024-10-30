import React from 'react';
import { Star, MapPin, DollarSign, Plus, Check } from 'lucide-react';

interface InstituteCardProps {
  name: string;
  type: string;
  rating: number;
  reviews: number;
  location: string;
  distance: string;
  fees: string;
  image: string;
  isCompared: boolean;
  onCompareToggle: () => void;
  onViewDetails: () => void;
  disableCompare?: boolean;
}

const InstituteCard: React.FC<InstituteCardProps> = ({
  name,
  type,
  rating,
  reviews,
  location,
  distance,
  fees,
  image,
  isCompared,
  onCompareToggle,
  onViewDetails,
  disableCompare = false,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative">
      <button
        onClick={onCompareToggle}
        disabled={disableCompare && !isCompared}
        className={`absolute top-4 right-4 p-2 rounded-full z-10 transition-colors ${
          isCompared 
            ? 'bg-orange-500 text-white hover:bg-orange-600' 
            : 'bg-white text-gray-600 hover:bg-gray-100'
        } ${disableCompare && !isCompared ? 'opacity-50 cursor-not-allowed' : ''}`}
        title={isCompared ? 'Remove from comparison' : 'Add to comparison'}
      >
        {isCompared ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
      </button>

      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="flex items-center text-sm bg-orange-100 text-orange-600 px-2 py-1 rounded">
            <Star className="h-4 w-4 mr-1 fill-current" />
            {rating} ({reviews})
          </span>
        </div>
        <span className="inline-block bg-orange-100 text-orange-600 text-sm px-2 py-1 rounded mb-2">
          {type}
        </span>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{location} ({distance})</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-2" />
            <span>{fees}</span>
          </div>
        </div>
        <button 
          onClick={onViewDetails}
          className="w-full btn-primary mt-4"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default InstituteCard;