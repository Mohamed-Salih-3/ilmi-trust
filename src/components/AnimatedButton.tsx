import React from 'react';

export interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'secondary-dark';
  className?: string;
  children: React.ReactNode;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  const variantClass =
    variant === 'primary'
      ? 'btn-17-primary'
      : variant === 'secondary-dark'
      ? 'btn-17-secondary-dark'
      : 'btn-17-secondary';

  return (
    <button className={`btn-17 ${variantClass} ${className}`} {...props}>
      <span className="text-container">
        <span className="text">
          {children}
        </span>
      </span>
    </button>
  );
};
