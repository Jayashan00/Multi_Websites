import { useState } from 'react'

import { MenuFoodCard } from '#/components/menu/MenuFoodCard'
import type { MenuCategory } from '#/components/menu/MenuFoodCard'

type MenuFilter = 'All' | MenuCategory

const menuCategories: Array<MenuFilter> = [
  'All',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Desserts',
  'Beverages',
]

const menuItems = [
  {
    id: 1,
    category: 'Breakfast',
    name: 'Ceylon Sunrise',
    description:
      'Farm eggs, coconut sambol, grilled sourdough, avocado, and roasted tomato.',
    price: 'LKR 2,850',
    image: '/images/category-breakfast.jpg',
    imageAlt: 'Ceylon breakfast with eggs, fruit, and fresh accompaniments',
  },
  {
    id: 2,
    category: 'Breakfast',
    name: 'Coconut French Toast',
    description:
      'Brioche, coconut custard, seasonal fruit, kithul syrup, and toasted cashew.',
    price: 'LKR 2,450',
    image: '/images/special-dessert.jpg',
    imageAlt: 'Coconut French toast with fruit and a delicate sweet garnish',
  },
  {
    id: 3,
    category: 'Lunch',
    name: 'Wild Mushroom Tagliatelle',
    description:
      'Fresh pasta, roasted mushrooms, parmesan, garden herbs, and truffle cream.',
    price: 'LKR 3,950',
    image: '/images/dish-pasta.jpg',
    imageAlt: 'Fresh tagliatelle with mushrooms, parmesan, and garden herbs',
  },
  {
    id: 4,
    category: 'Lunch',
    name: 'Garden Harvest Bowl',
    description:
      'Market vegetables, red rice, avocado, spiced chickpeas, and lime dressing.',
    price: 'LKR 3,250',
    image: '/images/category-lunch.jpg',
    imageAlt: 'Colourful lunch bowl with fresh vegetables and grains',
  },
  {
    id: 5,
    category: 'Dinner',
    name: 'Pepper-Crusted Tenderloin',
    description:
      'Grass-fed beef, smoked potato, charred shallot, greens, and pepper jus.',
    price: 'LKR 8,900',
    image: '/images/dish-steak.jpg',
    imageAlt: 'Pepper-crusted steak with vegetables and rich sauce',
  },
  {
    id: 6,
    category: 'Dinner',
    name: 'Lagoon Seafood Plate',
    description:
      'Daily coastal catch, shellfish bisque, seasonal greens, and herb oil.',
    price: 'LKR 6,750',
    image: '/images/dish-seafood.jpg',
    imageAlt: 'Fresh seafood plate with seasonal vegetables and herb oil',
  },
  {
    id: 7,
    category: 'Desserts',
    name: 'Cacao & Caramel',
    description:
      'Dark chocolate, salted caramel, vanilla ice cream, and almond praline.',
    price: 'LKR 2,400',
    image: '/images/category-dessert.jpg',
    imageAlt: 'Chocolate and caramel dessert with vanilla ice cream',
  },
  {
    id: 8,
    category: 'Desserts',
    name: 'Tropical Pavlova',
    description:
      'Crisp meringue, mango, passion fruit, vanilla cream, and lime.',
    price: 'LKR 2,200',
    image: '/images/special-dessert.jpg',
    imageAlt: 'Tropical pavlova with mango, passion fruit, and vanilla cream',
  },
  {
    id: 9,
    category: 'Beverages',
    name: 'Ceylon Citrus Cooler',
    description:
      'Fresh lime, orange, Ceylon tea, mint, and lightly sparkling water.',
    price: 'LKR 1,250',
    image: '/images/category-beverage.jpg',
    imageAlt: 'Refreshing citrus drink with mint and fresh fruit',
  },
  {
    id: 10,
    category: 'Beverages',
    name: 'Spiced Cold Brew',
    description:
      'Single-origin coffee, cinnamon, vanilla, fresh milk, and orange zest.',
    price: 'LKR 1,350',
    image: '/images/category-beverage.jpg',
    imageAlt: 'Chilled coffee drink with cinnamon and orange zest',
  },
] satisfies Array<{
  id: number
  category: MenuCategory
  name: string
  description: string
  price: string
  image: string
  imageAlt: string
}>

