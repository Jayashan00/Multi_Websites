import { useState } from 'react'

import { BlogCard } from './BlogCard'
import { blogCategories, blogPosts } from './blogData'

type BlogCategory = (typeof blogCategories)[number]

export function BlogListing() {
  const [activeCategory, setActiveCategory] =
    useState<BlogCategory>('All Stories')

  const visiblePosts = blogPosts.filter(
    (post) =>
      !post.featured &&
      (activeCategory === 'All Stories' || post.category === activeCategory),
  )

  return (
    <section className="bg-[#f6f2ea] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="reveal-on-scroll flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.65rem] font-bold tracking-[0.22em] text-amber-700 uppercase">
              Latest from the journal
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[1] font-semibold tracking-[-0.04em] text-stone-950 sm:text-5xl lg:text-6xl">
              Taste the story
              <span className="block text-stone-400 italic">
                behind the plate.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-stone-600">
            Browse kitchen notes, ingredient stories, team conversations, and
            moments from life around the restaurant.
          </p>
        </div>

        <div
          aria-label="Filter blog stories by category"
          className="reveal-on-scroll reveal-delay-1 mt-10 flex gap-2 overflow-x-auto border-y border-stone-300/80 py-4"
          role="group"
        >
          {blogCategories.map((category) => (
            <button
              aria-pressed={activeCategory === category}
              className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-stone-950 text-white shadow-lg'
                  : 'border border-stone-300 bg-white/60 text-stone-600 hover:border-amber-500 hover:text-stone-950'
              }`}
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        {visiblePosts.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post, index) => (
              <BlogCard index={index} key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-[1.75rem] border border-dashed border-stone-300 bg-white/50 px-6 py-16 text-center">
            <p className="font-serif text-2xl text-stone-800">
              A new story is being prepared.
            </p>
            <button
              className="mt-5 text-sm font-bold text-amber-700 underline decoration-amber-400 underline-offset-4"
              onClick={() => setActiveCategory('All Stories')}
              type="button"
            >
              View all stories
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
