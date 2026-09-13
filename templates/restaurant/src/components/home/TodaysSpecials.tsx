type DailySpecial = {
  name: string
  description: string
  price: string
  image: string
  imageAlt: string
  note: string
}

const dailySpecials: Array<DailySpecial> = [
  {
    name: 'Cedar-Seared Salmon',
    description:
      'Salmon fillet, garden vegetable ribbons, baby spinach, and citrus butter.',
    price: 'LKR 7,200',
    image: '/images/special-salmon.jpg',
    imageAlt: 'Seared salmon with fresh vegetable ribbons and spinach',
    note: 'Chef recommendation',
  },
  {
    name: 'Fire-Roasted Chicken Pizza',
    description:
      'Roasted chicken, smoked mozzarella, red onion, herbs, and house chilli glaze.',
    price: 'LKR 5,900',
    image: '/images/special-pizza.jpg',
    imageAlt: 'Fire-roasted chicken pizza with herbs and red onion',
    note: 'From the stone oven',
  },
  {
    name: 'Chocolate Celebration',
    description:
      'Warm artisan donuts, dark chocolate glaze, vanilla cream, and festive crunch.',
    price: 'LKR 3,600',
    image: '/images/special-dessert.jpg',
    imageAlt: 'Chocolate-glazed artisan donuts with colorful sprinkles',
    note: 'Limited batch',
  },
]

export function TodaysSpecials() {
  return (
    <section
      id="todays-specials"
      className="scroll-mt-20 overflow-hidden bg-[#fbf8f2] text-stone-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="reveal-on-scroll flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-amber-700 uppercase">
              <span className="deal-pulse size-2 rounded-full bg-amber-600" />
              Fresh from the kitchen
            </div>
            <h2 className="mt-6 font-serif text-4xl leading-tight font-medium tracking-[-0.03em] sm:text-5xl">
              Today&apos;s
              <span className="text-amber-700 italic"> specials.</span>
            </h2>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="text-base leading-7 text-stone-500">
              Small-batch dishes inspired by today&apos;s best market finds.
              Available while they last.
            </p>
            <p className="mt-3 text-xs font-semibold tracking-[0.14em] text-stone-400 uppercase">
              Available today only
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {dailySpecials.map((dish, index) => (
            <article
              className={`reveal-on-scroll reveal-delay-${index} group flex flex-col overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-white shadow-[0_16px_44px_rgba(41,37,36,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_65px_rgba(41,37,36,0.13)]`}
              key={dish.name}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-stone-200">
                <img
                  alt={dish.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  height="700"
                  loading="lazy"
                  src={dish.image}
                  width="1000"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-transparent"
                />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-stone-950/70 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.12em] text-white uppercase backdrop-blur-md">
                  {dish.note}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl leading-tight font-semibold">
                    {dish.name}
                  </h3>
                  <span className="shrink-0 text-right font-serif text-lg font-semibold text-amber-700 sm:text-xl">
                    {dish.price}
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-6 text-stone-500">
                  {dish.description}
                </p>
                <a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-900"
                  href="/menu"
                >
                  Add to order
                  <span
                    aria-hidden="true"
                    className="flex size-8 items-center justify-center rounded-full bg-amber-400 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-amber-300"
                  >
                    +
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
