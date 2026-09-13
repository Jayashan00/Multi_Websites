type LoadingSpinnerProps = {
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

const spinnerSizes = {
  sm: 'size-5 border-2',
  md: 'size-8 border-[3px]',
  lg: 'size-11 border-4',
}

export function LoadingSpinner({
  label = 'Loading',
  size = 'md',
}: LoadingSpinnerProps) {
  return (
    <span className="inline-flex items-center gap-3" role="status">
      <span
        aria-hidden="true"
        className={`${spinnerSizes[size]} motion-safe:animate-spin rounded-full border-stone-300 border-t-amber-500`}
      />
      <span className="text-sm text-stone-500">{label}</span>
    </span>
  )
}

export function PageLoading() {
  return (
    <main
      aria-label="Loading page"
      className="grid min-h-screen place-items-center bg-[#fbf8f2] px-5"
    >
      <LoadingSpinner label="Preparing your experience..." size="lg" />
    </main>
  )
}

export function CardSkeleton() {
  return (
    <div
      aria-label="Loading content"
      className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white motion-safe:animate-pulse"
      role="status"
    >
      <div className="aspect-[4/3] bg-stone-200" />
      <div className="space-y-4 p-6">
        <div className="h-3 w-24 rounded-full bg-stone-200" />
        <div className="h-7 w-3/4 rounded-full bg-stone-200" />
        <div className="h-4 w-full rounded-full bg-stone-100" />
        <div className="h-4 w-5/6 rounded-full bg-stone-100" />
      </div>
    </div>
  )
}
