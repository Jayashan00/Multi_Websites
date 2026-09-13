import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import Button from '../ui/Button'

import { site } from '../../data/site'
import { departments } from '../../data/departments'

const quickLinks = [
  { label: 'About us', to: '/about' },
  { label: 'Our doctors', to: '/doctors' },
  { label: 'Medical services', to: '/services' },
  { label: 'Health packages', to: '/health-packages' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'News & articles', to: '/news' },
  { label: 'Patient stories', to: '/testimonials' },
  { label: 'FAQ', to: '/faq' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const subscribe = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setError('Enter a valid email address, like name@example.com')
      return
    }
    setError('')
    setSent(true)
    setEmail('')
  }

  return (
    <footer className="no-print relative mt-auto overflow-hidden bg-ink text-clinic-100">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-clinic opacity-30"
        style={{ backgroundSize: '38px 38px' }}
        aria-hidden="true"
      />

      {/* Newsletter band */}
      <div className="relative border-b border-white/10">
        <div className="container grid gap-6 py-10 lg:grid-cols-[1fr_minmax(0,460px)] lg:items-center">
          <div>
            <h2 className="text-2xl text-white">Health notes, once a month</h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-clinic-100/80">
              Seasonal health advice, new clinic timings and free camp dates — written by our
              consultants. One email a month, and you can leave any time.
            </p>
          </div>
          <div>
            {sent ? (
              <p className="flex items-center gap-2.5 rounded-xl bg-mint-500/15 px-4 py-3.5 text-sm font-medium text-mint-200 ring-1 ring-mint-400/30">
                <Icon name="check" size={17} strokeWidth={2.5} />
                You are on the list. Look out for the next issue.
              </p>
            ) : (
              <form onSubmit={subscribe} noValidate className="flex flex-col gap-2 sm:flex-row">
                <div className="flex-1">
                  <label htmlFor="footer-email" className="sr-only">Email address</label>
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={!!error}
                    className="h-11 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-clinic-100/50 focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-400/15"
                  />
                  {error && <p className="mt-1.5 text-xs text-emergency-400" role="alert">{error}</p>}
                </div>
                <Button type="submit" variant="mint" iconRight="send">Subscribe</Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="container relative grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-clinic-500">
              {site.logoUrl ? (
                <img src={site.logoUrl} alt={site.name} className="h-full w-full object-cover" />
              ) : (
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  <path d="M2 13h4l1.5-3.5L10 17l2-5 1.5 3H16" fill="none" stroke="#12B7A4" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.5 7.5v7M15 11h7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              )}
            </span>
            <span className="font-display text-xl font-extrabold text-white">
                          {site.brand.primary}
                          <span className="text-mint-400">{site.brand.accent}</span>
                        </span>
                      </Link>
                      <p className="mt-4 max-w-sm text-sm leading-relaxed text-clinic-100/75">
                        A {new Date().getFullYear() - site.established}-year-old, 180-bed hospital in the city
                        centre. Ten specialist departments, an accredited laboratory and an emergency unit that
                        has never closed.
                      </p>
          <div className="mt-5 flex gap-1.5">
            {site.social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.name}
                className="grid h-9 w-9 place-items-center rounded-lg bg-white/8 text-clinic-100 ring-1 ring-white/10 transition hover:bg-mint-500 hover:text-white"
              >
                <Icon name={s.icon} size={16} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="font-mono text-2xs font-semibold uppercase tracking-[0.2em] text-mint-400">
            Quick links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-flex items-center gap-1.5 text-sm text-clinic-100/80 transition hover:translate-x-0.5 hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-mint-400/60" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Departments">
          <h3 className="font-mono text-2xs font-semibold uppercase tracking-[0.2em] text-mint-400">
            Departments
          </h3>
          <ul className="mt-4 space-y-2.5">
            {departments.slice(0, 8).map((d) => (
              <li key={d.slug}>
                <Link
                  to={`/departments/${d.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-clinic-100/80 transition hover:translate-x-0.5 hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-mint-400/60" />
                  {d.name.split(' — ')[0]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-mono text-2xs font-semibold uppercase tracking-[0.2em] text-mint-400">
            Reach us
          </h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" size={17} className="mt-0.5 shrink-0 text-mint-400" />
              <span className="text-clinic-100/80">
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" size={17} className="mt-0.5 shrink-0 text-mint-400" />
              <span className="font-mono text-clinic-100/80">
                <a href={`tel:${site.phones.general.replace(/\s/g, '')}`} className="block transition hover:text-white">
                  {site.phones.general}
                </a>
                <a href={`tel:${site.phones.emergency}`} className="block text-emergency-400 transition hover:text-emergency-100">
                  {site.phones.emergency} — emergency
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" size={17} className="mt-0.5 shrink-0 text-mint-400" />
              <a href={`mailto:${site.email.general}`} className="text-clinic-100/80 transition hover:text-white">
                {site.email.general}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" size={17} className="mt-0.5 shrink-0 text-mint-400" />
              <span className="text-clinic-100/80">
                Emergency & pharmacy open 24 hours
                <br />
                OPD · Mon – Sat, 7.00 am – 9.00 pm
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* ECG strip above the legal line — the signature mark, one last time */}
      <div className="relative">
        <svg viewBox="0 0 1200 30" preserveAspectRatio="none" className="h-6 w-full text-mint-400/25" aria-hidden="true">
          <path
            d="M0 20h150l9-11 10 20 12-25 10 28 9-12h140l9-11 10 20 12-25 10 28 9-12h140l9-11 10 20 12-25 10 28 9-12h400"
            fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-2xs tracking-[0.06em] text-clinic-100/60">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-2xs tracking-[0.06em] text-clinic-100/60">
            Frontend by Quick Solutions (Pvt) Ltd.
          </p>
        </div>
      </div>
    </footer>
  )
}
