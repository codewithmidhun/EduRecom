import React, { useState } from 'react';
import SearchFilters from '../components/SearchFilters';
import InstituteCard from '../components/InstituteCard';
import ComparisonTable from '../components/ComparisonTable';
import { AlertCircle } from 'lucide-react';

const MOCK_INSTITUTES = [
  {
    name: "Cambridge International School",
    type: "School",
    rating: 4.8,
    reviews: 128,
    location: "Downtown Area",
    distance: "2.5 km",
    fees: "$500-1000/month",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    classSize: "20-25 students",
    facilities: ["Science Labs", "Sports Complex", "Library"],
    programs: ["International Baccalaureate", "Cambridge IGCSE", "Primary Years"],
    extracurricular: ["Sports Teams", "Debate Club", "Music & Arts"]
  },
  {
    name: "Creative Arts Academy",
    type: "Hobby Class",
    rating: 4.6,
    reviews: 89,
    location: "Westside",
    distance: "3.8 km",
    fees: "$200-400/month",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=800&q=80",
    classSize: "10-15 students",
    facilities: ["Art Studios", "Music Rooms", "Exhibition Space"],
    programs: ["Fine Arts", "Digital Design", "Music Production"],
    extracurricular: ["Art Exhibitions", "Music Recitals", "Creative Workshops"]
  },
  {
    name: "Excellence Math Center",
    type: "Tuition Center",
    rating: 4.9,
    reviews: 156,
    location: "Central District",
    distance: "1.2 km",
    fees: "$300-600/month",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    classSize: "8-12 students",
    facilities: ["Smart Classrooms", "Study Areas", "Digital Library"],
    programs: ["Advanced Mathematics", "Competitive Exam Prep", "Remedial Classes"],
    extracurricular: ["Math Olympiad", "Coding Club", "Problem Solving Workshop"]
  }
];

const SearchPage = () => {
  const [comparedInstitutes, setComparedInstitutes] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const toggleCompare = (instituteName: string) => {
    setComparedInstitutes(prev => {
      if (prev.includes(instituteName)) {
        return prev.filter(name => name !== instituteName);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, instituteName];
    });
  };

  const getComparedInstitutes = () => {
    return MOCK_INSTITUTES.filter(institute => 
      comparedInstitutes.includes(institute.name)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="md:w-1/4">
            <SearchFilters />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold mb-2">Search Results</h1>
                  <p className="text-gray-600">
                    Showing {MOCK_INSTITUTES.length} institutes near you
                  </p>
                </div>
                {comparedInstitutes.length > 0 && (
                  <button
                    onClick={() => setShowComparison(true)}
                    className="btn-primary"
                  >
                    Compare ({comparedInstitutes.length})
                  </button>
                )}
              </div>
              
              {comparedInstitutes.length === 3 && (
                <div className="mt-4 flex items-center text-orange-600 bg-orange-50 p-3 rounded-lg">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Maximum 3 institutes can be compared at once
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {MOCK_INSTITUTES.map((institute, index) => (
                <InstituteCard
                  key={index}
                  {...institute}
                  isCompared={comparedInstitutes.includes(institute.name)}
                  onCompareToggle={() => toggleCompare(institute.name)}
                  onViewDetails={() => {}}
                  disableCompare={comparedInstitutes.length >= 3}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {showComparison && (
        <ComparisonTable
          institutes={getComparedInstitutes()}
          onClose={() => setShowComparison(false)}
        />
      )}
    </div>
  );
};

export default SearchPage;