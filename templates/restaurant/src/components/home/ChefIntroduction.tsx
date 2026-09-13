const specialties = [
  'Modern Sri Lankan',
  'Open-fire cooking',
  'Seasonal tasting menus',
]

export function ChefIntroduction() {
  return (
    <section
      id="chef"
      className="relative scroll-mt-20 overflow-hidden bg-stone-950 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 size-[32rem] rounded-full bg-amber-400/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-32">
        <div className="reveal-on-scroll relative mx-auto w-full max-w-xl lg:mx-0">
          <div
            aria-hidden="true"
            className="absolute -top-5 -right-5 h-full w-full rounded-[2rem] border border-amber-300/25"
          />
          <div className="group relative overflow-hidden rounded-[2rem] bg-stone-800 shadow-2xl">
            <img
              alt="Head chef carefully finishing a dish in the restaurant kitchen"
              className="aspect-[4/5] h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              height="1500"
              loading="lazy"
              src="/images/head-chef.jpg"
              width="1200"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"
            />
            <div className="absolute right-6 bottom-6 left-6 flex items-end justify-between gap-5">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-amber-300 uppercase">
                  Executive chef
                </p>
                <p className="mt-2 font-serif text-2xl font-semibold">
                  Arjun Perera
                </p>
              </div>
              <span className="rounded-full border border-white/20 bg-stone-950/60 px-3 py-1.5 text-xs text-stone-300 backdrop-blur-md">
                15+ years
              </span>
            </div>
          </div>
        </div>

        <div className="reveal-on-scroll reveal-delay-1 lg:pl-8">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-amber-300 uppercase">
            <span className="h-px w-10 bg-amber-400" aria-hidden="true" />
            Behind every plate
          </div>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight font-medium tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Cooking with instinct,
            <span className="block text-amber-300 italic">
              serving with purpose.
            </span>
          </h2>
          <blockquote className="mt-8 border-l-2 border-amber-400 pl-6 text-lg leading-8 text-stone-300">
            “The best dishes begin with respect—for the ingredient, the season,
            and the person waiting at the table.”
          </blockquote>
          <p className="mt-7 max-w-2xl leading-7 text-stone-400">
            Chef Arjun brings classical technique and a distinctly local point
            of view to the kitchen. His menus celebrate Sri Lanka&apos;s vibrant
            produce through modern presentation, open-fire depth, and a light,
            confident touch.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {specialties.map((specialty) => (
              <span
                className="rounded-full border border-white/15 bg-white/[0.045] px-4 py-2 text-xs font-medium text-stone-300"
                key={specialty}
              >
                {specialty}
              </span>
            ))}
          </div>

          <a
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
            href="/team"
          >
            Meet the culinary team
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
