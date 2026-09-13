const departments = [
  {
    number: '01',
    title: 'Kitchen Brigade',
    members: '12',
    experience: '85+ combined years',
    description:
      'Precision, preparation, and calm collaboration from the first mise en place to the final plate.',
    specialties: ['Preparation', 'Grill', 'Garde manger'],
  },
  {
    number: '02',
    title: 'Dining Room Team',
    members: '10',
    experience: 'Fine-dining specialists',
    description:
      'Warm, intuitive service that gives every table space to enjoy the evening in its own way.',
    specialties: ['Table service', 'Wine service', 'Private dining'],
  },
  {
    number: '03',
    title: 'Guest Experience',
    members: '6',
    experience: 'Event & guest care',
    description:
      'The thoughtful planning behind reservations, celebrations, and details guests remember.',
    specialties: ['Hospitality', 'Events', 'Guest care'],
  },
]

export function StaffDetails() {
  return (
    <section className="relative overflow-hidden bg-[#f7f2e9] text-stone-950">
      <div
        aria-hidden="true"
        className="hero-glow absolute top-24 -left-56 size-[34rem] rounded-full bg-amber-300/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-amber-700 uppercase">
              Beyond the kitchen
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold sm:text-6xl">
              It takes a whole team to make hospitality feel effortless.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-stone-600">
            From preparation to the final farewell, every department shares the
            same attention to detail.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {departments.map((department, index) => (
            <article
              className={`reveal-on-scroll group relative min-h-[27rem] overflow-hidden rounded-[2rem] border p-7 shadow-[0_16px_45px_rgba(41,37,36,0.09)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_65px_rgba(41,37,36,0.18)] sm:p-8 ${
                index === 1
                  ? 'reveal-delay-1'
                  : index === 2
                    ? 'reveal-delay-2'
                    : ''
              } ${
                index === 0
                  ? 'border-[#dfcfb5] bg-[#efe3cf] text-stone-950'
                  : index === 1
                    ? 'border-[#c8d8c7] bg-[#dfe9df] text-stone-950'
                    : 'border-[#dbc9c1] bg-[#eaded8] text-stone-950'
              }`}
              key={department.title}
            >
              <span className="absolute top-5 right-6 font-serif text-7xl text-stone-950/[0.07] transition-colors group-hover:text-stone-950/[0.12]">
                {department.number}
              </span>
              <div className="relative flex min-h-[23rem] flex-col">
                <p className="text-[0.62rem] font-bold tracking-[0.17em] text-amber-900 uppercase">
                  Department {department.number}
                </p>
                <h3 className="mt-5 font-serif text-3xl font-semibold">
                  {department.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-stone-700">
                  {department.description}
                </p>

                <div className="mt-auto">
                  <div className="grid grid-cols-2 gap-4 border-y border-stone-950/15 py-5">
                    <div>
                      <p className="font-serif text-3xl text-stone-950">
                        {department.members}
                      </p>
                      <p className="mt-1 text-[0.58rem] tracking-wider text-stone-600 uppercase">
                        Team members
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-stone-900">
                        {department.experience}
                      </p>
                      <p className="mt-1 text-[0.58rem] tracking-wider text-stone-600 uppercase">
                        Experience
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {department.specialties.map((specialty) => (
                      <span
                        className="rounded-full border border-stone-950/20 px-3 py-1.5 text-[0.65rem] text-stone-700 transition-all duration-300 group-hover:bg-stone-950 group-hover:text-white"
                        key={specialty}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal-on-scroll mt-16 grid overflow-hidden rounded-[2.25rem] border border-stone-900 bg-stone-950 text-white shadow-[0_24px_70px_rgba(41,37,36,0.18)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[27rem] overflow-hidden">
            <img
              alt="The restaurant dining room prepared by the service team"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              loading="lazy"
              src="/images/restaurant-interior.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-transparent to-transparent" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <p className="text-xs font-bold tracking-[0.18em] text-amber-300 uppercase">
              Our shared philosophy
            </p>
            <blockquote className="mt-5 font-serif text-3xl leading-tight font-medium sm:text-4xl">
              “The guest may remember the dish, but they return for how the
              whole evening made them feel.”
            </blockquote>
            <p className="mt-6 text-sm text-stone-500">
              Chef Dilan Perera &middot; Executive Chef
            </p>
            <a
              className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
              href="/reservation"
            >
              Meet us at the table
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
