import React from 'react';
import { Download, Brain, Target, TrendingUp } from 'lucide-react';
import { TestResult } from '../../types/test.types';

interface TestResultsProps {
  results: TestResult[];
  onDownloadReport: () => void;
  onScheduleConsultation: () => void;
}

const TestResults: React.FC<TestResultsProps> = ({
  results,
  onDownloadReport,
  onScheduleConsultation,
}) => {
  const calculateOverallScore = () => {
    const totalScore = results.reduce((sum, result) => sum + result.score, 0);
    return Math.round((totalScore / results.length) * 100) / 100;
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 bg-orange-500 text-white">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Your Test Results</h2>
          <button
            onClick={onDownloadReport}
            className="flex items-center bg-white text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </button>
        </div>
        <p className="mt-2">Overall Score: {calculateOverallScore()}%</p>
      </div>

      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">{result.categoryId}</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Score:</span>
                  <span className="font-semibold">{result.score}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Time Spent:</span>
                  <span>{Math.round(result.timeSpent / 60)} minutes</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Correct Answers:</span>
                  <span>
                    {result.correctAnswers} / {result.totalQuestions}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="flex items-center text-lg font-semibold mb-3">
              <Brain className="h-5 w-5 mr-2 text-orange-500" />
              Key Strengths
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {results.flatMap((result) => result.strengths).map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center text-lg font-semibold mb-3">
              <Target className="h-5 w-5 mr-2 text-orange-500" />
              Areas for Improvement
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {results.flatMap((result) => result.improvements).map((improvement, index) => (
                <li key={index}>{improvement}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center text-lg font-semibold mb-3">
              <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
              Recommended Next Steps
            </h3>
            <p className="text-gray-700 mb-4">
              Based on your results, we recommend scheduling a consultation with our career
              guidance experts to discuss your strengths and create a personalized
              development plan.
            </p>
            <button onClick={onScheduleConsultation} className="btn-primary">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResults;