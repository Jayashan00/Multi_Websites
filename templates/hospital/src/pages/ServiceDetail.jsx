import { useParams, Navigate, Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import SmartImage from '../components/ui/SmartImage'
import ServiceCard from '../components/cards/ServiceCard'
import { services, getService } from '../data/services'
import { site, pageTitle } from '../data/site'
import usePageMeta from '../lib/usePageMeta'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  usePageMeta({
    title: service ? pageTitle(service.name) : pageTitle('Service not found'),
    description: service?.description,
  })

  if (!service) return <Navigate to="/services" replace />

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <PageHeader
        eyebrow="Medical service"
        title={service.name}
        lead={service.tagline}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.name }]}
        image={service.image}
      />

      <section className="py-14 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
          <div>
            <SmartImage
              name={service.image}
              alt={service.name}
              ratio="16/9"
              width={1200}
              responsive
              className="rounded-4xl shadow-card"
            />

            <div className="prose-clinic mt-9">
              <p className="text-[17px] leading-[1.8] text-ink">{service.description}</p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {service.highlights.map((h) => (
                <div key={h} className="rounded-xl2 border border-clinic-100 bg-white p-5 shadow-card">
                  <Icon name="check" size={18} className="text-mint-500" strokeWidth={2.6} />
                  <p className="mt-3 text-sm font-semibold leading-snug text-ink">{h}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl2 border border-dashed border-clinic-200 bg-clinic-50/50 p-6">
              <h2 className="text-lg">How to use this service</h2>
              <ol className="mt-4 space-y-3.5">
                {[
                  'Register at the main counter — bring your national ID and any previous reports.',
                  'A duty nurse records your vitals and directs you to the right room.',
                  'Fees are quoted before anything is carried out, and paid at the counter.',
                  'Reports are released by SMS link, and stay on your patient record.',
                ].map((t, i) => (
                  <li key={t} className="flex gap-3.5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white font-mono text-xs font-bold text-clinic-600 ring-1 ring-clinic-100">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-ink-soft">{t}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="card-base p-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-clinic-500 text-white">
                <Icon name={service.icon} size={22} />
              </span>
              <h2 className="mt-4 text-lg">{service.name}</h2>
              <dl className="mt-4 space-y-3 border-t border-dashed border-clinic-100 pt-4 text-sm">
                <div className="flex items-start gap-2.5">
                  <Icon name="clock" size={16} className="mt-0.5 shrink-0 text-clinic-400" />
                  <div>
                    <dt className="font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">Availability</dt>
                    <dd className="mt-0.5 font-semibold text-ink">{service.availability}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Icon name="pin" size={16} className="mt-0.5 shrink-0 text-clinic-400" />
                  <div>
                    <dt className="font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">Where</dt>
                    <dd className="mt-0.5 font-semibold text-ink">
                      {site.address.line1}, {site.address.line2}
                    </dd>
                  </div>
                </div>
              </dl>
              <Button to="/appointment" icon="calendar" full className="mt-5">
                Book an appointment
              </Button>
              <Button href={`tel:${site.phones.general.replace(/\s/g, '')}`} variant="outline" icon="phone" full className="mt-2.5">
                {site.phones.general}
              </Button>
            </div>

            <div className="rounded-xl2 border border-clinic-100 bg-white p-6">
              <p className="eyebrow">Related</p>
              <ul className="mt-3 space-y-2.5">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="group flex items-center gap-3 text-sm font-semibold text-ink-soft transition hover:text-clinic-600"
                    >
                      <Icon name={s.icon} size={16} className="text-clinic-400" />
                      <span className="flex-1">{s.name}</span>
                      <Icon name="chevronRight" size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-clinic-100 bg-paper py-14 sm:py-20">
        <div className="container">
          <h2 className="text-[clamp(1.4rem,2.8vw,2rem)]">Other services you may need</h2>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}