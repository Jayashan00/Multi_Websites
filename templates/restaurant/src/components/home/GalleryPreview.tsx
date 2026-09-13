type GalleryItem = {
  image: string
  imageAlt: string
  label: string
  layout: string
}

const galleryItems: Array<GalleryItem> = [
  {
    image: '/images/hero-dining.jpg',
    imageAlt: 'An elegant dish being served at a restaurant table',
    label: 'At the table',
    layout: 'md:col-span-7 md:row-span-2',
  },
  {
    image: '/images/dish-pasta.jpg',
    imageAlt: 'Fresh tagliatelle with mushrooms and herbs',
    label: 'From the kitchen',
    layout: 'md:col-span-5',
  },
  {
    image: '/images/restaurant-interior.jpg',
    imageAlt: 'A warm modern restaurant dining room',
    label: 'Our dining room',
    layout: 'md:col-span-5',
  },
  {
    image: '/images/category-dessert.jpg',
    imageAlt: 'Chocolate dessert with vanilla ice cream and caramel',
    label: 'Sweet moments',
    layout: 'md:col-span-4',
  },
  {
    image: '/images/special-salmon.jpg',
    imageAlt: 'Seared salmon plated with fresh vegetables',
    label: 'Seasonal plates',
    layout: 'md:col-span-4',
  },
  {
    image: '/images/category-breakfast.jpg',
    imageAlt: 'A colorful breakfast table with coffee and fresh fruit',
    label: 'Slow mornings',
    layout: 'md:col-span-4',
  },
]

export function GalleryPreview() {
  return (
    <section
      id="gallery"
      className="scroll-mt-20 overflow-hidden bg-white text-stone-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="reveal-on-scroll flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-amber-700 uppercase">
              <span className="h-px w-10 bg-amber-600" aria-hidden="true" />A
              closer look
            </div>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight font-medium tracking-[-0.03em] sm:text-5xl">
              Food, atmosphere,
              <span className="text-amber-700 italic"> and moments.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base leading-7 text-stone-500">
              A glimpse into the plates, people, and details that shape the
              restaurant experience.
            </p>
            <a
              className="group mt-5 inline-flex items-center gap-3 text-sm font-semibold text-stone-900"
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

        <div className="mt-14 grid auto-rows-[14rem] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:auto-rows-[12.5rem]">
          {galleryItems.map((item, index) => (
            <a
              aria-label={`View ${item.label} in the gallery`}
              className={`gallery-card reveal-on-scroll reveal-delay-${index % 3} group relative overflow-hidden rounded-[1.5rem] bg-stone-900 sm:col-span-1 ${item.layout}`}
              href="/gallery"
              key={item.label}
            >
              <img
                alt={item.imageAlt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                height="900"
                loading="lazy"
                src={item.image}
                width="1200"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-white">
                  {item.label}
                </span>
                <span
                  aria-hidden="true"
                  className="flex size-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:rotate-[-8deg] group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-stone-950"
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
