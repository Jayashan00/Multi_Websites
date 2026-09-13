import { useOrderCart } from '#/components/order/OrderCartContext'
import { formatLkr } from '#/components/order/orderMenuData'

import type { OrderMenuItem } from '#/components/order/orderMenuData'

export function OrderFoodCard({
  item,
  animationDelay = 0,
}: {
  item: OrderMenuItem
  animationDelay?: number
}) {
  const { addItem, lines } = useOrderCart()
  const quantity = lines.find((line) => line.item.id === item.id)?.quantity ?? 0

  return (
    <article
      className="menu-card-enter group overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-[0_12px_40px_rgba(41,37,36,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-300 hover:shadow-[0_24px_60px_rgba(41,37,36,0.13)]"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
        <img
          alt={item.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          src={item.image}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-stone-950/35 via-transparent to-transparent"
        />
        <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-stone-950/65 px-3 py-1.5 text-[0.6rem] font-bold tracking-[0.14em] text-white uppercase backdrop-blur-md">
          {item.category}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl leading-tight font-semibold">
            {item.name}
          </h3>
          <span className="shrink-0 font-serif text-base font-semibold">
            {formatLkr(item.price)}
          </span>
        </div>
        <p className="mt-3 min-h-12 text-sm leading-6 text-stone-500">
          {item.description}
        </p>
        <button
          aria-label={`Add ${item.name} to cart`}
          className="mt-5 flex w-full items-center justify-between rounded-full bg-stone-950 py-2.5 pr-2.5 pl-5 text-sm font-bold text-white transition-all duration-300 hover:bg-amber-400 hover:text-stone-950"
          onClick={() => addItem(item)}
          type="button"
        >
          <span>
            {quantity > 0 ? `Add another · ${quantity} in cart` : 'Add to Cart'}
          </span>
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-full bg-white/10 text-lg transition-transform duration-300 group-hover:rotate-90"
          >
            +
          </span>
        </button>
      </div>
    </article>
  )
}
