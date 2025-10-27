import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-[#AA2C2C] text-white hover:bg-[#8a2323] shadow-lg hover:shadow-xl hover:shadow-[#AA2C2C]/30 hover:scale-105 focus:ring-[#AA2C2C]',
    secondary: 'bg-white text-[#AA2C2C] hover:bg-gray-50 shadow-lg hover:shadow-xl hover:scale-105',
    outline: 'border-2 border-[#AA2C2C] text-[#AA2C2C] hover:bg-[#AA2C2C] hover:text-white shadow-lg hover:shadow-xl hover:shadow-[#AA2C2C]/30 hover:scale-105'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
