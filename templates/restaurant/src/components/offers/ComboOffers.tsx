const combos = [
  {
    eyebrow: 'Made for two',
    title: 'The Date Night Table',
    description:
      'A relaxed three-course sharing experience created for an unhurried evening together.',
    items: ['Two signature mains', 'One shared dessert', 'Two house beverages'],
    price: 'LKR 8,900',
    image: '/images/dish-pasta.jpg',
  },
  {
    eyebrow: 'Made for gathering',
    title: 'The Family Table',
    description:
      'A generous selection of familiar favourites designed to pass, share, and enjoy together.',
    items: ['Four selected mains', 'Two shared sides', 'One dessert platter'],
    price: 'LKR 14,500',
    image: '/images/offer-table.jpg',
  },
  {
    eyebrow: 'Made for slow mornings',
    title: 'The Weekend Brunch',
    description:
      'A bright late-morning spread with breakfast favourites, something sweet, and drinks for two.',
    items: ['Two brunch plates', 'One shared sweet', 'Two fresh beverages'],
    price: 'LKR 7,500',
    image: '/images/category-breakfast.jpg',
  },
]

export function ComboOffers() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      <div
        aria-hidden="true"
        className="hero-glow absolute top-1/3 -left-60 size-[32rem] rounded-full bg-amber-400/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-amber-300 uppercase">
              Better together
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold sm:text-6xl">
              Curated combinations for every table.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-stone-400">
            Complete dining experiences with the choices already made for you.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {combos.map((combo, index) => (
            <article
              className={`reveal-on-scroll group grid overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.045] shadow-2xl lg:grid-cols-2 ${
                index % 2 === 1 ? 'reveal-delay-1' : ''
              }`}
              key={combo.title}
            >
              <div
                className={`relative min-h-[25rem] overflow-hidden ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  alt={`${combo.title} combo offer`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                  src={combo.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-transparent to-transparent" />
                <span className="absolute top-6 left-6 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[0.62rem] font-bold tracking-wider uppercase backdrop-blur-md">
                  Combo 0{index + 1}
                </span>
              </div>

              <div
                className={`flex flex-col justify-center p-8 sm:p-10 lg:p-12 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <p className="text-xs font-bold tracking-[0.17em] text-amber-300 uppercase">
                  {combo.eyebrow}
                </p>
                <h3 className="mt-4 font-serif text-4xl font-semibold">
                  {combo.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-stone-400">
                  {combo.description}
                </p>
                <ul className="mt-7 grid gap-3 text-sm text-stone-300 sm:grid-cols-2">
                  {combo.items.map((item) => (
                    <li className="flex items-center gap-3" key={item}>
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-amber-400 text-[0.6rem] font-bold text-stone-950">
                        &#10003;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-[0.6rem] tracking-wider text-stone-500 uppercase">
                      Complete experience
                    </p>
                    <p className="mt-2 font-serif text-3xl text-amber-300">
                      {combo.price}
                    </p>
                  </div>
                  <a
                    className="group/link inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs font-bold transition-all hover:border-amber-300 hover:bg-amber-400 hover:text-stone-950"
                    href="/reservation"
                  >
                    Choose this offer
                    <span className="transition-transform group-hover/link:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
