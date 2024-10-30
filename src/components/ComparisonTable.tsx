import React from 'react';
import { Download, MapPin, Users, Book, Trophy, Star } from 'lucide-react';

interface Institute {
  name: string;
  type: string;
  rating: number;
  reviews: number;
  location: string;
  distance: string;
  fees: string;
  image: string;
  classSize: string;
  facilities: string[];
  programs: string[];
  extracurricular: string[];
}

interface ComparisonTableProps {
  institutes: Institute[];
  onClose: () => void;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ institutes, onClose }) => {
  const downloadComparison = () => {
    // Implementation for downloading comparison report
    console.log('Downloading comparison...');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
          <h2 className="text-xl font-semibold">Compare Institutes</h2>
          <div className="flex gap-2">
            <button
              onClick={downloadComparison}
              className="flex items-center text-sm text-orange-500 hover:text-orange-600"
            >
              <Download className="h-4 w-4 mr-1" />
              Download Report
            </button>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="overflow-x-auto flex-1">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 text-left w-1/4">Criteria</th>
                {institutes.map((institute, index) => (
                  <th key={index} className="p-4 text-left w-1/4">
                    <div className="space-y-2">
                      <img
                        src={institute.image}
                        alt={institute.name}
                        className="w-full h-32 object-cover rounded"
                      />
                      <h3 className="font-semibold">{institute.name}</h3>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4 font-medium flex items-center">
                  <Star className="h-4 w-4 mr-2" />
                  Rating & Reviews
                </td>
                {institutes.map((institute, index) => (
                  <td key={index} className="p-4">
                    <div className="flex items-center">
                      <span className="text-orange-500 font-semibold mr-2">
                        {institute.rating}
                      </span>
                      ({institute.reviews} reviews)
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-medium flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Location
                </td>
                {institutes.map((institute, index) => (
                  <td key={index} className="p-4">
                    {institute.location}
                    <span className="text-gray-500 text-sm block">
                      {institute.distance} away
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-medium flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Class Size
                </td>
                {institutes.map((institute, index) => (
                  <td key={index} className="p-4">{institute.classSize}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-medium flex items-center">
                  <Book className="h-4 w-4 mr-2" />
                  Programs
                </td>
                {institutes.map((institute, index) => (
                  <td key={index} className="p-4">
                    <ul className="list-disc list-inside space-y-1">
                      {institute.programs.map((program, idx) => (
                        <li key={idx} className="text-sm">{program}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-medium flex items-center">
                  <Trophy className="h-4 w-4 mr-2" />
                  Extracurricular
                </td>
                {institutes.map((institute, index) => (
                  <td key={index} className="p-4">
                    <ul className="list-disc list-inside space-y-1">
                      {institute.extracurricular.map((activity, idx) => (
                        <li key={idx} className="text-sm">{activity}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t bg-gray-50">
          <button
            onClick={() => {}}
            className="btn-primary"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;