/** Full-page loader used by React.Suspense while a route chunk downloads. */
export function PageLoader({ label = 'Loading' }) {
  return (
    <div className="grid min-h-[62vh] place-items-center px-6" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-5">
        <svg viewBox="0 0 160 48" className="w-40 text-mint-500" aria-hidden="true">
          <path
            d="M0 24h34l7-16 10 32 11-40 10 46 8-22h80"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ecg-line animate-ecg-dash"
            style={{ strokeDasharray: 400 }}
          />
        </svg>
        <p className="font-mono text-2xs uppercase tracking-[0.22em] text-ink-muted">{label}…</p>
      </div>
    </div>
  )
}

/** Inline spinner for buttons and small regions. */
export function Spinner({ size = 18, className = '' }) {
  return (
    <span
      role="status"
      aria-label="Loading"
      style={{ width: size, height: size, borderWidth: Math.max(2, size / 9) }}
      className={`inline-block animate-spin rounded-full border-current border-t-transparent ${className}`}
    />
  )
}

/** Card-shaped skeleton for grids that load asynchronously. */
export function SkeletonCard({ className = '' }) {
  return (
    <div className={`card-base overflow-hidden ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-clinic-50">
        <div className="absolute inset-0 -translate-x-full bg-sheen animate-shimmer" />
      </div>
      <div className="space-y-3 p-5">
        <div className="h-3.5 w-1/3 rounded bg-clinic-50" />
        <div className="h-4 w-3/4 rounded bg-clinic-50" />
        <div className="h-3 w-full rounded bg-clinic-50" />
        <div className="h-3 w-2/3 rounded bg-clinic-50" />
      </div>
    </div>
  )
}

export default PageLoader
