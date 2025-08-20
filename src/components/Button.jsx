// import {React, useEffect} from 'react';

// const Button = ({ 
//   children, 
//   variant = 'primary', 
//   size = 'md', 
//   onClick, 
//   type = 'button',
//   disabled = false,
//   className = '' 
// }) => {
//   const baseClasses = 'font-semibold  transition-all duration-200 focus:outline-none ';
  
//   const variants = {
//     primary: 'bg-green-600 hover:bg-green-700 text-white ',
//     secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 ',
//     outline: 'border-2 border-green-600 text-green-600 hover:bg-green-50'
//   };
  
//   const sizes = {
//     sm: 'px-4 py-1 text-sm',
//     md: 'px-4 py-1 text-base',
//     lg: 'px-4 py-1 text-lg'
//   };
  
//   const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className} `}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, ...props }) => {
  const baseClasses = 'font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700',
    outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;