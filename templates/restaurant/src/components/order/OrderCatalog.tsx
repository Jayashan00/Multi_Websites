import { useState } from 'react'

import { CartSidebar } from '#/components/order/CartSidebar'
import { OrderFoodCard } from '#/components/order/OrderFoodCard'
import {
  orderCategories,
  orderMenuItems,
} from '#/components/order/orderMenuData'

import type { OrderCategory } from '#/components/order/orderMenuData'

type OrderFilter = 'All' | OrderCategory

const filters: Array<OrderFilter> = ['All', ...orderCategories]

export function OrderCatalog() {
  const [activeFilter, setActiveFilter] = useState<OrderFilter>('All')
  const visibleItems =
    activeFilter === 'All'
      ? orderMenuItems
      : orderMenuItems.filter((item) => item.category === activeFilter)

  return (
    <section
      className="scroll-mt-20 overflow-hidden bg-[#fbf8f2] text-stone-950"
      id="food-selection"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll grid items-end gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-amber-600" />
              <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                Food selection
              </p>
            </div>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.08] font-semibold tracking-[-0.035em] sm:text-5xl">
              Choose what you love.
              <span className="block text-amber-700 italic">
                We will handle the rest.
              </span>
            </h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-stone-600 lg:justify-self-end">
            Browse our available dishes, add your favourites, and adjust every
            quantity from the live order summary.
          </p>
        </div>

        <div className="reveal-on-scroll reveal-delay-1 mt-12 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-2 rounded-full border border-stone-200 bg-white p-2 shadow-[0_12px_35px_rgba(41,37,36,0.06)]">
            {filters.map((filter) => (
              <button
                aria-pressed={filter === activeFilter}
                className={`rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 ${
                  filter === activeFilter
                    ? 'bg-stone-950 text-white shadow-md'
                    : 'text-stone-500 hover:bg-amber-100 hover:text-amber-900'
                }`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div
            aria-live="polite"
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            key={activeFilter}
          >
            {visibleItems.map((item, index) => (
              <OrderFoodCard
                animationDelay={index * 70}
                item={item}
                key={item.id}
              />
            ))}
          </div>
          <CartSidebar />
        </div>
      </div>
    </section>
  )
}
