import React from 'react';
import { Search, BookOpen, BarChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-orange-500" />,
      title: "Find & Compare Institutes",
      description: "Search and compare schools, hobby classes, and tuition centers based on your preferences."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
      title: "Personalized Learning",
      description: "Get tailored recommendations based on your child's unique learning style and interests."
    },
    {
      icon: <BarChart className="h-8 w-8 text-orange-500" />,
      title: "Data-Driven Reports",
      description: "Access comprehensive reports and insights to make informed educational decisions."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Expert Guidance",
      description: "Connect with educational experts and career counselors for professional advice."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find the Best Learning Institutes and Personalized Recommendations for Your Child's Future
            </h1>
            <p className="text-xl mb-8">
              Discover top-rated schools, hobby classes, and get personalized learning recommendations
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/search" className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Find Schools
              </Link>
              <Link to="/assessment" className="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors">
                Get Assessment
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-3"></div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter your location"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="">All Categories</option>
                <option value="schools">Schools</option>
                <option value="hobby">Hobby Classes</option>
                <option value="tuition">Tuition Centers</option>
              </select>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Parents Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={`https://source.unsplash.com/random/100x100?face=${index}`}
                    alt="Parent"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">Parent Name</h4>
                    <p className="text-gray-600 text-sm">Parent of 2 children</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "EduMatch helped us find the perfect school for our children. The personalized recommendations were spot-on!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Educational Journey?
          </h2>
          <Link
            to="/assessment"
            className="inline-block bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;