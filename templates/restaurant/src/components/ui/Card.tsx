import type { HTMLAttributes, ReactNode } from 'react'

type CardElement = 'article' | 'aside' | 'div' | 'section'
type CardVariant = 'bordered' | 'elevated' | 'dark' | 'plain'

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: CardElement
  children: ReactNode
  variant?: CardVariant
}

const variantClasses: Record<CardVariant, string> = {
  bordered: 'border border-stone-200 bg-white',
  elevated:
    'border border-stone-200 bg-white shadow-[0_18px_55px_rgba(41,37,36,0.08)]',
  dark: 'border border-white/10 bg-stone-950 text-white',
  plain: '',
}

export function Card({
  as: Component = 'div',
  children,
  className = '',
  variant = 'elevated',
  ...props
}: CardProps) {
  return (
    <Component
      className={`rounded-[1.75rem] ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
