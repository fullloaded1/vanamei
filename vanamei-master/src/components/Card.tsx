import { ReactNode, Key } from 'react';

interface CardProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  key?: Key;
  variant?: 'default' | 'gradient' | 'glass';
}

export default function Card({ title, description, children, className = '', key, variant = 'default' }: CardProps) {
  const baseStyle = 'rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105';
  
  const variantStyle = {
    default: 'bg-white shadow-xl hover:shadow-2xl border border-gray-100',
    gradient: 'bg-gradient-to-br from-white to-emerald-50 shadow-xl hover:shadow-2xl border border-emerald-100',
    glass: 'bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-white/20'
  };

  return (
    <div key={key} className={`${baseStyle} ${variantStyle[variant]} ${className}`}>
      {title && (
        <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
          {title}
        </h3>
      )}
      {description && <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>}
      {children && <div>{children}</div>}
    </div>
  );
}
