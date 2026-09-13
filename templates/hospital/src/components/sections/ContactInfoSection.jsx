import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { site } from '../../data/site'

export default function ContactInfoSection() {
  const cards = [
    {
      icon: 'pin',
      title: 'Visit the hospital',
      lines: [site.address.line1, site.address.line2],
      action: { label: 'Get directions', href: site.mapLink, external: true },
    },
    {
      icon: 'phone',
      title: 'Call us',
      lines: [`General · ${site.phones.general}`, `Appointments · ${site.phones.appointments}`],
      action: { label: 'Call the desk', href: `tel:${site.phones.general.replace(/\s/g, '')}` },
    },
    {
      icon: 'mail',
      title: 'Write to us',
      lines: [site.email.general, site.email.appointments],
      action: { label: 'Send an email', href: `mailto:${site.email.general}` },
    },
  ]

  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Contact information"
          title="Three ways to reach us, and one map"
          lead="The emergency line is answered day and night. Everything else runs on the hours below."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr_1fr]">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="card-base card-hover flex h-full flex-col p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-clinic-50 text-clinic-500">
                  <Icon name={c.icon} size={22} />
                </span>
                <h3 className="mt-4 text-[17px]">{c.title}</h3>
                <div className="mt-2 flex-1 space-y-1">
                  {c.lines.map((l) => (
                    <p key={l} className="font-mono text-[13px] leading-relaxed text-ink-muted">{l}</p>
                  ))}
                </div>
                <Button
                  href={c.action.href}
                  variant="ghost"
                  size="sm"
                  iconRight={c.action.external ? 'external' : 'arrowRight'}
                  className="mt-4 -ml-2 self-start"
                  {...(c.action.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                >
                  {c.action.label}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Opening hours + map */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,420px)_1fr]">
          <div className="card-base p-6">
            <h3 className="flex items-center gap-2.5 text-[17px]">
              <Icon name="clock" size={19} className="text-mint-500" />
              Opening hours
            </h3>
            <dl className="mt-5 divide-y divide-dashed divide-clinic-100">
              {site.hours.map((h) => (
                <div key={h.label} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-sm font-semibold text-ink-soft">{h.label}</dt>
                  <dd className="text-right font-mono text-xs text-ink-muted">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="card-base overflow-hidden">
            <iframe
              title="Hospital location on Google Maps"
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}