import { BlogCard } from './BlogCard'
import { blogPosts } from './blogData'

import type { BlogPost } from './blogData'

type BlogDetailsLayoutProps = {
  post: BlogPost
}

export function BlogDetailsLayout({ post }: BlogDetailsLayoutProps) {
  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2)

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-[#12100e] px-4 pt-28 pb-5 text-white sm:px-6 sm:pt-32 sm:pb-8 lg:px-8 lg:pt-36 lg:pb-10">
          <div
            aria-hidden="true"
            className="hero-glow absolute -top-40 -left-32 size-[34rem] rounded-full bg-amber-500/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute right-8 bottom-0 hidden text-[15rem] leading-none font-semibold text-white/[0.025] lg:block"
          >
            J
          </div>

          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] shadow-[0_30px_100px_rgba(0,0,0,0.3)] sm:rounded-[2rem] lg:grid lg:min-h-[39rem] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="hero-copy flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-14">
              <div>
                <a
                  className="inline-flex items-center gap-3 text-[0.62rem] font-bold tracking-[0.18em] text-stone-400 uppercase transition-colors hover:text-amber-300"
                  href="/blog"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-8 place-items-center rounded-full border border-white/15 text-sm"
                  >
                    ←
                  </span>
                  Back to journal
                </a>

                <div className="mt-12 flex items-center gap-3 sm:mt-16">
                  <span className="h-px w-8 bg-amber-400" />
                  <p className="text-[0.62rem] font-bold tracking-[0.22em] text-amber-300 uppercase">
                    {post.category}
                  </p>
                </div>
                <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-[0.98] font-medium tracking-[-0.045em] sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]">
                  {post.title}
                </h1>
                <p className="mt-6 max-w-xl text-sm leading-7 text-stone-400 sm:text-base sm:leading-8">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/10 pt-6 text-[0.68rem] text-stone-500">
                <span className="font-semibold text-stone-300">
                  {post.author}
                </span>
                <span
                  aria-hidden="true"
                  className="size-1 rounded-full bg-amber-400"
                />
                <time>{post.date}</time>
                <span
                  aria-hidden="true"
                  className="size-1 rounded-full bg-amber-400"
                />
                <span>{post.readTime}</span>
              </div>
            </div>

            <figure className="hero-note relative min-h-[25rem] overflow-hidden border-t border-white/10 bg-stone-900 lg:min-h-full lg:border-t-0 lg:border-l">
              <img
                alt={post.imageAlt}
                className="absolute inset-0 size-full object-cover transition-transform duration-[1.4s] hover:scale-[1.025]"
                src={post.image}
                style={{ objectPosition: post.imagePosition ?? 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-stone-950/20 lg:to-transparent" />
              <figcaption className="absolute right-5 bottom-5 rounded-full border border-white/15 bg-stone-950/45 px-4 py-2 text-[0.55rem] font-bold tracking-[0.16em] text-white/80 uppercase backdrop-blur-md">
                Restaurant Journal · Colombo
              </figcaption>
            </figure>
          </div>
        </header>

        <div className="bg-[#f6f2ea] px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:order-none">
              <div className="reveal-on-scroll lg:sticky lg:top-8">
                <div className="border-t border-stone-300 pt-5">
                  <p className="text-[0.58rem] font-bold tracking-[0.18em] text-amber-700 uppercase">
                    The journal
                  </p>
                  <p className="mt-4 font-serif text-xl leading-tight text-stone-950">
                    Notes from our kitchen and dining room.
                  </p>
                </div>

                <dl className="mt-8 space-y-5 border-y border-stone-300 py-6 text-xs">
                  <div>
                    <dt className="font-bold tracking-[0.14em] text-stone-400 uppercase">
                      Written by
                    </dt>
                    <dd className="mt-2 leading-5 font-semibold text-stone-800">
                      {post.author}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-bold tracking-[0.14em] text-stone-400 uppercase">
                      Published
                    </dt>
                    <dd className="mt-2 text-stone-700">{post.date}</dd>
                  </div>
                  <div>
                    <dt className="font-bold tracking-[0.14em] text-stone-400 uppercase">
                      Reading time
                    </dt>
                    <dd className="mt-2 text-stone-700">{post.readTime}</dd>
                  </div>
                </dl>

                <a
                  className="group mt-6 inline-flex items-center gap-3 text-xs font-bold text-stone-800 transition-colors hover:text-amber-700"
                  href="/reservation"
                >
                  Experience our table
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </aside>

            <div className="overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-white shadow-[0_24px_70px_rgba(28,25,23,0.07)] sm:rounded-[2.25rem]">
              <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                {post.content.map((section, index) => (
                  <section
                    className={`reveal-on-scroll ${index > 0 ? 'mt-14 border-t border-stone-200 pt-12 sm:mt-16 sm:pt-14' : ''}`}
                    key={section.heading ?? `introduction-${index}`}
                  >
                    {section.heading ? (
                      <div className="flex items-start gap-4">
                        <span className="mt-2 text-[0.62rem] font-bold tracking-[0.12em] text-amber-700">
                          0{index + 1}
                        </span>
                        <h2 className="font-serif text-3xl leading-[1.08] font-semibold tracking-[-0.035em] text-stone-950 sm:text-4xl">
                          {section.heading}
                        </h2>
                      </div>
                    ) : null}

                    <div className={section.heading ? 'mt-7' : ''}>
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p
                          className={`mb-6 text-base leading-8 text-stone-700 sm:text-[1.08rem] sm:leading-9 ${
                            index === 0 && paragraphIndex === 0
                              ? 'first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.85] first-letter:font-semibold first-letter:text-amber-700'
                              : ''
                          }`}
                          key={paragraph}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.quote ? (
                      <blockquote className="relative my-10 overflow-hidden rounded-[1.5rem] bg-stone-950 px-7 py-9 text-white sm:px-10 sm:py-11">
                        <span
                          aria-hidden="true"
                          className="absolute -top-4 right-5 font-serif text-8xl leading-none text-amber-400/15"
                        >
                          “
                        </span>
                        <p className="relative font-serif text-2xl leading-snug text-stone-100 italic sm:text-3xl">
                          {section.quote}
                        </p>
                        <div className="mt-6 h-px w-10 bg-amber-400" />
                      </blockquote>
                    ) : null}
                  </section>
                ))}
              </div>

              <div className="flex flex-col gap-6 border-t border-amber-300/50 bg-amber-50 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
                <div>
                  <p className="text-[0.58rem] font-bold tracking-[0.18em] text-amber-700 uppercase">
                    End of story
                  </p>
                  <p className="mt-2 font-serif text-xl text-stone-900">
                    There is always more happening around our table.
                  </p>
                </div>
                <a
                  className="inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-stone-950 px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-amber-700"
                  href="/blog"
                >
                  All stories <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal-on-scroll flex items-end justify-between gap-5">
            <div>
              <p className="text-[0.62rem] font-bold tracking-[0.2em] text-amber-700 uppercase">
                Continue reading
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-[-0.035em] text-stone-950 sm:text-5xl">
                More from the journal
              </h2>
            </div>
            <a
              className="hidden text-sm font-bold text-stone-700 transition-colors hover:text-amber-700 sm:block"
              href="/blog"
            >
              View all stories →
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {relatedPosts.map((relatedPost, index) => (
              <BlogCard
                index={index}
                key={relatedPost.slug}
                post={relatedPost}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
