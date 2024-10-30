import React from 'react';

interface AuthHeaderProps {
  mode: 'signin' | 'signup' | 'forgot';
  step: 'form' | 'otp';
  email?: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ mode, step, email }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        {mode === 'forgot' ? 'Reset Password' : mode === 'signup' ? 'Create Account' : 'Welcome Back'}
      </h2>
      <p className="text-gray-600">
        {step === 'otp' 
          ? `Enter the verification code sent to ${email}`
          : mode === 'forgot'
          ? 'Enter your email to reset your password'
          : mode === 'signup'
          ? 'Sign up to get started'
          : 'Sign in to your account'}
      </p>
    </div>
  );
};

export default AuthHeader;