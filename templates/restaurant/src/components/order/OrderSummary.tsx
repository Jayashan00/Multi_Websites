import { Link } from '@tanstack/react-router'

import { useOrderCart } from '#/components/order/OrderCartContext'
import { formatLkr } from '#/components/order/orderMenuData'

type OrderSummaryProps = {
  showCheckoutButton?: boolean
}

export function OrderSummary({
  showCheckoutButton = false,
}: OrderSummaryProps) {
  const { deliveryFee, itemCount, subtotal, total } = useOrderCart()

  return (
    <div>
      <h3 className="font-serif text-xl font-semibold">Order Summary</h3>
      <dl className="mt-5 space-y-3 text-sm">
        <div className="flex justify-between gap-5 text-stone-500">
          <dt>Subtotal</dt>
          <dd>{formatLkr(subtotal)}</dd>
        </div>
        <div className="flex justify-between gap-5 text-stone-500">
          <dt>Delivery</dt>
          <dd>{formatLkr(deliveryFee)}</dd>
        </div>
        <div className="flex justify-between gap-5 border-t border-stone-200 pt-4 font-semibold text-stone-950">
          <dt>Total</dt>
          <dd>{formatLkr(total)}</dd>
        </div>
      </dl>

      {showCheckoutButton && itemCount > 0 ? (
        <Link
          className="group mt-6 flex w-full items-center justify-between rounded-full bg-amber-400 py-2.5 pr-2.5 pl-5 text-sm font-bold text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
          to="/checkout"
        >
          Continue to Checkout
          <span className="grid size-8 place-items-center rounded-full bg-stone-950 text-white transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      ) : showCheckoutButton ? (
        <span className="mt-6 flex w-full cursor-not-allowed items-center justify-center rounded-full bg-stone-100 px-5 py-3.5 text-sm font-bold text-stone-400">
          Add items to continue
        </span>
      ) : null}
    </div>
  )
}
