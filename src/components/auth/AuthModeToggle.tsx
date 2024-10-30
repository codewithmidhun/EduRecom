import React from 'react';

interface AuthModeToggleProps {
  mode: 'signin' | 'signup';
  onModeChange: (mode: 'signin' | 'signup') => void;
}

const AuthModeToggle: React.FC<AuthModeToggleProps> = ({ mode, onModeChange }) => {
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => onModeChange('signin')}
        className={`px-4 py-2 rounded-lg ${
          mode === 'signin'
            ? 'bg-orange-500 text-white'
            : 'text-gray-500 hover:bg-gray-100'
        }`}
      >
        Sign In
      </button>
      <button
        onClick={() => onModeChange('signup')}
        className={`px-4 py-2 rounded-lg ${
          mode === 'signup'
            ? 'bg-orange-500 text-white'
            : 'text-gray-500 hover:bg-gray-100'
        }`}
      >
        Sign Up
      </button>
    </div>
  );
};

export default AuthModeToggle;