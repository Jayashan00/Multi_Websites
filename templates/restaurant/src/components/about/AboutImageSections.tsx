const galleryImages = [
  {
    image: '/images/restaurant-interior.jpg',
    alt: 'Warm contemporary restaurant dining room',
    label: 'The dining room',
    layout: 'md:col-span-7 md:row-span-2',
    position: 'object-center',
  },
  {
    image: '/images/head-chef.jpg',
    alt: 'Executive chef preparing a dish in the kitchen',
    label: 'Behind the pass',
    layout: 'md:col-span-5',
    position: 'object-center',
  },
  {
    image: '/images/offer-table.jpg',
    alt: 'Elegantly prepared private dining table',
    label: 'Private occasions',
    layout: 'md:col-span-5',
    position: 'object-center',
  },
  {
    image: '/images/dish-steak.jpg',
    alt: 'Signature steak dish with a seasonal garnish',
    label: 'Signature plates',
    layout: 'md:col-span-4',
    position: 'object-center',
  },
  {
    image: '/images/dish-seafood.jpg',
    alt: 'Fresh seafood dish plated with care',
    label: 'From the coast',
    layout: 'md:col-span-4',
    position: 'object-center',
  },
  {
    image: '/images/special-dessert.jpg',
    alt: 'A refined dessert finished by the pastry team',
    label: 'The final course',
    layout: 'md:col-span-4',
    position: 'object-center',
  },
]

export function AboutImageSections() {
  return (
    <section
      id="images"
      className="scroll-mt-20 overflow-hidden bg-[#fbf8f2] text-stone-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll grid items-end gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-amber-600" />
              <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                Inside the restaurant
              </p>
            </div>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.08] font-semibold tracking-[-0.035em] sm:text-5xl">
              A glimpse of the details
              <span className="block text-amber-700 italic">
                that shape your experience.
              </span>
            </h2>
          </div>
          <div className="max-w-lg lg:justify-self-end">
            <p className="text-base leading-8 text-stone-600">
              From the calm of the dining room to the energy of the kitchen,
              every detail is part of the story we share.
            </p>
            <a
              className="group mt-5 inline-flex items-center gap-3 text-sm font-bold text-stone-900"
              href="/gallery"
            >
              Explore the full gallery
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>

        <div className="mt-14 grid auto-rows-[15rem] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:auto-rows-[13rem]">
          {galleryImages.map((item, index) => (
            <a
              aria-label={`View ${item.label} in the gallery`}
              className={`reveal-on-scroll group relative overflow-hidden rounded-[1.75rem] bg-stone-900 sm:col-span-1 ${item.layout} ${
                index % 3 === 1
                  ? 'reveal-delay-1'
                  : index % 3 === 2
                    ? 'reveal-delay-2'
                    : ''
              }`}
              href="/gallery"
              key={item.label}
            >
              <img
                alt={item.alt}
                className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${item.position}`}
                loading="lazy"
                src={item.image}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.6rem] font-semibold tracking-[0.16em] text-amber-300 uppercase">
                    Restaurant Name
                  </p>
                  <p className="mt-1 font-serif text-lg font-semibold text-white">
                    {item.label}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="grid size-10 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:rotate-[-8deg] group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-stone-950"
                >
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
