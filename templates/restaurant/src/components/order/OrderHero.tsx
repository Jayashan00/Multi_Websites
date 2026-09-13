import { useOrderCart } from '#/components/order/OrderCartContext'

export function OrderHero() {
  const { itemCount } = useOrderCart()

  return (
    <section className="relative isolate min-h-[68vh] overflow-hidden bg-stone-950 text-white">
      <img
        alt="A freshly prepared wood-fired pizza ready to order"
        className="hero-image absolute inset-0 h-full w-full object-cover object-[65%_center]"
        fetchPriority="high"
        src="/images/special-pizza.jpg"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.98)_0%,rgba(12,10,9,0.9)_43%,rgba(12,10,9,0.42)_75%,rgba(12,10,9,0.18)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-stone-950/20"
      />
      <div
        aria-hidden="true"
        className="hero-glow absolute -top-40 -left-40 size-96 rounded-full bg-amber-400/15 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-center px-5 pt-36 pb-24 sm:px-8 lg:py-36">
        <div className="hero-copy max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-amber-300 uppercase">
            <span aria-hidden="true" className="h-px w-10 bg-amber-400" />
            Order online
          </div>
          <h1 className="mt-7 font-serif text-5xl leading-[0.98] font-medium tracking-[-0.045em] sm:text-7xl">
            Your favourites,
            <span className="block text-amber-300 italic">
              ready when you are.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
            Select your dishes, review your cart, and prepare your order in a
            few simple steps.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-bold text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
              href="#food-selection"
            >
              Start your order
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-amber-300 hover:text-amber-300"
              href="#cart"
            >
              View cart
              <span className="grid size-6 place-items-center rounded-full bg-white/10 text-xs font-bold">
                {itemCount}
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-note absolute right-8 bottom-8 hidden rounded-[1.5rem] border border-white/15 bg-stone-950/65 p-5 backdrop-blur-xl lg:block">
        <p className="text-[0.62rem] font-bold tracking-[0.16em] text-amber-300 uppercase">
          Three simple steps
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-stone-300">
          {['Select', 'Review', 'Checkout'].map((step, index) => (
            <span className="flex items-center gap-3" key={step}>
              {index > 0 ? <span className="text-stone-600">→</span> : null}
              <span>{step}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
