import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../redux/authSlice';
import axiosInstance from '../utils/axiosInstance';
// import { API_ENDPOINTS } from '../utils/api';
import AuthForm from '../components/AuthForm';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    dispatch(loginStart());

    try {
      const response = await axiosInstance.post("/auth/login/", formData);
      const { access_token, user } = response.data;
      console.log(response.data);
      dispatch(loginSuccess({ access_token, user }));
      localStorage.setItem('access_token', access_token);
      navigate('/dashboard');
    } catch (error) {
      dispatch(loginFailure(error.response?.data?.message || 'Login failed'));
      setErrors({ general: error.response?.data?.message || 'Login failed' });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fields = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email Address',
      value: formData.email,
      onChange: (e) => handleInputChange('email', e.target.value),
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      value: formData.password,
      onChange: (e) => handleInputChange('password', e.target.value),
      required: true,
    },
  ];

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
      <AuthForm
        title="Sign In to Your Account"
        fields={fields}
        onSubmit={handleSubmit}
        submitText={isLoading ? 'Signing In...' : 'Sign In'}
        switchText={{ text: "Don't have an account?", action: 'Sign Up' }}
        switchAction={() => navigate('/signup')}
        showForgotPassword={true}
        onForgotPassword={() => navigate('/forgot-password')}
        errors={errors}
      />
    </div>
  );
};

export default SignIn;
