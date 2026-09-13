import { useCallback, useState } from 'react'

import { GalleryLightbox } from './GalleryLightbox'
import { galleryItems } from './galleryData'
import type { GalleryCategory } from './galleryData'

type GalleryFilter = 'All' | GalleryCategory

const filters: Array<{ label: string; value: GalleryFilter }> = [
  { label: 'All moments', value: 'All' },
  { label: 'On the plate', value: 'Food' },
  { label: 'Inside the restaurant', value: 'Interiors' },
]

const cardLayouts = [
  'lg:col-span-7 lg:row-span-2',
  'lg:col-span-5 lg:row-span-1',
  'lg:col-span-5 lg:row-span-1',
  'lg:col-span-4 lg:row-span-1',
  'lg:col-span-4 lg:row-span-1',
  'lg:col-span-4 lg:row-span-1',
  'lg:col-span-5 lg:row-span-1',
  'lg:col-span-7 lg:row-span-1',
  'lg:col-span-12 lg:row-span-1',
]

export function GalleryCollection() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('All')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const closeLightbox = useCallback(() => setSelectedIndex(null), [])
  const changeLightbox = useCallback((index: number) => {
    setSelectedIndex(index)
  }, [])

  const visibleItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section
      className="relative overflow-hidden bg-[#f7f2e9] text-stone-950"
      id="gallery-grid"
    >
      <div
        aria-hidden="true"
        className="absolute top-28 -right-64 size-[38rem] rounded-full border border-amber-200/70"
      />
      <div
        aria-hidden="true"
        className="absolute top-52 -right-48 size-[25rem] rounded-full border border-amber-200/50"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll grid items-end gap-8 lg:grid-cols-[1fr_0.68fr]">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-amber-600" />
              <p className="text-xs font-bold tracking-[0.19em] text-amber-700 uppercase">
                Curated stories
              </p>
            </div>
            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.02] font-semibold tracking-[-0.045em] sm:text-6xl">
              Every plate has a story.
              <span className="block text-stone-400 italic">
                Every room holds a memory.
              </span>
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
              Move between our culinary craft and the atmosphere surrounding it.
              Open any frame for a closer look.
            </p>
            <div className="mt-6 flex gap-8 border-t border-stone-300 pt-5">
              <div>
                <p className="font-serif text-3xl font-semibold">06</p>
                <p className="mt-1 text-[0.62rem] tracking-wider text-stone-500 uppercase">
                  Food stories
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold">03</p>
                <p className="mt-1 text-[0.62rem] tracking-wider text-stone-500 uppercase">
                  Dining spaces
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal-on-scroll reveal-delay-1 sticky top-3 z-30 mt-12 flex justify-center">
          <div
            aria-label="Gallery filters"
            className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-stone-200 bg-white/90 p-1.5 shadow-[0_12px_35px_rgba(41,37,36,0.1)] backdrop-blur-xl"
            role="group"
          >
            {filters.map((filter) => (
              <button
                aria-pressed={activeFilter === filter.value}
                className={`shrink-0 rounded-full px-5 py-3 text-xs font-bold transition-all duration-300 sm:px-6 ${
                  activeFilter === filter.value
                    ? 'bg-stone-950 text-white shadow-md'
                    : 'text-stone-500 hover:bg-stone-100 hover:text-stone-950'
                }`}
                key={filter.value}
                onClick={() => {
                  setActiveFilter(filter.value)
                  setSelectedIndex(null)
                }}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visibleItems.length} gallery images
        </p>

        <div
          className="gallery-filter-enter mt-12 grid gap-4 sm:grid-cols-2 lg:auto-rows-[18rem] lg:grid-cols-12"
          key={activeFilter}
        >
          {visibleItems.map((item, index) => (
            <button
              aria-label={`Open ${item.title} in image viewer`}
              className={`gallery-card-enter group relative min-h-80 overflow-hidden rounded-[1.75rem] bg-stone-900 text-left shadow-[0_18px_45px_rgba(41,37,36,0.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 ${
                cardLayouts[index % cardLayouts.length]
              }`}
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              style={{ animationDelay: `${index * 70}ms` }}
              type="button"
            >
              <img
                alt={item.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
                src={item.image}
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/5 to-stone-950/15 transition-colors duration-500 group-hover:from-stone-950"
              />
              <span className="absolute top-5 right-5 grid size-12 translate-y-2 place-items-center rounded-full border border-white/30 bg-stone-950/20 text-xl text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                &nearr;
              </span>
              <span className="absolute right-6 bottom-6 left-6 flex items-end justify-between gap-5 text-white">
                <span>
                  <span className="block text-[0.62rem] font-bold tracking-[0.18em] text-amber-300 uppercase">
                    {item.category}
                  </span>
                  <span className="mt-2 block font-serif text-2xl font-semibold sm:text-3xl">
                    {item.title}
                  </span>
                </span>
                <span className="font-serif text-lg text-white/45">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="reveal-on-scroll mt-20 overflow-hidden rounded-[2.25rem] bg-stone-950 text-white shadow-2xl">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <p className="text-xs font-bold tracking-[0.18em] text-amber-300 uppercase">
                More than a dining room
              </p>
              <h3 className="mt-5 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
                The room becomes part of the story.
              </h3>
              <p className="mt-6 text-sm leading-7 text-stone-400">
                Warm light, considered details, and quiet corners create the
                setting for everything from first dates to family traditions.
              </p>
              <a
                className="group mt-8 inline-flex w-fit items-center gap-3 text-sm font-bold text-amber-300"
                href="/reservation"
              >
                Experience it in person
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
            <div className="group relative min-h-[26rem] overflow-hidden">
              <img
                alt="The restaurant dining room prepared for evening service"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
                src="/images/hero-dining.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/65 via-transparent to-transparent" />
              <div className="absolute right-6 bottom-6 rounded-full border border-white/20 bg-black/25 px-5 py-3 text-[0.62rem] font-bold tracking-[0.15em] text-white uppercase backdrop-blur-md">
                Evening service &middot; Colombo
              </div>
            </div>
          </div>
        </div>
      </div>

      <GalleryLightbox
        activeIndex={selectedIndex}
        items={visibleItems}
        onChange={changeLightbox}
        onClose={closeLightbox}
      />
    </section>
  )
}
