import { useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { Spinner } from '../components/ui/Loader'
import { Input, Select, Textarea, Checkbox } from '../components/ui/Field'
import { site, pageTitle } from '../data/site'
import { departments } from '../data/departments'
import usePageMeta from '../lib/usePageMeta'

const subjects = [
  'Appointment enquiry',
  'Health package enquiry',
  'Reports and records',
  'Billing and insurance',
  'Feedback or complaint',
  'Careers',
  'Something else',
]

export default function Contact() {
  usePageMeta({
    title: pageTitle('Contact Us'),
    description:
      'Call, email or visit us. Emergency and ambulance lines are answered 24 hours a day.',
  })

  const cards = [
    {
      icon: 'phone',
      title: 'Call us',
      lines: [
        { label: 'General', value: site.phones.general, href: `tel:${site.phones.general.replace(/\s/g, '')}` },
        { label: 'Appointments', value: site.phones.appointments, href: `tel:${site.phones.appointments.replace(/\s/g, '')}` },
      ],
    },
    {
      icon: 'mail',
      title: 'Email us',
      lines: [
        { label: 'General', value: site.email.general, href: `mailto:${site.email.general}` },
        { label: 'Appointments', value: site.email.appointments, href: `mailto:${site.email.appointments}` },
      ],
    },
    {
      icon: 'pin',
      title: 'Visit us',
      lines: [
        { label: 'Address', value: site.address.line1 },
        { label: '', value: site.address.line2 },
      ],
    },
    {
      icon: 'ambulance',
      title: 'Emergency',
      tone: 'emergency',
      lines: [
        { label: 'Emergency', value: site.phones.emergency, href: `tel:${site.phones.emergency}` },
        { label: 'Ambulance', value: site.phones.ambulance, href: `tel:${site.phones.ambulance.replace(/\s/g, '')}` },
      ],
    },
  ]

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Come in, call, or send us a message"
        lead="The front desk answers messages within one working day. For anything urgent, please phone — it is always faster."
        crumbs={[{ label: 'Contact' }]}
        image="hospitalBuilding"
      />

      {/* Contact cards */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div
                  className={`card-base h-full p-6 ${
                    c.tone === 'emergency' ? 'border-emergency-100 bg-emergency-50/50' : ''
                  }`}
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl text-white ${
                      c.tone === 'emergency' ? 'bg-emergency-500' : 'bg-clinic-500'
                    }`}
                  >
                    <Icon name={c.icon} size={22} />
                  </span>
                  <h2 className="mt-4 text-[17px]">{c.title}</h2>
                  <ul className="mt-3 space-y-2">
                    {c.lines.map((l, j) => (
                      <li key={j}>
                        {l.label && (
                          <span className="block font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">
                            {l.label}
                          </span>
                        )}
                        {l.href ? (
                          <a
                            href={l.href}
                            className={`text-sm font-semibold transition hover:underline ${
                              c.tone === 'emergency' ? 'text-emergency-600' : 'text-clinic-600'
                            }`}
                          >
                            {l.value}
                          </a>
                        ) : (
                          <span className="text-sm font-semibold text-ink">{l.value}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + hours */}
      <section className="border-y border-clinic-100 bg-paper py-14 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Send a message"
              title="Tell us what you need"
              lead="Please do not send medical records or payment details through this form — bring them with you, or call instead."
            />
            <ContactForm />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="card-base p-6">
              <p className="eyebrow">Opening hours</p>
              <dl className="mt-4 divide-y divide-clinic-100">
                {site.hours.map((h) => (
                  <div key={h.label} className="flex items-start justify-between gap-4 py-3">
                    <dt className="text-[13.5px] font-semibold text-ink">{h.label}</dt>
                    <dd className="text-right font-mono text-2xs uppercase tracking-[0.1em] text-ink-muted">
                      {h.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="card-base p-6">
              <p className="eyebrow">Follow us</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {site.social.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-clinic-100 bg-white text-clinic-600 transition hover:-translate-y-0.5 hover:border-clinic-300 hover:bg-clinic-50"
                  >
                    <Icon name={s.icon} size={18} />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-ink-muted">
                Clinic changes and health camps are announced on Facebook first.
              </p>
            </div>

            <div className="rounded-xl2 border border-dashed border-clinic-200 bg-white p-6">
              <p className="eyebrow">Departments</p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                Looking for a specific clinic? Each department page lists its own consultants and
                hours.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                {departments.slice(0, 8).map((d) => (
                  <li key={d.slug}>
                    <a
                      href={`/departments/${d.slug}`}
                      className="text-[13px] font-semibold text-ink-soft transition hover:text-clinic-600"
                    >
                      {d.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Finding us"
            title={`${site.address.line1}, ${site.address.line2}`}
            lead="Parking is under the main building, entered from the side road. The emergency entrance is separate and always open."
          />
          <div className="mt-9 overflow-hidden rounded-4xl border border-clinic-100 shadow-card">
            <iframe
              title="Map showing the hospital location"
              src={site.mapEmbed}
              className="h-[400px] w-full border-0 sm:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { icon: 'car', title: 'By car', text: 'Basement parking for 120 vehicles, entered from the side road. First hour free for patients.' },
              { icon: 'bed', title: 'By bus', text: 'Several city routes stop at the nearest junction, a four-minute walk from the main entrance.' },
              { icon: 'ambulance', title: 'Emergency entrance', text: 'Separate ramp on the north side of the building, open 24 hours, with a dedicated drop-off bay.' },
            ].map((t) => (
              <div key={t.title} className="rounded-xl2 border border-clinic-100 bg-white p-5">
                <Icon name={t.icon} size={20} className="text-clinic-500" />
                <h3 className="mt-3 text-[15px]">{t.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Contact form — validated, UI only                                  */
/* ------------------------------------------------------------------ */
function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '', consent: false,
  })
  const [errors, setErrors] = useState({})
  const [state, setState] = useState('idle') // idle | sending | sent

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }))
    setErrors((e) => ({ ...e, [k]: undefined }))
  }

  function submit(e) {
    e.preventDefault()
    const err = {}
    if (!form.name.trim()) err.name = 'Please tell us your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      err.email = 'Enter a valid email address.'
    if (form.phone && !/^[0-9+\s-]{9,15}$/.test(form.phone.trim()))
      err.phone = 'That phone number does not look right.'
    if (!form.subject) err.subject = 'Please choose a subject.'
    if (form.message.trim().length < 15) err.message = 'Please give us a little more detail.'
    if (!form.consent) err.consent = 'Please confirm before sending.'
    setErrors(err)
    if (Object.keys(err).length) return

    setState('sending')
    setTimeout(() => setState('sent'), 1000)
  }

  if (state === 'sent') {
    return (
      <div className="card-base mt-8 p-8 text-center sm:p-10">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mint-500 text-white">
          <Icon name="check" size={30} strokeWidth={2.6} />
        </span>
        <h3 className="mt-5 text-xl">Message received, {form.name.split(' ')[0]}</h3>
        <p className="mx-auto mt-2.5 max-w-md text-sm leading-relaxed text-ink-muted">
          The front desk answers messages within one working day. If this turns out to be urgent,
          please call {site.phones.general} rather than waiting for a reply.
        </p>
        <p className="mt-4 font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">
          Demo notice — this is a frontend prototype, nothing was sent.
        </p>
        <Button
          onClick={() => {
            setState('idle')
            setForm({ name: '', email: '', phone: '', subject: '', message: '', consent: false })
          }}
          variant="outline" className="mt-6"
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="card-base mt-8 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Your name" required value={form.name}
          onChange={(e) => set('name', e.target.value)} error={errors.name} placeholder="Your full name"
        />
        <Input
          label="Email address" required type="email" value={form.email}
          onChange={(e) => set('email', e.target.value)} error={errors.email} placeholder="you@example.com"
        />
        <Input
          label="Phone number" type="tel" value={form.phone}
          onChange={(e) => set('phone', e.target.value)} error={errors.phone}
          placeholder="000 000 0000" hint="Optional — only if you would rather we call."
        />
        <Select
          label="Subject" required value={form.subject}
          onChange={(e) => set('subject', e.target.value)} error={errors.subject}
          placeholder="Select a subject…" options={subjects}
        />
      </div>

      <Textarea
        className="mt-5"
        label="Message" required rows={6} value={form.message}
        onChange={(e) => set('message', e.target.value)} error={errors.message}
        placeholder="How can we help?"
        hint={`${form.message.trim().length} characters — at least 15`}
      />

      <div className="mt-5 rounded-xl2 border border-clinic-100 bg-paper/60 p-4">
        <Checkbox
          checked={form.consent}
          onChange={(e) => set('consent', e.target.checked)}
          label={`I agree that ${site.name} may contact me about this enquiry.`}
        />
        {errors.consent && (
          <p role="alert" className="mt-2 flex items-center gap-1.5 text-xs font-medium text-emergency-600">
            <Icon name="alert" size={13} strokeWidth={2.2} />
            {errors.consent}
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button as="button" type="submit" disabled={state === 'sending'} className="sm:w-auto">
          {state === 'sending' ? <Spinner size={18} /> : <Icon name="send" size={17} />}
          {state === 'sending' ? 'Sending…' : 'Send message'}
        </Button>
        <p className="text-xs leading-relaxed text-ink-muted">
          We never share your details. Fields marked
          <span className="mx-1 text-emergency-500">*</span>are required.
        </p>
      </div>
    </form>
  )
}