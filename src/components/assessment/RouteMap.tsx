import React from 'react';
import { ChevronRight } from 'lucide-react';

const RouteMap = () => {
  const steps = [
    {
      title: "Initial Assessment",
      status: "completed",
      score: "85%"
    },
    {
      title: "Career Path Analysis",
      status: "completed",
      score: "92%"
    },
    {
      title: "Aptitude Test",
      status: "current",
      score: null
    },
    {
      title: "Skill Development",
      status: "pending",
      score: null
    }
  ];

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step.status === 'completed'
                    ? 'bg-green-500 text-white'
                    : step.status === 'current'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step.status === 'completed' ? '✓' : index + 1}
              </div>
              <div className="text-sm font-medium mt-2">{step.title}</div>
              {step.score && (
                <div className="text-sm text-gray-500">{step.score}</div>
              )}
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-gray-200 relative">
                <div
                  className="absolute inset-0 bg-green-500 transition-all"
                  style={{
                    width:
                      step.status === 'completed'
                        ? '100%'
                        : step.status === 'current'
                        ? '50%'
                        : '0%'
                  }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RouteMap;