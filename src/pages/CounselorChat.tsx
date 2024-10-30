import React, { useState } from 'react';
import { Star, Clock, Phone, MessageCircle, Search, Filter, Award, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Counselor {
  id: string;
  name: string;
  image: string;
  specialization: string;
  experience: number;
  rating: number;
  reviews: number;
  price: number;
  online: boolean;
  languages: string[];
  expertise: string[];
}

const CounselorChat = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'call'>('chat');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

  const counselors: Counselor[] = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
      specialization: 'Career Counselor',
      experience: 8,
      rating: 4.8,
      reviews: 256,
      price: 499,
      online: true,
      languages: ['English', 'Spanish'],
      expertise: ['Career Planning', 'Academic Guidance', 'College Admissions']
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80',
      specialization: 'Educational Psychologist',
      experience: 12,
      rating: 4.9,
      reviews: 389,
      price: 599,
      online: true,
      languages: ['English', 'Mandarin'],
      expertise: ['Learning Disabilities', 'Behavioral Assessment', 'IQ Testing']
    },
    {
      id: '3',
      name: 'Dr. Emily Parker',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80',
      specialization: 'Career Counselor',
      experience: 6,
      rating: 4.7,
      reviews: 178,
      price: 399,
      online: false,
      languages: ['English', 'French'],
      expertise: ['Career Transition', 'Skill Assessment', 'Interview Preparation']
    }
  ];

  const specializations = [
    { id: 'all', label: 'All Experts' },
    { id: 'career', label: 'Career Counselors' },
    { id: 'education', label: 'Educational Psychologists' },
    { id: 'college', label: 'College Advisors' }
  ];

  const filterCounselors = () => {
    return counselors.filter(counselor => {
      const matchesSearch = counselor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        counselor.specialization.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSpecialization = selectedSpecialization === 'all' || 
        counselor.specialization.toLowerCase().includes(selectedSpecialization);
      return matchesSearch && matchesSpecialization;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-2xl font-bold mb-4">Talk to Expert Counselors</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            {specializations.map(spec => (
              <button
                key={spec.id}
                onClick={() => setSelectedSpecialization(spec.id)}
                className={`px-4 py-2 rounded-lg ${
                  selectedSpecialization === spec.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {spec.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or specialization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Counselor List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterCounselors().map(counselor => (
            <div key={counselor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={counselor.image}
                  alt={counselor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    counselor.online ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
                  }`}>
                    {counselor.online ? 'Online' : 'Offline'}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{counselor.name}</h3>
                    <p className="text-sm text-gray-600">{counselor.specialization}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{counselor.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Briefcase className="h-4 w-4 mr-1" />
                  <span>{counselor.experience} years exp.</span>
                  <span className="mx-2">•</span>
                  <span>{counselor.reviews} reviews</span>
                </div>

                <div className="mb-3">
                  <h4 className="text-sm font-medium mb-1">Expertise</h4>
                  <div className="flex flex-wrap gap-1">
                    {counselor.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-orange-100 text-orange-600 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-gray-600">Price</span>
                    <p className="font-semibold">₹{counselor.price}/session</p>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={`/chat/${counselor.id}`}
                      className="p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </Link>
                    <Link
                      to={`/call/${counselor.id}`}
                      className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
                    >
                      <Phone className="h-5 w-5" />
                    </Link>
                  </div>
                </div>

                <button className="w-full btn-primary">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounselorChat;