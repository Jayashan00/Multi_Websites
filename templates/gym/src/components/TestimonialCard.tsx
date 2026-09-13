import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';

type Testimonial = typeof testimonials[number];

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="card card-hover p-7 h-full flex flex-col">
      <Quote className="w-8 h-8 text-orange-500/30 mb-4" />
      <div className="flex gap-1 text-orange-500 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <p className="text-neutral-300 leading-relaxed flex-1 mb-5">"{testimonial.text}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-neutral-800">
        <div className="flex items-center justify-center w-11 h-11 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{testimonial.name}</div>
          <div className="text-xs text-neutral-500">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;