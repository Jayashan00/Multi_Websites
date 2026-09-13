import { useEffect, useRef, useState, useMemo } from 'react';
import { images } from '@/lib/data';
import { useSiteConfig } from '../site-config/SiteConfigContext';

/* Slides — reuse the hero images already in src/lib/data.ts */
const DEFAULT_SLIDES = [
  images.heroBoxing,
  images.heroFighter,
  images.heroPower,
  images.heroBarbell,
  images.heroJumpRope,
  images.heroBike,
  images.heroGymEquip,
];

const SLIDE_MS = 5500;   // time each image stays
const FADE_MS = 1400;    // crossfade length

export function HeroSlider() {
  const { heroImageUrl } = useSiteConfig();
  const SLIDES = useMemo(
    () => (heroImageUrl ? [heroImageUrl, ...DEFAULT_SLIDES] : DEFAULT_SLIDES),
    [heroImageUrl],
  );
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const timer = useRef<number | null>(null);

  /* Respect prefers-reduced-motion */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  /* Preload every slide so crossfades never flash */
  useEffect(() => {
    SLIDES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  /* Pause when the tab is hidden (saves CPU, keeps timing honest) */
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  /* Autoplay */
  useEffect(() => {
    if (reduced || paused) return;
    timer.current = window.setTimeout(
      () => setActive((i) => (i + 1) % SLIDES.length),
      SLIDE_MS,
    );
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [active, paused, reduced]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-neutral-950">
      {SLIDES.map((src, i) => {
        const isActive = i === active;
        return (
          <div
            key={src}
            aria-hidden={!isActive}
            className="absolute inset-0 will-change-[opacity]"
            style={{
              opacity: isActive ? 1 : 0,
              transition: `opacity ${FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            }}
          >
            <img
              src={src}
              alt=""
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className={`w-full h-full object-cover ${
                isActive && !reduced
                  ? i % 2 === 0
                    ? 'hero-kenburns'
                    : 'hero-kenburns-alt'
                  : ''
              }`}
            />
          </div>
        );
      })}

      {/* Dark overlay — same class the original hero used */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Vertical progress dots (right edge, desktop only) */}
      <div className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 flex-col gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            className="group relative w-[3px] h-10 rounded-full bg-white/20 overflow-hidden transition-all hover:bg-white/40"
          >
            <span
              key={`${i}-${active}`}
              className={`absolute inset-x-0 top-0 rounded-full bg-orange-500 ${
                i === active && !reduced && !paused
                  ? 'hero-progress'
                  : i === active
                    ? 'h-full'
                    : 'h-0'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}