const categoryDescriptions: Record<MenuFilter, string> = {
  All: 'A complete look at our kitchen, from slow mornings to the final course.',
  Breakfast:
    'Bright, generous plates made for a fresh and unhurried start to the day.',
  Lunch:
    'Seasonal midday dishes that balance comfort, freshness, and vibrant flavour.',
  Dinner:
    'Expressive evening plates led by local produce, coastal catch, and open-fire depth.',
  Desserts:
    'Refined final courses that bring together texture, fruit, spice, and sweetness.',
  Beverages:
    'Refreshing house creations inspired by Ceylon tea, coffee, fruit, and spice.',
}

export function MenuCatalog() {
  const [activeCategory, setActiveCategory] = useState<MenuFilter>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const normalizedQuery = searchQuery.trim().toLocaleLowerCase()
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory
    const matchesSearch =
      normalizedQuery.length === 0 ||
      [item.name, item.description, item.category].some((value) =>
        value.toLocaleLowerCase().includes(normalizedQuery),
      )

    return matchesCategory && matchesSearch
  })

  return (
    <section
      id="menu-content"
      className="scroll-mt-20 overflow-hidden bg-[#fbf8f2] text-stone-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll grid items-end gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-amber-600" />
              <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                Browse our menu
              </p>
            </div>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.08] font-semibold tracking-[-0.035em] sm:text-5xl">
              Something for every
              <span className="block text-amber-700 italic">
                moment at the table.
              </span>
            </h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-stone-600 lg:justify-self-end">
            Our menu changes with the seasons and is shaped by the ingredients
            our growers and coastal partners bring us each day.
          </p>
        </div>

        <div className="reveal-on-scroll reveal-delay-1 mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="overflow-x-auto pb-2 lg:max-w-[calc(100%-22rem)]">
            <div className="flex min-w-max gap-2 rounded-full border border-stone-200 bg-white p-2 shadow-[0_12px_35px_rgba(41,37,36,0.06)]">
              {menuCategories.map((category) => (
                <button
                  aria-pressed={category === activeCategory}
                  className={`rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 ${
                    category === activeCategory
                      ? 'bg-stone-950 text-white shadow-md'
                      : 'text-stone-500 hover:bg-amber-100 hover:text-amber-900'
                  }`}
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <label className="group relative block w-full lg:max-w-sm">
            <span className="sr-only">Search menu</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-5 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-stone-400 transition-colors after:absolute after:right-[-0.3rem] after:bottom-[-0.2rem] after:h-1.5 after:w-0.5 after:-rotate-45 after:rounded-full after:bg-stone-400 after:content-[''] group-focus-within:border-amber-700 group-focus-within:after:bg-amber-700"
            >
              <span className="sr-only">Search</span>
            </span>
            <input
              className="h-[3.75rem] w-full rounded-full border border-stone-200 bg-white pr-5 pl-12 text-sm text-stone-900 shadow-[0_12px_35px_rgba(41,37,36,0.06)] outline-none transition-all placeholder:text-stone-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search dishes or ingredients"
              type="search"
              value={searchQuery}
            />
          </label>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-b border-stone-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.65rem] font-bold tracking-[0.16em] text-stone-400 uppercase">
              Selected collection
            </p>
            <h3 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
              {activeCategory === 'All' ? 'All dishes' : activeCategory}
            </h3>
          </div>
          <p className="max-w-lg text-sm leading-6 text-stone-500">
            {categoryDescriptions[activeCategory]}
          </p>
        </div>

        <div
          aria-live="polite"
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          key={activeCategory}
        >
          {filteredItems.map((item, index) => (
            <MenuFoodCard
              animationDelay={index * 70}
              item={item}
              key={item.id}
            />
          ))}
          {filteredItems.length === 0 && (
            <div className="rounded-[1.75rem] border border-dashed border-stone-300 bg-white px-6 py-14 text-center sm:col-span-2 lg:col-span-3">
              <p className="font-serif text-2xl font-semibold text-stone-900">
                No dishes found
              </p>
              <p className="mt-2 text-sm text-stone-500">
                Try another dish, ingredient, or menu category.
              </p>
              <button
                className="mt-5 rounded-full bg-stone-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-amber-700"
                onClick={() => setSearchQuery('')}
                type="button"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        <div className="reveal-on-scroll mt-14 flex flex-col gap-5 rounded-[1.75rem] border border-stone-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-serif text-xl font-semibold">
              Dietary requirements?
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-500">
              Please speak with our team. We will be happy to guide you through
              suitable menu choices.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
              href="/order"
            >
              Start an online order
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              className="inline-flex w-fit items-center rounded-full border border-stone-300 px-5 py-3 text-sm font-bold text-stone-800 transition-all duration-300 hover:border-stone-950 hover:bg-stone-950 hover:text-white"
              href="/contact"
            >
              Contact our team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
