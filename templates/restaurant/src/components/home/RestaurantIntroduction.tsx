const highlights = [
  { value: '12+', label: 'Years of hospitality' },
  { value: '35', label: 'Seasonal dishes' },
  { value: '4.9', label: 'Guest rating' },
]

export function RestaurantIntroduction() {
  return (
    <section
      id="introduction"
      className="scroll-mt-20 overflow-hidden bg-[#fbf8f2] text-stone-950"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div className="reveal-on-scroll relative mx-auto w-full max-w-xl lg:mx-0">
          <div
            aria-hidden="true"
            className="absolute -top-5 -left-5 h-full w-full rounded-[2rem] border border-amber-500/35"
          />
          <div className="group relative overflow-hidden rounded-[2rem] bg-stone-200 shadow-[0_28px_70px_rgba(41,37,36,0.16)]">
            <img
              alt="The warm and modern interior of our dining room"
              className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              height="1400"
              loading="lazy"
              src="/images/restaurant-interior.jpg"
              width="1120"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-transparent"
            />
          </div>

          <div className="float-soft absolute -right-3 -bottom-8 max-w-56 rounded-2xl bg-stone-950 p-5 text-white shadow-2xl sm:right-8">
            <p className="font-serif text-3xl text-amber-300">“</p>
            <p className="-mt-2 text-sm leading-6 text-stone-200">
              Honest ingredients, handled with imagination.
            </p>
          </div>
        </div>

        <div className="reveal-on-scroll reveal-delay-1 lg:pl-6">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-amber-700 uppercase">
            <span className="h-px w-10 bg-amber-600" aria-hidden="true" />
            Our story
          </div>
          <h2 className="mt-6 max-w-xl font-serif text-4xl leading-tight font-medium tracking-[-0.03em] sm:text-5xl">
            Rooted in craft.
            <span className="block text-amber-700 italic">
              Inspired by the season.
            </span>
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
            We bring people together around food that feels familiar yet
            surprising. Every menu begins with exceptional produce and ends with
            plates made to be shared, discussed, and remembered.
          </p>
          <p className="mt-5 max-w-xl leading-7 text-stone-500">
            From our open kitchen to our warmly lit dining room, thoughtful
            details shape every part of the experience.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-stone-300/80 py-6">
            {highlights.map((item) => (
              <div key={item.label}>
                <dt className="text-xs leading-5 text-stone-500">
                  {item.label}
                </dt>
                <dd className="order-first mb-1 font-serif text-3xl font-semibold text-stone-900">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-stone-900"
            href="/about"
          >
            Discover our story
            <span
              aria-hidden="true"
              className="flex size-9 items-center justify-center rounded-full border border-stone-300 transition-all duration-300 group-hover:translate-x-1 group-hover:border-amber-500 group-hover:bg-amber-400"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
