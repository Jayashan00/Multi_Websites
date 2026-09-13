export default function Rating({ value = 5, size = 15, className = '', showValue = false }) {
  return (
    <div className={`flex items-center gap-1 ${className}`} aria-label={`${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 3.2l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.7l6.1-.9L12 3.2z"
            fill={i <= Math.round(value) ? '#F5A524' : '#DCE7F0'}
          />
        </svg>
      ))}
      {showValue && (
        <span className="ml-1 font-mono text-xs font-medium text-ink-muted">{value}.0</span>
      )}
    </div>
  )
}
