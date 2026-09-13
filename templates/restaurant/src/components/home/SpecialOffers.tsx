export function SpecialOffers() {
  return (
    <section
      id="offers"
      className="relative scroll-mt-20 overflow-hidden bg-stone-950 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 size-96 rounded-full bg-amber-400/10 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="reveal-on-scroll flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-amber-300 uppercase">
              <span className="h-px w-10 bg-amber-400" aria-hidden="true" />A
              little extra
            </div>
            <h2 className="mt-6 font-serif text-4xl leading-tight font-medium tracking-[-0.03em] sm:text-5xl">
              More reasons to
              <span className="text-amber-300 italic"> gather.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-stone-400">
            Thoughtfully composed experiences for date nights, shared tables,
            and unhurried weekend celebrations.
          </p>
        </div>

        <div className="reveal-on-scroll reveal-delay-1 relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900 shadow-2xl">
          <img
            alt="A generous restaurant spread arranged for sharing"
            className="absolute inset-0 h-full w-full object-cover object-center"
            height="900"
            loading="lazy"
            src="/images/offer-table.jpg"
            width="1600"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.98)_0%,rgba(12,10,9,0.93)_38%,rgba(12,10,9,0.5)_68%,rgba(12,10,9,0.2)_100%)]"
          />

          <div className="relative max-w-2xl px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/35 bg-amber-400/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-amber-300 uppercase backdrop-blur-md">
              <span className="deal-pulse size-2 rounded-full bg-amber-300" />
              Friday — Sunday
            </div>
            <p className="mt-7 text-sm font-semibold tracking-[0.2em] text-stone-400 uppercase">
              The weekend table
            </p>
            <h3 className="mt-3 max-w-xl font-serif text-4xl leading-tight font-medium sm:text-5xl">
              Three courses.
              <span className="text-amber-300 italic">
                {' '}
                One perfect evening.
              </span>
            </h3>
            <p className="mt-6 max-w-lg text-base leading-7 text-stone-300">
              Choose a starter, main, and dessert from our seasonal menu, with a
              complimentary house drink on arrival.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div>
                <span className="text-sm text-stone-400">From</span>
                <p className="font-serif text-3xl font-semibold text-amber-300 sm:text-4xl">
                  LKR 12,500
                  <span className="ml-1 font-sans text-sm font-normal text-stone-400">
                    per guest
                  </span>
                </p>
              </div>
              <a
                className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
                href="/offers"
              >
                View this offer
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <article className="reveal-on-scroll rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 transition-colors duration-300 hover:border-amber-300/35 hover:bg-white/[0.07] sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-amber-300 uppercase">
                  Midweek
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold">
                  Lunch for two
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-stone-400">
                  Two seasonal mains and two handcrafted drinks, Monday through
                  Thursday.
                </p>
              </div>
              <span className="shrink-0 text-right font-serif text-2xl text-amber-300 sm:text-3xl">
                LKR 9,900
              </span>
            </div>
          </article>

          <article className="reveal-on-scroll reveal-delay-1 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 transition-colors duration-300 hover:border-amber-300/35 hover:bg-white/[0.07] sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-amber-300 uppercase">
                  Golden hour
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold">
                  Drinks & small plates
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-stone-400">
                  Selected cocktails and chef&apos;s small plates, daily from
                  4:00 to 6:00 PM.
                </p>
              </div>
              <span className="shrink-0 font-serif text-3xl text-amber-300">
                20%
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
