import Icon from './Icon'

const TONES = {
  clinic: 'bg-clinic-50 text-clinic-600 ring-clinic-100',
  mint: 'bg-mint-50 text-mint-700 ring-mint-100',
  emergency: 'bg-emergency-50 text-emergency-600 ring-emergency-100',
  neutral: 'bg-paper text-ink-soft ring-clinic-100',
  solid: 'bg-clinic-500 text-white ring-clinic-500',
  amber: 'bg-amber-50 text-amber-700 ring-amber-100',
}

export default function Badge({ tone = 'clinic', icon, children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-2xs font-semibold uppercase tracking-[0.1em] ring-1 ${
        TONES[tone] ?? TONES.clinic
      } ${className}`}
    >
      {icon && <Icon name={icon} size={12} strokeWidth={2.2} />}
      {children}
    </span>
  )
}
