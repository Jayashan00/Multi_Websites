import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import SmartImage from '../ui/SmartImage'

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="card-base card-hover group relative flex flex-col overflow-hidden"
    >
      <SmartImage
        name={service.image}
        alt={service.name}
        ratio="16/9"
        width={640}
        imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.07]"
      >
        <span className="absolute inset-0 bg-gradient-to-t from-clinic-900/75 to-transparent" />
      </SmartImage>

      <div className="flex flex-1 flex-col p-5">
        <span className="-mt-11 mb-4 grid h-12 w-12 place-items-center rounded-xl bg-mint-500 text-white shadow-lift ring-4 ring-white">
          <Icon name={service.icon} size={22} />
        </span>
        <h3 className="text-[17px] leading-snug transition-colors group-hover:text-clinic-600">
          {service.name}
        </h3>
        <p className="mt-1.5 text-[13px] font-medium text-mint-600">{service.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{service.description}</p>

        <div className="mt-4 flex items-center gap-2 border-t border-dashed border-clinic-100 pt-4 font-mono text-2xs uppercase tracking-[0.1em] text-ink-muted">
          <Icon name="clock" size={13} className="text-clinic-400" />
          {service.availability}
        </div>
      </div>
    </Link>
  )
}
