import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from '../ui/Icon'
import Button from '../ui/Button'
import MobileMenu from './MobileMenu'
import { navLinks, site } from '../../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openDrop, setOpenDrop] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setOpenDrop(null)
  }, [pathname])

  return (
    <>
      {/* Utility strip — contact details and the emergency line, always visible */}
      <div className="no-print hidden bg-ink text-white lg:block">
        <div className="container flex h-10 items-center justify-between gap-6">
          <div className="flex items-center gap-6 font-mono text-2xs tracking-[0.06em] text-clinic-100">
            <a href={`tel:${site.phones.general.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 transition hover:text-white">
              <Icon name="phone" size={13} />
              {site.phones.general}
            </a>
            <a href={`mailto:${site.email.general}`} className="inline-flex items-center gap-2 transition hover:text-white">
              <Icon name="mail" size={13} />
              {site.email.general}
            </a>
            <span className="inline-flex items-center gap-2">
              <Icon name="pin" size={13} />
              {site.address.line1}, {site.address.line2}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2 font-mono text-2xs tracking-[0.06em] text-clinic-100">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-400" />
              </span>
              Emergency open 24 hours
            </span>
            <div className="flex items-center gap-1">
              {site.social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.name}
                  className="grid h-7 w-7 place-items-center rounded-md text-clinic-100 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon name={s.icon} size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <header
        className={`no-print sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-clinic-100 bg-white/92 shadow-card backdrop-blur-xl'
            : 'border-b border-transparent bg-white'
        }`}
      >
        <nav className="container flex h-[68px] items-center justify-between gap-4" aria-label="Main">
          <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${site.name} home`}>
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-clinic-500 shadow-card">
              {site.logoUrl ? (
                <img src={site.logoUrl} alt={site.name} className="h-full w-full object-cover" />
              ) : (
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  <path d="M2 13h4l1.5-3.5L10 17l2-5 1.5 3H16" fill="none" stroke="#12B7A4" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.5 7.5v7M15 11h7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              )}
            </span>
            <span className="leading-none">
                          <span className="block font-display text-[19px] font-extrabold tracking-[-0.02em]">
                            {site.brand.primary}
                            <span className="text-mint-500">{site.brand.accent}</span>
                          </span>
                          <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.24em] text-ink-muted">
                            {site.kicker}
                          </span>
                        </span>
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDrop(link.label)}
                onMouseLeave={() => link.children && setOpenDrop(null)}
              >
                {link.children ? (
                  <>
                    <button
                      onClick={() => setOpenDrop((v) => (v === link.label ? null : link.label))}
                      aria-expanded={openDrop === link.label}
                      className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                        link.children.some((c) => pathname.startsWith(c.to))
                          ? 'text-clinic-600'
                          : 'text-ink-soft hover:text-clinic-600'
                      }`}
                    >
                      {link.label}
                      <Icon
                        name="chevronDown"
                        size={14}
                        className={`transition-transform duration-200 ${openDrop === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openDrop === link.label && (
                      <div className="absolute left-0 top-full w-60 pt-2">
                        <ul className="overflow-hidden rounded-xl2 border border-clinic-100 bg-white p-1.5 shadow-lift animate-fade-up">
                          {link.children.map((child) => (
                            <li key={child.to}>
                              <NavLink
                                to={child.to}
                                className={({ isActive }) =>
                                  `flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                                    isActive
                                      ? 'bg-clinic-50 text-clinic-600'
                                      : 'text-ink-soft hover:bg-paper hover:text-clinic-600'
                                  }`
                                }
                              >
                                {child.label}
                                <Icon name="chevronRight" size={14} className="opacity-40" />
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `relative inline-block rounded-lg px-3 py-2 text-sm font-semibold transition ${
                        isActive ? 'text-clinic-600' : 'text-ink-soft hover:text-clinic-600'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && (
                          <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-mint-500" />
                        )}
                      </>
                    )}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              href={`tel:${site.phones.emergency}`}
              variant="emergency"
              size="sm"
              icon="phone"
              className="hidden sm:inline-flex"
            >
              {site.phones.emergency}
            </Button>
            <Button to="/appointment" size="sm" icon="calendar" className="hidden md:inline-flex">
              Book appointment
            </Button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-lg border border-clinic-100 text-ink transition hover:bg-clinic-50 lg:hidden"
            >
              <Icon name="menu" size={20} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
