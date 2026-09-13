import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from './Loader';

type Variant = 'primary' | 'outline' | 'ghost';

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
};

type CommonProps = {
  variant?: Variant;
  loading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = 'primary', loading = false, fullWidth = false, children, className = '', disabled, ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={`${variantClass[variant]} ${fullWidth ? 'w-full' : ''} disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {loading && <Spinner size="sm" className="text-current" />}
      {children}
    </button>
  );
}

export function LinkButton({
  to, variant = 'primary', fullWidth = false, children, className = '',
}: CommonProps & { to: string }) {
  return (
    <Link to={to} className={`${variantClass[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}>
      {children}
    </Link>
  );
}

export default Button;