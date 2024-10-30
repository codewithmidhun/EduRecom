import React from 'react';
import { IconProps } from 'lucide-react';

interface AssessmentCardProps {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<IconProps>;
  duration: string;
  questions: number;
  isNew?: boolean;
  onStart: () => void;
}

const AssessmentCard: React.FC<AssessmentCardProps> = ({
  title,
  description,
  icon: Icon,
  duration,
  questions,
  isNew,
  onStart
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-orange-100 p-3 rounded-lg">
            <Icon className="h-6 w-6 text-orange-500" />
          </div>
          {isNew && (
            <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              New
            </span>
          )}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span>Duration: {duration}</span>
        <span>{questions} questions</span>
      </div>
      <button onClick={onStart} className="w-full btn-primary">
        Start Assessment
      </button>
    </div>
  );
};

export default AssessmentCard;