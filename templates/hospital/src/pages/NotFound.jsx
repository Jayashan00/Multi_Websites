import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import { pageTitle } from '../data/site'
import usePageMeta from '../lib/usePageMeta'

const suggestions = [
  { to: '/departments', label: 'Departments', icon: 'stethoscope' },
  { to: '/doctors', label: 'Find a doctor', icon: 'user' },
  { to: '/appointment', label: 'Book an appointment', icon: 'calendar' },
  { to: '/contact', label: 'Contact us', icon: 'phone' },
]

export default function NotFound() {
  usePageMeta({
    title: pageTitle('Page not found'),
    description: 'The page you were looking for could not be found.',
  })

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="absolute inset-0 bg-grid-clinic opacity-60"
        style={{ backgroundSize: '38px 38px' }}
        aria-hidden="true"
      />
      <div className="container relative max-w-2xl text-center">
        <svg viewBox="0 0 200 60" className="mx-auto w-56 text-mint-400" aria-hidden="true">
          <path
            d="M0 30h44l8-20 12 40 14-50 12 58 10-28h100"
            fill="none" stroke="currentColor" strokeWidth="3"
            strokeLinecap="round" strokeLinejoin="round"
            className="ecg-line animate-ecg-dash"
            style={{ strokeDasharray: 500 }}
          />
        </svg>

        <p className="eyebrow mt-8">Error 404</p>
        <h1 className="mt-3 text-[clamp(2rem,5vw,3.2rem)] leading-[1.1]">
          This page has been discharged
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.8] text-ink-muted">
          The address you followed does not exist any more — or perhaps it never did. Nothing is
          wrong with your connection; here are the pages people usually want.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/" icon="arrowRight">Back to home</Button>
          <Button to="/contact" variant="outline" icon="phone">Contact the front desk</Button>
        </div>

        <ul className="mx-auto mt-12 grid max-w-lg gap-3 sm:grid-cols-2">
          {suggestions.map((s) => (
            <li key={s.to}>
              <Link
                to={s.to}
                className="card-base card-hover flex items-center gap-3 p-4 text-left"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-clinic-50 text-clinic-500">
                  <Icon name={s.icon} size={19} />
                </span>
                <span className="flex-1 font-display text-sm font-bold">{s.label}</span>
                <Icon name="chevronRight" size={16} className="text-clinic-300" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}