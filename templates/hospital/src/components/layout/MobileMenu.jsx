import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from '../ui/Icon'
import Button from '../ui/Button'
import { navLinks, site } from '../../data/site'

export default function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    if (!open) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[90] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="absolute inset-0 bg-ink/55 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-lift animate-slide-in-right">
        <div className="flex items-center justify-between border-b border-clinic-100 px-5 py-4">
          <Link to="/" onClick={onClose} className="font-display text-lg font-extrabold">
                      {site.brand.primary}
                      <span className="text-mint-500">{site.brand.accent}</span>
                    </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-9 w-9 place-items-center rounded-lg text-ink-muted transition hover:bg-clinic-50 hover:text-ink"
          >
            <Icon name="close" size={19} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setExpanded((v) => (v === link.label ? null : link.label))}
                      aria-expanded={expanded === link.label}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold text-ink transition hover:bg-paper"
                    >
                      {link.label}
                      <Icon
                        name="chevronDown"
                        size={16}
                        className={`text-ink-muted transition-transform ${expanded === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className="grid transition-all duration-300"
                      style={{ gridTemplateRows: expanded === link.label ? '1fr' : '0fr' }}
                    >
                      <ul className="overflow-hidden pl-3">
                        {link.children.map((c) => (
                          <li key={c.to}>
                            <NavLink
                              to={c.to}
                              onClick={onClose}
                              className={({ isActive }) =>
                                `block rounded-lg px-4 py-2.5 text-sm transition ${
                                  isActive
                                    ? 'bg-clinic-50 font-semibold text-clinic-600'
                                    : 'text-ink-muted hover:bg-paper hover:text-ink'
                                }`
                              }
                            >
                              {c.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-[15px] font-semibold transition ${
                        isActive ? 'bg-clinic-50 text-clinic-600' : 'text-ink hover:bg-paper'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-clinic-100 bg-paper/70 px-5 py-5">
          <Button to="/appointment" onClick={onClose} full icon="calendar">
            Book an appointment
          </Button>
          <Button href={`tel:${site.phones.emergency}`} variant="emergency" full icon="phone">
            Emergency — {site.phones.emergency}
          </Button>
          <div className="flex justify-center gap-1.5 pt-1">
            {site.social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.name}
                className="grid h-9 w-9 place-items-center rounded-lg border border-clinic-100 bg-white text-ink-muted transition hover:border-clinic-300 hover:text-clinic-600"
              >
                <Icon name={s.icon} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
