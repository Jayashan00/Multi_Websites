import { useMemo, useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import DepartmentCard from '../components/cards/DepartmentCard'
import Icon from '../components/ui/Icon'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { departments } from '../data/departments'
import { pageTitle } from '../data/site'
import usePageMeta from '../lib/usePageMeta'

export default function Departments() {
  const [query, setQuery] = useState('')

  usePageMeta({
    title: pageTitle('Departments'),
    description:
      'Ten specialist departments: General Medicine, Cardiology, Pediatrics, Orthopedics, Gynecology, Neurology, ENT, Dental Care, Radiology and Laboratory.',
  })

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return departments
    return departments.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.short.toLowerCase().includes(q) ||
        d.services.some((s) => s.toLowerCase().includes(q)),
    )
  }, [query])

  return (
    <>
      <PageHeader
        eyebrow="Departments"
        title="Ten departments, one shared patient record"
        lead="Search by department or by the treatment you need — results include the services listed inside each department."
        crumbs={[{ label: 'Departments' }]}
        image="hospitalCorridor"
      />

      <section className="py-14 sm:py-20">
        <div className="container">
          {/* Search */}
          <div className="mx-auto max-w-xl">
            <label htmlFor="dept-search" className="sr-only">Search departments and services</label>
            <div className="relative">
              <Icon name="search" size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
              <input
                id="dept-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try “heart”, “X-ray”, “pregnancy”…"
                className="field pl-11"
              />
            </div>
            <p className="mt-2.5 text-center font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">
              {filtered.length} of {departments.length} departments
            </p>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((d, i) => (
                <Reveal key={d.slug} delay={(i % 3) * 80}>
                  <DepartmentCard dept={d} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-16 max-w-md text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-clinic-50 text-clinic-400">
                <Icon name="search" size={26} />
              </span>
              <h2 className="mt-5 text-xl">Nothing matched “{query}”</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Try a broader word — “heart” instead of “cardiac catheterisation” — or call the
                appointments desk and we will point you to the right clinic.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button onClick={() => setQuery('')} variant="outline" size="sm">Clear search</Button>
                <Button to="/contact" size="sm" iconRight="arrowRight">Ask us</Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}