import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Icon from './Icon'
import { img } from '../../lib/media'

export default function Lightbox({ items = [], index, onClose, onIndex }) {
  const open = index !== null && index >= 0
  const item = open ? items[index] : null

  const go = useCallback(
    (step) => {
      if (!items.length) return
      onIndex((index + step + items.length) % items.length)
    },
    [index, items.length, onIndex],
  )

  useEffect(() => {
    if (!open) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [open, go, onClose])

  if (!open || !item) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[110] flex flex-col bg-ink/95 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div className="flex items-center justify-between px-5 py-4 text-white/85">
        <p className="font-mono text-2xs uppercase tracking-[0.2em]">
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </p>
        <button
          onClick={onClose}
          aria-label="Close gallery"
          className="rounded-lg p-2 transition hover:bg-white/10"
        >
          <Icon name="close" size={20} />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-4">
        <button
          onClick={() => go(-1)}
          aria-label="Previous image"
          className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:left-6"
        >
          <Icon name="chevronLeft" size={22} />
        </button>

        <figure className="max-h-full max-w-5xl animate-fade-up">
          <img
            src={img(item.image, { w: 1600 })}
            alt={item.title}
            className="mx-auto max-h-[68vh] w-auto rounded-2xl object-contain shadow-lift"
          />
          <figcaption className="mt-4 text-center">
            <h3 className="text-lg text-white">{item.title}</h3>
            {item.caption && <p className="mt-1 text-sm text-clinic-100">{item.caption}</p>}
          </figcaption>
        </figure>

        <button
          onClick={() => go(1)}
          aria-label="Next image"
          className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:right-6"
        >
          <Icon name="chevronRight" size={22} />
        </button>
      </div>
    </div>,
    document.body,
  )
}
