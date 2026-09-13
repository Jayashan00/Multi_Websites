const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Order', href: '/order' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Offers', href: '/offers' },
]

const journalLinks = [
  {
    label: 'Journal',
    description: 'Stories, ingredients, and notes from our kitchen.',
    href: '/blog',
    number: '01',
  },
  {
    label: 'Chef & Team',
    description: 'Meet the people behind every plate and every welcome.',
    href: '/team',
    number: '02',
  },
]

const contactItem = { label: 'Contact', href: '/contact' }

type SiteHeaderProps = {
  activePath?: string
}

import { useSiteConfig } from '#/site-config/SiteConfigContext'

export function SiteHeader({ activePath = '/' }: SiteHeaderProps) {
  const { businessName, monogram, subtitle, logoUrl } = useSiteConfig()
  const journalIsActive = journalLinks.some((item) => item.href === activePath)

  return (
    <header className="site-header absolute inset-x-0 top-0 z-50 px-3 sm:px-5">
      <div className="mx-auto mt-3 flex min-h-[4.4rem] max-w-7xl items-center justify-between gap-4 rounded-[1.35rem] border border-white/10 bg-stone-950/80 px-3.5 shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-5">
        <a
          aria-label={`${businessName} home`}
          className="group flex shrink-0 items-center gap-3"
          href="/"
        >
          <span className="relative flex size-11 items-center justify-center overflow-hidden rounded-full border border-amber-300/40 bg-amber-400/10 font-serif text-sm font-semibold text-amber-300 transition-all duration-300 group-hover:rotate-[-6deg] group-hover:border-amber-300 group-hover:bg-amber-400 group-hover:text-stone-950">
            {logoUrl ? (
              <img src={logoUrl} alt={businessName} className="absolute inset-0 size-full object-cover" />
            ) : (
              monogram
            )}
            <span
              aria-hidden="true"
              className="absolute inset-1 rounded-full border border-current/20"
            />
          </span>
          <span className="hidden sm:block">
            <span className="block font-serif text-base leading-tight font-semibold tracking-wide text-white">
              {businessName}
            </span>
            <span className="mt-1 block text-[0.58rem] font-medium tracking-[0.18em] text-stone-500 uppercase">
              {subtitle}
            </span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center rounded-full border border-white/15 bg-black/35 p-1 shadow-inner">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  aria-current={item.href === activePath ? 'page' : undefined}
                  className={`group relative block rounded-full px-3.5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                    item.href === activePath
                      ? 'bg-amber-400/15 text-amber-200 shadow-sm'
                      : 'text-stone-200 hover:bg-white/10 hover:text-amber-200'
                  }`}
                  href={item.href}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-amber-400 transition-all duration-300 ${
                      item.href === activePath
                        ? 'scale-100 opacity-100'
                        : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                    }`}
                  />
                </a>
              </li>
            ))}

            <li>
              <details className="group/journal relative">
                <summary
                  aria-current={journalIsActive ? 'page' : undefined}
                  className={`flex cursor-pointer list-none items-center gap-1.5 rounded-full px-3.5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                    journalIsActive
                      ? 'bg-amber-400/15 text-amber-200 shadow-sm'
                      : 'text-stone-200 hover:bg-white/10 hover:text-amber-200'
                  }`}
                >
                  Journal
                  <span
                    aria-hidden="true"
                    className="text-[0.55rem] text-amber-300 transition-transform duration-300 group-open/journal:rotate-180"
                  >
                    ▼
                  </span>
                </summary>

                <div className="absolute top-[calc(100%+1rem)] right-0 w-80 overflow-hidden rounded-[1.4rem] border border-white/10 bg-stone-950/95 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                  <div className="border-b border-white/10 px-4 py-3">
                    <p className="text-[0.6rem] font-bold tracking-[0.18em] text-amber-300 uppercase">
                      Stories & people
                    </p>
                  </div>
                  <ul className="mt-1">
                    {journalLinks.map((item) => (
                      <li key={item.href}>
                        <a
                          aria-current={
                            item.href === activePath ? 'page' : undefined
                          }
                          className={`group/link flex items-start gap-4 rounded-xl p-4 transition-colors ${
                            item.href === activePath
                              ? 'bg-amber-400/15'
                              : 'hover:bg-white/[0.07]'
                          }`}
                          href={item.href}
                        >
                          <span className="mt-0.5 font-serif text-xs font-semibold text-amber-300">
                            {item.number}
                          </span>
                          <span>
                            <span className="block text-sm font-bold text-white transition-colors group-hover/link:text-amber-200">
                              {item.label}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-stone-500">
                              {item.description}
                            </span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>

            <li>
              <a
                aria-current={
                  contactItem.href === activePath ? 'page' : undefined
                }
                className={`group relative block rounded-full px-3.5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                  contactItem.href === activePath
                    ? 'bg-amber-400/15 text-amber-200 shadow-sm'
                    : 'text-stone-200 hover:bg-white/10 hover:text-amber-200'
                }`}
                href={contactItem.href}
              >
                {contactItem.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-amber-400 transition-all duration-300 ${
                    contactItem.href === activePath
                      ? 'scale-100 opacity-100'
                      : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                  }`}
                />
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <a className="hidden text-right 2xl:block" href="tel:+94112345678">
            <span className="block text-[0.58rem] font-semibold tracking-[0.15em] text-stone-500 uppercase">
              Reservations
            </span>
            <span className="mt-1 block text-xs font-semibold text-stone-200 transition-colors hover:text-amber-300">
              +94 11 234 5678
            </span>
          </a>

          <a
            className="group hidden items-center gap-2.5 rounded-full bg-amber-400 py-2.5 pr-3 pl-5 text-xs font-bold text-stone-950 shadow-[0_10px_30px_rgba(251,191,36,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300 sm:inline-flex"
            href="/reservation"
          >
            Reserve a Table
            <span
              aria-hidden="true"
              className="flex size-7 items-center justify-center rounded-full bg-stone-950 text-xs text-white transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>

          <details className="group relative lg:hidden">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:border-amber-300/50 hover:bg-white/10">
              <span className="sr-only">Open navigation menu</span>
              <span aria-hidden="true" className="relative block h-4 w-5">
                <span className="absolute top-1 left-0 h-px w-5 bg-current transition-transform duration-300 group-open:translate-y-[3px] group-open:rotate-45" />
                <span className="absolute bottom-1 left-0 h-px w-5 bg-current transition-transform duration-300 group-open:-translate-y-[3px] group-open:-rotate-45" />
              </span>
            </summary>

            <nav
              aria-label="Mobile navigation"
              className="absolute top-[calc(100%+0.8rem)] right-0 w-[min(20rem,calc(100vw-1.5rem))] overflow-hidden rounded-[1.35rem] border border-white/10 bg-stone-950/95 p-3 shadow-2xl backdrop-blur-xl"
            >
              <div className="border-b border-white/10 px-3 pt-2 pb-4">
                <p className="text-[0.6rem] font-semibold tracking-[0.18em] text-amber-300 uppercase">
                  Explore the restaurant
                </p>
              </div>
              <ul className="mt-2">
                {navigationItems.map((item, index) => (
                  <li key={item.href}>
                    <a
                      aria-current={
                        item.href === activePath ? 'page' : undefined
                      }
                      className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                        item.href === activePath
                          ? 'bg-amber-400/15 text-amber-200'
                          : 'text-stone-200 hover:bg-white/10 hover:text-amber-200'
                      }`}
                      href={item.href}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className="text-xs text-stone-600"
                      >
                        0{index + 1}
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <details className="group/mobile-journal">
                    <summary
                      className={`flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                        journalIsActive
                          ? 'bg-amber-400/15 text-amber-200'
                          : 'text-stone-200 hover:bg-white/10 hover:text-amber-200'
                      }`}
                    >
                      <span>Journal</span>
                      <span
                        aria-hidden="true"
                        className="text-[0.6rem] text-amber-300 transition-transform duration-300 group-open/mobile-journal:rotate-180"
                      >
                        ▼
                      </span>
                    </summary>
                    <ul className="mt-1 space-y-1 border-l border-white/10 pl-3">
                      {journalLinks.map((item) => (
                        <li key={item.href}>
                          <a
                            aria-current={
                              item.href === activePath ? 'page' : undefined
                            }
                            className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors ${
                              item.href === activePath
                                ? 'bg-amber-400/10 text-amber-200'
                                : 'text-stone-400 hover:bg-white/[0.07] hover:text-white'
                            }`}
                            href={item.href}
                          >
                            {item.label}
                            <span className="text-xs text-stone-600">
                              {item.number}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
                <li>
                  <a
                    aria-current={
                      contactItem.href === activePath ? 'page' : undefined
                    }
                    className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                      contactItem.href === activePath
                        ? 'bg-amber-400/15 text-amber-200'
                        : 'text-stone-200 hover:bg-white/10 hover:text-amber-200'
                    }`}
                    href={contactItem.href}
                  >
                    {contactItem.label}
                    <span aria-hidden="true" className="text-xs text-stone-600">
                      08
                    </span>
                  </a>
                </li>
              </ul>
              <a
                className="mt-3 flex items-center justify-between rounded-xl bg-amber-400 px-4 py-3.5 text-sm font-bold text-stone-950"
                href="/reservation"
              >
                Reserve a Table
                <span aria-hidden="true">→</span>
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
