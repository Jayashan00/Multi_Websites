import { Link } from 'react-router-dom'
import Icon from './Icon'

const VARIANTS = {
  primary:
    'bg-clinic-500 text-white shadow-card hover:bg-clinic-600 active:bg-clinic-700',
  mint: 'bg-mint-500 text-white shadow-card hover:bg-mint-600 active:bg-mint-700',
  emergency:
    'bg-emergency-500 text-white shadow-card hover:bg-emergency-600 active:bg-emergency-700',
  outline:
    'border border-clinic-200 bg-white text-clinic-600 hover:border-clinic-400 hover:bg-clinic-50',
  ghost: 'text-ink-soft hover:bg-clinic-50 hover:text-clinic-600',
  white: 'bg-white text-clinic-600 shadow-card hover:bg-clinic-50',
  dark: 'bg-ink text-white hover:bg-ink-soft',
}

const SIZES = {
  sm: 'h-9 px-4 text-[13px] gap-1.5',
  md: 'h-11 px-5 text-sm gap-2',
  lg: 'h-[52px] px-7 text-[15px] gap-2.5',
}

export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  full = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'group inline-flex items-center justify-center rounded-xl font-semibold tracking-[-0.01em]',
    'transition-all duration-200 active:scale-[.97] disabled:pointer-events-none disabled:opacity-50',
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? SIZES.md,
    full ? 'w-full' : '',
    className,
  ].join(' ')

  const inner = (
    <>
      {icon && <Icon name={icon} size={size === 'lg' ? 19 : 17} />}
      {children}
      {iconRight && (
        <Icon
          name={iconRight}
          size={size === 'lg' ? 19 : 17}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  )

  if (to) return <Link to={to} className={classes} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={classes} {...rest}>{inner}</a>

  const Tag = as || 'button'
  return <Tag className={classes} {...rest}>{inner}</Tag>
}
