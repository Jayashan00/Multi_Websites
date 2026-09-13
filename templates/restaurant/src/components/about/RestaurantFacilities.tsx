const featuredSpaces = [
  {
    name: 'The Main Dining Room',
    description:
      'An intimate, warmly layered space designed for relaxed lunches and memorable evenings.',
    image: '/images/restaurant-interior.jpg',
    layout: 'lg:col-span-7 lg:row-span-2 lg:min-h-[38rem]',
    imagePosition: 'object-center',
  },
  {
    name: 'Private Dining',
    description:
      'A considered setting for celebrations, business dinners, and the moments that matter.',
    image: '/images/offer-table.jpg',
    layout: 'lg:col-span-5 lg:min-h-[18.25rem]',
    imagePosition: 'object-center',
  },
  {
    name: 'Events & Gatherings',
    description:
      'Flexible spaces and attentive service for beautifully hosted occasions.',
    image: '/images/hero-dining.jpg',
    layout: 'lg:col-span-5 lg:min-h-[18.25rem]',
    imagePosition: 'object-[60%_center]',
  },
]

const guestAmenities = [
  {
    number: '01',
    title: 'Guest Parking',
    description: 'Convenient on-site access for a seamless arrival.',
  },
  {
    number: '02',
    title: 'Accessible Dining',
    description: 'Comfortable, considered spaces designed for every guest.',
  },
  {
    number: '03',
    title: 'Outdoor Seating',
    description: 'A fresh-air setting for unhurried meals and evening drinks.',
  },
]

export function RestaurantFacilities() {
  return (
    <section
      id="facilities"
      className="scroll-mt-20 overflow-hidden bg-[#fbf8f2] text-stone-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll grid items-end gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-amber-600" />
              <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                Designed for every occasion
              </p>
            </div>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.08] font-semibold tracking-[-0.035em] sm:text-5xl">
              Beautiful spaces,
              <span className="block text-amber-700 italic">
                considered around you.
              </span>
            </h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-stone-600 lg:justify-self-end">
            From quiet dinners to lively celebrations, every corner is shaped
            for comfort, atmosphere, and effortless hospitality.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
          {featuredSpaces.map((space, index) => (
            <article
              className={`reveal-on-scroll group relative min-h-80 overflow-hidden rounded-[2rem] bg-stone-900 shadow-[0_18px_50px_rgba(41,37,36,0.12)] ${space.layout} ${
                index > 0 ? 'reveal-delay-1' : ''
              }`}
              key={space.name}
            >
              <img
                alt={`${space.name} at Restaurant Name`}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${space.imagePosition}`}
                loading="lazy"
                src={space.image}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-8">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-amber-300 uppercase">
                      Space 0{index + 1}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
                      {space.name}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-stone-300">
                      {space.description}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="hidden size-12 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-xl text-amber-300 backdrop-blur-sm transition-all duration-300 group-hover:border-amber-300 group-hover:bg-amber-400 group-hover:text-stone-950 sm:grid"
                  >
                    ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal-on-scroll reveal-delay-2 mt-6 grid overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_12px_40px_rgba(41,37,36,0.05)] sm:grid-cols-3">
          {guestAmenities.map((amenity, index) => (
            <article
              className={`group p-7 transition-colors duration-300 hover:bg-amber-50 sm:p-8 ${
                index > 0
                  ? 'border-t border-stone-200 sm:border-t-0 sm:border-l'
                  : ''
              }`}
              key={amenity.title}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm font-semibold text-amber-700">
                  {amenity.number}
                </span>
                <span className="size-2 rounded-full bg-stone-200 transition-all duration-300 group-hover:scale-125 group-hover:bg-amber-400" />
              </div>
              <h3 className="mt-7 font-serif text-xl font-semibold">
                {amenity.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-500">
                {amenity.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
