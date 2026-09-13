import { Breadcrumbs } from '#/components/ui/Breadcrumbs'

export function MenuHero() {
  return (
    <section className="relative isolate min-h-[82vh] overflow-hidden bg-stone-950 text-white">
      <img
        alt="A signature steak dish from the restaurant menu"
        className="hero-image absolute inset-0 h-full w-full object-cover object-[62%_center]"
        fetchPriority="high"
        height="1200"
        src="/images/dish-steak.jpg"
        width="1800"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.98)_0%,rgba(12,10,9,0.91)_40%,rgba(12,10,9,0.52)_70%,rgba(12,10,9,0.25)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20"
      />
      <div
        aria-hidden="true"
        className="hero-glow absolute -top-40 -left-40 size-[30rem] rounded-full bg-amber-400/15 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center px-5 pt-36 pb-28 sm:px-8 sm:pt-40 lg:py-40">
        <div className="hero-copy max-w-4xl">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'Our Menu' }]}
          />

          <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-[0.98] font-medium tracking-[-0.045em] sm:text-7xl lg:text-[5.5rem]">
            Guided by the season.
            <span className="block text-amber-300 italic">
              Grounded in flavour.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
            Familiar Sri Lankan ingredients meet modern technique in a menu
            created for slow mornings, generous lunches, and memorable evenings.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-bold text-stone-950 shadow-[0_14px_40px_rgba(251,191,36,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
              href="/order"
            >
              Order Online
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-amber-300 hover:text-amber-300"
              href="#menu-content"
            >
              Browse the Menu
            </a>
          </div>
        </div>
      </div>

      <div className="hero-note absolute right-8 bottom-8 hidden w-72 rounded-[1.5rem] border border-white/15 bg-stone-950/65 p-5 shadow-2xl backdrop-blur-xl lg:block">
        <p className="text-[0.65rem] font-bold tracking-[0.18em] text-amber-300 uppercase">
          From the kitchen
        </p>
        <p className="mt-3 font-serif text-xl leading-7 text-white">
          Ingredients at their best, prepared with a distinctly local point of
          view.
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-stone-500">
          <span>Seasonal menu</span>
          <span className="text-amber-300">Est. 2012</span>
        </div>
      </div>
    </section>
  )
}
