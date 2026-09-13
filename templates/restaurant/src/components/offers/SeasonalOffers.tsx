const marqueeItems = [
  'Seasonal ingredients',
  'Limited menus',
  'Colombo evenings',
  'Made for sharing',
]

export function SeasonalOffers() {
  return (
    <section className="overflow-hidden bg-[#f7f2e9] text-stone-950">
      <div className="border-y border-stone-200 bg-amber-400 py-4">
        <div className="offer-marquee flex w-max items-center gap-8">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span className="flex items-center gap-8" key={`${item}-${index}`}>
              <span className="text-xs font-bold tracking-[0.18em] uppercase">
                {item}
              </span>
              <span aria-hidden="true" className="text-lg">
                &bull;
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll relative min-h-[38rem] overflow-hidden rounded-[2.25rem] bg-stone-950 text-white shadow-[0_28px_80px_rgba(41,37,36,0.18)]">
          <img
            alt="A seasonal dessert served for the restaurant's limited menu"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            src="/images/special-dessert.jpg"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.95)_0%,rgba(12,10,9,0.82)_45%,rgba(12,10,9,0.2)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-transparent to-transparent" />

          <div className="relative flex min-h-[38rem] items-center p-7 sm:p-12 lg:p-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-amber-400" />
                <p className="text-xs font-bold tracking-[0.19em] text-amber-300 uppercase">
                  Seasonal chapter
                </p>
              </div>
              <h2 className="mt-6 font-serif text-5xl leading-[1.02] font-semibold sm:text-6xl">
                The monsoon dessert collection.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-stone-300 sm:text-base">
                Tropical fruit, warm spice, toasted coconut, and dark chocolate
                come together in a limited selection by our pastry kitchen.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs">
                <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-md">
                  Available through August
                </span>
                <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-md">
                  From LKR 1,850
                </span>
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-bold text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
                  href="/menu"
                >
                  Explore the menu
                  <span className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
                <a
                  className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:border-amber-300 hover:text-amber-300"
                  href="/reservation"
                >
                  Book a table
                </a>
              </div>
            </div>
          </div>

          <div className="absolute right-8 bottom-8 hidden size-32 place-items-center rounded-full border border-white/20 bg-stone-950/45 text-center backdrop-blur-md lg:grid">
            <p className="text-[0.6rem] leading-5 font-bold tracking-[0.16em] text-amber-300 uppercase">
              Limited
              <br /> seasonal
              <br /> menu
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
