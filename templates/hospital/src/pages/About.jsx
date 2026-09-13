import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import SmartImage from '../components/ui/SmartImage'
import Icon from '../components/ui/Icon'
import Reveal from '../components/ui/Reveal'
import Counter from '../components/ui/Counter'
import Button from '../components/ui/Button'
import { vision, values, milestones, management, awards, facilities } from '../data/about'
import { site, pageTitle } from '../data/site'
import usePageMeta from '../lib/usePageMeta'

export default function About() {
  const years = new Date().getFullYear() - site.established

  usePageMeta({
    title: pageTitle('About us'),
    description:
      'Our history, vision and mission, values, management team, awards and hospital facilities.',
  })

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A 180-bed hospital that still runs on the rules it opened with"
        lead={`Founded in ${site.established} as a 22-bed clinic. Nine floors and ${years} years later, the promise has not changed.`}
        crumbs={[{ label: 'About us' }]}
        image="hospitalBuilding"
      />

      {/* Overview */}
      <section className="py-20 sm:py-24">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <SmartImage name="hospitalBuilding" alt="The main hospital building" ratio="3/4" width={520} className="rounded-3xl shadow-card" />
              <div className="mt-8 space-y-4">
                <SmartImage name="operatingTheatre" alt="An operating theatre" ratio="1/1" width={420} className="rounded-3xl shadow-card" />
                <SmartImage name="waitingArea" alt="The outpatient waiting area" ratio="1/1" width={420} className="rounded-3xl shadow-card" />
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Hospital overview"
              title="Big enough to treat you, small enough to know you"
            />
            <div className="prose-clinic mt-6">
              <p>
                We are a private, multi-specialty hospital running ten specialist departments,
                180 inpatient beds, four operating theatres, an accredited laboratory and an
                emergency unit that has not closed once since it opened.
              </p>
              <p>
                Around 340,000 patients have been treated here. Roughly two in three come back to
                the same consultant, which is the measure we watch most closely — it is harder to
                fake than a survey score.
              </p>
              <p>
                We are large enough to keep a consultant on site at three in the morning, and small
                enough that the ward sister on the fourth floor knows which patients have nobody
                visiting them.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-dashed border-clinic-100 pt-7 sm:grid-cols-4">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-extrabold text-clinic-600">
                    <Counter to={s.value} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-1 font-mono text-2xs uppercase leading-tight tracking-[0.1em] text-ink-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-clinic opacity-25" style={{ backgroundSize: '38px 38px' }} aria-hidden="true" />
        <div className="container relative grid gap-6 lg:grid-cols-2">
          {[
            { icon: 'globe', label: 'Our vision', text: vision.vision },
            { icon: 'pulse', label: 'Our mission', text: vision.mission },
          ].map((v, i) => (
            <Reveal key={v.label} delay={i * 120}>
              <div className="h-full rounded-4xl border border-white/12 bg-white/[.06] p-8 backdrop-blur-xl sm:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint-500/15 text-mint-300 ring-1 ring-mint-400/25">
                  <Icon name={v.icon} size={23} />
                </span>
                <p className="eyebrow mt-6 text-mint-300">{v.label}</p>
                <p className="mt-3 font-display text-xl font-bold leading-[1.5] text-white sm:text-[23px]">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Our values"
            title="Six rules we hold ourselves to"
            lead="Not a poster in the lobby — these are the criteria our clinical audits are actually scored against."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 90}>
                <div className="card-base card-hover h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint-50 text-mint-600">
                    <Icon name={v.icon} size={21} />
                  </span>
                  <h3 className="mt-4 text-[16px]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="How we got here"
            title="Six turning points"
            lead="The dates below are the ones that changed what we could offer a patient — not every ribbon we have cut."
          />
          <ol className="relative mt-12 space-y-8 border-l-2 border-dashed border-clinic-200 pl-8 sm:pl-10">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 70} className="relative">
                <span className="absolute -left-[42px] grid h-6 w-6 place-items-center rounded-full bg-clinic-500 ring-4 ring-paper sm:-left-[50px]">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <p className="font-mono text-sm font-semibold tracking-[0.1em] text-mint-600">{m.year}</p>
                <h3 className="mt-1 text-[17px]">{m.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Management team */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Management team"
            title="The four people accountable for how this hospital runs"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {management.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 80}>
                <article className="card-base card-hover group h-full overflow-hidden text-center">
                  <SmartImage
                    name={m.photo}
                    alt={`Portrait of ${m.name}`}
                    ratio="1/1"
                    width={480}
                    imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.05]"
                  />
                  <div className="p-5">
                    <h3 className="text-[16px]">{m.name}</h3>
                    <p className="mt-1 text-[13px] font-semibold text-mint-600">{m.role}</p>
                    <p className="mt-2.5 text-xs leading-relaxed text-ink-muted">{m.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Awards & certifications"
            title="Recognition, and the accreditations that matter more"
            lead="Awards are pleasant. The ISO 15189 laboratory accreditation is the one we would not operate without."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 80}>
                <div className="card-base flex h-full items-start gap-4 p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-600">
                    <Icon name="award" size={22} />
                  </span>
                  <div>
                    <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted">{a.year}</p>
                    <h3 className="mt-1 text-[15px] leading-snug">{a.title}</h3>
                    <p className="mt-1 text-xs text-ink-muted">{a.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Hospital facilities"
            title="What is on the campus"
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 70}>
                <div className="card-base card-hover h-full p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-clinic-50 text-clinic-500">
                    <Icon name={f.icon} size={21} />
                  </span>
                  <h3 className="mt-4 text-[15px] leading-snug">{f.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Button to="/gallery" icon="image">See the hospital in photos</Button>
            <Button to="/contact" variant="outline" iconRight="arrowRight">Plan your visit</Button>
          </div>
        </div>
      </section>
    </>
  )
}