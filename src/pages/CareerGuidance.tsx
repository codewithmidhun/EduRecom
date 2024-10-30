import React from 'react';
import { Briefcase, BookOpen, Users, Calendar } from 'lucide-react';

const CareerGuidance = () => {
  const careerPaths = [
    {
      title: "Technology & Engineering",
      description: "Explore careers in software development, AI, robotics, and more",
      icon: <Briefcase className="h-6 w-6 text-orange-500" />,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Arts & Design",
      description: "Discover opportunities in graphic design, animation, and fine arts",
      icon: <BookOpen className="h-6 w-6 text-orange-500" />,
      image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Business & Management",
      description: "Learn about entrepreneurship, finance, and leadership roles",
      icon: <Users className="h-6 w-6 text-orange-500" />,
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const upcomingEvents = [
    {
      title: "Career Counseling Session",
      date: "March 15, 2024",
      time: "2:00 PM",
      type: "Online"
    },
    {
      title: "Industry Expert Talk",
      date: "March 20, 2024",
      time: "3:30 PM",
      type: "In-Person"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Career Guidance</h1>
          <p className="text-gray-600">
            Explore career paths and get expert guidance for your future
          </p>
        </div>

        {/* Career Paths Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {careerPaths.map((path, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={path.image} alt={path.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {path.icon}
                  <h3 className="text-xl font-semibold ml-2">{path.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{path.description}</p>
                <button className="w-full btn-primary">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <Calendar className="h-6 w-6 text-orange-500 mr-2" />
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">{event.title}</h3>
                <div className="text-sm text-gray-600">
                  <p>Date: {event.date}</p>
                  <p>Time: {event.time}</p>
                  <p>Type: {event.type}</p>
                </div>
                <button className="mt-4 w-full btn-primary">Register Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;