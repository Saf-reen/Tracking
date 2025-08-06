import {React, useEffect} from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  type = 'button',
  disabled = false,
  className = '' 
}) => {
  const baseClasses = 'font-semibold  transition-all duration-200 focus:outline-none ';
  
  const variants = {
    primary: 'bg-green-600 hover:bg-green-700 text-white ',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 ',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-50'
  };
  
  const sizes = {
    sm: 'px-4 py-1 text-sm',
    md: 'px-4 py-1 text-base',
    lg: 'px-4 py-1 text-lg'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;