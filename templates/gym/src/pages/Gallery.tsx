import { useState, useMemo, useEffect, useCallback } from 'react';
import { TrendingDown, Calendar, Quote, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { images, transformations } from '@/lib/data';

const categories = ['All', ...Array.from(new Set(transformations.map((t) => t.goal)))];

type Transformation = typeof transformations[number];

/** Side-by-side before & after pair with labelled halves. */
function BeforeAfter({ item, height }: { item: Transformation; height: string }) {
  return (
    <div className={`grid grid-cols-2 ${height}`}>
      <figure className="relative overflow-hidden border-r border-neutral-950/60">
        <img
          src={images[item.before as keyof typeof images]}
          alt={`${item.name} before`}
          loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
        />
        <figcaption className="absolute top-3 left-3 px-2.5 py-1 bg-black/70 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wide rounded">
          Before
        </figcaption>
      </figure>
      <figure className="relative overflow-hidden">
        <img
          src={images[item.after as keyof typeof images]}
          alt={`${item.name} after`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <figcaption className="absolute top-3 right-3 px-2.5 py-1 bg-orange-500 text-white text-[11px] font-bold uppercase tracking-wide rounded">
          After
        </figcaption>
      </figure>
    </div>
  );
}

export default function Gallery() {
  const [category, setCategory] = useState('All');
  const [index, setIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (category === 'All' ? transformations : transformations.filter((t) => t.goal === category)),
    [category]
  );

  const selected = index !== null ? filtered[index] : null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length]
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

  return (
    <>
      <PageHeader
        eyebrow="Real Results"
        title={<>Transformation <span className="text-gradient">Gallery</span></>}
        subtitle="Real members, real before and after results. These are the stories that drive everything we do."
        bgImage={images.transform1}
      />

      <section className="section-py">
        <div className="container-mw">
          {/* Category filter */}
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setCategory(c);
                    setIndex(null);
                  }}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    category === c
                      ? 'bg-orange-500 text-white'
                      : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <p className="text-center text-neutral-500 py-20">No transformations in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((t, i) => (
                <Reveal key={t.id} delay={i * 80}>
                  <button onClick={() => setIndex(i)} className="card card-hover group block text-left w-full">
                    <div className="relative">
                      <BeforeAfter item={t} height="h-72" />
                      <span className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-neutral-950/80 backdrop-blur-sm text-white text-[11px] font-bold uppercase rounded-full">
                        {t.goal}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-white">{t.name}</h3>
                      <div className="flex items-center gap-3 mt-2 text-sm">
                        <span className="text-neutral-400">{t.start}</span>
                        <TrendingDown className="w-4 h-4 text-orange-500" />
                        <span className="text-white font-semibold">{t.end}</span>
                        <span className="text-neutral-500 text-xs">in {t.weeks} weeks</span>
                      </div>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in" onClick={close}>
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-4 md:left-8 z-10 flex items-center justify-center w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-orange-500 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-4 md:right-8 z-10 flex items-center justify-center w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-orange-500 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative bg-neutral-900 border border-neutral-800 rounded-2xl max-w-3xl w-full overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <BeforeAfter item={selected} height="h-64 md:h-80" />

            <div className="p-7">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">{selected.name}</h2>
                  <p className="text-orange-400 text-sm font-medium">{selected.goal}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-neutral-400">{selected.start}</span>
                    <TrendingDown className="w-4 h-4 text-orange-500" />
                    <span className="text-white font-bold">{selected.end}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-neutral-500 mt-1 justify-end">
                    <Calendar className="w-3.5 h-3.5" /> {selected.weeks} weeks
                  </div>
                </div>
              </div>
              <Quote className="w-8 h-8 text-orange-500/30 mb-3" />
              <p className="text-neutral-300 leading-relaxed italic">"{selected.quote}"</p>
              <p className="text-xs text-neutral-600 mt-5 text-center">
                {(index ?? 0) + 1} of {filtered.length} · use ← → keys to browse
              </p>
            </div>
          </div>
        </div>
      )}

      <CTASection />
    </>
  );
}