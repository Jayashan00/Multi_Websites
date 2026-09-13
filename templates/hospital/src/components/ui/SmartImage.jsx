import { useState } from 'react'
import { img, imgSet } from '../../lib/media'

/**
 * Every photograph on the site goes through here so that we get, for free:
 *   · native lazy loading + async decoding
 *   · a fixed aspect ratio (no layout shift while loading)
 *   · a soft skeleton shimmer instead of a white gap
 *   · an illustrated fallback if a source ever fails to load, so a broken
 *     network never produces a broken-looking page
 */
export default function SmartImage({
  name,
  alt,
  ratio = '4/3',
  className = '',
  imgClassName = '',
  width = 1200,
  responsive = false,
  priority = false,
  children,
}) {
  const [state, setState] = useState('loading') // loading | ready | failed
  const src = img(name, { w: width })

  // If the caller positions this image itself (e.g. a full-bleed background
  // with `absolute inset-0`), do NOT add `relative` — Tailwind emits
  // `.relative` after `.absolute`, so it would win and drop the image back
  // into normal flow, stretching its parent to the photo's natural height.
  const positioned = /\b(absolute|fixed|sticky)\b/.test(className)

  return (
    <div
      className={`${positioned ? '' : 'relative'} overflow-hidden bg-clinic-50 ${className}`}
      style={ratio === 'auto' ? undefined : { aspectRatio: ratio }}
    >
      {state === 'loading' && (
        <div className="absolute inset-0 overflow-hidden bg-clinic-50">
          <div className="absolute inset-0 -translate-x-full bg-sheen animate-shimmer" />
        </div>
      )}

      {state !== 'failed' ? (
        <img
          src={src}
          srcSet={responsive ? imgSet(name) : undefined}
          sizes={responsive ? '(max-width: 768px) 100vw, 50vw' : undefined}
          alt={alt}
          width={width}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setState('ready')}
          onError={() => setState('failed')}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            state === 'ready' ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      ) : (
        <Fallback label={alt} />
      )}

      {children}
    </div>
  )
}

/** Illustrated placeholder — deliberately on-brand, never a broken-image icon. */
function Fallback({ label }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-clinic-50 via-white to-mint-50 p-6 text-center">
      <svg viewBox="0 0 120 40" className="w-28 text-mint-400" aria-hidden="true">
        <path
          d="M0 20h28l6-13 8 26 9-32 8 38 7-19h54"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="max-w-[80%] font-mono text-2xs uppercase tracking-[0.16em] text-ink-muted">
        {label || 'Image placeholder'}
      </p>
    </div>
  )
}