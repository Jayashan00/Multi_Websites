const guidingValues = [
  {
    number: '01',
    title: 'Seasonal integrity',
    description: 'Ingredients chosen at their best, with respect for origin.',
  },
  {
    number: '02',
    title: 'Thoughtful hospitality',
    description: 'Warm, attentive service that always feels personal.',
  },
  {
    number: '03',
    title: 'Local connection',
    description: 'Meaningful relationships with growers, makers, and guests.',
  },
]

export function VisionMission() {
  return (
    <section
      id="vision-mission"
      className="relative scroll-mt-20 overflow-hidden bg-white text-stone-950"
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 right-[-8rem] size-96 rounded-full bg-amber-200/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-44 size-96 rounded-full bg-stone-200/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll grid items-end gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-amber-600" />
              <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                What guides us
              </p>
            </div>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.08] font-semibold tracking-[-0.035em] sm:text-5xl">
              Purpose in every plate. Heart in every welcome.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-stone-600 lg:justify-self-end">
            Our direction is simple: cook with intention, serve with warmth, and
            create experiences that stay with our guests long after the table is
            cleared.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="reveal-on-scroll group relative min-h-[25rem] overflow-hidden rounded-[2rem] bg-[#f4b942] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(180,115,20,0.22)] sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 size-64 rounded-full border-[50px] border-white/20 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12"
            />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-stone-950/15 bg-white/20 px-4 py-2 text-xs font-bold tracking-[0.16em] uppercase backdrop-blur-sm">
                  Our vision
                </span>
                <span className="font-serif text-5xl text-stone-950/15">
                  01
                </span>
              </div>
              <div className="mt-auto max-w-md pt-28">
                <h3 className="font-serif text-3xl leading-tight font-semibold sm:text-4xl">
                  To become Colombo&apos;s most meaningful dining destination.
                </h3>
                <p className="mt-5 leading-7 text-stone-800">
                  A restaurant known for modern Sri Lankan character,
                  responsible sourcing, and moments that bring people closer
                  together.
                </p>
              </div>
            </div>
          </article>

          <article className="reveal-on-scroll reveal-delay-1 group relative min-h-[25rem] overflow-hidden rounded-[2rem] bg-stone-950 p-8 text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(28,25,23,0.25)] sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-20 -bottom-24 size-72 rounded-full bg-amber-400/15 blur-2xl transition-transform duration-700 group-hover:scale-125"
            />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold tracking-[0.16em] text-amber-300 uppercase backdrop-blur-sm">
                  Our mission
                </span>
                <span className="font-serif text-5xl text-white/10">02</span>
              </div>
              <div className="mt-auto max-w-md pt-28">
                <h3 className="font-serif text-3xl leading-tight font-semibold sm:text-4xl">
                  Make every guest feel genuinely cared for.
                </h3>
                <p className="mt-5 leading-7 text-stone-300">
                  We pair honest ingredients and skilled cooking with generous
                  hospitality, creating a dining experience that feels both
                  elevated and comfortably familiar.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="reveal-on-scroll reveal-delay-2 mt-8 grid overflow-hidden rounded-[2rem] border border-stone-200 bg-[#fbf8f2] sm:grid-cols-3">
          {guidingValues.map((value, index) => (
            <article
              className={`group p-7 transition-colors duration-300 hover:bg-white sm:p-8 ${
                index > 0
                  ? 'border-t border-stone-200 sm:border-t-0 sm:border-l'
                  : ''
              }`}
              key={value.title}
            >
              <div className="flex items-center gap-4">
                <span className="font-serif text-sm font-semibold text-amber-700">
                  {value.number}
                </span>
                <span className="h-px flex-1 bg-stone-200 transition-colors duration-300 group-hover:bg-amber-400" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-500">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
