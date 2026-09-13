import { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

/** Reusable image grid with keyboard-accessible lightbox. */
export function GalleryGrid({ items, columns = 3 }: { items: GalleryItem[]; columns?: 2 | 3 | 4 }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, close, prev, next]);

  const colClass = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }[columns];
  const active = index !== null ? items[index] : null;

  return (
    <>
      <div className={`grid grid-cols-1 ${colClass} gap-4`}>
        {items.map((item, i) => (
          <button
            key={item.src + i}
            onClick={() => setIndex(i)}
            className="card group overflow-hidden"
            aria-label={`Open image: ${item.alt}`}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {item.caption && (
                <span className="absolute bottom-3 left-4 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.caption}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/90 animate-fade-in" onClick={close} role="dialog" aria-modal="true">
          <button onClick={close} aria-label="Close" className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <X className="w-6 h-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image" className="absolute left-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} className="w-full max-h-[80vh] object-contain rounded-xl" />
            {active.caption && <figcaption className="text-center text-neutral-400 text-sm mt-4">{active.caption}</figcaption>}
          </figure>
          <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image" className="absolute right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}

export default GalleryGrid;