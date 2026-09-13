import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Reveal from '../components/ui/Reveal'
import SmartImage from '../components/ui/SmartImage'
import { Spinner } from '../components/ui/Loader'
import { Input, Select, Textarea, Radio, Checkbox } from '../components/ui/Field'
import { departments } from '../data/departments'
import { doctors, doctorsByDepartment } from '../data/doctors'
import { site, pageTitle } from '../data/site'
import usePageMeta from '../lib/usePageMeta'
import { bookingReference, dayName, formatLongDate, maxDateISO, todayISO } from '../lib/utils'

/* ------------------------------------------------------------------ *
 * Slot generation
 * Only days the doctor actually holds a clinic are selectable, and the
 * times shown are derived from that doctor's published clinic hours.
 * ------------------------------------------------------------------ */

/** Deterministic "already booked" marker so the demo behaves consistently. */
function isTaken(doctorSlug, date, time) {
  const seed = `${doctorSlug}${date}${time}`
    .split('')
    .reduce((a, c) => a + c.charCodeAt(0), 0)
  return seed % 5 === 0
}

/** "9.00 am" -> minutes since midnight */
function toMinutes(text) {
  const m = text.trim().toLowerCase().match(/(\d{1,2})[.:](\d{2})\s*(am|pm)/)
  if (!m) return null
  let hour = Number(m[1]) % 12
  if (m[3] === 'pm') hour += 12
  return hour * 60 + Number(m[2])
}

/**
 * Turns a published clinic window ("9.00 am â€“ 1.00 pm") into 30-minute slots,
 * stopping half an hour before the clinic closes so the last patient is not
 * booked into the doorway.
 */
function sessionFor(doctor, date) {
  if (!doctor || !date) return null
  const entry = doctor.hours.find((h) => h.day === dayName(date))
  if (!entry) return null

  const [rawStart, rawEnd] = entry.time.split(/[â€“-]/)
  const start = toMinutes(rawStart || '')
  const end = toMinutes(rawEnd || '')
  if (start === null || end === null || end <= start) return null

  const slots = []
  for (let t = start; t <= end - 30; t += 30) {
    slots.push(`${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`)
  }
  return { label: entry.time, slots }
}

function pretty(time24) {
  const [h, m] = time24.split(':').map(Number)
  const suffix = h >= 12 ? 'pm' : 'am'
  const hour = h % 12 === 0 ? 12 : h % 12
  return `${hour}.${String(m).padStart(2, '0')} ${suffix}`
}

/** Consultation fee formatted with the currency configured in site.js */
const fee = (amount) => `${site.currency} ${amount.toLocaleString()}`

const STEPS = [
  { n: 1, label: 'Department', icon: 'stethoscope' },
  { n: 2, label: 'Doctor', icon: 'user' },
  { n: 3, label: 'Date & time', icon: 'calendar' },
  { n: 4, label: 'Your details', icon: 'clipboard' },
  { n: 5, label: 'Summary', icon: 'check' },
]

