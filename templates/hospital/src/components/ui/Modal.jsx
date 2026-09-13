import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Icon from './Icon'

/**
 * Accessible dialog: locks scroll, traps focus, restores focus on close,
 * closes on Escape and on backdrop click.
 */
export default function Modal({ open, onClose, title, children, size = 'md', footer }) {
  const panelRef = useRef(null)
  const lastFocused = useRef(null)

  useEffect(() => {
    if (!open) return
    lastFocused.current = document.activeElement
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    const t = setTimeout(() => panelRef.current?.querySelector('[data-autofocus]')?.focus(), 40)

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      clearTimeout(t)
      lastFocused.current?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  const widths = { sm: 'max-w-md', md: 'max-w-xl', lg: 'max-w-3xl', xl: 'max-w-5xl' }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className={`relative w-full ${widths[size]} max-h-[92vh] overflow-y-auto rounded-t-4xl bg-white shadow-lift animate-fade-up sm:rounded-4xl`}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-clinic-100 bg-white/95 px-6 py-4 backdrop-blur">
          <h3 className="text-lg">{title}</h3>
          <button
            onClick={onClose}
            data-autofocus
            aria-label="Close dialog"
            className="-mr-1 rounded-lg p-2 text-ink-muted transition hover:bg-clinic-50 hover:text-ink"
          >
            <Icon name="close" size={18} />
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
        {footer && (
          <div className="sticky bottom-0 border-t border-clinic-100 bg-white/95 px-6 py-4 backdrop-blur">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body,
  )
}
