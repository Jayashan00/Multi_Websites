import { OrderSummary } from '#/components/order/OrderSummary'
import { useOrderCart } from '#/components/order/OrderCartContext'
import { formatLkr } from '#/components/order/orderMenuData'

export function CartSidebar() {
  const { clearCart, itemCount, lines, removeItem, updateQuantity } =
    useOrderCart()

  return (
    <aside
      aria-label="Shopping cart"
      className="scroll-mt-5 overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-[0_18px_55px_rgba(41,37,36,0.09)] lg:sticky lg:top-5"
      id="cart"
    >
      <div className="flex items-center justify-between gap-4 bg-stone-950 px-6 py-5 text-white">
        <div>
          <p className="text-[0.62rem] font-bold tracking-[0.16em] text-amber-300 uppercase">
            Your order
          </p>
          <h2 className="mt-1 font-serif text-2xl font-semibold">Cart</h2>
        </div>
        <span
          aria-label={`${itemCount} items in cart`}
          className="grid size-10 place-items-center rounded-full bg-amber-400 text-sm font-bold text-stone-950"
        >
          {itemCount}
        </span>
      </div>

      <div className="p-6">
        {lines.length > 0 ? (
          <>
            <div className="divide-y divide-stone-200">
              {lines.map((line) => (
                <article
                  className="review-enter py-5 first:pt-0"
                  key={line.item.id}
                >
                  <div className="flex gap-4">
                    <img
                      alt=""
                      className="size-16 shrink-0 rounded-xl object-cover"
                      loading="lazy"
                      src={line.item.image}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-sm leading-5 font-semibold">
                          {line.item.name}
                        </h3>
                        <button
                          aria-label={`Remove ${line.item.name} from cart`}
                          className="text-lg leading-none text-stone-300 transition-colors hover:text-red-500"
                          onClick={() => removeItem(line.item.id)}
                          type="button"
                        >
                          ×
                        </button>
                      </div>
                      <p className="mt-1 text-xs text-stone-500">
                        {formatLkr(line.item.price * line.quantity)}
                      </p>
                      <div
                        aria-label={`Quantity controls for ${line.item.name}`}
                        className="mt-3 flex w-fit items-center rounded-full border border-stone-300 bg-stone-50"
                      >
                        <button
                          aria-label={`Decrease quantity of ${line.item.name}`}
                          className="grid size-8 place-items-center rounded-full transition-colors hover:bg-stone-200"
                          onClick={() =>
                            updateQuantity(line.item.id, line.quantity - 1)
                          }
                          type="button"
                        >
                          −
                        </button>
                        <span className="min-w-7 text-center text-xs font-bold">
                          {line.quantity}
                        </span>
                        <button
                          aria-label={`Increase quantity of ${line.item.name}`}
                          className="grid size-8 place-items-center rounded-full transition-colors hover:bg-amber-200"
                          onClick={() =>
                            updateQuantity(line.item.id, line.quantity + 1)
                          }
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <button
              className="mb-5 text-xs font-semibold text-stone-400 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-red-600"
              onClick={clearCart}
              type="button"
            >
              Clear cart
            </button>
          </>
        ) : (
          <div className="py-8 text-center">
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-amber-100 text-xl text-amber-800">
              +
            </span>
            <p className="mt-4 font-serif text-xl font-semibold">
              Your cart is empty
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-500">
              Choose a dish and it will appear here.
            </p>
          </div>
        )}

        <div className="border-t border-stone-200 pt-6">
          <OrderSummary showCheckoutButton />
        </div>
      </div>
    </aside>
  )
}
