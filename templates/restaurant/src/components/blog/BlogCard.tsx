import type { BlogPost } from './blogData'

type BlogCardProps = {
  post: BlogPost
  index?: number
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <article
      className="group menu-card-enter flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-white shadow-[0_18px_55px_rgba(28,25,23,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(28,25,23,0.12)]"
      style={{ animationDelay: `${Math.min(index, 5) * 80}ms` }}
    >
      <a
        aria-label={`Read ${post.title}`}
        className="relative block aspect-[4/3] overflow-hidden bg-stone-200"
        href={`/blog/${post.slug}`}
      >
        <img
          alt={post.imageAlt}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          src={post.image}
          style={{ objectPosition: post.imagePosition ?? 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/35 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
        <span className="absolute top-5 left-5 rounded-full border border-white/25 bg-stone-950/45 px-3 py-1.5 text-[0.58rem] font-bold tracking-[0.16em] text-white uppercase backdrop-blur-md">
          {post.category}
        </span>
      </a>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-2 text-[0.68rem] font-medium text-stone-500">
          <time>{post.date}</time>
          <span
            aria-hidden="true"
            className="size-1 rounded-full bg-amber-500"
          />
          <span>{post.readTime}</span>
        </div>
        <h2 className="mt-4 font-serif text-2xl leading-[1.08] font-semibold tracking-[-0.025em] text-stone-950 sm:text-[1.7rem]">
          <a
            className="transition-colors hover:text-amber-700"
            href={`/blog/${post.slug}`}
          >
            {post.title}
          </a>
        </h2>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-stone-600">
          {post.excerpt}
        </p>
        <a
          className="mt-6 inline-flex items-center gap-3 self-start text-xs font-bold tracking-[0.08em] text-stone-950 uppercase transition-colors hover:text-amber-700"
          href={`/blog/${post.slug}`}
        >
          Read story
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-full border border-stone-300 transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-stone-950"
          >
            →
          </span>
        </a>
      </div>
    </article>
  )
}
