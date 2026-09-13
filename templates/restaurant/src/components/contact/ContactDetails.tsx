const details = [
  {
    label: 'Visit',
    value: '42 Galle Road, Colombo 03',
    note: 'Sri Lanka',
    href: 'https://maps.google.com/?q=Colombo+03+Sri+Lanka',
    action: 'Directions',
  },
  {
    label: 'Call',
    value: '+94 11 234 5678',
    note: 'Daily from 10:00 AM',
    href: 'tel:+94112345678',
    action: 'Call now',
  },
  {
    label: 'Write',
    value: 'hello@restaurantname.lk',
    note: 'Replies within one business day',
    href: 'mailto:hello@restaurantname.lk',
    action: 'Email us',
  },
]

export function ContactDetails() {
  return (
    <section
      className="relative scroll-mt-20 bg-[#f7f2e9] text-stone-950"
      id="contact-details"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="reveal-on-scroll grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              Reach us directly
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl">
              However you prefer.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-stone-600 lg:justify-self-end">
            For same-day reservations, please call us. For events, feedback,
            dietary requirements, or general questions, send us a message.
          </p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(41,37,36,0.07)] md:grid-cols-3">
          {details.map((detail, index) => (
            <article
              className={`reveal-on-scroll p-7 sm:p-8 ${
                index < details.length - 1
                  ? 'border-b border-stone-200 md:border-r md:border-b-0'
                  : ''
              }`}
              key={detail.label}
            >
              <div className="flex items-center justify-between">
                <p className="text-[0.65rem] font-bold tracking-[0.2em] text-amber-700 uppercase">
                  {detail.label}
                </p>
                <span className="font-serif text-xs text-stone-300">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-6 break-words font-serif text-xl font-semibold text-stone-950 sm:text-2xl">
                {detail.value}
              </p>
              <p className="mt-2 text-sm text-stone-500">{detail.note}</p>
              <a
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-stone-800 transition-colors hover:text-amber-700"
                href={detail.href}
                rel={detail.href.startsWith('http') ? 'noreferrer' : undefined}
                target={detail.href.startsWith('http') ? '_blank' : undefined}
              >
                {detail.action}
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
