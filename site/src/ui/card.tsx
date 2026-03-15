import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from './utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'sm' | 'base' | 'lg' | 'none';
  shadow?: boolean;
  border?: boolean;
  interactive?: boolean;
}

const cardVariants = {
  padding: {
    none: '',
    sm: 'p-6',
    base: 'p-8',
    lg: 'p-10',
  },
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ padding = 'base', shadow = false, border = true, interactive = false, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white',
          cardVariants.padding[padding],
          { 'border border-gray-200': border },
          { 'shadow-sm': shadow },
          { 'transition-all duration-300 hover:border-gray-300 cursor-pointer': interactive && border },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { border?: boolean }>(
  ({ border = true, className, children, ...props }, ref) => (
    <div ref={ref} className={cn('px-8 py-6', { 'border-b border-gray-200': border }, className)} {...props}>
      {children}
    </div>
  )
);
CardHeader.displayName = 'CardHeader';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('px-8 py-6', className)} {...props}>{children}</div>
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { border?: boolean }>(
  ({ border = true, className, children, ...props }, ref) => (
    <div ref={ref} className={cn('px-8 py-6', { 'border-t border-gray-200': border }, className)} {...props}>
      {children}
    </div>
  )
);
CardFooter.displayName = 'CardFooter';

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement> & { level?: 1 | 2 | 3 | 4 }>(
  ({ level = 3, className, children, ...props }, ref) => {
    const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4';
    return (
      <Tag
        ref={ref}
        className={cn(
          'font-semibold text-gray-900 leading-tight',
          { 'text-2xl': level === 1, 'text-xl': level === 2, 'text-lg': level === 3, 'text-base': level === 4 },
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-gray-600 leading-relaxed mt-2', className)} {...props}>
      {children}
    </p>
  )
);
CardDescription.displayName = 'CardDescription';
