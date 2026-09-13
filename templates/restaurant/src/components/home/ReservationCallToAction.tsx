export function ReservationCallToAction() {
  return (
    <section
      id="reservation"
      className="relative isolate scroll-mt-20 overflow-hidden bg-stone-950 text-white"
    >
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
        height="1200"
        loading="lazy"
        src="/images/hero-dining.jpg"
        width="1800"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-stone-950/80 backdrop-saturate-50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.17),transparent_58%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="reveal-on-scroll mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-amber-300 uppercase backdrop-blur-md">
            <span className="deal-pulse size-2 rounded-full bg-amber-300" />
            Reservations now open
          </div>
          <h2 className="mt-7 font-serif text-4xl leading-tight font-medium tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Your table is
            <span className="text-amber-300 italic"> waiting.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
            Join us for an evening of seasonal dishes, warm hospitality, and the
            kind of moments that deserve a place at the table.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-stone-950 shadow-[0_15px_42px_rgba(251,191,36,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
              href="/reservation"
            >
              Book a Table
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              className="inline-flex items-center rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-stone-950"
              href="tel:+94112345678"
            >
              Call +94 11 234 5678
            </a>
          </div>
        </div>

        <div className="reveal-on-scroll reveal-delay-1 mx-auto mt-14 grid max-w-4xl grid-cols-1 divide-y divide-white/15 rounded-2xl border border-white/15 bg-stone-950/45 px-6 py-2 backdrop-blur-md sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="px-5 py-5 text-center">
            <p className="text-xs tracking-[0.15em] text-stone-500 uppercase">
              Lunch
            </p>
            <p className="mt-2 font-serif text-lg text-white">
              11:30 AM — 3:00 PM
            </p>
          </div>
          <div className="px-5 py-5 text-center">
            <p className="text-xs tracking-[0.15em] text-stone-500 uppercase">
              Dinner
            </p>
            <p className="mt-2 font-serif text-lg text-white">
              6:00 PM — 11:00 PM
            </p>
          </div>
          <div className="px-5 py-5 text-center">
            <p className="text-xs tracking-[0.15em] text-stone-500 uppercase">
              Groups
            </p>
            <p className="mt-2 font-serif text-lg text-white">
              Private dining available
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
