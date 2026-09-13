import { Link, useParams, Navigate } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import SmartImage from '../components/ui/SmartImage'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import DoctorCard from '../components/cards/DoctorCard'
import DepartmentCard from '../components/cards/DepartmentCard'
import { EmergencyStrip } from '../components/sections/EmergencyBanner'
import { departments, getDepartment } from '../data/departments'
import { getDoctor } from '../data/doctors'
import { pageTitle } from '../data/site'
import usePageMeta from '../lib/usePageMeta'

export default function DepartmentDetail() {
  const { slug } = useParams()
  const dept = getDepartment(slug)

  usePageMeta({
    title: dept ? pageTitle(dept.name) : pageTitle('Department not found'),
    description: dept?.description?.slice(0, 155),
  })

  if (!dept) return <Navigate to="/departments" replace />

  const related = departments.filter((d) => d.slug !== dept.slug).slice(0, 3)
  const deptDoctors = dept.doctors.map(getDoctor).filter(Boolean)

  return (
    <>
      <PageHeader
        eyebrow="Department"
        title={dept.name}
        lead={dept.short}
        crumbs={[{ label: 'Departments', to: '/departments' }, { label: dept.name }]}
        image={dept.image}
      />

      <section className="py-14 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-[1fr_340px]">
          {/* Main column */}
          <div>
            <SmartImage
              name={dept.image}
              alt={dept.name}
              ratio="16/9"
              width={1100}
              responsive
              priority
              className="rounded-3xl shadow-card"
            />

            {/* Quick stats */}
            <dl className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icon: 'users', label: 'Consultants', value: dept.stats.consultants },
                { icon: 'bed', label: 'Beds', value: dept.stats.beds || '—' },
                { icon: 'clock', label: 'Open', value: dept.stats.openHours },
              ].map((s) => (
                <div key={s.label} className="card-base p-4 text-center">
                  <Icon name={s.icon} size={19} className="mx-auto text-clinic-400" />
                  <dt className="mt-2 font-mono text-2xs uppercase tracking-[0.1em] text-ink-muted">{s.label}</dt>
                  <dd className="mt-1 font-display text-[15px] font-bold leading-tight">{s.value}</dd>
                </div>
              ))}
            </dl>

            <div className="prose-clinic mt-10">
              <h2 className="!mt-0">About this department</h2>
              <p>{dept.description}</p>
            </div>

            <div className="mt-10">
              <SectionHeading eyebrow="Available services" title={`What ${dept.name.split(' — ')[0]} treats`} />
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {dept.services.map((s, i) => (
                  <Reveal as="li" key={s} delay={(i % 2) * 60}>
                    <div className="flex items-start gap-3 rounded-xl border border-clinic-100 bg-white p-4">
                      <Icon name="check" size={17} strokeWidth={2.6} className="mt-0.5 shrink-0 text-mint-500" />
                      <span className="text-sm leading-relaxed text-ink-soft">{s}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>

            {deptDoctors.length > 0 && (
              <div className="mt-14">
                <SectionHeading
                  eyebrow="Related doctors"
                  title="Consultants in this department"
                  lead="Book directly with the specialist whose clinic day suits you."
                />
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {deptDoctors.map((d) => (
                    <DoctorCard key={d.slug} doctor={d} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="card-base p-6">
              <h3 className="text-[17px]">Book with {dept.name.split(' — ')[0]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Choose a consultant and a slot in about a minute. You will get an SMS confirmation
                straight away.
              </p>
              <Button to={`/appointment?department=${dept.slug}`} full icon="calendar" className="mt-5">
                Book an appointment
              </Button>
              <Button to="/contact" variant="outline" full icon="phone" className="mt-2.5">
                Ask a question first
              </Button>
            </div>

            <EmergencyStrip />

            <div className="card-base p-6">
              <h3 className="text-[17px]">Other departments</h3>
              <div className="mt-4 space-y-2.5">
                {related.map((d) => (
                  <DepartmentCard key={d.slug} dept={d} compact />
                ))}
              </div>
              <Link
                to="/departments"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-clinic-500 hover:underline"
              >
                View all {departments.length}
                <Icon name="arrowRight" size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}