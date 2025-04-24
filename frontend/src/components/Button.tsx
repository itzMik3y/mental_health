import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'hero-outline' | 'danger' | 'directory' | 'primary-blue'; // Added primary-blue
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary-blue', size = 'md', children, className, ...props }) => {
  const baseStyle = "rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out text-center inline-block disabled:opacity-50";
  const sizeStyle = size === 'sm' ? "px-4 py-1.5 text-sm" : "px-6 py-2 text-base"; // Adjusted sizes

  let variantStyle = '';
  switch (variant) {
    case 'secondary':
      variantStyle = "bg-white text-brand-green border border-brand-green hover:bg-gray-50 focus:ring-brand-green";
      break;
    case 'hero-outline':
       variantStyle = "bg-transparent text-white border border-white hover:bg-white hover:text-black focus:ring-white";
       break;
    case 'danger':
        variantStyle = "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500";
        break;
    case 'directory':
        variantStyle = "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-indigo-500";
        break;
    case 'primary': // Yellow/Amber
        variantStyle = "bg-brand-yellow text-white hover:bg-amber-500 focus:ring-brand-yellow";
        break;
    case 'primary-blue': // Blue variant
    default:
        variantStyle = "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";
        break;
  }

  return (
    <button
      className={`${baseStyle} ${sizeStyle} ${variantStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;