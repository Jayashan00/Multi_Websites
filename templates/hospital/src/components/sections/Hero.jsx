import { useEffect, useRef, useState } from 'react'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import { heroVideo, img } from '../../lib/media'
import { site } from '../../data/site'

/**
 * The hero opens on the most characteristic thing in a hospital's world:
 * a live monitor trace. Video sits behind it, muted and dimmed, and is skipped
 * entirely for visitors who have asked for reduced motion.
 */
export default function Hero() {
  const videoRef = useRef(null)
  const [videoOk, setVideoOk] = useState(true)
  const [allowMotion, setAllowMotion] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setAllowMotion(!mq.matches)
    const on = (e) => setAllowMotion(!e.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {/* Background layer: video, with a still photograph as poster + fallback */}
      <div className="absolute inset-0 -z-10">
        {!site.heroImageUrl && allowMotion && videoOk ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={img('heroPoster', { w: 1600 })}
            onError={() => setVideoOk(false)}
            className="h-full w-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={site.heroImageUrl || img('heroPoster', { w: 1600 })}
            alt=""
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/93 to-clinic-800/85" />
        <div
          className="absolute inset-0 bg-grid-clinic opacity-40 mix-blend-overlay"
          style={{ backgroundSize: '42px 42px' }}
        />
      </div>

      <div className="container grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
        {/* Copy */}
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2.5 rounded-full bg-white/8 px-3.5 py-1.5 font-mono text-2xs uppercase tracking-[0.16em] text-mint-300 ring-1 ring-white/12 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-400" />
            </span>
            Emergency unit open · consultant on site
          </p>

          <h1
            className="mt-6 text-[clamp(2.2rem,5.6vw,4.1rem)] font-extrabold leading-[1.03] text-white animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
            The hospital that
            <span className="relative mx-2 inline-block">
              <span className="relative z-10 text-mint-400">never closes</span>
              <svg
                viewBox="0 0 240 12" preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-mint-500/45"
                aria-hidden="true"
              >
                <path d="M2 8c40-6 80-6 118-2s78 4 118-4" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            its doors.
          </h1>

          <p
            className="mt-6 max-w-xl text-[15.5px] leading-[1.85] text-clinic-100/85 sm:text-[17px] animate-fade-up"
            style={{ animationDelay: '160ms' }}
          >
            Ten specialist departments, {site.stats[2].value}+ consultants and nurses, and an
            accredited laboratory — all on one campus in {site.address.line2}. Book a consultant online and be
            seen within fifteen minutes of your slot.
          </p>

          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            <Button to="/appointment" size="lg" variant="mint" icon="calendar">
              Book an appointment
            </Button>
            <Button href={`tel:${site.phones.emergency}`} size="lg" variant="white" icon="phone">
              Emergency — {site.phones.emergency}
            </Button>
          </div>

          {/* Vitals strip: real numbers, framed the way a monitor would show them */}
          <dl
            className="mt-11 grid max-w-lg grid-cols-2 gap-x-8 gap-y-5 border-t border-white/12 pt-7 sm:grid-cols-4 animate-fade-up"
            style={{ animationDelay: '320ms' }}
          >
            {site.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-extrabold text-white sm:text-[28px]">
                  {s.value}
                  <span className="text-mint-400">{s.suffix}</span>
                </dt>
                <dd className="mt-1 font-mono text-2xs uppercase leading-tight tracking-[0.1em] text-clinic-100/60">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Signature panel: a live monitor read-out */}
        <div className="relative hidden lg:block">
          <MonitorPanel allowMotion={allowMotion} />
        </div>
      </div>

      {/* Bottom ECG trace running the full width */}
      <svg
        viewBox="0 0 1200 44" preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-9 w-full text-mint-400/40"
        aria-hidden="true"
      >
        <path
          d="M0 30h170l10-16 12 30 14-36 12 40 10-18h150l10-16 12 30 14-36 12 40 10-18h150l10-16 12 30 14-36 12 40 10-18h350"
          fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
        />
      </svg>
    </section>
  )
}

function MonitorPanel({ allowMotion }) {
  const readings = [
    { label: 'Emergency wait', value: '4', unit: 'min', tone: 'text-mint-300' },
    { label: 'Beds available', value: '23', unit: 'of 180', tone: 'text-white' },
    { label: 'Lab turnaround', value: '3.5', unit: 'hrs', tone: 'text-white' },
    { label: 'Ambulances ready', value: '5', unit: 'of 6', tone: 'text-mint-300' },
  ]

  return (
    <div className="relative rounded-4xl border border-white/12 bg-white/[.06] p-6 shadow-lift backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <p className="font-mono text-2xs uppercase tracking-[0.2em] text-clinic-100/60">
          Live from the floor
        </p>
        <span className="inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.14em] text-mint-300">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-400" />
          Now
        </span>
      </div>

      {/* The trace itself */}
      <div className="mt-5 overflow-hidden rounded-2xl bg-ink/60 p-4 ring-1 ring-white/10">
        <svg viewBox="0 0 400 90" className="w-full" aria-hidden="true">
          <defs>
            <linearGradient id="ecgFade" x1="0" x2="1">
              <stop offset="0" stopColor="#12B7A4" stopOpacity="0" />
              <stop offset=".25" stopColor="#12B7A4" stopOpacity="1" />
              <stop offset="1" stopColor="#4FD9C7" stopOpacity="1" />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1="0" y1={18 + i * 18} x2="400" y2={18 + i * 18}
              stroke="#ffffff" strokeOpacity=".055" strokeWidth="1" />
          ))}
          <path
            d="M0 55h60l8-22 9 44 11-58 10 62 8-26h60l8-22 9 44 11-58 10 62 8-26h60l8-22 9 44 11-58 10 62 8-26h75"
            fill="none"
            stroke="url(#ecgFade)"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={allowMotion ? 'ecg-line animate-ecg-dash' : ''}
          />
        </svg>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-3">
        {readings.map((r) => (
          <div key={r.label} className="rounded-2xl bg-white/[.05] p-4 ring-1 ring-white/8">
            <dt className="font-mono text-2xs uppercase tracking-[0.1em] text-clinic-100/55">
              {r.label}
            </dt>
            <dd className={`mt-1.5 font-display text-2xl font-extrabold ${r.tone}`}>
              {r.value}
              <span className="ml-1 font-mono text-[11px] font-medium tracking-normal text-clinic-100/50">
                {r.unit}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-clinic-100/50">
        <Icon name="info" size={14} className="mt-px shrink-0" />
        Figures shown are a demonstration of the live status panel and refresh from the hospital
        system in production.
      </p>
    </div>
  )
}