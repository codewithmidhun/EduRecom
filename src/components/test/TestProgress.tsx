import React from 'react';
import { Clock } from 'lucide-react';

interface TestProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  timeRemaining: number;
  category: string;
}

const TestProgress: React.FC<TestProgressProps> = ({
  currentQuestion,
  totalQuestions,
  timeRemaining,
  category,
}) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">{category}</h3>
          <p className="text-gray-600">
            Question {currentQuestion} of {totalQuestions}
          </p>
        </div>
        <div className="flex items-center text-orange-500">
          <Clock className="h-5 w-5 mr-2" />
          <span className="font-mono text-lg">{formatTime(timeRemaining)}</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-orange-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default TestProgress;