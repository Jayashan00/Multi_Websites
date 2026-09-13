import { Breadcrumbs } from '#/components/ui/Breadcrumbs'

export function AboutHero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-stone-950 text-white">
      <img
        alt="The warmly lit dining room inside our restaurant"
        className="hero-image absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
        height="1200"
        src="/images/restaurant-interior.jpg"
        width="1800"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.97)_0%,rgba(12,10,9,0.84)_42%,rgba(12,10,9,0.38)_75%,rgba(12,10,9,0.18)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,10,9,0.82)_0%,transparent_48%,rgba(12,10,9,0.3)_100%)]"
      />
      <div
        aria-hidden="true"
        className="hero-glow absolute -top-40 -left-32 size-[30rem] rounded-full bg-amber-400/15 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-5 pt-36 pb-24 sm:px-8 sm:pt-40 lg:py-40">
        <div className="hero-copy max-w-4xl">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
          />

          <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-[0.98] font-medium tracking-[-0.045em] sm:text-7xl lg:text-[5.5rem]">
            Rooted in Colombo.
            <span className="block text-amber-300 italic">
              Made for moments.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
            We bring modern Sri Lankan character, seasonal ingredients, and
            heartfelt hospitality together around one table.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-bold text-stone-950 shadow-[0_14px_40px_rgba(251,191,36,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-[0_18px_46px_rgba(251,191,36,0.28)]"
              href="#story"
            >
              Discover Our Story
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <p className="flex items-center gap-3 text-sm text-stone-300">
              <span className="grid size-9 place-items-center rounded-full border border-white/20 bg-white/5 font-serif text-xs text-amber-300 backdrop-blur-sm">
                12+
              </span>
              Years of inspired hospitality
            </p>
          </div>
        </div>
      </div>

      <div className="hero-note absolute right-8 bottom-8 hidden w-72 overflow-hidden rounded-[1.5rem] border border-white/15 bg-stone-950/65 p-5 shadow-2xl backdrop-blur-xl lg:block">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-amber-300 uppercase">
              Our philosophy
            </p>
            <p className="mt-3 font-serif text-xl leading-7 font-semibold text-white">
              Local soul,
              <br />
              modern expression.
            </p>
          </div>
          <span
            aria-hidden="true"
            className="grid size-10 place-items-center rounded-full bg-amber-400 font-serif text-sm font-semibold text-stone-950"
          >
            RN
          </span>
        </div>
        <div className="mt-5 h-px bg-white/10" />
        <div className="mt-4 flex items-center justify-between text-xs text-stone-400">
          <span>Colombo, Sri Lanka</span>
          <span className="text-amber-300">Est. 2012</span>
        </div>
      </div>

      <a
        aria-label="Scroll to our restaurant story"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] font-semibold tracking-[0.2em] text-stone-400 uppercase transition-colors hover:text-amber-300 sm:flex"
        href="#story"
      >
        Scroll
        <span
          aria-hidden="true"
          className="h-8 w-px bg-gradient-to-b from-amber-400 to-transparent"
        />
      </a>
    </section>
  )
}
