import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthForm from '../components/AuthForm';
import Card from '../components/Card';

const SignUp = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

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
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      alert('Account created successfully! Welcome to TrackBudget!');
      onNavigate('home');
    } else {
      setErrors(newErrors);
    }
  };

  const fields = [
    {
      name: 'fullName',
      label: 'Full Name',
      placeholder: 'Enter your full name',
      value: formData.fullName,
      onChange: handleInputChange('fullName'),
      required: true
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email',
      value: formData.email,
      onChange: handleInputChange('email'),
      required: true
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Create a password',
      value: formData.password,
      onChange: handleInputChange('password'),
      required: true
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm your password',
      value: formData.confirmPassword,
      onChange: handleInputChange('confirmPassword'),
      required: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col">
      <Header onNavigate={onNavigate} />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <AuthForm
          title="Create Account"
          fields={fields}
          onSubmit={handleSubmit}
          submitText="Create Account"
          switchText={{
            text: "Already have an account?",
            action: "Sign In"
          }}
          switchAction={() => onNavigate('signin')}
          errors={errors}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default SignUp;
