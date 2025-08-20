import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AuthForm from '../../components/AuthForm';
import Card from '../../components/Card';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = ({ onNavigate }) => {
  const navigate = useNavigate()
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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <Header onNavigate={onNavigate} />
      
      <main className="flex items-center justify-center flex-1 px-4 py-12 sm:py-16">
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
            switchAction={() => navigate('signin')}
            errors={errors}
          />
          
          {/* Additional help text */}
          <Card className="p-4 mt-4">
            <div className="text-center">
              <p className="text-sm leading-relaxed text-gray-600">
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