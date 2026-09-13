import { useMemo, useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import SmartImage from '../components/ui/SmartImage'
import Lightbox from '../components/ui/Lightbox'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import { gallery, galleryCategories } from '../data/gallery'
import { site, pageTitle } from '../data/site'
import usePageMeta from '../lib/usePageMeta'

/** A gentle masonry rhythm: every fourth tile is taller. */
const tall = (i) => i % 7 === 0 || i % 7 === 4

export default function Gallery() {
  const [category, setCategory] = useState('All')
  const [index, setIndex] = useState(null)

  usePageMeta({
    title: pageTitle('Gallery'),
    description:
      'Photographs of the campus: hospital facilities, our doctors and nurses, medical equipment and community health events.',
  })

  const items = useMemo(
    () => (category === 'All' ? gallery : gallery.filter((g) => g.category === category)),
    [category],
  )

  const counts = useMemo(() => {
    const map = { All: gallery.length }
    gallery.forEach((g) => { map[g.category] = (map[g.category] || 0) + 1 })
    return map
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A look inside the hospital"
        lead="Wards, theatres, the laboratory line and the people who run them — photographed on ordinary working days, not staged."
        crumbs={[{ label: 'Gallery' }]}
        image="hospitalBuilding"
      />

      <section className="py-14 sm:py-20">
        <div className="container">
          {/* Category filter */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold transition ${
                  category === c
                    ? 'border-clinic-500 bg-clinic-500 text-white shadow-card'
                    : 'border-clinic-100 bg-white text-ink-soft hover:border-clinic-300 hover:text-clinic-600'
                }`}
              >
                {c}
                <span
                  className={`font-mono text-2xs ${
                    category === c ? 'text-white/70' : 'text-ink-muted'
                  }`}
                >
                  {counts[c] ?? 0}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid auto-rows-[190px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4">
            {items.map((item, i) => (
              <Reveal
                key={item.id}
                delay={(i % 4) * 70}
                className={tall(i) ? 'row-span-2' : ''}
              >
                <button
                  onClick={() => setIndex(i)}
                  className="group relative block h-full w-full overflow-hidden rounded-xl2 text-left shadow-card ring-1 ring-clinic-100 transition duration-300 hover:shadow-lift"
                  aria-label={`Open “${item.title}” in the lightbox`}
                >
                  <SmartImage
                    name={item.image}
                    alt={item.title}
                    ratio="auto"
                    width={720}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-[1100ms] group-hover:scale-[1.08]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                    <span className="block font-mono text-2xs uppercase tracking-[0.14em] text-mint-300">
                      {item.category}
                    </span>
                    <span className="mt-1 block font-display text-sm font-bold leading-snug text-white">
                      {item.title}
                    </span>
                  </span>
                  <span className="pointer-events-none absolute right-3 top-3 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-white/90 text-clinic-600 opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Icon name="search" size={16} />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted">
            Showing {items.length} of {gallery.length} photographs · click any image to enlarge
          </p>
        </div>
      </section>

      {/* Video tour */}
      <section className="border-t border-clinic-100 bg-paper py-14 sm:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Video</p>
              <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.3rem)] leading-tight">
                Take the two-minute walk-through
              </h2>
              <p className="mt-4 text-[15px] leading-[1.8] text-ink-muted">
                From the main entrance, through registration and the OPD lifts, up to the ward
                floors and the rooftop recovery garden. Filmed on a weekday morning so you can
                see what arriving here actually feels like.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button to="/contact" icon="pin">Plan your visit</Button>
                <Button to="/about" variant="outline" iconRight="arrowRight">About the hospital</Button>
              </div>
            </div>
            <VideoTour />
          </div>
        </div>
      </section>

      <Lightbox items={items} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </>
  )
}

/** Poster-first video: nothing downloads until the visitor presses play. */
function VideoTour() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-4xl shadow-lift ring-1 ring-clinic-100">
      {playing ? (
        <video
          src="/assets/media/hospital-tour.mp4"
          controls
          autoPlay
          playsInline
          className="aspect-video w-full bg-ink object-cover"
        />
      ) : (
        <button onClick={() => setPlaying(true)} className="group block w-full text-left" aria-label="Play the hospital tour video">
          <SmartImage name="hospitalLobby" alt="" ratio="16/9" width={1200} className="w-full" />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/75 to-ink/10" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-[74px] w-[74px] place-items-center rounded-full bg-white/95 text-clinic-600 shadow-lift transition group-hover:scale-105">
              <Icon name="play" size={28} />
            </span>
          </span>
          <span className="absolute bottom-5 left-6 right-6">
            <span className="block font-mono text-2xs uppercase tracking-[0.16em] text-mint-300">
              Hospital tour
            </span>
            <span className="mt-1 block font-display text-lg font-bold text-white">
              Inside {site.name} · 2 min
            </span>
          </span>
        </button>
      )}
    </div>
  )
}