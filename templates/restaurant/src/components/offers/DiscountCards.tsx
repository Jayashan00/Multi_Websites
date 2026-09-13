const discounts = [
  {
    amount: '15%',
    title: 'Weekday Lunch',
    description: 'Enjoy selected lunch favourites at a gentler weekday price.',
    validity: 'Monday – Thursday · 12:00–3:00 PM',
    image: '/images/category-lunch.jpg',
    theme: 'light',
  },
  {
    amount: '20%',
    title: 'Early Dinner',
    description: 'Arrive before the evening rush and settle in at your pace.',
    validity: 'Daily · Before 6:30 PM',
    image: '/images/hero-dining.jpg',
    theme: 'dark',
  },
  {
    amount: '10%',
    title: 'Sweet Finish',
    description: 'Pair a signature dessert with any two selected main courses.',
    validity: 'Dine-in only · Selected desserts',
    image: '/images/special-dessert.jpg',
    theme: 'amber',
  },
  {
    amount: '12%',
    title: 'Celebration Table',
    description:
      'Make birthdays and anniversaries sweeter with a special dining saving.',
    validity: 'Celebrations · Advance reservation required',
    image: '/images/offer-table.jpg',
    theme: 'light',
  },
]

export function DiscountCards() {
  return (
    <section className="relative overflow-hidden bg-white text-stone-950">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-amber-700 uppercase">
              A little extra
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Delicious reasons to visit sooner.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-600">
            Thoughtful offers for slower lunches, earlier evenings, and one more
            course at the table.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {discounts.map((discount, index) => {
            const isDark = discount.theme === 'dark'
            const isAmber = discount.theme === 'amber'

            return (
              <article
                className={`reveal-on-scroll group relative min-h-[33rem] overflow-hidden rounded-[2rem] border p-7 shadow-[0_18px_50px_rgba(41,37,36,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(41,37,36,0.16)] ${
                  index % 3 === 1
                    ? 'reveal-delay-1'
                    : index % 3 === 2
                      ? 'reveal-delay-2'
                      : ''
                } ${
                  isDark
                    ? 'border-stone-900 bg-stone-950 text-white'
                    : isAmber
                      ? 'border-amber-300 bg-amber-400'
                      : 'border-stone-200 bg-[#f7f2e9]'
                }`}
                key={discount.title}
              >
                <div className="absolute top-0 right-0 h-56 w-44 overflow-hidden rounded-bl-[7rem] opacity-75 transition-all duration-700 group-hover:w-52 group-hover:opacity-100">
                  <img
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    src={discount.image}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-l ${
                      isDark
                        ? 'from-transparent to-stone-950'
                        : isAmber
                          ? 'from-transparent to-amber-400'
                          : 'from-transparent to-[#f7f2e9]'
                    }`}
                  />
                </div>

                <div className="relative flex min-h-[29rem] flex-col">
                  <div>
                    <p
                      className={`text-[0.62rem] font-bold tracking-[0.18em] uppercase ${
                        isDark ? 'text-amber-300' : 'text-amber-800'
                      }`}
                    >
                      Save
                    </p>
                    <p className="mt-2 font-serif text-7xl leading-none font-semibold">
                      {discount.amount}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <p className="text-[0.62rem] font-semibold tracking-[0.15em] opacity-55 uppercase">
                      Offer 0{index + 1}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl font-semibold">
                      {discount.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 opacity-65">
                      {discount.description}
                    </p>
                    <p className="mt-6 border-t border-current/15 pt-5 text-xs font-semibold opacity-60">
                      {discount.validity}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
