import { Navigate, useParams } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import SmartImage from '../components/ui/SmartImage'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import DoctorCard from '../components/cards/DoctorCard'
import { doctors, getDoctor } from '../data/doctors'
import { getDepartment } from '../data/departments'
import { testimonials } from '../data/testimonials'
import Rating from '../components/ui/Rating'
import usePageMeta from '../lib/usePageMeta'

export default function DoctorDetail() {
  const { slug } = useParams()
  const doctor = getDoctor(slug)

  usePageMeta({
    title: doctor ? `${doctor.name} — ${doctor.specialization}` : 'Doctor not found',
    description: doctor?.bio?.slice(0, 155),
  })

  if (!doctor) return <Navigate to="/doctors" replace />

  const dept = getDepartment(doctor.department)
  const colleagues = doctors.filter((d) => d.department === doctor.department && d.slug !== doctor.slug)
  const reviews = testimonials.filter((t) => t.doctor === doctor.name)

  return (
    <>
      <PageHeader
        eyebrow={dept?.name ?? 'Consultant'}
        title={doctor.name}
        lead={doctor.specialization}
        crumbs={[{ label: 'Doctors', to: '/doctors' }, { label: doctor.name }]}
        image={dept?.image ?? 'hospitalCorridor'}
      />

      <section className="py-14 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-[320px_1fr]">
          {/* Profile card */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="card-base overflow-hidden">
              <SmartImage name={doctor.photo} alt={`Portrait of ${doctor.name}`} ratio="1/1" width={640} priority />
              <div className="p-6">
                <h2 className="text-xl leading-tight">{doctor.name}</h2>
                <p className="mt-1 text-sm font-semibold text-mint-600">{doctor.specialization}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge tone="clinic" icon="award">{doctor.experience} years</Badge>
                  <Badge tone="neutral" icon="globe">{doctor.languages.join(' · ')}</Badge>
                </div>

                <dl className="mt-5 space-y-3 border-t border-dashed border-clinic-100 pt-5 text-sm">
                  <Row icon="clipboard" label="Qualifications" value={doctor.qualifications} />
                  <Row icon="stethoscope" label="Department" value={dept?.name} />
                  <Row icon="wallet" label="Consultation fee" value={`Rs. ${doctor.fee.toLocaleString()}`} />
                </dl>

                <Button to={`/appointment?doctor=${doctor.slug}`} full icon="calendar" className="mt-6">
                  Book with {doctor.name.split(' ')[1]}
                </Button>
              </div>
            </div>
          </aside>

          {/* Detail */}
          <div>
            <div className="prose-clinic">
              <h2 className="!mt-0">About {doctor.name.split(' ').slice(0, 2).join(' ')}</h2>
              <p>{doctor.bio}</p>
            </div>

            {/* Consultation hours — the thing patients came for */}
            <div className="mt-10">
              <SectionHeading
                eyebrow="Consultation hours"
                title="Clinic days"
                lead="These are the sessions this consultant personally holds. The booking form only offers slots inside them."
              />
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {doctor.hours.map((h) => (
                  <div key={h.day} className="card-base p-5">
                    <p className="font-mono text-2xs uppercase tracking-[0.14em] text-clinic-500">{h.day}</p>
                    <p className="mt-1.5 font-display text-[15px] font-bold">{h.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="mt-12">
              <SectionHeading eyebrow="Special interests" title="Areas of focus" />
              <div className="mt-6 flex flex-wrap gap-2.5">
                {doctor.interests.map((i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 rounded-full bg-mint-50 px-4 py-2 text-sm font-medium text-mint-700 ring-1 ring-mint-100"
                  >
                    <Icon name="pulse" size={15} />
                    {i}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews for this doctor */}
            {reviews.length > 0 && (
              <div className="mt-12">
                <SectionHeading eyebrow="Patient reviews" title={`What patients say about ${doctor.name.split(' ')[1]}`} />
                <div className="mt-7 space-y-4">
                  {reviews.map((r) => (
                    <blockquote key={r.id} className="card-base p-6">
                      <Rating value={r.rating} />
                      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{r.quote}</p>
                      <footer className="mt-4 flex items-center gap-3 border-t border-dashed border-clinic-100 pt-4">
                        <SmartImage name={r.photo} alt={r.name} ratio="1/1" width={100} className="h-9 w-9 rounded-full" />
                        <span className="text-sm font-semibold text-ink">{r.name}</span>
                        <span className="font-mono text-2xs uppercase tracking-[0.1em] text-ink-muted">{r.location}</span>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            )}

            {colleagues.length > 0 && (
              <div className="mt-14">
                <SectionHeading eyebrow="Same department" title={`Other consultants in ${dept?.name}`} />
                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                  {colleagues.map((c) => (
                    <DoctorCard key={c.slug} doctor={c} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function Row({ icon, label, value }) {
  return (
    <div className="flex gap-3">
      <Icon name={icon} size={16} className="mt-0.5 shrink-0 text-clinic-400" />
      <div>
        <dt className="font-mono text-2xs uppercase tracking-[0.1em] text-ink-muted">{label}</dt>
        <dd className="mt-0.5 text-[13.5px] leading-snug text-ink-soft">{value}</dd>
      </div>
    </div>
  )
}
