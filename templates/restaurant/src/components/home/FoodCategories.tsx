type Category = {
  name: string
  detail: string
  image: string
  imageAlt: string
  layout: string
}

const categories: Array<Category> = [
  {
    name: 'Breakfast',
    detail: 'Served until 11:30 AM',
    image: '/images/category-breakfast.jpg',
    imageAlt: 'A breakfast table with eggs Benedict, coffee, fruit, and toast',
    layout: 'md:col-span-7 lg:row-span-2',
  },
  {
    name: 'Lunch',
    detail: 'Light, fresh & satisfying',
    image: '/images/category-lunch.jpg',
    imageAlt: 'A fresh lunch bowl with grains, vegetables, and herbs',
    layout: 'md:col-span-5',
  },
  {
    name: 'Dinner',
    detail: 'Evenings worth savoring',
    image: '/images/dish-steak.jpg',
    imageAlt: 'A fire-grilled dinner dish with vegetables and sauce',
    layout: 'md:col-span-5',
  },
  {
    name: 'Desserts',
    detail: 'A memorable final course',
    image: '/images/category-dessert.jpg',
    imageAlt: 'A chocolate dessert with ice cream and caramel sauce',
    layout: 'md:col-span-5',
  },
  {
    name: 'Beverages',
    detail: 'Coffee, cocktails & more',
    image: '/images/category-beverage.jpg',
    imageAlt: 'A group of handcrafted coffee drinks viewed from above',
    layout: 'md:col-span-7',
  },
]

export function FoodCategories() {
  return (
    <section
      id="food-categories"
      className="scroll-mt-20 overflow-hidden bg-white text-stone-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="reveal-on-scroll grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-amber-700 uppercase">
              <span className="h-px w-10 bg-amber-600" aria-hidden="true" />
              Find your favorite
            </div>
            <h2 className="mt-6 font-serif text-4xl leading-tight font-medium tracking-[-0.03em] sm:text-5xl">
              A menu for every
              <span className="text-amber-700 italic"> moment.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-stone-500 lg:justify-self-end">
            From slow mornings and vibrant lunches to candlelit dinners and
            sweet finishes, explore dishes made for the way you want to dine.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[15rem] gap-4 md:grid-cols-12 lg:auto-rows-[13rem]">
          {categories.map((category, index) => (
            <a
              className={`category-card reveal-on-scroll reveal-delay-${index % 3} group relative overflow-hidden rounded-[1.65rem] bg-stone-900 ${category.layout}`}
              href={`/menu?category=${category.name.toLowerCase()}`}
              key={category.name}
            >
              <img
                alt={category.imageAlt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                height="900"
                loading="lazy"
                src={category.image}
                width="1100"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/10 to-transparent transition-colors duration-500 group-hover:from-stone-950/75"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <p className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                    {category.name}
                  </p>
                  <p className="mt-1 text-xs tracking-wide text-stone-300">
                    {category.detail}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:translate-x-1 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-stone-950"
                >
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
