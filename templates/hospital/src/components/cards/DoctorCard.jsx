import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import SmartImage from '../ui/SmartImage'
import Button from '../ui/Button'

export default function DoctorCard({ doctor }) {
  return (
    <article className="card-base card-hover group flex flex-col overflow-hidden">
      <Link to={`/doctors/${doctor.slug}`} className="block">
        <SmartImage
          name={doctor.photo}
          alt={`Portrait of ${doctor.name}`}
          ratio="1/1"
          width={520}
          imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.06]"
        >
          <span className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/60 to-transparent" />
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/92 px-2.5 py-1 font-mono text-2xs font-semibold uppercase tracking-[0.1em] text-clinic-600 backdrop-blur">
            <Icon name="award" size={12} strokeWidth={2.2} />
            {doctor.experience} yrs
          </span>
        </SmartImage>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[16px] leading-snug">
          <Link to={`/doctors/${doctor.slug}`} className="transition-colors hover:text-clinic-600">
            {doctor.name}
          </Link>
        </h3>
        <p className="mt-1 text-[13px] font-semibold text-mint-600">{doctor.specialization}</p>
        <p className="mt-2 text-xs leading-relaxed text-ink-muted">{doctor.qualifications}</p>

        <dl className="mt-4 space-y-1.5 border-t border-dashed border-clinic-100 pt-4">
          <div className="flex items-start gap-2 text-xs text-ink-soft">
            <Icon name="clock" size={14} className="mt-px shrink-0 text-clinic-400" />
            <dd className="font-mono">
              {doctor.hours.map((h) => h.day.slice(0, 3)).join(' · ')}
            </dd>
          </div>
          <div className="flex items-start gap-2 text-xs text-ink-soft">
            <Icon name="wallet" size={14} className="mt-px shrink-0 text-clinic-400" />
            <dd className="font-mono">Rs. {doctor.fee.toLocaleString()} consultation</dd>
          </div>
        </dl>

        <div className="mt-5 flex gap-2">
          <Button
            to={`/appointment?doctor=${doctor.slug}`}
            size="sm"
            className="flex-1"
            icon="calendar"
          >
            Book appointment
          </Button>
          <Button
            to={`/doctors/${doctor.slug}`}
            size="sm"
            variant="outline"
            aria-label={`Read the full profile of ${doctor.name}`}
          >
            <Icon name="arrowRight" size={16} />
          </Button>
        </div>
      </div>
    </article>
  )
}
