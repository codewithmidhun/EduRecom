import React, { useState } from 'react';
import { Question } from '../../types/test.types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string | number) => void;
  timeRemaining: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  timeRemaining,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | number>('');

  const handleSubmit = () => {
    if (selectedAnswer) {
      onAnswer(selectedAnswer);
      setSelectedAnswer('');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h4 className="text-xl font-semibold mb-6">{question.text}</h4>

      {question.type === 'multiple-choice' && question.options && (
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`block p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                selectedAnswer === option
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-orange-200'
              }`}
            >
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                className="hidden"
              />
              <span className="text-gray-800">{option}</span>
            </label>
          ))}
        </div>
      )}

      {question.type === 'text' && (
        <input
          type="text"
          value={selectedAnswer.toString()}
          onChange={(e) => setSelectedAnswer(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Type your answer..."
        />
      )}

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={!selectedAnswer}
          className={`btn-primary ${!selectedAnswer ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;