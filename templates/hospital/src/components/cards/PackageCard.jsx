import { useState } from 'react'
import Icon from '../ui/Icon'
import SmartImage from '../ui/SmartImage'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import Modal from '../ui/Modal'

export default function PackageCard({ pkg }) {
  const [open, setOpen] = useState(false)
  const saving = pkg.oldPrice - pkg.price

  return (
    <>
      <article
        className={`card-base card-hover relative flex flex-col overflow-hidden ${
          pkg.popular ? 'ring-2 ring-mint-400' : ''
        }`}
      >
        {pkg.popular && (
          <span className="absolute right-4 top-4 z-10">
            <Badge tone="mint" icon="sparkle">Most booked</Badge>
          </span>
        )}

        <SmartImage name={pkg.image} alt={pkg.name} ratio="16/9" width={640}>
          <span className="absolute inset-0 bg-gradient-to-t from-ink/65 to-transparent" />
          <span className="absolute bottom-3 left-4 right-4">
            <h3 className="text-lg text-white">{pkg.name}</h3>
            <p className="mt-0.5 font-mono text-2xs uppercase tracking-[0.12em] text-clinic-100">
              {pkg.for}
            </p>
          </span>
        </SmartImage>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-end gap-2.5">
            <span className="font-display text-3xl font-extrabold leading-none text-ink">
              Rs. {pkg.price.toLocaleString()}
            </span>
            <span className="pb-1 font-mono text-sm text-ink-muted line-through">
              {pkg.oldPrice.toLocaleString()}
            </span>
          </div>
          <p className="mt-1.5 font-mono text-2xs uppercase tracking-[0.1em] text-emergency-500">
            You save Rs. {saving.toLocaleString()}
          </p>

          <div className="mt-4 flex flex-wrap gap-3 border-y border-dashed border-clinic-100 py-3 font-mono text-2xs uppercase tracking-[0.08em] text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="clock" size={13} className="text-clinic-400" />
              {pkg.duration}
            </span>
            {pkg.fasting && (
              <span className="inline-flex items-center gap-1.5">
                <Icon name="info" size={13} className="text-clinic-400" />
                10 hr fasting
              </span>
            )}
          </div>

          <ul className="mt-4 flex-1 space-y-2">
            {pkg.benefits.slice(0, 5).map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-ink-soft">
                <Icon name="check" size={15} strokeWidth={2.6} className="mt-0.5 shrink-0 text-mint-500" />
                {b}
              </li>
            ))}
            {pkg.benefits.length > 5 && (
              <li>
                <button
                  onClick={() => setOpen(true)}
                  className="pl-[26px] text-[13.5px] font-semibold text-clinic-500 underline-offset-4 hover:underline"
                >
                  + {pkg.benefits.length - 5} more included
                </button>
              </li>
            )}
          </ul>

          <div className="mt-5 flex gap-2">
            <Button
              to={`/appointment?package=${pkg.slug}`}
              size="sm"
              variant={pkg.popular ? 'mint' : 'primary'}
              className="flex-1"
              icon="calendar"
            >
              Book now
            </Button>
            <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
              Details
            </Button>
          </div>
        </div>
      </article>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={`${pkg.name} — what is included`}
        footer={
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-sm text-ink-soft">
              Rs. {pkg.price.toLocaleString()} · {pkg.duration}
            </p>
            <Button to={`/appointment?package=${pkg.slug}`} size="sm" icon="calendar">
              Book this package
            </Button>
          </div>
        }
      >
        <p className="text-sm leading-relaxed text-ink-muted">
          Recommended for {pkg.for.toLowerCase()}.
          {pkg.fasting && ' Please fast for 10 hours before your appointment — water is fine.'}
        </p>
        <ul className="mt-5 space-y-2.5">
          {pkg.benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-ink-soft">
              <Icon name="check" size={16} strokeWidth={2.6} className="mt-0.5 shrink-0 text-mint-500" />
              {b}
            </li>
          ))}
        </ul>
      </Modal>
    </>
  )
}
