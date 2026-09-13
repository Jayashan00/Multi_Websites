const contactDetails = [
  {
    label: 'Address',
    content: '42 Galle Road, Colombo 03, Sri Lanka',
    href: 'https://maps.google.com/?q=Colombo+03+Sri+Lanka',
  },
  {
    label: 'Reservations',
    content: '+94 11 234 5678',
    href: 'tel:+94112345678',
  },
  {
    label: 'Email',
    content: 'hello@restaurantname.lk',
    href: 'mailto:hello@restaurantname.lk',
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 overflow-hidden bg-[#fbf8f2] text-stone-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="reveal-on-scroll grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-amber-700 uppercase">
              <span className="h-px w-10 bg-amber-600" aria-hidden="true" />
              Plan your visit
            </div>
            <h2 className="mt-6 font-serif text-4xl leading-tight font-medium tracking-[-0.03em] sm:text-5xl">
              Come in. Stay a while.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-stone-500 lg:justify-self-end">
            Find us in the heart of Colombo, moments from the coast. Our team is
            here to help with reservations, private dining, and special
            occasions.
          </p>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_28px_80px_rgba(41,37,36,0.1)] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal-on-scroll bg-stone-950 p-7 text-white sm:p-10 lg:p-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase">
              Restaurant details
            </p>

            <address className="mt-8 space-y-7 not-italic">
              {contactDetails.map((detail) => (
                <div
                  className="border-b border-white/10 pb-6"
                  key={detail.label}
                >
                  <p className="text-xs tracking-[0.14em] text-stone-500 uppercase">
                    {detail.label}
                  </p>
                  <a
                    className="mt-2 inline-block text-base leading-7 text-stone-200 transition-colors hover:text-amber-300"
                    href={detail.href}
                  >
                    {detail.content}
                  </a>
                </div>
              ))}
            </address>

            <div className="mt-7">
              <p className="text-xs tracking-[0.14em] text-stone-500 uppercase">
                Opening hours
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-5">
                  <dt className="text-stone-400">Monday — Friday</dt>
                  <dd className="text-stone-200">11:30 AM — 11:00 PM</dd>
                </div>
                <div className="flex justify-between gap-5">
                  <dt className="text-stone-400">Saturday — Sunday</dt>
                  <dd className="text-stone-200">10:00 AM — 11:30 PM</dd>
                </div>
              </dl>
            </div>

            <a
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
              href="https://maps.google.com/?q=Colombo+03+Sri+Lanka"
              rel="noreferrer"
              target="_blank"
            >
              Get directions
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>
          </div>

          <div className="reveal-on-scroll reveal-delay-1 relative min-h-[28rem] bg-stone-200">
            <iframe
              className="absolute inset-0 h-full w-full border-0 grayscale-[25%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Colombo%2003%20Sri%20Lanka&output=embed"
              title="Map showing the restaurant location in Colombo 03"
            />
            <div className="pointer-events-none absolute right-5 bottom-5 rounded-xl border border-white/40 bg-white/90 px-4 py-3 text-xs font-medium text-stone-700 shadow-lg backdrop-blur-md">
              Colombo 03 · Sri Lanka
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
