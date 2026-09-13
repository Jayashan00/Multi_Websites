import { OrderSummary } from '#/components/order/OrderSummary'
import { useOrderCart } from '#/components/order/OrderCartContext'
import { formatLkr } from '#/components/order/orderMenuData'
import { Link } from '@tanstack/react-router'

export function CheckoutOrderReview() {
  const { itemCount, lines } = useOrderCart()

  return (
    <aside className="reveal-on-scroll reveal-delay-1 overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-[0_18px_55px_rgba(41,37,36,0.08)] lg:sticky lg:top-5">
      <div className="flex items-center justify-between bg-stone-950 px-6 py-5 text-white">
        <div>
          <p className="text-[0.62rem] font-bold tracking-[0.16em] text-amber-300 uppercase">
            Final review
          </p>
          <h2 className="mt-1 font-serif text-2xl font-semibold">Your Order</h2>
        </div>
        <span className="grid size-10 place-items-center rounded-full bg-amber-400 text-sm font-bold text-stone-950">
          {itemCount}
        </span>
      </div>

      <div className="p-6">
        {lines.length > 0 ? (
          <div className="divide-y divide-stone-200">
            {lines.map((line) => (
              <article
                className="flex gap-4 py-4 first:pt-0"
                key={line.item.id}
              >
                <img
                  alt=""
                  className="size-14 shrink-0 rounded-xl object-cover"
                  loading="lazy"
                  src={line.item.image}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-5 font-semibold">
                    {line.item.name}
                  </p>
                  <div className="mt-1 flex justify-between gap-3 text-xs text-stone-500">
                    <span>Qty {line.quantity}</span>
                    <span>{formatLkr(line.item.price * line.quantity)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-6 text-center">
            <p className="font-serif text-xl font-semibold">No items yet</p>
            <p className="mt-2 text-sm leading-6 text-stone-500">
              Return to the ordering page to choose your dishes.
            </p>
          </div>
        )}

        <div className="mt-4 border-t border-stone-200 pt-6">
          <OrderSummary />
        </div>
        <Link
          className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-500 transition-colors hover:text-amber-700"
          to="/order"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          {lines.length > 0 ? 'Edit your order' : 'Start an order'}
        </Link>
      </div>
    </aside>
  )
}
