export function OffersHero() {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden bg-stone-950 text-white">
      <img
        alt="A table filled with dishes for a special restaurant promotion"
        className="hero-image absolute inset-0 h-full w-full object-cover object-[62%_center]"
        fetchPriority="high"
        src="/images/special-pizza.jpg"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.98)_0%,rgba(12,10,9,0.9)_45%,rgba(12,10,9,0.48)_75%,rgba(12,10,9,0.2)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/25"
      />
      <div
        aria-hidden="true"
        className="hero-glow absolute -bottom-36 -left-24 size-[32rem] rounded-full bg-amber-400/15 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-5 pt-36 pb-28 sm:px-8 lg:py-40">
        <div className="hero-copy max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-amber-300 uppercase">
            <span aria-hidden="true" className="h-px w-10 bg-amber-400" />
            Offers worth gathering for
          </div>
          <h1 className="mt-7 font-serif text-5xl leading-[0.96] font-medium tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            More moments.
            <span className="block text-amber-300 italic">More to savour.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
            Limited menus, generous combinations, and seasonal dining
            experiences created to make every gathering feel special.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-bold text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
              href="#featured-offer"
            >
              Explore current offers
              <span className="transition-transform duration-300 group-hover:translate-y-1">
                &darr;
              </span>
            </a>
            <a
              className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-amber-300 hover:text-amber-300"
              href="/reservation"
            >
              Reserve a table
            </a>
          </div>
        </div>
      </div>

      <div className="hero-note absolute right-8 bottom-8 hidden overflow-hidden rounded-[1.5rem] border border-white/15 bg-stone-950/65 backdrop-blur-xl lg:block">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          {[
            ['04', 'Experiences'],
            ['20%', 'Up to'],
            ['Aug', 'This month'],
          ].map(([value, label]) => (
            <div className="px-6 py-5 text-center" key={label}>
              <p className="font-serif text-2xl text-amber-300">{value}</p>
              <p className="mt-1 text-[0.58rem] tracking-wider text-stone-400 uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
