type Dish = {
  name: string
  description: string
  price: string
  category: string
  image: string
  imageAlt: string
}

const featuredDishes: Array<Dish> = [
  {
    name: 'Fire-Grilled Ribeye',
    description:
      'Herb-charred beef, garden vegetables, smoked butter, and house jus.',
    price: 'LKR 8,900',
    category: 'Chef signature',
    image: '/images/dish-steak.jpg',
    imageAlt: 'Fire-grilled ribeye with vegetables and house sauce',
  },
  {
    name: 'Wild Mushroom Tagliatelle',
    description:
      'Silky pasta, roasted mushrooms, baby spinach, and aged parmesan.',
    price: 'LKR 6,800',
    category: 'House favorite',
    image: '/images/dish-pasta.jpg',
    imageAlt: 'Tagliatelle pasta with mushrooms, spinach, and tomatoes',
  },
  {
    name: 'Chilli Garlic Prawns',
    description:
      'Seared prawns, wok-tossed noodles, scallion, and aromatic chilli oil.',
    price: 'LKR 7,600',
    category: 'Seafood',
    image: '/images/dish-seafood.jpg',
    imageAlt: 'Chilli garlic prawns with noodles and cherry tomatoes',
  },
]

function FeaturedDishCard({ dish, index }: { dish: Dish; index: number }) {
  return (
    <article
      className={`dish-card reveal-on-scroll reveal-delay-${index} group overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-[0_18px_50px_rgba(41,37,36,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(41,37,36,0.14)]`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
        <img
          alt={dish.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          height="750"
          loading="lazy"
          src={dish.image}
          width="1000"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40"
        />
        <span className="absolute top-5 left-5 rounded-full border border-white/25 bg-stone-950/65 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-md">
          {dish.category}
        </span>
        <span className="absolute right-5 bottom-5 rounded-full bg-amber-400 px-3.5 py-2 font-serif text-sm font-semibold text-stone-950 shadow-lg">
          {dish.price}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-stone-950">
          {dish.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-stone-500">
          {dish.description}
        </p>
        <a
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-800 transition-colors hover:text-stone-950"
          href="/menu"
        >
          View dish
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </article>
  )
}

export function FeaturedDishes() {
  return (
    <section
      id="featured-dishes"
      className="scroll-mt-20 bg-stone-100 text-stone-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="reveal-on-scroll flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-amber-700 uppercase">
              <span className="h-px w-10 bg-amber-600" aria-hidden="true" />
              Menu highlights
            </div>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight font-medium tracking-[-0.03em] sm:text-5xl">
              Crafted to be the
              <span className="text-amber-700 italic"> highlight </span>
              of your table.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-stone-500">
            A selection of guest favorites, prepared with market-fresh
            ingredients and the signature touch of our kitchen.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featuredDishes.map((dish, index) => (
            <FeaturedDishCard dish={dish} index={index} key={dish.name} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            className="group inline-flex items-center gap-3 rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-semibold text-stone-900 transition-all duration-300 hover:border-stone-950 hover:bg-stone-950 hover:text-white"
            href="/menu"
          >
            Browse the full menu
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
