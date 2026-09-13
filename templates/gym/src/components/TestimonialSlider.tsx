import { useCallback, useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data';

type Testimonial = typeof testimonials[number];

export function TestimonialSlider({
  items = testimonials,
  autoPlay = true,
  interval = 6000,
}: {
  items?: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}) {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setSlide((s) => (s + 1) % items.length), [items.length]);
  const prev = useCallback(() => setSlide((s) => (s - 1 + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (!autoPlay || paused) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, paused, interval, next]);

  const active = items[slide];

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="card p-8 md:p-12 text-center min-h-[320px] flex flex-col items-center justify-center">
        <Quote className="w-10 h-10 text-orange-500/30 mb-5" />
        <p key={active.id} className="text-lg md:text-xl text-neutral-200 leading-relaxed italic animate-fade-in">
          "{active.text}"
        </p>
        <div className="flex gap-1 text-orange-500 my-5">
          {Array.from({ length: active.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 font-bold">
            {active.avatar}
          </div>
          <div className="text-left">
            <div className="font-semibold text-white">{active.name}</div>
            <div className="text-xs text-neutral-500">{active.role}</div>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute top-1/2 -left-3 md:-left-6 -translate-y-1/2 flex items-center justify-center w-11 h-11 bg-neutral-900 border border-neutral-800 rounded-full text-white hover:bg-orange-500 hover:border-orange-500 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next testimonial"
        className="absolute top-1/2 -right-3 md:-right-6 -translate-y-1/2 flex items-center justify-center w-11 h-11 bg-neutral-900 border border-neutral-800 rounded-full text-white hover:bg-orange-500 hover:border-orange-500 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {items.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setSlide(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === slide ? 'w-8 bg-orange-500' : 'w-2 bg-neutral-700 hover:bg-neutral-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;