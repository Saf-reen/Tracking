import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthForm from '../components/AuthForm';
import Card from '../components/Card';

const SignIn = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
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
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      alert('Welcome back! Signed in successfully!');
      onNavigate('home');
    } else {
      setErrors(newErrors);
    }
  };

  const fields = [
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email',
      value: formData.email,
      onChange: handleInputChange('email'),
      required: true,
      className: 'py-1 px-2 text-sm' //  smaller padding & font
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      value: formData.password,
      onChange: handleInputChange('password'),
      required: true,
      className: 'py-1 px-2 text-sm' //  smaller padding & font
    }
  ];

  return (
    <div className=" min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col">
      <Header onNavigate={onNavigate} />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <AuthForm
          title="Welcome Back"
          fields={fields}
          onSubmit={handleSubmit}
          submitText="Sign In"
          switchText={{
            text: "Don't have an account?",
            action: "Sign Up"
          }}
          switchAction={() => onNavigate('signup')}
          errors={errors}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default SignIn;
