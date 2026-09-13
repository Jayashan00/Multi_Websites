export function ReservationHero() {
  return (
    <section className="relative isolate min-h-[72vh] overflow-hidden bg-stone-950 text-white">
      <img
        alt="An elegant restaurant table prepared for an evening reservation"
        className="hero-image absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
        src="/images/offer-table.jpg"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.97)_0%,rgba(12,10,9,0.84)_43%,rgba(12,10,9,0.35)_76%,rgba(12,10,9,0.12)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/25"
      />
      <div
        aria-hidden="true"
        className="hero-glow absolute -bottom-40 -left-28 size-[28rem] rounded-full bg-amber-400/15 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-5 pt-36 pb-24 sm:px-8 lg:py-40">
        <div className="hero-copy max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-amber-300 uppercase">
            <span aria-hidden="true" className="h-px w-10 bg-amber-400" />
            Table reservations
          </div>
          <h1 className="mt-7 font-serif text-5xl leading-[0.98] font-medium tracking-[-0.045em] sm:text-7xl lg:text-8xl">
            Your table is
            <span className="block text-amber-300 italic">waiting.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
            Choose your moment, select the perfect table, and let us prepare an
            evening worth remembering.
          </p>
          <a
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-bold text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
            href="#reservation-form"
          >
            Find your table
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &darr;
            </span>
          </a>
        </div>
      </div>

      <div className="hero-note absolute right-8 bottom-8 hidden rounded-[1.5rem] border border-white/15 bg-stone-950/65 p-5 backdrop-blur-xl lg:block">
        <p className="text-[0.62rem] font-bold tracking-[0.17em] text-amber-300 uppercase">
          Dinner service
        </p>
        <p className="mt-2 font-serif text-xl">Daily until 11:00 PM</p>
        <p className="mt-1 text-xs text-stone-400">
          Colombo &middot; Sri Lanka
        </p>
      </div>
    </section>
  )
}
