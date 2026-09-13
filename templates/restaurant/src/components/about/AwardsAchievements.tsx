const recognitions = [
  {
    year: '2018',
    title: 'Guest Favourite',
    source: 'Colombo Dining Awards',
    description: 'Recognised for creating a warm, memorable guest experience.',
  },
  {
    year: '2021',
    title: 'Culinary Excellence',
    source: 'Sri Lanka Food Guide',
    description:
      'Celebrated for a modern approach to seasonal Sri Lankan flavours.',
  },
  {
    year: '2023',
    title: 'Sustainable Kitchen',
    source: 'Hospitality Green List',
    description:
      'Honoured for thoughtful sourcing and responsible kitchen practices.',
  },
  {
    year: '2025',
    title: 'Service Distinction',
    source: 'Island Hospitality Awards',
    description:
      'Awarded for attentive service and consistently generous hospitality.',
  },
]

export function AwardsAchievements() {
  const featuredRecognition = recognitions[recognitions.length - 1]
  const earlierRecognitions = recognitions.slice(0, -1)

  return (
    <section
      id="awards"
      className="relative scroll-mt-20 overflow-hidden bg-[#f7f3eb] text-stone-950"
    >
      <div
        aria-hidden="true"
        className="absolute -top-48 -right-40 size-[32rem] rounded-full bg-amber-200/40 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-amber-600" />
              <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                Recognition
              </p>
            </div>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.08] font-semibold tracking-[-0.035em] sm:text-5xl">
              Milestones that honour
              <span className="block text-amber-700 italic">
                the people behind every plate.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-8 text-stone-600">
            Every recognition belongs to our team, our trusted producers, and
            the guests who continue to share their tables with us.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <article className="reveal-on-scroll group relative min-h-[32rem] overflow-hidden rounded-[2rem] bg-stone-950 p-8 text-white shadow-[0_28px_70px_rgba(41,37,36,0.2)] sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -top-28 -right-28 size-80 rounded-full bg-amber-400/15 blur-2xl transition-transform duration-700 group-hover:scale-125"
            />
            <div
              aria-hidden="true"
              className="absolute -right-12 -bottom-16 font-serif text-[13rem] leading-none text-white/[0.025]"
            >
              25
            </div>

            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between gap-5">
                <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-[0.65rem] font-bold tracking-[0.18em] text-amber-300 uppercase backdrop-blur-sm">
                  Latest recognition
                </span>
                <span className="text-xs font-semibold tracking-[0.18em] text-stone-500">
                  {featuredRecognition.year}
                </span>
              </div>

              <div className="my-12 flex justify-center">
                <div className="relative grid size-36 place-items-center rounded-full border border-amber-300/20 transition-transform duration-700 group-hover:rotate-6 sm:size-40">
                  <div className="absolute inset-3 rounded-full border border-amber-300/30" />
                  <div className="grid size-24 place-items-center rounded-full bg-amber-400 text-center text-stone-950 shadow-[0_0_45px_rgba(251,191,36,0.2)] sm:size-28">
                    <span>
                      <span
                        aria-hidden="true"
                        className="block text-2xl leading-none"
                      >
                        ✦
                      </span>
                      <span className="mt-1 block text-[0.55rem] font-black tracking-[0.2em] uppercase">
                        Award
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <p className="text-[0.65rem] font-bold tracking-[0.18em] text-amber-300 uppercase">
                  {featuredRecognition.source}
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-tight font-semibold sm:text-4xl">
                  {featuredRecognition.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-stone-300">
                  {featuredRecognition.description}
                </p>
              </div>
            </div>
          </article>

          <div className="reveal-on-scroll reveal-delay-1 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(41,37,36,0.08)]">
            <div className="flex items-center justify-between border-b border-stone-200 px-6 py-6 sm:px-8">
              <div>
                <p className="text-[0.65rem] font-bold tracking-[0.18em] text-amber-700 uppercase">
                  Our journey
                </p>
                <h3 className="mt-2 font-serif text-2xl font-semibold">
                  A tradition of excellence
                </h3>
              </div>
              <span className="hidden rounded-full bg-stone-100 px-4 py-2 text-xs font-semibold text-stone-500 sm:block">
                {earlierRecognitions.length} honours
              </span>
            </div>

            <div>
              {earlierRecognitions.map((recognition, index) => (
                <article
                  className={`group grid gap-5 px-6 py-7 transition-colors duration-300 hover:bg-amber-50/70 sm:grid-cols-[4.5rem_1fr_auto] sm:items-center sm:px-8 ${
                    index > 0 ? 'border-t border-stone-200' : ''
                  }`}
                  key={recognition.title}
                >
                  <div className="flex items-center gap-4 sm:block">
                    <span className="grid size-14 shrink-0 place-items-center rounded-full border border-amber-200 bg-amber-50 font-serif text-sm font-bold text-amber-800 transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-stone-950">
                      {recognition.year.slice(2)}
                    </span>
                    <span className="text-xs font-semibold text-stone-400 sm:mt-2 sm:block sm:text-center">
                      {recognition.year}
                    </span>
                  </div>

                  <div>
                    <p className="text-[0.62rem] font-bold tracking-[0.16em] text-stone-400 uppercase">
                      {recognition.source}
                    </p>
                    <h4 className="mt-2 font-serif text-xl font-semibold sm:text-2xl">
                      {recognition.title}
                    </h4>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-stone-500">
                      {recognition.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="hidden size-10 place-items-center rounded-full border border-stone-200 text-stone-400 transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-stone-950 sm:grid"
                  >
                    ↗
                  </span>
                </article>
              ))}
            </div>

            <div className="grid border-t border-stone-200 bg-[#fbf8f2] sm:grid-cols-2">
              <div className="flex items-center gap-4 px-6 py-6 sm:px-8">
                <span className="font-serif text-3xl font-semibold text-amber-700">
                  4.9
                </span>
                <div>
                  <p className="text-sm font-bold">Guest rating</p>
                  <p
                    aria-label="5 out of 5 stars"
                    className="mt-1 text-xs tracking-wider text-amber-500"
                  >
                    ★★★★★
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-t border-stone-200 px-6 py-6 sm:border-t-0 sm:border-l sm:px-8">
                <span className="font-serif text-3xl font-semibold text-amber-700">
                  12+
                </span>
                <div>
                  <p className="text-sm font-bold">Years of craft</p>
                  <p className="mt-1 text-xs text-stone-500">
                    Serving Colombo since 2012
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
