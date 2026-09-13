import { Loader2 } from 'lucide-react';

type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
};

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-10 h-10',
};

/** Inline spinner — use inside buttons or next to text. */
export function Spinner({ size = 'md', className = '', label = 'Loading' }: SpinnerProps) {
  return (
    <Loader2
      role="status"
      aria-label={label}
      className={`animate-spin text-orange-500 ${sizeMap[size]} ${className}`}
    />
  );
}

/** Full-section loader — use while a page or section is loading. */
export function PageLoader({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-neutral-800" />
        <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-orange-500 animate-spin" />
      </div>
      <p className="text-sm text-neutral-400 tracking-wide uppercase">{text}</p>
    </div>
  );
}

/** Skeleton placeholder for card grids. */
export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`card animate-pulse ${className}`}>
      <div className="h-48 bg-neutral-800" />
      <div className="p-6 space-y-3">
        <div className="h-3 w-1/3 bg-neutral-800 rounded" />
        <div className="h-4 w-3/4 bg-neutral-800 rounded" />
        <div className="h-3 w-full bg-neutral-800 rounded" />
        <div className="h-3 w-5/6 bg-neutral-800 rounded" />
      </div>
    </div>
  );
}

/** Grid of skeletons. */
export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export default PageLoader;