export default function Appointment() {
  const [params] = useSearchParams()
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [reference, setReference] = useState(null)
  const [errors, setErrors] = useState({})

  const [form, setForm] = useState({
    department: params.get('department') || '',
    doctor: params.get('doctor') || '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    nic: '',
    age: '',
    gender: '',
    visitType: 'first',
    reason: '',
    consent: false,
  })

  usePageMeta({
    title: pageTitle('Book an Appointment'),
    description:
      'Book a consultant appointment in five short steps: choose a department, a doctor, a date and time, then confirm your details.',
  })

  /* If we arrived from a doctor card, pre-select that doctor's department. */
  useEffect(() => {
    const slug = params.get('doctor')
    if (!slug) return
    const doc = doctors.find((d) => d.slug === slug)
    if (doc) {
      setForm((f) => ({ ...f, doctor: doc.slug, department: doc.department }))
      setStep(3)
    }
  }, [params])

  const set = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const dept = departments.find((d) => d.slug === form.department)
  const doctor = doctors.find((d) => d.slug === form.doctor)
  const available = useMemo(
    () => (form.department ? doctorsByDepartment(form.department) : []),
    [form.department],
  )

  const session = sessionFor(doctor, form.date)
  const slots = session?.slots ?? []

  /** Days of the week this doctor holds a clinic â€” shown as guidance. */
  const clinicDays = doctor ? doctor.hours.map((h) => h.day) : []

  function validate(current) {
    const e = {}
    if (current === 1 && !form.department) e.department = 'Please choose a department.'
    if (current === 2 && !form.doctor) e.doctor = 'Please choose a doctor.'
    if (current === 3) {
      if (!form.date) e.date = 'Please choose a date.'
      else if (!session) e.date = `${doctor.name} does not hold a clinic on a ${dayName(form.date)}.`
      if (!form.time) e.time = 'Please choose a time slot.'
    }
    if (current === 4) {
      if (!form.firstName.trim()) e.firstName = 'First name is required.'
      if (!form.lastName.trim()) e.lastName = 'Last name is required.'
      if (!/^[0-9+\s-]{9,15}$/.test(form.phone.trim()))
        e.phone = 'Enter a valid phone number.'
      if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
        e.email = 'That email address does not look right.'
      if (!form.age || Number(form.age) < 0 || Number(form.age) > 120)
        e.age = 'Enter the patientâ€™s age in years.'
      if (!form.gender) e.gender = 'Please select one.'
      if (!form.consent) e.consent = 'Please confirm before continuing.'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function next() {
    if (!validate(step)) return
    setStep((s) => Math.min(s + 1, 5))
    window.scrollTo({ top: 240, behavior: 'smooth' })
  }

  function back() {
    setErrors({})
    setStep((s) => Math.max(s - 1, 1))
    window.scrollTo({ top: 240, behavior: 'smooth' })
  }

  function confirm() {
    setSubmitting(true)
    // UI only â€” no backend call. The delay simulates the request round-trip.
    setTimeout(() => {
      setReference(bookingReference())
      setSubmitting(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 1100)
  }

  function reset() {
    setReference(null)
    setStep(1)
    setForm({
      department: '', doctor: '', date: '', time: '',
      firstName: '', lastName: '', phone: '', email: '', nic: '',
      age: '', gender: '', visitType: 'first', reason: '', consent: false,
    })
  }

  /* ---------------------------------------------------------------- */
  /* Confirmation screen                                              */
  /* ---------------------------------------------------------------- */
  if (reference) {
    return (
      <>
        <PageHeader
          eyebrow="Appointment"
          title="Your appointment is confirmed"
          lead="A confirmation SMS is on its way. Please arrive fifteen minutes early for registration."
          crumbs={[{ label: 'Appointment', to: '/appointment' }, { label: 'Confirmed' }]}
          image="receptionDesk"
        />
        <section className="py-14 sm:py-20">
          <div className="container max-w-3xl">
            <div className="card-base overflow-hidden">
              <div className="relative bg-mint-500 px-6 py-9 text-center text-white sm:px-10">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white/15 ring-4 ring-white/20">
                  <Icon name="check" size={32} strokeWidth={2.6} />
                </span>
                <h2 className="mt-5 text-2xl text-white">Booking reference {reference}</h2>
                <p className="mt-2 text-sm text-mint-50/90">
                  Keep this reference â€” quote it at the registration desk.
                </p>
                <svg
                  viewBox="0 0 1200 40"
                  preserveAspectRatio="none"
                  className="absolute bottom-0 left-0 h-6 w-full text-white/25"
                  aria-hidden="true"
                >
                  <path
                    d="M0 26h180l10-14 12 26 14-32 12 36 10-16h160l10-14 12 26 14-32 12 36 10-16h180l10-14 12 26 14-32 12 36 10-16h300"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  />
                </svg>
              </div>

              <dl className="divide-y divide-clinic-100">
                <Row label="Patient" value={`${form.firstName} ${form.lastName} Â· ${form.age} yrs`} />
                <Row label="Department" value={dept?.name} />
                <Row label="Doctor" value={`${doctor?.name} â€” ${doctor?.specialization}`} />
                <Row label="Date" value={formatLongDate(form.date)} />
                <Row label="Time" value={`${pretty(form.time)} Â· report 15 minutes early`} />
                <Row label="Contact" value={form.phone + (form.email ? ` Â· ${form.email}` : '')} />
                <Row label="Consultation fee" value={doctor ? `${fee(doctor.fee)} (payable at the counter)` : null} />
              </dl>

              <div className="flex flex-col gap-3 border-t border-clinic-100 bg-paper/60 p-6 sm:flex-row">
                <Button onClick={() => window.print()} variant="outline" icon="printer" className="sm:flex-1">
                  Print this page
                </Button>
                <Button onClick={reset} variant="outline" icon="calendar" className="sm:flex-1">
                  Book another
                </Button>
                <Button to="/" icon="arrowRight" className="sm:flex-1">
                  Back to home
                </Button>
              </div>
            </div>

            <div className="mt-8 rounded-xl2 border border-dashed border-clinic-200 bg-clinic-50/50 p-5 text-sm leading-relaxed text-ink-soft">
              <p className="font-semibold text-ink">Before you come in</p>
              <ul className="mt-3 space-y-2">
                {[
                  'Bring your national ID or passport and any previous reports or scan films.',
                  'Bring a list of the medicines you currently take, including doses.',
                  'To cancel or reschedule, call ' + site.phones.appointments + ' at least four hours ahead.',
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <Icon name="check" size={15} className="mt-0.5 shrink-0 text-mint-500" strokeWidth={2.4} />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">
                Demo notice â€” this is a frontend prototype. No booking has been stored.
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }

  /* ---------------------------------------------------------------- */
  /* Wizard                                                           */
  /* ---------------------------------------------------------------- */
  return (
    <>
      <PageHeader
        eyebrow="Appointment booking"
        title="Book a consultant in five short steps"
        lead="Choose your department and doctor, pick a slot from their real clinic hours, and confirm. It takes about a minute."
        crumbs={[{ label: 'Appointment' }]}
        image="receptionDesk"
      />

      <section className="py-12 sm:py-16">
        <div className="container">
          {/* Stepper */}
          <ol className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:grid sm:grid-cols-5 sm:gap-3 sm:px-0">
            {STEPS.map((s) => {
              const done = step > s.n
              const active = step === s.n
              return (
                <li key={s.n} className="min-w-[142px] sm:min-w-0">
                  <div
                    className={`flex h-full items-center gap-3 rounded-xl2 border p-3 transition ${
                      active
                        ? 'border-clinic-400 bg-white shadow-card'
                        : done
                          ? 'border-mint-200 bg-mint-50/60'
                          : 'border-clinic-100 bg-white/60'
                    }`}
                  >
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-sm font-bold transition ${
                        done
                          ? 'bg-mint-500 text-white'
                          : active
                            ? 'bg-clinic-500 text-white'
                            : 'bg-clinic-50 text-clinic-400'
                      }`}
                    >
                      {done ? <Icon name="check" size={16} strokeWidth={3} /> : <Icon name={s.icon} size={16} />}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted">
                        Step {s.n}
                      </span>
                      <span className="block truncate font-display text-[13.5px] font-bold">{s.label}</span>
                    </span>
                  </div>
                </li>
              )
            })}
          </ol>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
            {/* --------------------------- Main panel --------------------------- */}
            <div className="card-base p-6 sm:p-8">
              {/* STEP 1 â€” department */}
              {step === 1 && (
                <div className="animate-fade-up">
                  <StepTitle
                    n="01"
                    title="Which department do you need?"
                    text="Not sure? Choose General Medicine â€” our physicians will refer you on if a specialist is needed."
                  />
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {departments.map((d) => (
                      <button
                        key={d.slug}
                        onClick={() => { set('department', d.slug); set('doctor', ''); set('time', '') }}
                        className={`flex items-center gap-3.5 rounded-xl2 border p-4 text-left transition ${
                          form.department === d.slug
                            ? 'border-clinic-400 bg-clinic-50/70 shadow-glow'
                            : 'border-clinic-100 bg-white hover:border-clinic-200 hover:shadow-card'
                        }`}
                      >
                        <span
                          className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition ${
                            form.department === d.slug
                              ? 'bg-clinic-500 text-white'
                              : 'bg-clinic-50 text-clinic-500'
                          }`}
                        >
                          <Icon name={d.icon} size={21} />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-display text-[15px] font-bold leading-tight">{d.name}</span>
                          <span className="mt-0.5 block truncate text-xs text-ink-muted">{d.short}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                  {errors.department && <ErrorLine>{errors.department}</ErrorLine>}
                </div>
              )}

              {/* STEP 2 â€” doctor */}
              {step === 2 && (
                <div className="animate-fade-up">
                  <StepTitle
                    n="02"
                    title={`Consultants in ${dept?.name}`}
                    text="Fees are payable at the counter on the day. Every consultant listed here holds a regular clinic."
                  />
                  <div className="mt-6 space-y-3">
                    {available.map((d) => (
                      <button
                        key={d.slug}
                        onClick={() => { set('doctor', d.slug); set('date', ''); set('time', '') }}
                        className={`flex w-full items-center gap-4 rounded-xl2 border p-3.5 text-left transition ${
                          form.doctor === d.slug
                            ? 'border-clinic-400 bg-clinic-50/70 shadow-glow'
                            : 'border-clinic-100 bg-white hover:border-clinic-200 hover:shadow-card'
                        }`}
                      >
                        <SmartImage
                          name={d.photo}
                          alt=""
                          ratio="1/1"
                          width={140}
                          className="h-16 w-16 shrink-0 rounded-xl"
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-[15px] font-bold leading-tight">{d.name}</span>
                          <span className="mt-0.5 block text-[13px] font-semibold text-mint-600">
                            {d.specialization}
                          </span>
                          <span className="mt-1 block font-mono text-2xs uppercase tracking-[0.1em] text-ink-muted">
                            {d.experience} yrs Â· {fee(d.fee)} Â· {d.hours.map((h) => h.day.slice(0, 3)).join(' ')}
                          </span>
                        </span>
                        <span
                          className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 transition ${
                            form.doctor === d.slug ? 'border-clinic-500 bg-clinic-500 text-white' : 'border-clinic-200'
                          }`}
                        >
                          {form.doctor === d.slug && <Icon name="check" size={13} strokeWidth={3} />}
                        </span>
                      </button>
                    ))}
                  </div>
                  {errors.doctor && <ErrorLine>{errors.doctor}</ErrorLine>}
                </div>
              )}

              {/* STEP 3 â€” date & time */}
              {step === 3 && (
                <div className="animate-fade-up">
                  <StepTitle
                    n="03"
                    title="Pick a date and a time slot"
                    text={`${doctor?.name} holds clinics on ${clinicDays.join(', ')}. Slots outside those days are not shown.`}
                  />

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <Input
                      type="date"
                      label="Appointment date"
                      required
                      min={todayISO()}
                      max={maxDateISO(60)}
                      value={form.date}
                      onChange={(e) => { set('date', e.target.value); set('time', '') }}
                      error={errors.date}
                      hint={form.date && session ? `Clinic runs ${session.label}` : 'Bookings open 60 days ahead.'}
                    />
                    <div className="rounded-xl2 border border-dashed border-clinic-200 bg-clinic-50/50 p-4">
                      <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted">Clinic hours</p>
                      <ul className="mt-2 space-y-1.5">
                        {doctor?.hours.map((h) => (
                          <li key={h.day} className="flex justify-between gap-3 text-[13px]">
                            <span className="font-semibold text-ink-soft">{h.day}</span>
                            <span className="font-mono text-ink-muted">{h.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="label">
                      Available slots<span className="ml-0.5 text-emergency-500">*</span>
                    </p>
                    {!form.date ? (
                      <EmptyHint icon="calendar" text="Choose a date first and the available slots will appear here." />
                    ) : !session ? (
                      <EmptyHint
                        icon="alert"
                        tone="warn"
                        text={`No clinic on a ${dayName(form.date)}. Try ${clinicDays.join(', ')}.`}
                      />
                    ) : (
                      <>
                        <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                          {slots.map((t) => {
                            const taken = isTaken(doctor.slug, form.date, t)
                            const selected = form.time === t
                            return (
                              <button
                                key={t}
                                disabled={taken}
                                onClick={() => set('time', t)}
                                className={`rounded-xl border py-2.5 font-mono text-[13px] font-semibold transition ${
                                  taken
                                    ? 'cursor-not-allowed border-clinic-100 bg-paper text-ink-muted/50 line-through'
                                    : selected
                                      ? 'border-clinic-500 bg-clinic-500 text-white shadow-card'
                                      : 'border-clinic-100 bg-white text-ink-soft hover:border-clinic-300 hover:bg-clinic-50'
                                }`}
                              >
                                {pretty(t)}
                              </button>
                            )
                          })}
                        </div>
                        <p className="mt-3 flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.1em] text-ink-muted">
                          <span className="h-2.5 w-2.5 rounded-sm bg-paper ring-1 ring-clinic-100" />
                          Struck-through slots are already booked
                        </p>
                      </>
                    )}
                    {errors.time && <ErrorLine>{errors.time}</ErrorLine>}
                  </div>
                </div>
              )}

              {/* STEP 4 â€” patient details */}
              {step === 4 && (
                <div className="animate-fade-up">
                  <StepTitle
                    n="04"
                    title="Patient information"
                    text="Enter the details of the person being seen. If you are booking for someone else, use their name and your phone number."
                  />

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <Input
                      label="First name" required value={form.firstName}
                      onChange={(e) => set('firstName', e.target.value)}
                      error={errors.firstName} placeholder="First name"
                    />
                    <Input
                      label="Last name" required value={form.lastName}
                      onChange={(e) => set('lastName', e.target.value)}
                      error={errors.lastName} placeholder="Last name"
                    />
                    <Input
                      label="Mobile number" required type="tel" value={form.phone}
                      onChange={(e) => set('phone', e.target.value)}
                      error={errors.phone} placeholder="000 000 0000"
                      hint="Your confirmation and reminder SMS go here."
                    />
                    <Input
                      label="Email address" type="email" value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      error={errors.email} placeholder="you@example.com"
                      hint="Optional â€” used only for the report link."
                    />
                    <Input
                      label="Age" required type="number" min="0" max="120" value={form.age}
                      onChange={(e) => set('age', e.target.value)} error={errors.age} placeholder="34"
                    />
                    <Select
                      label="Gender" required value={form.gender}
                      onChange={(e) => set('gender', e.target.value)}
                      error={errors.gender} placeholder="Selectâ€¦"
                      options={['Female', 'Male', 'Prefer not to say']}
                    />
                    <Input
                      label="National ID / Passport" value={form.nic}
                      onChange={(e) => set('nic', e.target.value)}
                      placeholder="ID number" hint="Optional â€” speeds up registration."
                      className="sm:col-span-2"
                    />
                  </div>

                  <fieldset className="mt-6">
                    <legend className="label">Is this a first visit or a follow-up?</legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Radio
                        name="visitType" value="first" label="First visit"
                        sub="New patient record will be created"
                        checked={form.visitType === 'first'}
                        onChange={(e) => set('visitType', e.target.value)}
                      />
                      <Radio
                        name="visitType" value="followup" label="Follow-up"
                        sub="Reduced fee if within 14 days"
                        checked={form.visitType === 'followup'}
                        onChange={(e) => set('visitType', e.target.value)}
                      />
                    </div>
                  </fieldset>

                  <Textarea
                    className="mt-6"
                    label="Reason for the visit"
                    rows={4}
                    value={form.reason}
                    onChange={(e) => set('reason', e.target.value)}
                    placeholder="A sentence or two helps the nurse prepare â€” symptoms, how long, any current medication."
                    hint="Optional, but useful. Please do not include payment details."
                  />

                  <div className="mt-6 rounded-xl2 border border-clinic-100 bg-paper/60 p-4">
                    <Checkbox
                      checked={form.consent}
                      onChange={(e) => set('consent', e.target.checked)}
                      label="I confirm these details are correct and agree to be contacted about this appointment."
                    />
                    {errors.consent && <ErrorLine>{errors.consent}</ErrorLine>}
                  </div>
                </div>
              )}

              {/* STEP 5 â€” summary */}
              {step === 5 && (
                <div className="animate-fade-up">
                  <StepTitle
                    n="05"
                    title="Check your appointment summary"
                    text="Nothing is submitted until you press confirm. You can step back and change anything."
                  />

                  <div className="mt-6 overflow-hidden rounded-xl2 border border-clinic-100">
                    <div className="flex items-center gap-4 bg-clinic-50/70 p-4">
                      <SmartImage name={doctor?.photo} alt="" ratio="1/1" width={140} className="h-14 w-14 rounded-xl" />
                      <div className="min-w-0">
                        <p className="font-display text-[15px] font-bold">{doctor?.name}</p>
                        <p className="text-[13px] font-semibold text-mint-600">{doctor?.specialization}</p>
                      </div>
                      <Badge tone="clinic" className="ml-auto hidden sm:inline-flex">{dept?.name}</Badge>
                    </div>
                    <dl className="divide-y divide-clinic-100">
                      <Row label="Patient" value={`${form.firstName} ${form.lastName}`} />
                      <Row label="Age / gender" value={`${form.age} yrs Â· ${form.gender}`} />
                      <Row label="Visit type" value={form.visitType === 'first' ? 'First visit' : 'Follow-up'} />
                      <Row label="Date" value={formatLongDate(form.date)} />
                      <Row label="Time" value={pretty(form.time)} />
                      <Row label="Mobile" value={form.phone} />
                      {form.email && <Row label="Email" value={form.email} />}
                      {form.nic && <Row label="National ID / Passport" value={form.nic} />}
                      {form.reason && <Row label="Reason" value={form.reason} />}
                      <Row label="Consultation fee" value={doctor ? fee(doctor.fee) : null} />
                    </dl>
                  </div>

                  <p className="mt-4 flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-muted">
                    <Icon name="info" size={15} className="mt-0.5 shrink-0 text-clinic-400" />
                    Please arrive fifteen minutes early. If you are more than ten minutes late the
                    slot may be released to a waiting patient.
                  </p>
                </div>
              )}

              {/* Wizard controls */}
              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-clinic-100 pt-6 sm:flex-row sm:items-center">
                {step > 1 && (
                  <Button onClick={back} variant="outline" icon="chevronLeft" className="sm:w-auto">
                    Back
                  </Button>
                )}
                <span className="hidden flex-1 font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted sm:block">
                  Step {step} of 5
                </span>
                {step < 5 ? (
                  <Button onClick={next} iconRight="arrowRight" className="sm:w-auto">
                    Continue
                  </Button>
                ) : (
                  <Button onClick={confirm} variant="mint" disabled={submitting} className="sm:w-auto">
                    {submitting ? <Spinner size={18} /> : <Icon name="check" size={18} strokeWidth={2.4} />}
                    {submitting ? 'Confirmingâ€¦' : 'Confirm appointment'}
                  </Button>
                )}
              </div>
            </div>

            {/* --------------------------- Side rail --------------------------- */}
            <aside className="space-y-5 lg:sticky lg:top-28">
              <Reveal>
                <div className="card-base overflow-hidden">
                  <div className="border-b border-clinic-100 px-5 py-4">
                    <p className="eyebrow">Your selection</p>
                  </div>
                  <dl className="divide-y divide-clinic-100 text-sm">
                    <MiniRow label="Department" value={dept?.name} />
                    <MiniRow label="Doctor" value={doctor?.name} />
                    <MiniRow label="Date" value={form.date ? formatLongDate(form.date) : null} />
                    <MiniRow label="Time" value={form.time ? pretty(form.time) : null} />
                    <MiniRow label="Fee" value={doctor ? fee(doctor.fee) : null} />
                  </dl>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="rounded-xl2 border border-emergency-100 bg-emergency-50/70 p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-emergency-500 text-white">
                    <Icon name="ambulance" size={20} />
                  </span>
                  <h3 className="mt-3.5 text-base">Is this an emergency?</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                    Do not book online. Come straight to the Emergency entrance, or call the
                    ambulance line â€” it is answered 24 hours a day.
                  </p>
                  <Button
                    href={`tel:${site.phones.ambulance.replace(/\s/g, '')}`}
                    variant="emergency" size="sm" icon="phone" className="mt-4" full
                  >
                    {site.phones.ambulance}
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="rounded-xl2 border border-clinic-100 bg-white p-5">
                  <h3 className="text-base">Prefer to talk to a person?</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">
                    The appointments desk is open {site.hours[1].value.replace('Mon â€“ Sat Â· ', 'Monâ€“Sat, ')}.
                  </p>
                  <div className="mt-4 space-y-2">
                    <a
                      href={`tel:${site.phones.appointments.replace(/\s/g, '')}`}
                      className="flex items-center gap-2.5 text-sm font-semibold text-clinic-600 hover:text-clinic-700"
                    >
                      <Icon name="phone" size={16} />
                      {site.phones.appointments}
                    </a>
                    <a
                      href={`mailto:${site.email.appointments}`}
                      className="flex items-center gap-2.5 text-sm font-semibold text-clinic-600 hover:text-clinic-700"
                    >
                      <Icon name="mail" size={16} />
                      {site.email.appointments}
                    </a>
                  </div>
                  <Link
                    to="/faq"
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-soft hover:text-clinic-600"
                  >
                    Read booking FAQs
                    <Icon name="arrowRight" size={14} />
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

/* --------------------------- small helpers --------------------------- */

function StepTitle({ n, title, text }) {
  return (
    <header>
      <p className="eyebrow">Step {n}</p>
      <h2 className="mt-2 text-[clamp(1.25rem,2.4vw,1.7rem)] leading-tight">{title}</h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">{text}</p>
    </header>
  )
}

function Row({ label, value }) {
  if (!value) return null
  return (
    <div className="grid gap-1 px-6 py-3.5 sm:grid-cols-[170px_1fr] sm:gap-4">
      <dt className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted">{label}</dt>
      <dd className="text-sm font-medium text-ink">{value}</dd>
    </div>
  )
}

function MiniRow({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-3 px-5 py-3">
      <dt className="font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">{label}</dt>
      <dd className={`text-right text-[13.5px] font-semibold ${value ? 'text-ink' : 'text-ink-muted/60'}`}>
        {value || 'â€”'}
      </dd>
    </div>
  )
}

function ErrorLine({ children }) {
  return (
    <p role="alert" className="mt-3 flex items-center gap-1.5 text-xs font-medium text-emergency-600">
      <Icon name="alert" size={13} strokeWidth={2.2} />
      {children}
    </p>
  )
}

function EmptyHint({ icon, text, tone = 'muted' }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl2 border border-dashed p-5 text-sm ${
        tone === 'warn'
          ? 'border-emergency-100 bg-emergency-50/50 text-emergency-700'
          : 'border-clinic-200 bg-clinic-50/40 text-ink-muted'
      }`}
    >
      <Icon name={icon} size={18} className="shrink-0" />
      {text}
    </div>
  )
}
