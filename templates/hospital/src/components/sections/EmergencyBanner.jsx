import Icon from '../ui/Icon'
import Button from '../ui/Button'
import { site } from '../../data/site'

export default function EmergencyBanner() {
  const items = [
    { icon: 'alert', label: 'Emergency & trauma', value: site.phones.emergency, href: `tel:${site.phones.emergency}` },
    { icon: 'ambulance', label: 'Ambulance dispatch', value: site.phones.ambulance, href: `tel:${site.phones.ambulance.replace(/\s/g, '')}` },
    { icon: 'calendar', label: 'Appointments desk', value: site.phones.appointments, href: `tel:${site.phones.appointments.replace(/\s/g, '')}` },
  ]

  return (
    <section className="relative z-10 -mt-px bg-emergency-500 text-white">
      <div className="container flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25">
            <Icon name="alert" size={24} strokeWidth={2} />
          </span>
          <div>
            <h2 className="text-lg leading-tight text-white sm:text-xl">
              In an emergency, call first — we will be ready before you arrive.
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Calling ahead lets the team prepare a bay, so treatment starts the moment you reach us.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              className="group flex items-center gap-3 rounded-xl bg-white/12 px-4 py-2.5 ring-1 ring-white/20 transition hover:bg-white/20"
            >
              <Icon name={it.icon} size={18} className="shrink-0 opacity-80" />
              <span className="leading-tight">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-white/65">
                  {it.label}
                </span>
                <span className="block font-mono text-sm font-semibold">{it.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Compact variant used on inner pages. */
export function EmergencyStrip() {
  return (
    <div className="rounded-xl2 bg-emergency-500 p-5 text-white shadow-card">
      <div className="flex items-center gap-3">
        <Icon name="alert" size={20} />
        <h3 className="text-base text-white">Emergency, right now</h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/85">
        Our emergency unit is open every hour of every day, with a consultant on site rather than
        on call.
      </p>
      <Button href={`tel:${site.phones.emergency}`} variant="white" size="sm" icon="phone" className="mt-4" full>
        Call {site.phones.emergency}
      </Button>
    </div>
  )
}
