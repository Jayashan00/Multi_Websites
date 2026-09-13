const packages = [
  {
    name: 'Essential Gathering',
    guests: '20–40 guests',
    description: 'A focused menu and graceful service for intimate occasions.',
    price: 'LKR 4,500',
    unit: 'per guest',
    includes: ['Three-course menu', 'Delivery and setup', 'Serving essentials'],
    image: '/images/category-lunch.jpg',
  },
  {
    name: 'Signature Celebration',
    guests: '40–80 guests',
    description:
      'The complete Restaurant Name experience, tailored to your celebration.',
    price: 'LKR 6,900',
    unit: 'per guest',
    includes: ['Four-course menu', 'Service team', 'Table presentation'],
    image: '/images/dish-steak.jpg',
  },
  {
    name: 'Grand Occasion',
    guests: '80+ guests',
    description: 'A fully bespoke approach for weddings and major gatherings.',
    price: 'Custom',
    unit: 'quotation',
    includes: ['Bespoke menu', 'Event coordination', 'Full service team'],
    image: '/images/restaurant-interior.jpg',
  },
]

export function CateringPackages() {
  return (
    <section
      className="relative overflow-hidden bg-[#f7f2e9] text-stone-950"
      id="catering-packages"
    >
      <div
        aria-hidden="true"
        className="absolute top-32 -right-60 size-[36rem] rounded-full border border-amber-200/70"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-amber-600" />
              <p className="text-xs font-bold tracking-[0.19em] text-amber-700 uppercase">
                Catering packages
              </p>
            </div>
            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.02] font-semibold tracking-[-0.045em] sm:text-6xl">
              Start with a package.
              <span className="block text-stone-400 italic">
                Make it entirely yours.
              </span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
            Each package is a starting point. Menus, service, presentation, and
            timing can all be shaped around your occasion.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((cateringPackage, index) => (
            <article
              className={`reveal-on-scroll group overflow-hidden rounded-[2rem] border shadow-[0_18px_50px_rgba(41,37,36,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(41,37,36,0.16)] ${
                index === 1
                  ? 'reveal-delay-1 border-stone-950 bg-stone-950 text-white'
                  : index === 2
                    ? 'reveal-delay-2 border-stone-200 bg-white'
                    : 'border-stone-200 bg-white'
              }`}
              key={cateringPackage.name}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={`${cateringPackage.name} catering package`}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                  src={cateringPackage.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent" />
                <span className="absolute top-5 left-5 rounded-full border border-white/20 bg-stone-950/25 px-4 py-2 text-[0.62rem] font-bold tracking-wider text-white uppercase backdrop-blur-md">
                  {cateringPackage.guests}
                </span>
                <span className="absolute right-5 bottom-5 font-serif text-3xl text-white/70">
                  0{index + 1}
                </span>
              </div>

              <div className="p-7 sm:p-8">
                <p
                  className={`text-[0.62rem] font-bold tracking-[0.17em] uppercase ${
                    index === 1 ? 'text-amber-300' : 'text-amber-700'
                  }`}
                >
                  Curated package
                </p>
                <h3 className="mt-3 font-serif text-3xl font-semibold">
                  {cateringPackage.name}
                </h3>
                <p className="mt-4 text-sm leading-7 opacity-65">
                  {cateringPackage.description}
                </p>
                <ul className="mt-7 space-y-3 border-y border-current/15 py-6 text-sm">
                  {cateringPackage.includes.map((item) => (
                    <li className="flex items-center gap-3" key={item}>
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-amber-400 text-[0.58rem] font-bold text-stone-950">
                        &#10003;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-serif text-3xl font-semibold">
                      {cateringPackage.price}
                    </p>
                    <p className="mt-1 text-[0.6rem] tracking-wider opacity-50 uppercase">
                      {cateringPackage.unit}
                    </p>
                  </div>
                  <a
                    aria-label={`Inquire about ${cateringPackage.name}`}
                    className={`grid size-11 place-items-center rounded-full border text-lg transition-all duration-300 ${
                      index === 1
                        ? 'border-white/20 hover:border-amber-300 hover:bg-amber-400 hover:text-stone-950'
                        : 'border-stone-300 hover:border-stone-950 hover:bg-stone-950 hover:text-white'
                    }`}
                    href="#catering-inquiry"
                  >
                    &rarr;
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 text-center text-xs leading-5 text-stone-500">
          Package prices are indicative and exclude venue-specific requirements.
        </p>
      </div>
    </section>
  )
}
