const events = [
  ['01', 'Weddings', 'Reception, ceremony, and intimate wedding dining.'],
  ['02', 'Corporate', 'Meetings, launches, and team celebrations.'],
  ['03', 'Private Parties', 'Personal gatherings created around your guests.'],
  ['04', 'Birthdays', 'Milestone menus for every generation.'],
  ['05', 'Cocktail Events', 'Canapés, small plates, and beverage service.'],
  ['06', 'Outdoor Events', 'Flexible service for open-air occasions.'],
]

export function EventTypes() {
  return (
    <section className="bg-white text-stone-950">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-amber-700 uppercase">
              Made for every occasion
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold sm:text-6xl">
              Your reason to gather is our starting point.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-600">
            From a table of twenty to a room of hundreds, the service adapts to
            the rhythm and meaning of your event.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="reveal-on-scroll group relative min-h-[36rem] overflow-hidden rounded-[2rem] bg-stone-950 shadow-[0_20px_60px_rgba(41,37,36,0.14)]">
            <img
              alt="Elegant restaurant setting suitable for a catered celebration"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
              src="/images/restaurant-interior.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent" />
            <div className="absolute right-7 bottom-7 left-7 text-white">
              <p className="text-[0.62rem] font-bold tracking-[0.18em] text-amber-300 uppercase">
                Flexible by design
              </p>
              <p className="mt-3 font-serif text-4xl font-semibold">
                Six event styles.
                <span className="block text-amber-300 italic">
                  Endless possibilities.
                </span>
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {events.map(([number, title, description], index) => (
              <article
                className={`reveal-on-scroll group relative overflow-hidden rounded-[1.5rem] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  index === 1 || index === 4
                    ? 'border-[#c8d8c7] bg-[#dfe9df]'
                    : index === 2 || index === 5
                      ? 'border-[#dbc9c1] bg-[#eaded8]'
                      : 'border-[#dfcfb5] bg-[#efe3cf]'
                }`}
                key={title}
              >
                <span className="absolute top-3 right-5 font-serif text-5xl text-stone-950/[0.06]">
                  {number}
                </span>
                <div className="relative">
                  <span className="font-serif text-xl text-amber-800">
                    {number}
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-semibold">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
