import React from 'react';
import { Mail, Lock, Phone } from 'lucide-react';

interface FormData {
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface AuthFormProps {
  mode: 'signin' | 'signup' | 'forgot';
  formData: FormData;
  onChange: (data: FormData) => void;
  onForgotPassword: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  mode,
  formData,
  onChange,
  onForgotPassword,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => onChange({ ...formData, email: e.target.value })}
            className="block w-full pl-10 input-primary"
            placeholder="Email address"
          />
        </div>
      </div>

      {mode === 'signup' && (
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => onChange({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
              maxLength={10}
              className="block w-full pl-10 input-primary"
              placeholder="Phone number"
            />
          </div>
        </div>
      )}

      {mode !== 'forgot' && (
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => onChange({ ...formData, password: e.target.value })}
              className="block w-full pl-10 input-primary"
              placeholder="Password"
            />
          </div>
        </div>
      )}

      {mode === 'signup' && (
        <div>
          <label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => onChange({ ...formData, confirmPassword: e.target.value })}
              className="block w-full pl-10 input-primary"
              placeholder="Confirm password"
            />
          </div>
        </div>
      )}

      {mode === 'signin' && (
        <div className="flex items-center justify-end">
          <button
            onClick={onForgotPassword}
            className="text-sm text-orange-500 hover:text-orange-600"
          >
            Forgot password?
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthForm;