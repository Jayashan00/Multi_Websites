import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'

type ButtonVariant =
  'primary' | 'amber' | 'outlineDark' | 'outlineLight' | 'ghost'

type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

type SharedButtonProps = {
  children: ReactNode
  className?: string
  fullWidth?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

const baseClasses =
  'group/ui-button inline-flex items-center justify-center gap-3 rounded-full font-bold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 disabled:cursor-not-allowed disabled:opacity-50'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-stone-950 text-white hover:-translate-y-0.5 hover:bg-amber-400 hover:text-stone-950',
  amber:
    'bg-amber-400 text-stone-950 hover:-translate-y-0.5 hover:bg-amber-300',
  outlineDark:
    'border border-stone-300 bg-white text-stone-900 hover:-translate-y-0.5 hover:border-stone-950 hover:bg-stone-950 hover:text-white',
  outlineLight:
    'border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-300',
  ghost: 'text-stone-700 hover:bg-stone-100 hover:text-stone-950',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-sm',
  icon: 'size-11 p-0 text-sm',
}

function getButtonClasses({
  className = '',
  fullWidth = false,
  size = 'md',
  variant = 'primary',
}: Omit<SharedButtonProps, 'children'>) {
  return [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
}

export type ButtonProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedButtonProps>

export function Button({
  children,
  className,
  fullWidth,
  size,
  type = 'button',
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClasses({ className, fullWidth, size, variant })}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export type ButtonLinkProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedButtonProps>

export function ButtonLink({
  children,
  className,
  fullWidth,
  size,
  variant,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={getButtonClasses({ className, fullWidth, size, variant })}
      {...props}
    >
      {children}
    </a>
  )
}

export function ButtonArrow() {
  return (
    <span
      aria-hidden="true"
      className="grid size-8 place-items-center rounded-full bg-white/10 transition-transform duration-300 group-hover/ui-button:translate-x-0.5"
    >
      &rarr;
    </span>
  )
}
