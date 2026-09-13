import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { services } from '../../data/services'

export default function ServicesStrip() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-clinic opacity-25"
        style={{ backgroundSize: '38px 38px' }}
        aria-hidden="true"
      />
      <div className="container relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Medical services"
            title="Everything a patient needs, on one campus"
            lead="Consultation, laboratory, imaging, pharmacy and emergency care sit within a two-minute walk of each other — so a single visit rarely becomes three."
            light
          />
          <Button to="/services" variant="white" iconRight="arrowRight" className="shrink-0">
            All services
          </Button>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 70}>
              <Link
                to={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-xl2 border border-white/10 bg-white/[.05] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-mint-400/40 hover:bg-white/[.09]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint-500/15 text-mint-300 ring-1 ring-mint-400/25 transition-colors group-hover:bg-mint-500 group-hover:text-white">
                  <Icon name={s.icon} size={21} />
                </span>
                <h3 className="mt-4 text-[15px] leading-snug text-white">{s.name}</h3>
                <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-clinic-100/65">
                  {s.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-2xs uppercase tracking-[0.1em] text-mint-300">
                  {s.availability}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
