import { IconProps } from 'lucide-react';

export type TestCategory = {
  id: string;
  name: string;
  description: string;
  icon: React.ForwardRefExoticComponent<IconProps>;
  timeLimit: number; // in minutes
  questionCount: number;
};

export type Question = {
  id: string;
  categoryId: string;
  text: string;
  type: 'multiple-choice' | 'text' | 'pattern';
  options?: string[];
  correctAnswer: string | number;
  difficulty: 1 | 2 | 3; // 1: Easy, 2: Medium, 3: Hard
  timeLimit?: number; // Optional per-question time limit in seconds
};

export type TestResult = {
  categoryId: string;
  score: number;
  timeSpent: number;
  correctAnswers: number;
  totalQuestions: number;
  difficulty: number;
  strengths: string[];
  improvements: string[];
};

export type TestSession = {
  userId: string;
  startTime: Date;
  endTime?: Date;
  currentCategory: string;
  currentQuestion: number;
  results: TestResult[];
  isComplete: boolean;
};