export function GalleryHero() {
  return (
    <section className="relative isolate min-h-[86vh] overflow-hidden bg-stone-950 text-white">
      <img
        alt="An atmospheric view of the restaurant dining room"
        className="hero-image absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
        src="/images/restaurant-interior.jpg"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.98)_0%,rgba(12,10,9,0.91)_42%,rgba(12,10,9,0.52)_70%,rgba(12,10,9,0.28)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30"
      />
      <div
        aria-hidden="true"
        className="hero-glow absolute -bottom-32 left-1/3 size-[34rem] rounded-full bg-amber-400/15 blur-3xl"
      />

      <div className="relative mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-5 pt-36 pb-24 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-40">
        <div className="hero-copy relative z-10 max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-amber-300 uppercase">
            <span aria-hidden="true" className="h-px w-10 bg-amber-400" />
            The visual journal
          </div>
          <h1 className="mt-7 font-serif text-6xl leading-[0.9] font-medium tracking-[-0.055em] sm:text-8xl lg:text-[6.6rem]">
            A feast for
            <span className="block text-amber-300 italic">every sense.</span>
          </h1>
          <p className="mt-8 max-w-lg text-base leading-8 text-stone-300 sm:text-lg">
            An intimate look at the plates, people, and spaces that make an
            evening with us unforgettable.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-bold text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
              href="#gallery-grid"
            >
              Enter the gallery
              <span className="transition-transform duration-300 group-hover:translate-y-1">
                &darr;
              </span>
            </a>
            <span className="text-xs font-semibold tracking-[0.16em] text-stone-400 uppercase">
              09 curated frames
            </span>
          </div>
        </div>

        <div className="hero-note relative hidden min-h-[36rem] lg:block">
          <div
            aria-hidden="true"
            className="absolute top-1/2 right-0 size-[30rem] -translate-y-1/2 rounded-full bg-amber-400/10 blur-2xl"
          />

          <div className="gallery-portal group relative ml-auto h-[34rem] w-[92%] max-w-[38rem] overflow-hidden rounded-t-[15rem] rounded-b-[2rem] border border-white/20 bg-stone-950 p-2 shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
            <div className="grid h-full grid-cols-[0.72fr_1.35fr_0.72fr] gap-1 overflow-hidden rounded-t-[14.5rem] rounded-b-[1.55rem] bg-white/10">
              <div className="relative overflow-hidden">
                <img
                  alt="Coastal seafood presentation"
                  className="h-full w-full object-cover opacity-65 saturate-50 transition-all duration-700 group-hover:opacity-90 group-hover:saturate-100"
                  src="/images/dish-seafood.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-stone-950/20" />
                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 -rotate-90 text-[0.55rem] font-bold tracking-[0.18em] whitespace-nowrap text-white/70 uppercase">
                  Crafted
                </span>
              </div>

              <div className="relative overflow-hidden">
                <img
                  alt="Signature steak presentation"
                  className="gallery-portal-image h-full w-full object-cover"
                  src="/images/dish-steak.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-stone-950/15" />
                <div className="absolute right-5 bottom-6 left-5">
                  <p className="text-[0.58rem] font-bold tracking-[0.19em] text-amber-300 uppercase">
                    Signature collection
                  </p>
                  <p className="mt-2 font-serif text-2xl font-semibold">
                    Art on the plate
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <img
                  alt="Warm restaurant atmosphere"
                  className="h-full w-full object-cover opacity-65 saturate-50 transition-all duration-700 group-hover:opacity-90 group-hover:saturate-100"
                  src="/images/offer-table.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-stone-950/20" />
                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rotate-90 text-[0.55rem] font-bold tracking-[0.18em] whitespace-nowrap text-white/70 uppercase">
                  Remembered
                </span>
              </div>
            </div>

            <div className="absolute top-5 left-1/2 grid size-20 -translate-x-1/2 place-items-center rounded-full border border-white/20 bg-stone-950/45 text-center backdrop-blur-md">
              <span className="text-[0.55rem] leading-4 font-bold tracking-[0.14em] text-amber-300 uppercase">
                Visual
                <br /> journal
              </span>
            </div>
          </div>

          <div className="gallery-orbit absolute -bottom-2 left-1 grid size-28 place-items-center rounded-full border border-dashed border-amber-300/50 bg-stone-950/65 text-center shadow-xl backdrop-blur-md">
            <span className="text-[0.6rem] leading-4 font-bold tracking-[0.16em] text-amber-300 uppercase">
              09 frames
              <br /> one story
            </span>
          </div>

          <div className="absolute top-1/2 -right-9 -translate-y-1/2 rotate-90 text-[0.55rem] font-semibold tracking-[0.24em] text-white/45 uppercase">
            Food &middot; Space &middot; Story
          </div>
        </div>
      </div>

      <div className="hero-note absolute right-8 bottom-8 hidden items-center gap-3 text-[0.62rem] font-semibold tracking-[0.18em] text-stone-400 uppercase xl:flex">
        <span className="h-px w-12 bg-stone-600" />
        Colombo &middot; Sri Lanka
      </div>
    </section>
  )
}
