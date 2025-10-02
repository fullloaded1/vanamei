import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'gradient' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyle = 'font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl';
  
  const variantStyle = {
    default: 'bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700 shadow-emerald-500/25',
    outline: 'border-2 border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-600 hover:text-white shadow-emerald-500/25',
    gradient: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 shadow-cyan-500/25',
    ghost: 'text-emerald-600 bg-emerald-50 hover:bg-emerald-100 hover:text-emerald-700 shadow-emerald-500/10'
  };
  
  const sizeStyle = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      type={type}
      className={`${baseStyle} ${variantStyle[variant]} ${sizeStyle[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
