import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, AlertCircle, Lock } from 'lucide-react';
import OtpInput from '../components/OtpInput';
import AuthHeader from '../components/auth/AuthHeader';
import AuthModeToggle from '../components/auth/AuthModeToggle';
import AuthForm from '../components/auth/AuthForm';
import SocialAuth from '../components/auth/SocialAuth';

type AuthMode = 'signin' | 'signup' | 'forgot';
type VerificationStep = 'form' | 'otp';

interface FormData {
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const AuthPage = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>('signin');
  const [step, setStep] = useState<VerificationStep>('form');
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    let interval: number | undefined;
    if (step === 'otp' && timer > 0) {
      interval = window.setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async () => {
    setError('');
    setIsLoading(true);

    try {
      if (step === 'form') {
        if (!validateEmail(formData.email)) {
          throw new Error('Please enter a valid email address');
        }

        if (mode === 'signup') {
          if (!validatePassword(formData.password)) {
            throw new Error('Password must be at least 8 characters with one number and one special character');
          }
          if (formData.password !== formData.confirmPassword) {
            throw new Error('Passwords do not match');
          }
          if (!validatePhone(formData.phone)) {
            throw new Error('Please enter a valid 10-digit phone number');
          }
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
        setStep('otp');
        setTimer(60);
      } else {
        if (otp.length !== 6) {
          throw new Error('Please enter a valid 6-digit OTP');
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
        navigate('/');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/');
    } catch (err) {
      setError('Google authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = () => {
    setTimer(60);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <AuthHeader mode={mode} step={step} email={formData.email} />

        {mode !== 'forgot' && step === 'form' && (
          <AuthModeToggle
            mode={mode as 'signin' | 'signup'}
            onModeChange={(newMode) => setMode(newMode)}
          />
        )}

        {step === 'form' ? (
          <div className="space-y-6">
            <AuthForm
              mode={mode}
              formData={formData}
              onChange={setFormData}
              onForgotPassword={() => setMode('forgot')}
            />

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full btn-primary flex items-center justify-center ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
              ) : (
                <>
                  {mode === 'forgot' ? 'Send Reset Link' : mode === 'signup' ? 'Sign Up' : 'Sign In'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>

            {mode !== 'forgot' && (
              <SocialAuth onGoogleAuth={handleGoogleAuth} isLoading={isLoading} />
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <OtpInput value={otp} onChange={setOtp} />

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">
                {timer > 0 ? (
                  `Resend OTP in ${timer}s`
                ) : (
                  <button
                    onClick={handleResendOtp}
                    className="text-orange-500 hover:text-orange-600"
                  >
                    Resend OTP
                  </button>
                )}
              </span>
              <button
                onClick={() => setStep('form')}
                className="text-orange-500 hover:text-orange-600"
              >
                Change Email
              </button>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full btn-primary flex items-center justify-center ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
              ) : (
                <>
                  Verify & {mode === 'signup' ? 'Create Account' : 'Sign In'}
                  <Lock className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </div>
        )}

        {error && (
          <div className="flex items-center text-red-500 text-sm mt-2">
            <AlertCircle className="h-4 w-4 mr-1" />
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;