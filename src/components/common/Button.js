import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  className = '', 
  variant = 'primary',
  size = 'md' 
}) => {
  // Base styles
  let baseStyles = 'rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
  
  // Size variants
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  // Color variants
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500',
    green: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
    red: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    white: 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 focus:ring-blue-500'
  };
  
  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
