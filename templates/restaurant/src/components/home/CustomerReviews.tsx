import { useState } from 'react'

import { ReviewCard } from '#/components/reviews/ReviewCard'
import type { Review } from '#/components/reviews/ReviewCard'
import { Button } from '#/components/ui/Button'

const reviews: Array<Review> = [
  {
    quote:
      'From the first welcome to the final dessert, every detail felt effortless. The tasting menu was creative without losing the warmth of familiar flavors.',
    name: 'Nadeesha Fernando',
    visit: 'Celebration dinner',
    initials: 'NF',
  },
  {
    quote:
      'The service was thoughtful, the room was beautiful, and the salmon was one of the best dishes I have had in Colombo. We are already planning our next visit.',
    name: 'Kasun Silva',
    visit: 'Weekend dining',
    initials: 'KS',
  },
  {
    quote:
      'A genuinely memorable evening. Every plate was balanced and beautifully presented, and the team made our anniversary feel truly special.',
    name: 'Shenali Jayasinghe',
    visit: 'Anniversary dinner',
    initials: 'SJ',
  },
  {
    quote:
      'The perfect combination of refined food and relaxed hospitality. Our whole table loved the shared plates and the seasonal drinks pairing.',
    name: 'Ryan de Alwis',
    visit: 'Dinner with friends',
    initials: 'RA',
  },
]

export function CustomerReviews() {
  const [activeReview, setActiveReview] = useState(0)
  const review = reviews[activeReview]

  const showPrevious = () => {
    setActiveReview((current) =>
      current === 0 ? reviews.length - 1 : current - 1,
    )
  }

  const showNext = () => {
    setActiveReview((current) => (current + 1) % reviews.length)
  }

  return (
    <section
      id="reviews"
      className="scroll-mt-20 overflow-hidden bg-[#fbf8f2] text-stone-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div className="reveal-on-scroll">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-amber-700 uppercase">
              <span className="h-px w-10 bg-amber-600" aria-hidden="true" />
              Guest stories
            </div>
            <h2 className="mt-6 font-serif text-4xl leading-tight font-medium tracking-[-0.03em] sm:text-5xl">
              Loved around
              <span className="block text-amber-700 italic">every table.</span>
            </h2>
            <p className="mt-6 max-w-md leading-7 text-stone-500">
              The moments our guests remember are the reason we do what we do.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div
                aria-label="Rated 4.9 out of 5"
                className="text-lg tracking-[0.16em] text-amber-500"
                role="img"
              >
                ★★★★★
              </div>
              <span className="h-5 w-px bg-stone-300" aria-hidden="true" />
              <p className="text-sm text-stone-500">
                <strong className="text-stone-900">4.9</strong> average guest
                rating
              </p>
            </div>
          </div>

          <div className="reveal-on-scroll reveal-delay-1">
            <ReviewCard review={review} />

            <div className="mt-6 flex items-center justify-between gap-5">
              <div className="flex gap-2" aria-label="Choose a review">
                {reviews.map((item, index) => (
                  <button
                    aria-label={`Show review ${index + 1} from ${item.name}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeReview
                        ? 'w-8 bg-amber-500'
                        : 'w-3 bg-stone-300 hover:bg-stone-400'
                    }`}
                    key={item.name}
                    onClick={() => setActiveReview(index)}
                    type="button"
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  aria-label="Show previous review"
                  onClick={showPrevious}
                  size="icon"
                  variant="outlineDark"
                >
                  &larr;
                </Button>
                <Button
                  aria-label="Show next review"
                  onClick={showNext}
                  size="icon"
                >
                  &rarr;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
