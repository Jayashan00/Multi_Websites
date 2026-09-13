export function PromotionalBanner() {
  return (
    <section
      className="relative overflow-hidden bg-[#f7f2e9] text-stone-950"
      id="featured-offer"
    >
      <div
        aria-hidden="true"
        className="absolute top-24 -right-56 size-[34rem] rounded-full border border-amber-200"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-amber-600" />
              <p className="text-xs font-bold tracking-[0.19em] text-amber-700 uppercase">
                Featured this month
              </p>
            </div>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
              One special evening, thoughtfully composed.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-stone-600">
            A limited menu built around golden-hour dining and the season’s most
            expressive ingredients.
          </p>
        </div>

        <div className="reveal-on-scroll reveal-delay-1 group relative mt-12 overflow-hidden rounded-[2.25rem] bg-stone-950 text-white shadow-[0_28px_80px_rgba(41,37,36,0.2)]">
          <div className="grid lg:grid-cols-[1.16fr_0.84fr]">
            <div className="relative min-h-[31rem] overflow-hidden lg:min-h-[39rem]">
              <img
                alt="Seasonal salmon dinner served for the sunset supper offer"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="/images/special-salmon.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-stone-950/15" />
              <div className="absolute right-6 bottom-6 left-6 flex items-end justify-between gap-6">
                <div>
                  <p className="text-[0.62rem] font-bold tracking-[0.18em] text-amber-300 uppercase">
                    Three-course experience
                  </p>
                  <p className="mt-2 font-serif text-3xl">Sunset Supper</p>
                </div>
                <span className="deal-pulse hidden rounded-full bg-amber-400 px-4 py-2 text-xs font-bold text-stone-950 sm:block">
                  Limited tables
                </span>
              </div>
            </div>

            <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <span className="absolute top-0 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f7f2e9] lg:top-1/2 lg:left-0 lg:-translate-x-1/2" />
              <p className="text-xs font-bold tracking-[0.18em] text-amber-300 uppercase">
                08 &ndash; 31 August
              </p>
              <h3 className="mt-5 font-serif text-4xl leading-tight font-semibold">
                Sunset Supper for Two
              </h3>
              <p className="mt-5 text-sm leading-7 text-stone-400">
                Begin with a seasonal starter, choose two chef-curated mains,
                and finish with a dessert made for sharing.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-y border-white/10 py-6">
                <div>
                  <p className="text-[0.6rem] tracking-wider text-stone-500 uppercase">
                    For two guests
                  </p>
                  <p className="mt-2 font-serif text-2xl text-white">
                    LKR 12,900
                  </p>
                </div>
                <div>
                  <p className="text-[0.6rem] tracking-wider text-stone-500 uppercase">
                    Served from
                  </p>
                  <p className="mt-2 font-serif text-2xl text-white">5:30 PM</p>
                </div>
              </div>

              <a
                className="group/button mt-8 flex items-center justify-between rounded-full bg-amber-400 py-3 pr-3 pl-6 text-sm font-bold text-stone-950 transition-all duration-300 hover:bg-amber-300"
                href="/reservation"
              >
                Reserve this experience
                <span className="grid size-9 place-items-center rounded-full bg-stone-950 text-white transition-transform group-hover/button:translate-x-0.5">
                  &rarr;
                </span>
              </a>
              <p className="mt-4 text-center text-[0.62rem] leading-5 text-stone-500">
                Subject to table availability. Advance reservation recommended.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
