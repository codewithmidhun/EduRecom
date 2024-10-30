import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Calculator, Book, Target, Lightbulb, ChevronRight, GraduationCap, FileText, BarChart, Award, ArrowRight } from 'lucide-react';
import TestProgress from '../components/test/TestProgress';
import QuestionCard from '../components/test/QuestionCard';
import TestResults from '../components/test/TestResults';
import RouteMap from '../components/assessment/RouteMap';
import AssessmentCard from '../components/assessment/AssessmentCard';
import SkillsRadar from '../components/assessment/SkillsRadar';

type AssessmentTab = 'academic' | 'aptitude' | 'learning' | 'recommendations';

const AssessmentPage = () => {
  const [activeTab, setActiveTab] = useState<AssessmentTab>('academic');
  const [testInProgress, setTestInProgress] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const academicGrades = ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
  const subjects = [
    'Mathematics',
    'Science',
    'English',
    'History',
    'Geography',
    'Computer Science',
    'Arts',
    'Music'
  ];

  const assessmentProcess = [
    {
      icon: FileText,
      title: "Academic Profile Analysis",
      description: "Upload academic records and previous achievements for comprehensive evaluation",
      status: "completed"
    },
    {
      icon: Brain,
      title: "Differential Aptitude Test",
      description: "Multi-dimensional assessment of cognitive abilities and skills",
      status: "current"
    },
    {
      icon: BarChart,
      title: "Performance Review",
      description: "Detailed analysis of test results and academic performance",
      status: "pending"
    },
    {
      icon: Award,
      title: "Personalized Recommendations",
      description: "Tailored educational and career path suggestions",
      status: "pending"
    }
  ];

  const learningStyles = [
    {
      title: 'Visual',
      description: 'Learn best through images, diagrams, and spatial understanding',
      icon: Brain
    },
    {
      title: 'Auditory',
      description: 'Prefer learning through listening and verbal communication',
      icon: Book
    },
    {
      title: 'Kinesthetic',
      description: 'Learn through hands-on experience and physical activity',
      icon: Target
    }
  ];

  const renderAssessmentProcess = () => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-6">Assessment Process</h3>
      <div className="grid md:grid-cols-4 gap-4">
        {assessmentProcess.map((step, index) => (
          <div key={index} className="relative">
            <div className={`p-4 rounded-lg ${
              step.status === 'completed' ? 'bg-green-50' :
              step.status === 'current' ? 'bg-orange-50' :
              'bg-gray-50'
            }`}>
              <div className="flex items-center mb-3">
                <div className={`p-2 rounded-full ${
                  step.status === 'completed' ? 'bg-green-500' :
                  step.status === 'current' ? 'bg-orange-500' :
                  'bg-gray-300'
                } text-white`}>
                  <step.icon className="h-5 w-5" />
                </div>
                {index < assessmentProcess.length - 1 && (
                  <div className="absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10">
                    <div className={`h-full ${
                      step.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'
                    }`} style={{ width: step.status === 'current' ? '50%' : step.status === 'completed' ? '100%' : '0%' }} />
                  </div>
                )}
              </div>
              <h4 className="font-semibold mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAcademicProfile = () => (
    <div className="space-y-8">
      {renderAssessmentProcess()}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Academic Background</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Grade/Year
            </label>
            <select className="w-full input-primary">
              <option value="">Select your grade</option>
              {academicGrades.map(grade => (
                <option key={grade} value={grade}>{grade}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Favorite Subjects
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {subjects.map(subject => (
                <label key={subject} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" />
                  <span className="text-sm">{subject}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Academic Records
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-orange-500 hover:text-orange-600">
                    <span>Upload files</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Academic Goals</h3>
        <textarea
          placeholder="What are your academic goals and aspirations?"
          className="w-full h-32 input-primary resize-none"
        />
      </div>
    </div>
  );

  const renderAptitudeAssessment = () => (
    <div className="space-y-8">
      {renderAssessmentProcess()}
      {!testInProgress ? (
        <>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Differential Aptitude Test</h3>
            <p className="text-gray-600 mb-6">
              This comprehensive assessment evaluates various aspects of your cognitive abilities
              and academic aptitude.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <Brain className="h-5 w-5 text-orange-500 mr-2" />
                  <h4 className="font-semibold">Verbal Reasoning</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Tests your ability to understand and reason with concepts framed in words.
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <Calculator className="h-5 w-5 text-orange-500 mr-2" />
                  <h4 className="font-semibold">Numerical Ability</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Evaluates your understanding of numerical relationships and mathematical concepts.
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setTestInProgress(true)}
            className="w-full btn-primary"
          >
            Start Aptitude Test
          </button>
        </>
      ) : (
        <div className="max-w-3xl mx-auto">
          <TestProgress
            currentQuestion={currentQuestion}
            totalQuestions={10}
            timeRemaining={timeRemaining}
            category="Verbal Reasoning"
          />
          <QuestionCard
            question={{
              id: '1',
              categoryId: 'verbal',
              text: 'Sample question text',
              type: 'multiple-choice',
              options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              correctAnswer: 'Option 1',
              difficulty: 2
            }}
            onAnswer={() => {
              if (currentQuestion < 10) {
                setCurrentQuestion(prev => prev + 1);
              } else {
                setTestInProgress(false);
                setActiveTab('recommendations');
              }
            }}
            timeRemaining={timeRemaining}
          />
        </div>
      )}
    </div>
  );

  const renderLearningStyle = () => (
    <div className="space-y-8">
      {renderAssessmentProcess()}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Learning Style Assessment</h3>
        <p className="text-gray-600 mb-6">
          Understanding your learning style helps optimize your study approach and improves learning effectiveness.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {learningStyles.map((style, index) => (
            <div key={index} className="border rounded-lg p-4 hover:border-orange-500 cursor-pointer transition-colors">
              <style.icon className="h-8 w-8 text-orange-500 mb-2" />
              <h4 className="font-semibold mb-2">{style.title}</h4>
              <p className="text-sm text-gray-600">{style.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Study Preferences</h3>
        <div className="space-y-4">
          {['Time of day', 'Study environment', 'Group vs. Individual', 'Teaching methods'].map((preference, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {preference}
              </label>
              <select className="w-full input-primary">
                <option value="">Select your preference</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRecommendations = () => (
    <div className="space-y-8">
      {renderAssessmentProcess()}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Personalized Learning Path</h3>
        <div className="mb-6">
          <SkillsRadar />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center">
              <Target className="h-5 w-5 text-orange-500 mr-2" />
              Recommended Focus Areas
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Advanced Mathematics</li>
              <li>• Critical Reading</li>
              <li>• Scientific Analysis</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center">
              <Lightbulb className="h-5 w-5 text-orange-500 mr-2" />
              Study Strategies
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Visual learning aids</li>
              <li>• Practice problems</li>
              <li>• Group discussions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Next Steps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link 
            to="/counselors" 
            className="flex items-center justify-center px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Schedule Academic Counseling
          </Link>
          <button className="flex items-center justify-center px-6 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
            Download Detailed Report
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Educational Assessment</h1>
          <div className="flex flex-wrap gap-4">
            {[
              { id: 'academic', label: 'Academic Profile', icon: GraduationCap },
              { id: 'aptitude', label: 'Aptitude Assessment', icon: Brain },
              { id: 'learning', label: 'Learning Style', icon: Lightbulb },
              { id: 'recommendations', label: 'Recommendations', icon: Target }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as AssessmentTab)}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-orange-50'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'academic' && renderAcademicProfile()}
        {activeTab === 'aptitude' && renderAptitudeAssessment()}
        {activeTab === 'learning' && renderLearningStyle()}
        {activeTab === 'recommendations' && renderRecommendations()}
      </div>
    </div>
  );
};

export default AssessmentPage;