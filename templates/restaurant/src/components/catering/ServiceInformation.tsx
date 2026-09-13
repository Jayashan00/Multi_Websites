const services = [
  {
    number: '01',
    title: 'Menu Planning',
    description: 'Package selection, menu adjustments, and dietary planning.',
  },
  {
    number: '02',
    title: 'Setup & Presentation',
    description: 'Food stations, serving presentation, and essential setup.',
  },
  {
    number: '03',
    title: 'Professional Service',
    description: 'Experienced chefs, servers, and event support staff.',
  },
  {
    number: '04',
    title: 'Delivery & Timing',
    description: 'Coordinated preparation, delivery, service, and collection.',
  },
]

export function ServiceInformation() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      <div
        aria-hidden="true"
        className="hero-glow absolute top-20 -left-56 size-[34rem] rounded-full bg-amber-400/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-amber-300 uppercase">
              From idea to occasion
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-6xl">
              Thoughtful service at every step.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-400 lg:justify-self-end">
            The final scope is shaped around your venue, format, guest count,
            and the experience you want to create.
          </p>
        </div>

        <div className="reveal-on-scroll reveal-delay-1 mt-12 divide-y divide-white/10 border-y border-white/10">
          {services.map((service) => (
            <article
              className="group grid gap-4 py-7 transition-all duration-300 hover:bg-white/[0.045] sm:grid-cols-[4rem_0.8fr_1.2fr_3rem] sm:items-center sm:px-4"
              key={service.title}
            >
              <span className="font-serif text-2xl text-amber-300">
                {service.number}
              </span>
              <h3 className="font-serif text-2xl font-semibold transition-colors group-hover:text-amber-300 sm:text-3xl">
                {service.title}
              </h3>
              <p className="text-sm leading-7 text-stone-400">
                {service.description}
              </p>
              <span className="hidden text-right text-lg text-stone-600 transition-transform group-hover:translate-x-1 group-hover:text-amber-300 sm:block">
                &rarr;
              </span>
            </article>
          ))}
        </div>

        <div className="reveal-on-scroll mt-10 grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] sm:grid-cols-3">
          {[
            ['48 hrs', 'Typical response'],
            ['20+', 'Minimum guests'],
            ['Custom', 'Menu options'],
          ].map(([value, label]) => (
            <div
              className="border-b border-white/10 p-6 text-center last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"
              key={label}
            >
              <p className="font-serif text-3xl text-amber-300">{value}</p>
              <p className="mt-2 text-[0.62rem] tracking-wider text-stone-500 uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
