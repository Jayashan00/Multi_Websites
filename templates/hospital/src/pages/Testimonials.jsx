import { useMemo, useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import TestimonialSlider from '../components/sections/TestimonialSlider'
import SmartImage from '../components/ui/SmartImage'
import Rating from '../components/ui/Rating'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Reveal from '../components/ui/Reveal'
import Modal from '../components/ui/Modal'
import { Input, Select, Textarea, Checkbox } from '../components/ui/Field'
import { testimonials, successStories } from '../data/testimonials'
import { departments } from '../data/departments'
import { pageTitle } from '../data/site'
import { formatDate } from '../lib/utils'
import usePageMeta from '../lib/usePageMeta'

export default function Testimonials() {
  const [dept, setDept] = useState('All')
  const [open, setOpen] = useState(false)

  usePageMeta({
    title: pageTitle('Patient Testimonials'),
    description:
      'Reviews, ratings and success stories from patients we have treated — published unedited.',
  })

  const depts = useMemo(
    () => ['All', ...new Set(testimonials.map((t) => t.department))],
    [],
  )

  const list = useMemo(
    () => (dept === 'All' ? testimonials : testimonials.filter((t) => t.department === dept)),
    [dept],
  )

  const average =
    Math.round((testimonials.reduce((a, t) => a + t.rating, 0) / testimonials.length) * 10) / 10

  const distribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: testimonials.filter((t) => t.rating === star).length,
  }))

  return (
    <>
      <PageHeader
        eyebrow="Patient testimonials"
        title="What patients say when nobody edits it"
        lead="Reviews are collected by SMS three days after discharge and published exactly as written, good or bad."
        crumbs={[{ label: 'Testimonials' }]}
        image="waitingArea"
      />

      {/* Rating summary */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <div className="grid gap-8 rounded-4xl border border-clinic-100 bg-white p-7 shadow-card sm:p-10 lg:grid-cols-[280px_1fr] lg:items-center">
            <div className="text-center lg:text-left">
              <p className="font-display text-[64px] font-extrabold leading-none text-ink">{average}</p>
              <Rating value={average} size={20} className="mt-3 justify-center lg:justify-start" />
              <p className="mt-3 font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted">
                {testimonials.length} verified reviews
              </p>
              <Button onClick={() => setOpen(true)} variant="outline" size="sm" icon="quote" className="mt-5">
                Share your experience
              </Button>
            </div>

            <div className="space-y-2.5">
              {distribution.map(({ star, count }) => {
                const pct = Math.round((count / testimonials.length) * 100)
                return (
                  <div key={star} className="flex items-center gap-3">
                    <span className="w-12 shrink-0 font-mono text-2xs uppercase tracking-[0.1em] text-ink-muted">
                      {star} star
                    </span>
                    <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-clinic-50">
                      <span
                        className="block h-full rounded-full bg-mint-400 transition-[width] duration-700"
                        style={{ width: `${pct}%` }}
                      />
                    </span>
                    <span className="w-10 shrink-0 text-right font-mono text-xs text-ink-muted">{count}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Slider */}
      <TestimonialSlider />

      {/* All reviews */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Review cards"
              title="Every review we have received"
              lead="Filter by the department that treated you to see what that team is actually like."
            />
            <div className="w-full sm:w-64">
              <Select
                label="Filter by department"
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                options={depts}
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((t, i) => (
              <Reveal key={t.id} delay={(i % 3) * 80}>
                <figure className="card-base card-hover flex h-full flex-col p-6">
                  <Icon name="quote" size={26} className="text-clinic-200" />
                  <blockquote className="mt-4 flex-1 text-[14.5px] leading-[1.8] text-ink-soft">
                    {t.quote}
                  </blockquote>
                  <Rating value={t.rating} className="mt-5" />
                  <figcaption className="mt-4 flex items-center gap-3 border-t border-dashed border-clinic-100 pt-4">
                    <SmartImage name={t.photo} alt="" ratio="1/1" width={120} className="h-11 w-11 rounded-full" />
                    <div className="min-w-0">
                      <p className="truncate font-display text-sm font-bold">{t.name}</p>
                      <p className="truncate font-mono text-2xs uppercase tracking-[0.1em] text-ink-muted">
                        {t.location} · {formatDate(t.date)}
                      </p>
                    </div>
                  </figcaption>
                  <p className="mt-3 text-2xs font-semibold uppercase tracking-[0.1em] text-mint-600">
                    {t.department} · {t.doctor}
                  </p>
                </figure>
              </Reveal>
            ))}
          </div>

          {list.length === 0 && (
            <p className="mt-12 text-center text-sm text-ink-muted">
              No reviews yet for that department.
            </p>
          )}
        </div>
      </section>

      {/* Success stories */}
      <section className="border-t border-clinic-100 bg-paper py-14 sm:py-20">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Success stories"
            title="Longer stories, told by the patients themselves"
            lead="Recorded with permission at follow-up appointments. Names and details are published exactly as consented to."
          />

          <div className="mt-12 space-y-6">
            {successStories.map((s, i) => (
              <Reveal key={s.id} delay={i * 70}>
                <article className="card-base grid overflow-hidden lg:grid-cols-[300px_1fr]">
                  <SmartImage name={s.photo} alt={s.name} ratio="4/3" width={620} className="h-full" />
                  <div className="p-7 sm:p-9">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Badge tone="mint">{s.department}</Badge>
                      <Rating value={s.rating} />
                    </div>
                    <h3 className="mt-4 text-[clamp(1.15rem,2.2vw,1.6rem)] leading-snug">
                      {s.storyTitle}
                    </h3>
                    <blockquote className="mt-4 border-l-4 border-mint-400 pl-5 text-[15px] leading-[1.85] text-ink-soft">
                      {s.quote}
                    </blockquote>
                    <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">
                      <span className="font-sans text-sm font-bold normal-case tracking-normal text-ink">
                        {s.name}
                      </span>
                      <span>{s.location}</span>
                      <span>· treated by {s.doctor}</span>
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button onClick={() => setOpen(true)} icon="quote">Tell us about your visit</Button>
          </div>
        </div>
      </section>

      <ReviewModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Review submission — UI only                                        */
/* ------------------------------------------------------------------ */
function ReviewModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', department: '', rating: 5, review: '', consent: false })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }))
    setErrors((e) => ({ ...e, [k]: undefined }))
  }

  function submit() {
    const e = {}
    if (!form.name.trim()) e.name = 'Please tell us your name.'
    if (!form.department) e.department = 'Which department treated you?'
    if (form.review.trim().length < 20) e.review = 'A sentence or two, please — at least 20 characters.'
    if (!form.consent) e.consent = 'We need your permission before publishing.'
    setErrors(e)
    if (Object.keys(e).length) return
    setSent(true)
  }

  function close() {
    onClose()
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', department: '', rating: 5, review: '', consent: false })
      setErrors({})
    }, 250)
  }

  return (
    <Modal open={open} onClose={close} title={sent ? 'Thank you' : 'Share your experience'} size="md">
      {sent ? (
        <div className="py-6 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-mint-500 text-white">
            <Icon name="check" size={28} strokeWidth={2.6} />
          </span>
          <h3 className="mt-5 text-xl">Your review has been received</h3>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
            The patient experience team reads every review within two working days. If you raised a
            concern, someone will call you.
          </p>
          <p className="mt-4 font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">
            Demo notice — this is a frontend prototype, nothing was submitted.
          </p>
          <Button onClick={close} className="mt-6">Close</Button>
        </div>
      ) : (
        <div className="space-y-5">
          <Input
            label="Your name" required value={form.name}
            onChange={(e) => set('name', e.target.value)} error={errors.name} placeholder="Your full name"
          />
          <Select
            label="Department that treated you" required value={form.department}
            onChange={(e) => set('department', e.target.value)} error={errors.department}
            placeholder="Select…" options={departments.map((d) => d.name)}
          />
          <div>
            <p className="label">Your rating</p>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => set('rating', n)}
                  aria-label={`${n} star${n > 1 ? 's' : ''}`}
                  className="transition hover:scale-110"
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 3.2l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.7l6.1-.9L12 3.2z"
                      fill={n <= form.rating ? '#F5A524' : '#DCE7F0'}
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          <Textarea
            label="Your review" required rows={5} value={form.review}
            onChange={(e) => set('review', e.target.value)} error={errors.review}
            placeholder="What went well, and what could have been better?"
            hint={`${form.review.trim().length} characters`}
          />
          <div className="rounded-xl2 border border-clinic-100 bg-paper/60 p-4">
            <Checkbox
              checked={form.consent}
              onChange={(e) => set('consent', e.target.checked)}
              label="I agree to my first name, town and review being published on this website."
            />
            {errors.consent && (
              <p role="alert" className="mt-2 flex items-center gap-1.5 text-xs font-medium text-emergency-600">
                <Icon name="alert" size={13} strokeWidth={2.2} />
                {errors.consent}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row-reverse">
            <Button onClick={submit} variant="mint" icon="send" className="sm:flex-1">Submit review</Button>
            <Button onClick={close} variant="outline" className="sm:flex-1">Cancel</Button>
          </div>
        </div>
      )}
    </Modal>
  )
}