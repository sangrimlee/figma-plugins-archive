import clsx from 'clsx';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const LoadingIcon = () => {
  return (
    <svg className="-ml-1 mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

const buttonSizes = {
  sm: 'rounded py-1.5 px-2 text-xs min-h-[1.75rem]',
  md: 'rounded py-2 px-2.5 text-sm min-h-[2.25rem]',
  lg: 'rounded-md py-2.5 px-3 text-sm min-h-[2.5rem]',
};

const buttonVariants = {
  brand: 'bg-figma-bg-brand text-figma-text-onbrand hover:bg-figma-bg-brand-hover',
  secondary: 'bg-figma-bg-secondary text-figma-text-secondary ring-1 ring-figma-border hover:bg-figma-bg-tertiary',
};

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: keyof typeof buttonSizes;
  variant?: keyof typeof buttonVariants;
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  size = 'md',
  variant = 'brand',
  isLoading = false,
  fullWidth = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={clsx(
        className,
        buttonSizes[size],
        buttonVariants[variant],
        'inline-flex items-center justify-center font-semibold transition-colors',
        'disabled:bg-figma-bg-disabled disabled:text-figma-text-disabled disabled:pointer-events-none',
        { 'w-full': fullWidth },
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <LoadingIcon />}
      {children}
    </button>
  );
};
