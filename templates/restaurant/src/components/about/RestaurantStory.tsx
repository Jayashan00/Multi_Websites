const storyMilestones = [
  { value: '2012', label: 'Our doors opened' },
  { value: '12+', label: 'Years of hospitality' },
  { value: '40+', label: 'Local partners' },
]

export function RestaurantStory() {
  return (
    <section
      id="story"
      className="scroll-mt-20 overflow-hidden bg-[#fbf8f2] text-stone-950"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-28">
        <div className="reveal-on-scroll relative mx-auto w-full max-w-xl pb-14 sm:pr-14">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-200 shadow-[0_28px_70px_rgba(41,37,36,0.16)]">
            <img
              alt="The warm and inviting interior of our restaurant"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              src="/images/restaurant-interior.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-transparent" />
            <div className="absolute right-6 bottom-6 left-6 flex items-end justify-between text-white">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase">
                  Colombo
                </p>
                <p className="mt-1 font-serif text-2xl font-semibold">
                  Since 2012
                </p>
              </div>
              <span className="grid size-12 place-items-center rounded-full border border-white/30 bg-white/10 font-serif text-lg backdrop-blur-md">
                RN
              </span>
            </div>
          </div>

          <div className="float-soft absolute right-0 bottom-0 w-[46%] min-w-40 overflow-hidden rounded-[1.5rem] border-[6px] border-[#fbf8f2] bg-stone-800 shadow-2xl">
            <img
              alt="A signature dish presented at the table"
              className="aspect-[4/3] h-full w-full object-cover"
              loading="lazy"
              src="/images/hero-dining.jpg"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute -top-7 -left-7 -z-0 size-28 rounded-full border border-amber-700/15"
          />
          <div
            aria-hidden="true"
            className="absolute -top-3 -left-3 -z-0 size-20 rounded-full border border-amber-700/20"
          />
        </div>

        <div className="reveal-on-scroll reveal-delay-1">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-amber-600" />
            <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              Our story
            </p>
          </div>

          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.08] font-semibold tracking-[-0.035em] sm:text-5xl">
            A table built on craft, culture, and connection.
          </h2>

          <div className="mt-7 max-w-xl space-y-5 text-base leading-8 text-stone-600">
            <p>
              What began as a small dining room with a heartfelt idea has grown
              into a place where Colombo gathers to celebrate food and one
              another. From the beginning, our kitchen has honoured familiar Sri
              Lankan flavours through a modern, thoughtful lens.
            </p>
            <p>
              Every menu is guided by the seasons, shaped by trusted local
              producers, and finished with the kind of care guests can feel.
              Warm hospitality remains at the centre of everything we do.
            </p>
          </div>

          <blockquote className="mt-8 border-l-2 border-amber-500 pl-6">
            <p className="font-serif text-xl leading-8 text-stone-800 italic">
              “We wanted to create more than a restaurant—a place that feels
              memorable from the first welcome to the final course.”
            </p>
            <footer className="mt-3 text-xs font-semibold tracking-[0.14em] text-stone-500 uppercase">
              The founding team
            </footer>
          </blockquote>

          <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-stone-200 pt-7 sm:gap-6">
            {storyMilestones.map((milestone) => (
              <div key={milestone.label}>
                <dt className="text-xs leading-5 text-stone-500">
                  {milestone.label}
                </dt>
                <dd className="mt-1 font-serif text-2xl font-semibold text-stone-900 sm:text-3xl">
                  {milestone.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
