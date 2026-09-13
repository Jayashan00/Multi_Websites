import { useMemo, useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import PackageCard from '../components/cards/PackageCard'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import Accordion from '../components/ui/Accordion'
import { healthPackages } from '../data/packages'
import { site, pageTitle } from '../data/site'
import usePageMeta from '../lib/usePageMeta'

const FILTERS = [
  { key: 'all', label: 'All packages' },
  { key: 'popular', label: 'Most booked' },
  { key: 'under10', label: `Under ${site.currency} 10,000` },
  { key: 'fasting', label: 'Fasting required' },
]

const steps = [
  { icon: 'calendar', title: 'Book a morning slot', text: 'Checkups run from 6.30 am so you can be at work by mid-morning.' },
  { icon: 'flask', title: 'Samples first, breakfast after', text: 'Bloods are drawn on arrival. Breakfast is served free in the day-care lounge.' },
  { icon: 'scan', title: 'Scans and screening', text: 'ECG, X-ray and any package-specific imaging, all on the same floor.' },
  { icon: 'stethoscope', title: 'Doctor review, same day', text: 'You leave with a printed report and a conversation about what it means.' },
]

const faqs = [
  { q: 'How long do I need to fast?', a: 'Ten hours of water-only fasting before the blood draw. Take your regular medicines with a sip of water unless your doctor has told you otherwise — do not skip blood pressure or thyroid tablets.' },
  { q: 'When will I get the report?', a: 'Most packages are completed and reviewed the same morning. Histology or hormone panels, where included, follow within three working days by SMS link.' },
  { q: 'Can I use insurance for a checkup?', a: 'Preventive checkups are excluded by most policies, so packages are usually paid directly. We issue a full itemised receipt you can submit to a corporate scheme.' },
  { q: 'Do you offer corporate rates?', a: `Yes — groups of ten or more get a discounted rate and an on-site collection option. Email ${site.email.corporate} with your headcount and preferred dates.` },
  { q: 'Can I add a test to a package?', a: 'Any test can be added at the counter on the day; the coordinator will price it before it is carried out. Adding a test does not usually extend your visit.' },
]

export default function HealthPackages() {
  const [filter, setFilter] = useState('all')

  usePageMeta({
    title: pageTitle('Health Packages'),
    description:
      'Six health checkup packages — basic wellness, executive health, cardiac, diabetic, women’s and senior screening. One morning, one report, one conversation.',
  })

  const list = useMemo(() => {
    if (filter === 'popular') return healthPackages.filter((p) => p.popular)
    if (filter === 'under10') return healthPackages.filter((p) => p.price < 10000)
    if (filter === 'fasting') return healthPackages.filter((p) => p.fasting)
    return healthPackages
  }, [filter])

  return (
    <>
      <PageHeader
        eyebrow="Health packages"
        title="One morning. One report. One clear conversation."
        lead="Screening packages built around real life — priced up front, completed before lunch, and always ending with a doctor rather than a printout."
        crumbs={[{ label: 'Health Packages' }]}
        image="svcCheckup"
      />

      {/* Packages */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Choose a package"
              title="Six packages, no hidden extras"
              lead="Every price below includes the doctor review. Add-on tests are always quoted before they are done."
            />
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition ${
                    filter === f.key
                      ? 'border-clinic-500 bg-clinic-500 text-white shadow-card'
                      : 'border-clinic-100 bg-white text-ink-soft hover:border-clinic-300 hover:text-clinic-600'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <PackageCard pkg={p} />
              </Reveal>
            ))}
          </div>

          {list.length === 0 && (
            <p className="mt-12 text-center text-sm text-ink-muted">
              No package matches that filter — try “All packages”.
            </p>
          )}
        </div>
      </section>

      {/* How a checkup morning runs */}
      <section className="border-y border-clinic-100 bg-paper py-14 sm:py-20">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="What the morning looks like"
            title="From arrival to report, in about four hours"
            lead="A coordinator walks with you between rooms, so you are never left guessing where to go next."
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <li className="card-base relative h-full p-6">
                  <span className="absolute right-5 top-5 font-mono text-3xl font-bold text-clinic-50">
                    0{i + 1}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-clinic-500 text-white">
                    <Icon name={s.icon} size={22} />
                  </span>
                  <h3 className="mt-4 text-[16px] leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Package FAQs + corporate */}
      <section className="py-14 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div>
            <SectionHeading eyebrow="Before you book" title="Package questions we hear most" />
            <Accordion items={faqs} className="mt-8" />
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="rounded-4xl bg-ink p-7 text-white">
              <p className="eyebrow text-mint-300">Corporate screening</p>
              <h3 className="mt-3 text-xl text-white">Screening for your whole team</h3>
              <p className="mt-3 text-sm leading-relaxed text-clinic-100/80">
                Groups of ten or more get a discounted rate, a dedicated coordinator and an
                anonymised summary of the group’s risk profile for your HR team.
              </p>
              <Button href={`mailto:${site.email.corporate}`} variant="mint" icon="mail" full className="mt-6">
                Request a quote
              </Button>
            </div>

            <div className="rounded-xl2 border border-clinic-100 bg-white p-6">
              <h3 className="text-base">Not sure which package?</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Call the health checkup desk and describe your age, family history and any symptoms.
                They will recommend the smallest package that answers your question — not the biggest.
              </p>
              <Button
                href={`tel:${site.phones.appointments.replace(/\s/g, '')}`}
                variant="outline" icon="phone" full className="mt-4"
              >
                {site.phones.appointments}
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}