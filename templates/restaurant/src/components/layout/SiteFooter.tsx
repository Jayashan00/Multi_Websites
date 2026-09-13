const footerGroups = [
  {
    title: 'Explore',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Menu', href: '/menu' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Offers', href: '/offers' },
      { label: 'Journal', href: '/blog' },
    ],
  },
  {
    title: 'Experience',
    links: [
      { label: 'Order Online', href: '/order' },
      { label: 'Reservations', href: '/reservation' },
      { label: 'Private Dining', href: '/catering' },
      { label: 'Chef & Team', href: '/team' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/' },
]

import { useSiteConfig } from '#/site-config/SiteConfigContext'

export function SiteFooter() {
  const { businessName, monogram, subtitle, logoUrl, address, mapUrl, phone } = useSiteConfig()
  return (
    <footer className="relative overflow-hidden bg-[#0d0c0b] text-stone-300">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 size-[28rem] translate-x-1/3 -translate-y-1/2 rounded-full border border-amber-300/[0.08]"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 size-[22rem] translate-x-1/3 -translate-y-1/2 rounded-full border border-amber-300/[0.06]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal-on-scroll grid gap-8 py-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:py-16">
          <div>
            <a
              aria-label={`${businessName} home`}
              className="group inline-flex items-center gap-4"
              href="/"
            >
              <span className="relative grid size-11 place-items-center overflow-hidden rounded-full border border-amber-300/35 font-serif text-sm font-semibold text-amber-300 transition-all duration-300 group-hover:rotate-[-7deg] group-hover:bg-amber-400 group-hover:text-stone-950">
                {logoUrl ? (
                  <img src={logoUrl} alt={businessName} className="absolute inset-0 size-full object-cover" />
                ) : (
                  monogram
                )}
                <span
                  aria-hidden="true"
                  className="absolute inset-1 rounded-full border border-current/15"
                />
              </span>
              <span>
                <span className="block font-serif text-lg font-semibold text-white">
                  {businessName}
                </span>
                <span className="mt-1 block text-[0.58rem] font-semibold tracking-[0.2em] text-stone-500 uppercase">
                  {subtitle}
                </span>
              </span>
            </a>

            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-[1.08] font-medium tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Good food. Great company.
              <span className="block text-amber-300 italic">
                A table worth returning to.
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-md text-sm leading-7 text-stone-400">
              Join us for seasonal cooking, warm Sri Lankan hospitality, and an
              evening made to be remembered.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
                href="/reservation"
              >
                Book a table
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-amber-300 hover:text-amber-300"
                href={`tel:${phone || '+94112345678'}`}
              >
                Call us
              </a>
            </div>
          </div>
        </div>

        <div className="grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-b border-white/10 py-6 sm:border-r sm:pr-8 lg:border-b-0">
            <p className="text-[0.62rem] font-bold tracking-[0.18em] text-amber-300 uppercase">
              Find us
            </p>
            <address className="mt-4 not-italic">
              <a
                className="text-sm leading-7 text-stone-300 transition-colors hover:text-white"
                href={mapUrl}
                rel="noreferrer"
                target="_blank"
              >
                {address}
              </a>
            </address>
          </div>

          <div className="border-b border-white/10 py-6 sm:pl-8 lg:border-r lg:border-b-0 lg:pr-8">
            <p className="text-[0.62rem] font-bold tracking-[0.18em] text-amber-300 uppercase">
              Opening hours
            </p>
            <dl className="mt-4 space-y-1.5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-stone-500">Mon — Fri</dt>
                <dd className="text-stone-300">11:30 — 23:00</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-stone-500">Sat — Sun</dt>
                <dd className="text-stone-300">10:00 — 23:30</dd>
              </div>
            </dl>
          </div>

          {footerGroups.map((group, index) => (
            <div
              className={`py-6 ${
                index === 0
                  ? 'border-b border-white/10 sm:border-r sm:pr-8 lg:border-b-0 lg:pl-8'
                  : 'sm:pl-8'
              }`}
              key={group.title}
            >
              <h2 className="text-[0.62rem] font-bold tracking-[0.18em] text-amber-300 uppercase">
                {group.title}
              </h2>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      className="group inline-flex items-center gap-2 text-sm text-stone-500 transition-colors duration-300 hover:text-white"
                      href={link.href}
                    >
                      <span className="size-1 rounded-full bg-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid gap-5 py-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:gap-7">
            <a
              className="text-white transition-colors hover:text-amber-300"
              href="tel:+94112345678"
            >
              +94 11 234 5678
            </a>
            <a
              className="text-stone-500 transition-colors hover:text-amber-300"
              href="mailto:hello@restaurantname.lk"
            >
              hello@restaurantname.lk
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            {socialLinks.map((social) => (
              <a
                aria-label={`Visit our ${social.label} page`}
                className="group inline-flex items-center gap-2 text-xs font-semibold text-stone-500 transition-colors hover:text-amber-300"
                href={social.href}
                key={social.label}
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/[0.07] py-4 text-[0.68rem] text-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              className="transition-colors hover:text-stone-300"
              href="/privacy"
            >
              Privacy
            </a>
            <a className="transition-colors hover:text-stone-300" href="/terms">
              Terms
            </a>
            <a
              className="group inline-flex items-center gap-2 transition-colors hover:text-amber-300"
              href="#main-content"
            >
              Back to top
              <span className="transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
