import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from './utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'primary' | 'secondary' | 'error' | 'gray' | 'warning' | 'success' | 'info';
  size?: 'sm' | 'base' | 'lg';
  dot?: boolean;
}

const badgeVariants = {
  variant: {
    default: 'bg-gray-100 text-black border-gray-200',
    outline: 'bg-transparent text-black border-black',
    ghost: 'bg-transparent text-gray-600 border-transparent',
    primary: 'bg-black text-cream border-black',
    secondary: 'bg-gray-200 text-black border-gray-300',
    error: 'bg-red-100 text-red-800 border-red-200',
    gray: 'bg-gray-100 text-gray-700 border-gray-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    success: 'bg-green-100 text-green-800 border-green-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  size: {
    sm: 'px-2 py-0.5 text-xs',
    base: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-sm',
  },
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'base', dot = false, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1.5 font-normal tracking-wide border transition-all duration-300',
          badgeVariants.variant[variant],
          badgeVariants.size[size],
          className
        )}
        {...props}
      >
        {dot && (
          <span className={cn('h-1.5 w-1.5', variant === 'outline' || variant === 'primary' ? 'bg-black' : 'bg-gray-400')} />
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
