import { Card } from '#/components/ui/Card'

export type Review = {
  initials: string
  name: string
  quote: string
  rating?: number
  visit: string
}

type ReviewCardProps = {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  const rating = review.rating ?? 5

  return (
    <Card
      aria-live="polite"
      className="relative p-7 shadow-[0_24px_70px_rgba(41,37,36,0.09)] sm:p-10 lg:p-12"
    >
      <span
        aria-hidden="true"
        className="absolute top-6 right-8 font-serif text-7xl leading-none text-amber-200"
      >
        &ldquo;
      </span>
      <div className="review-enter" key={review.name}>
        <div
          aria-label={`${rating} out of 5 stars`}
          className="text-sm tracking-[0.18em] text-amber-500"
          role="img"
        >
          {'★'.repeat(rating)}
        </div>
        <blockquote className="mt-7 max-w-3xl font-serif text-2xl leading-relaxed font-medium tracking-[-0.02em] text-stone-800 sm:text-3xl">
          &ldquo;{review.quote}&rdquo;
        </blockquote>

        <div className="mt-9 flex items-center gap-4 border-t border-stone-200 pt-6">
          <span className="flex size-12 items-center justify-center rounded-full bg-stone-950 text-sm font-semibold text-amber-300">
            {review.initials}
          </span>
          <div>
            <p className="font-semibold text-stone-900">{review.name}</p>
            <p className="mt-1 text-xs text-stone-500">{review.visit}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
