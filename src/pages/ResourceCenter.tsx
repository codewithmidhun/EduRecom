import React from 'react';
import { Book, Video, FileText, Download } from 'lucide-react';

const ResourceCenter = () => {
  const resources = [
    {
      title: "Parent's Guide to Educational Planning",
      type: "E-Book",
      icon: <Book className="h-6 w-6" />,
      description: "Comprehensive guide for parents on educational planning and decision-making",
      downloadLink: "#"
    },
    {
      title: "Understanding Learning Styles",
      type: "Video",
      icon: <Video className="h-6 w-6" />,
      description: "Expert insights on different learning styles and how to identify them",
      downloadLink: "#"
    },
    {
      title: "Career Path Analysis Template",
      type: "Document",
      icon: <FileText className="h-6 w-6" />,
      description: "Template to help analyze and plan potential career paths",
      downloadLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Resource Center</h1>
          <p className="text-gray-600">
            Access educational resources, guides, and tools
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500">
                  {resource.icon}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">{resource.title}</h3>
                  <span className="text-sm text-gray-500">{resource.type}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a
                href={resource.downloadLink}
                className="flex items-center text-orange-500 hover:text-orange-600"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resource
              </a>
            </div>
          ))}
        </div>

        {/* Latest Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${index === 0 ? '1516321318423-f06f85e504b3' : '1503676260728-1c00da094a0b'}?auto=format&fit=crop&w=800&q=80`}
                  alt="Article"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold mb-2">
                    {index === 0 ? 'How to Choose the Right School for Your Child' : 'The Impact of Extracurricular Activities on Academic Success'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {index === 0 ? 'Learn about the key factors to consider when selecting a school...' : 'Discover how after-school activities can boost academic performance...'}
                  </p>
                  <button className="text-orange-500 hover:text-orange-600 font-semibold">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCenter;