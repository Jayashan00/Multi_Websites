import { useCallback, useEffect, useRef, useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import Rating from '../ui/Rating'
import SmartImage from '../ui/SmartImage'
import { testimonials } from '../../data/testimonials'
import { formatDate } from '../../lib/utils'

export default function TestimonialSlider({ light = true, autoPlay = true }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStart = useRef(null)
  const count = testimonials.length

  const go = useCallback((step) => setIndex((i) => (i + step + count) % count), [count])

  useEffect(() => {
    if (!autoPlay || paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => go(1), 6500)
    return () => clearInterval(t)
  }, [autoPlay, paused, go])

  const active = testimonials[index]

  return (
    <section
      className={`relative overflow-hidden py-20 sm:py-24 ${light ? 'bg-ink' : 'bg-paper'}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-clinic opacity-25"
        style={{ backgroundSize: '38px 38px' }}
        aria-hidden="true"
      />

      <div className="container relative">
        <SectionHeading
          eyebrow="Patient reviews"
          title="What people say after they leave"
          lead="Collected from patients discharged in the last twelve months. Names published with permission."
          align="center"
          light={light}
        />

        <div
          className="relative mx-auto mt-12 max-w-3xl"
          onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart.current === null) return
            const dx = e.changedTouches[0].clientX - touchStart.current
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
            touchStart.current = null
          }}
        >
          <article
            key={active.id}
            className={`animate-fade-up rounded-4xl p-8 sm:p-10 ${
              light
                ? 'border border-white/12 bg-white/[.06] backdrop-blur-xl'
                : 'card-base'
            }`}
            aria-live="polite"
          >
            <Icon
              name="quote"
              size={34}
              className={light ? 'text-mint-400/50' : 'text-clinic-200'}
            />
            <blockquote
              className={`mt-5 font-display text-[19px] font-semibold leading-[1.6] sm:text-[22px] ${
                light ? 'text-white' : 'text-ink'
              }`}
            >
              {active.quote}
            </blockquote>

            <footer
              className={`mt-8 flex flex-wrap items-center gap-4 border-t border-dashed pt-6 ${
                light ? 'border-white/15' : 'border-clinic-100'
              }`}
            >
              <SmartImage
                name={active.photo}
                alt={active.name}
                ratio="1/1"
                width={140}
                className="h-14 w-14 shrink-0 rounded-full ring-2 ring-mint-400/40"
              />
              <div className="min-w-0 flex-1">
                <p className={`font-display text-[15px] font-bold ${light ? 'text-white' : 'text-ink'}`}>
                  {active.name}
                </p>
                <p className={`font-mono text-2xs uppercase tracking-[0.1em] ${light ? 'text-clinic-100/60' : 'text-ink-muted'}`}>
                  {active.location} · {active.department}
                </p>
                <p className={`mt-0.5 text-xs ${light ? 'text-clinic-100/50' : 'text-ink-muted'}`}>
                  Treated by {active.doctor} · {formatDate(active.date)}
                </p>
              </div>
              <Rating value={active.rating} size={17} />
            </footer>
          </article>

          {/* Controls */}
          <div className="mt-7 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous review"
              className={`grid h-10 w-10 place-items-center rounded-full transition ${
                light
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-white text-ink shadow-card hover:bg-clinic-50'
              }`}
            >
              <Icon name="chevronLeft" size={19} />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Choose a review">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Review ${i + 1} of ${count}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-7 bg-mint-400'
                      : light
                        ? 'w-2 bg-white/25 hover:bg-white/45'
                        : 'w-2 bg-clinic-200 hover:bg-clinic-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next review"
              className={`grid h-10 w-10 place-items-center rounded-full transition ${
                light
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-white text-ink shadow-card hover:bg-clinic-50'
              }`}
            >
              <Icon name="chevronRight" size={19} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
