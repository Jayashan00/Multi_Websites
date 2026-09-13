import { useEffect } from 'react'

import type { GalleryItem } from './galleryData'

type GalleryLightboxProps = {
  activeIndex: number | null
  items: Array<GalleryItem>
  onChange: (index: number) => void
  onClose: () => void
}

export function GalleryLightbox({
  activeIndex,
  items,
  onChange,
  onClose,
}: GalleryLightboxProps) {
  useEffect(() => {
    if (activeIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') {
        onChange((activeIndex - 1 + items.length) % items.length)
      }
      if (event.key === 'ArrowRight') {
        onChange((activeIndex + 1) % items.length)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, items.length, onChange, onClose])

  if (activeIndex === null) return null

  const item = items[activeIndex]

  return (
    <div
      aria-label={`${item.title} image preview`}
      aria-modal="true"
      className="gallery-lightbox-enter fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-stone-950/95 p-4 backdrop-blur-md sm:p-6"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="relative grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-stone-950 shadow-[0_30px_100px_rgba(0,0,0,0.65)] lg:grid-cols-[1.35fr_0.65fr]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative min-h-[50vh] overflow-hidden bg-black lg:min-h-[76vh]">
          <img
            alt={item.alt}
            className="gallery-lightbox-image absolute inset-0 h-full w-full object-cover"
            key={item.id}
            src={item.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

          <button
            aria-label="View previous image"
            className="absolute top-1/2 left-4 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/35 text-xl text-white backdrop-blur-md transition-all hover:border-amber-300 hover:bg-amber-400 hover:text-stone-950"
            onClick={() =>
              onChange((activeIndex - 1 + items.length) % items.length)
            }
            type="button"
          >
            &larr;
          </button>
          <button
            aria-label="View next image"
            className="absolute top-1/2 right-4 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/35 text-xl text-white backdrop-blur-md transition-all hover:border-amber-300 hover:bg-amber-400 hover:text-stone-950"
            onClick={() => onChange((activeIndex + 1) % items.length)}
            type="button"
          >
            &rarr;
          </button>
        </div>

        <div className="relative flex flex-col justify-between p-7 text-white sm:p-9">
          <button
            aria-label="Close image preview"
            autoFocus
            className="absolute top-5 right-5 grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-xl text-white transition-colors hover:border-amber-300 hover:text-amber-300"
            onClick={onClose}
            type="button"
          >
            &times;
          </button>

          <div className="pt-16">
            <p className="text-xs font-bold tracking-[0.19em] text-amber-300 uppercase">
              {item.category}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight font-semibold">
              {item.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-stone-400">
              A moment from the Restaurant Name visual journal, captured to
              share the details behind every visit.
            </p>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <div className="flex items-end justify-between">
              <p className="text-xs tracking-[0.16em] text-stone-500 uppercase">
                Frame
              </p>
              <p className="font-serif text-3xl">
                {String(activeIndex + 1).padStart(2, '0')}
                <span className="ml-2 text-base text-stone-600">
                  / {String(items.length).padStart(2, '0')}
                </span>
              </p>
            </div>
            <div className="mt-4 h-px overflow-hidden bg-white/10">
              <div
                className="h-full bg-amber-400 transition-all duration-500"
                style={{
                  width: `${((activeIndex + 1) / items.length) * 100}%`,
                }}
              />
            </div>
            <p className="mt-4 text-[0.65rem] leading-5 text-stone-500">
              Use the arrow keys to explore &middot; Esc to close
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
