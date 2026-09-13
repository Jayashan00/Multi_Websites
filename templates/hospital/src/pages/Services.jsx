import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/cards/ServiceCard'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import AppointmentCTA from '../components/sections/AppointmentCTA'
import { services } from '../data/services'
import { site, pageTitle } from '../data/site'
import usePageMeta from '../lib/usePageMeta'

const promises = [
  { icon: 'clock', title: 'Seen within 15 minutes', text: 'Booked patients are called within a quarter of an hour of their slot — measured every month.' },
  { icon: 'shield', title: 'One shared record', text: 'Your lab results, scans and prescriptions follow you between departments automatically.' },
  { icon: 'wallet', title: 'Prices before treatment', text: 'Every investigation is quoted at the counter before it is carried out. No surprise bills.' },
  { icon: 'users', title: 'A named nurse', text: 'Admitted patients are given one nurse to contact, so families are not passed around.' },
]

export default function Services() {
  usePageMeta({
    title: pageTitle('Medical Services'),
    description:
      'OPD, laboratory, pharmacy, emergency care, ambulance, vaccination, diagnostics and health checkups, all on one campus.',
  })

  return (
    <>
      <PageHeader
        eyebrow="Medical services"
        title="Everything a patient needs, on one campus"
        lead="Eight core services, most of them open long after the OPD closes — so a fever at nine in the evening does not become a next-day problem."
        crumbs={[{ label: 'Services' }]}
        image="hospitalLobby"
      />

      {/* Services grid */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="What we offer"
            title="Eight services, one shared patient record"
            lead="Tap any service to see what it covers, when it is open and how to use it."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service promises */}
      <section className="border-y border-clinic-100 bg-paper py-14 sm:py-20">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Our service standard"
            title="Four promises we hold ourselves to"
            lead="These are audited internally each month and published on the notice board in the main lobby."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="card-base h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-mint-50 text-mint-600">
                    <Icon name={p.icon} size={22} />
                  </span>
                  <h3 className="mt-4 text-[16px] leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency strip */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <div className="grid gap-8 overflow-hidden rounded-4xl border border-emergency-100 bg-emergency-50/60 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-emergency-600">Open 24 hours</p>
              <h2 className="mt-3 text-[clamp(1.4rem,3vw,2.1rem)] leading-tight">
                Emergency, pharmacy and the ambulance line never close
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                Three of our eight services run around the clock. If you are unsure whether something
                can wait until morning, call the emergency desk — the duty officer will tell you
                honestly, and there is no charge for asking.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href={`tel:${site.phones.ambulance.replace(/\s/g, '')}`} variant="emergency" icon="ambulance">
                Ambulance {site.phones.ambulance}
              </Button>
              <Button to="/contact" variant="outline" iconRight="arrowRight">
                Find the emergency entrance
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  )
}