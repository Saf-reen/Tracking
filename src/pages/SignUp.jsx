import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authSlice';
import axiosInstance from '../utils/axiosInstance';
// import { API_ENDPOINTS } from '../utils/api';
import AuthForm from '../components/AuthForm';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = async () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axiosInstance.post("", {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
      const { access_token, user } = response.data;
      dispatch(loginSuccess({ access_token, user }));
      localStorage.setItem('access_token', access_token);
      navigate('/dashboard');
    } catch (error) {
      setErrors({ general: error.response?.data?.message || 'Signup failed' });
    }
  };

  const fields = [
    {
      name: 'fullName',
      label: 'Full Name',
      placeholder: 'Enter your full name',
      value: formData.fullName,
      onChange: handleInputChange('fullName'),
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email',
      value: formData.email,
      onChange: handleInputChange('email'),
      required: true,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Create a password',
      value: formData.password,
      onChange: handleInputChange('password'),
      required: true,
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm your password',
      value: formData.confirmPassword,
      onChange: handleInputChange('confirmPassword'),
      required: true,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <AuthForm
        title="Create Account"
        showForgotPassword={false}
        fields={fields}
        onSubmit={handleSubmit}
        submitText="Create Account"
        switchText={{ text: 'Already have an account?', action: 'Sign In' }}
        switchAction={() => navigate('/signin')}
        errors={errors}
      />
    </div>
  );
};

export default SignUp;
