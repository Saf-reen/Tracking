import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

// Moved OUTSIDE so it keeps identity between renders
const PasswordInput = ({ 
  name, 
  label, 
  placeholder, 
  value, 
  onChange, 
  error, 
  showPassword, 
  onToggleVisibility 
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} <span className="text-indigo-600">*</span>
    </label>
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className={`w-full py-2 px-3 text-sm border focus:outline-none focus:border-indigo-600 transition-all duration-200 pr-10 ${
          error ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-gray-300'
        }`}
      />
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggleVisibility();
        }}
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
      >
        {showPassword ? (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
          </svg>
        ) : (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        )}
      </button>
    </div>
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

const ResetPassword = ({ onNavigate, email }) => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPasswords, setShowPasswords] = useState({
    newPassword: false,
    confirmPassword: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters long';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.newPassword)) {
      newErrors.newPassword = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your new password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col">
        <Header onNavigate={onNavigate} />
        <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
          <Card className="p-6 sm:p-8 w-full max-w-md mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Password Reset Successful</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Your password has been successfully updated. You can now sign in with your new password.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => onNavigate('signin')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Continue to Sign In
                </button>
                <p className="text-xs text-gray-500 leading-relaxed">
                  For your security, please sign in again with your new password.
                </p>
              </div>
            </div>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col">
      <Header onNavigate={onNavigate} />
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-md">
          <Card className="p-6 sm:p-8 w-full max-w-md mx-auto">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Create New Password</h2>
              <p className="text-gray-600 mt-2">
                Enter a new password for <strong className="text-gray-800">{email}</strong>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <PasswordInput
                name="newPassword"
                label="New Password"
                placeholder="Enter your new password"
                value={formData.newPassword}
                onChange={handleInputChange}
                error={errors.newPassword}
                showPassword={showPasswords.newPassword}
                onToggleVisibility={() => togglePasswordVisibility('newPassword')}
              />
              <PasswordInput
                name="confirmPassword"
                label="Confirm New Password"
                placeholder="Confirm your new password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={errors.confirmPassword}
                showPassword={showPasswords.confirmPassword}
                onToggleVisibility={() => togglePasswordVisibility('confirmPassword')}
              />
              <div className="bg-gray-50 p-4 text-xs text-gray-600 space-y-1">
                <p className="font-medium text-gray-700">Password must contain:</p>
                <ul className="space-y-1">
                  <li className={`flex items-center ${formData.newPassword.length >= 8 ? 'text-green-600' : ''}`}>
                    <span className="mr-2">{formData.newPassword.length >= 8 ? '✓' : '•'}</span>
                    At least 8 characters
                  </li>
                  <li className={`flex items-center ${/(?=.*[a-z])/.test(formData.newPassword) ? 'text-green-600' : ''}`}>
                    <span className="mr-2">{/(?=.*[a-z])/.test(formData.newPassword) ? '✓' : '•'}</span>
                    One lowercase letter
                  </li>
                  <li className={`flex items-center ${/(?=.*[A-Z])/.test(formData.newPassword) ? 'text-green-600' : ''}`}>
                    <span className="mr-2">{/(?=.*[A-Z])/.test(formData.newPassword) ? '✓' : '•'}</span>
                    One uppercase letter
                  </li>
                  <li className={`flex items-center ${/(?=.*\d)/.test(formData.newPassword) ? 'text-green-600' : ''}`}>
                    <span className="mr-2">{/(?=.*\d)/.test(formData.newPassword) ? '✓' : '•'}</span>
                    One number
                  </li>
                </ul>
              </div>
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Updating Password..." : "Update Password"}
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <button
                onClick={() => onNavigate('signin')}
                className="text-gray-600 hover:text-gray-700 transition-colors duration-200 text-sm"
              >
                ← Back to Sign In
              </button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResetPassword;
