export function ContactHero() {
  return (
    <section className="relative isolate min-h-[70svh] overflow-hidden bg-stone-950 text-white">
      <img
        alt="The restaurant dining room prepared for evening service"
        className="hero-image absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
        height="1200"
        src="/images/restaurant-interior.jpg"
        width="1800"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.96)_0%,rgba(12,10,9,0.82)_45%,rgba(12,10,9,0.28)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/30"
      />

      <div className="relative mx-auto flex min-h-[70svh] max-w-7xl items-end px-5 pt-36 pb-24 sm:px-8 sm:pb-28 lg:items-center lg:py-44">
        <div className="hero-copy max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-amber-300 uppercase">
            <span aria-hidden="true" className="h-px w-10 bg-amber-400" />
            Contact us
          </p>
          <h1 className="mt-7 font-serif text-5xl leading-[0.96] font-medium tracking-[-0.045em] sm:text-7xl lg:text-[5.5rem]">
            Come say hello.
            <span className="block text-amber-300 italic">
              We&apos;re listening.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
            Planning a visit, celebrating something special, or simply have a
            question? Our team would be delighted to help.
          </p>
        </div>
      </div>

      <div className="hero-note absolute right-8 bottom-8 hidden rounded-[1.5rem] border border-white/15 bg-black/45 p-5 backdrop-blur-xl lg:block">
        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.12)]" />
          <span className="text-[0.65rem] font-bold tracking-[0.17em] text-stone-300 uppercase">
            Open daily
          </span>
        </div>
        <p className="mt-4 font-serif text-xl font-semibold">
          Lunch through late evening
        </p>
        <p className="mt-1 text-xs text-stone-400">Colombo 03, Sri Lanka</p>
      </div>
    </section>
  )
}
