import { useEffect, useState, useMemo } from 'react'
import { useSiteConfig } from '#/site-config/SiteConfigContext'

const defaultHeroSlides = [
  {
    image: '/images/hero-dining.jpg',
    alt: 'An elegant dinner being served at a candlelit restaurant table',
    eyebrow: 'Contemporary dining · Est. 2012',
    title: 'Where every plate',
    accent: 'tells a story.',
    description:
      'Seasonal ingredients, expressive flavors, and warm hospitality come together for a dining experience designed to be remembered.',
  },
  {
    image: '/images/restaurant-interior.jpg',
    alt: 'The warmly lit interior of the restaurant prepared for dinner',
    eyebrow: 'Warm Sri Lankan hospitality',
    title: 'An evening made',
    accent: 'to linger over.',
    description:
      'Settle into an intimate room where thoughtful service and the gentle rhythm of Colombo shape every moment.',
  },
  {
    image: '/images/dish-steak.jpg',
    alt: 'A carefully plated signature dish from the restaurant menu',
    eyebrow: 'Seasonal · Local · Expressive',
    title: 'Ingredients with soul.',
    accent: 'Crafted with purpose.',
    description:
      'Our menus follow the season, bringing local produce and modern technique together in dishes full of character.',
  },
]

const slideDuration = 6500

export function HeroSection() {
  const { heroImageUrl, businessName } = useSiteConfig()
  const heroSlides = useMemo(
    () =>
      heroImageUrl
        ? [
            {
              image: heroImageUrl,
              alt: `${businessName} — featured photo`,
              eyebrow: businessName,
              title: 'Welcome to',
              accent: `${businessName}.`,
              description: 'We would love to have you at our table.',
            },
            ...defaultHeroSlides,
          ]
        : defaultHeroSlides,
    [heroImageUrl, businessName],
  )
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, slideDuration)

    return () => window.clearInterval(interval)
  }, [isPaused])

  const slide = heroSlides[activeSlide]

  return (
    <section
      aria-label="Restaurant highlights"
      aria-roledescription="carousel"
      className="relative isolate min-h-screen overflow-hidden bg-stone-950 text-white"
    >
      {heroSlides.map((item, index) => (
        <img
          alt={item.alt}
          className={`home-hero-slide absolute inset-0 h-full w-full object-cover object-[62%_center] ${
            index === activeSlide ? 'is-active' : ''
          }`}
          fetchPriority={index === 0 ? 'high' : 'low'}
          height="1200"
          key={item.image}
          loading={index === 0 ? 'eager' : 'lazy'}
          src={item.image}
          width="1800"
        />
      ))}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.98)_0%,rgba(12,10,9,0.9)_38%,rgba(12,10,9,0.48)_66%,rgba(12,10,9,0.2)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,10,9,0.8)_0%,transparent_48%,rgba(12,10,9,0.18)_100%)]"
      />
      <div
        aria-hidden="true"
        className="hero-glow absolute -top-40 -left-40 size-96 rounded-full bg-amber-400/15 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-32 pb-32 sm:px-8 sm:pt-36 lg:py-32">
        <div className="max-w-3xl" key={activeSlide}>
          <div className="home-hero-kicker flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-amber-300 uppercase">
            <span className="h-px w-10 bg-amber-400" aria-hidden="true" />
            {slide.eyebrow}
          </div>

          <h1 className="home-hero-title mt-7 max-w-4xl font-serif text-5xl leading-[0.98] font-medium tracking-[-0.04em] sm:text-7xl lg:text-[5.6rem]">
            {slide.title}
            <span className="block text-amber-300 italic">{slide.accent}</span>
          </h1>

          <p className="home-hero-description mt-7 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
            {slide.description}
          </p>

          <div className="home-hero-actions mt-10 flex flex-wrap gap-4">
            <a
              className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-stone-950 shadow-[0_12px_36px_rgba(251,191,36,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-[0_16px_42px_rgba(251,191,36,0.28)]"
              href="/menu"
            >
              Explore Our Menu
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
            <a
              className="inline-flex items-center rounded-full border border-white/35 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-400 hover:text-stone-950"
              href="#reservation"
            >
              Reserve a Table
            </a>
          </div>

          <div className="home-hero-meta mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-6 text-sm text-stone-400">
            <p>
              <span className="font-semibold text-white">4.9</span> guest rating
            </p>
            <span className="hidden size-1 rounded-full bg-amber-400 sm:block" />
            <p>Open daily · 11:30 AM - 11:00 PM</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-5 bottom-7 z-10 mx-auto flex max-w-7xl items-end justify-between gap-6 sm:inset-x-8">
        <div
          className="flex items-center gap-2"
          role="group"
          aria-label="Choose a hero slide"
        >
          {heroSlides.map((item, index) => (
            <button
              aria-label={`Show slide ${index + 1}: ${item.title} ${item.accent}`}
              aria-pressed={index === activeSlide}
              className={`group relative h-8 overflow-hidden rounded-full transition-all duration-500 ${
                index === activeSlide
                  ? 'w-20 bg-white/15'
                  : 'w-8 bg-white/10 hover:bg-white/20'
              }`}
              key={item.image}
              onClick={() => setActiveSlide(index)}
              type="button"
            >
              <span className="sr-only">Slide {index + 1}</span>
              <span
                aria-hidden="true"
                className={`absolute top-1/2 left-1/2 h-px -translate-x-1/2 -translate-y-1/2 bg-white/55 ${
                  index === activeSlide ? 'w-14' : 'w-3'
                }`}
              />
              {index === activeSlide && !isPaused ? (
                <span
                  aria-hidden="true"
                  className="home-hero-progress absolute bottom-0 left-0 h-0.5 bg-amber-400"
                />
              ) : null}
            </button>
          ))}
          <button
            aria-label={
              isPaused ? 'Play hero slideshow' : 'Pause hero slideshow'
            }
            className="ml-1 grid size-8 place-items-center rounded-full border border-white/15 bg-black/20 text-[0.6rem] text-white transition-colors hover:border-amber-300 hover:text-amber-300"
            onClick={() => setIsPaused((current) => !current)}
            type="button"
          >
            <span aria-hidden="true">{isPaused ? '▶' : 'Ⅱ'}</span>
          </button>
        </div>

        <p className="hidden font-serif text-sm text-stone-400 sm:block">
          <span className="text-xl text-white">0{activeSlide + 1}</span>
          <span className="mx-2 text-stone-600">/</span>0{heroSlides.length}
        </p>
      </div>

      <div className="hero-note absolute right-8 bottom-24 hidden max-w-xs rounded-2xl border border-white/15 bg-stone-950/65 p-5 backdrop-blur-md lg:block">
        <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-amber-300 uppercase">
          Tonight at the table
        </p>
        <p className="mt-2 text-sm leading-6 text-stone-200">
          Chef&apos;s seasonal tasting menu, served from 6:00 PM.
        </p>
      </div>
    </section>
  )
}
