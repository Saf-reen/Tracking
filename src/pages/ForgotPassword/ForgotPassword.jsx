import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AuthForm from '../../components/AuthForm';
import Card from '../../components/Card';

const ForgotPassword = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        // Navigate to enter OTP page with email
        onNavigate('enter-otp', { email: formData.email });
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  const fields = [
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your registered email address',
      value: formData.email,
      onChange: handleInputChange('email'),
      required: true,
      className: 'py-2 px-3 text-sm'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col">
      <Header onNavigate={onNavigate} />
      
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-md">
          <AuthForm
            title="Reset Password"
            fields={fields}
            onSubmit={handleSubmit}
            submitText={isSubmitting ? "Sending..." : "Send Verification Code"}
            switchText={{
              text: "Remember your password?",
              action: "Back to Sign In"
            }}
            switchAction={() => onNavigate('signin')}
            errors={errors}
          />
          
          {/* Additional help text */}
          <Card className="mt-4 p-4">
            <div className="text-center">
              <p className="text-sm text-gray-600 leading-relaxed">
                Enter the email address associated with your TrackBudget account and we'll send you a verification code to reset your password.
              </p>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForgotPassword;