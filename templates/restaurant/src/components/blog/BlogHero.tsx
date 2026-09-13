import { blogPosts } from './blogData'

export function BlogHero() {
  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0]

  return (
    <section className="relative overflow-hidden bg-[#12100e] px-5 pt-32 pb-16 text-white sm:px-8 sm:pt-36 lg:pb-20">
      <div
        aria-hidden="true"
        className="hero-glow absolute -top-32 -right-28 size-[28rem] rounded-full bg-amber-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 size-72 -translate-x-1/2 translate-y-1/2 rounded-full border border-white/[0.06]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="hero-copy flex flex-col gap-7 border-b border-white/10 pb-9 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.65rem] font-bold tracking-[0.24em] text-amber-300 uppercase">
              The Restaurant Journal
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.94] font-medium tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              Stories from
              <span className="block text-amber-300 italic">our table.</span>
            </h1>
          </div>
          <p className="max-w-md text-sm leading-7 text-stone-400 lg:pb-1">
            Recipes, people, ingredients, and the quiet details behind every
            memorable service.
          </p>
        </div>

        <article className="gallery-portal mt-10 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] lg:grid-cols-[1.2fr_0.8fr]">
          <a
            aria-label={`Read featured story: ${featuredPost.title}`}
            className="group relative min-h-[22rem] overflow-hidden lg:min-h-[31rem]"
            href={`/blog/${featuredPost.slug}`}
          >
            <img
              alt={featuredPost.imageAlt}
              className="hero-image absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src={featuredPost.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-stone-950/30" />
            <span className="absolute top-6 left-6 rounded-full bg-amber-400 px-4 py-2 text-[0.6rem] font-bold tracking-[0.18em] text-stone-950 uppercase">
              Featured story
            </span>
          </a>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-[0.62rem] font-bold tracking-[0.18em] text-amber-300 uppercase">
              {featuredPost.category}
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-[1.02] font-medium tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              {featuredPost.title}
            </h2>
            <p className="mt-6 text-sm leading-7 text-stone-400">
              {featuredPost.excerpt}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-stone-500">
              <span>{featuredPost.date}</span>
              <span
                aria-hidden="true"
                className="size-1 rounded-full bg-amber-400"
              />
              <span>{featuredPost.readTime}</span>
            </div>
            <a
              className="group mt-9 inline-flex items-center gap-4 self-start rounded-full bg-amber-400 py-3 pr-3 pl-6 text-sm font-bold text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
              href={`/blog/${featuredPost.slug}`}
            >
              Read the story
              <span className="grid size-8 place-items-center rounded-full bg-stone-950 text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
