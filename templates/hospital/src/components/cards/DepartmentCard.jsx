import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import SmartImage from '../ui/SmartImage'

export default function DepartmentCard({ dept, compact = false }) {
  if (compact) {
    return (
      <Link
        to={`/departments/${dept.slug}`}
        className="card-base card-hover group flex items-center gap-4 p-4"
      >
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-clinic-50 text-clinic-500 transition-colors group-hover:bg-clinic-500 group-hover:text-white">
          <Icon name={dept.icon} size={22} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate font-display text-[15px] font-bold">{dept.name}</span>
          <span className="mt-0.5 block truncate text-xs text-ink-muted">{dept.short}</span>
        </span>
        <Icon name="chevronRight" size={17} className="shrink-0 text-clinic-300 transition-transform group-hover:translate-x-1 group-hover:text-clinic-500" />
      </Link>
    )
  }

  return (
    <Link
      to={`/departments/${dept.slug}`}
      className="card-base card-hover group flex flex-col overflow-hidden"
    >
      <SmartImage
        name={dept.image}
        alt={dept.name}
        ratio="16/10"
        width={640}
        imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.07]"
      >
        <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-clinic-600 shadow-card backdrop-blur">
          <Icon name={dept.icon} size={21} />
        </span>
        <span className="absolute bottom-3 left-4 right-4 font-mono text-2xs uppercase tracking-[0.14em] text-white/85">
          {dept.stats.consultants} consultants · {dept.stats.openHours}
        </span>
      </SmartImage>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[17px] leading-snug transition-colors group-hover:text-clinic-600">
          {dept.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{dept.short}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-clinic-500">
          View department
          <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
