import { useMemo, useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import DoctorCard from '../components/cards/DoctorCard'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { doctors } from '../data/doctors'
import { departments } from '../data/departments'
import { pageTitle } from '../data/site'
import usePageMeta from '../lib/usePageMeta'

const SORTS = [
  { value: 'name', label: 'Name (A–Z)' },
  { value: 'experience', label: 'Most experienced' },
  { value: 'fee-asc', label: 'Consultation fee (low to high)' },
]

export default function Doctors() {
  const [dept, setDept] = useState('all')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('name')

  usePageMeta({
    title: pageTitle('Our doctors'),
    description:
      'Consultants across ten departments, with qualifications, experience, consultation hours and online booking.',
  })

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    let out = doctors.filter((d) => {
      const matchDept = dept === 'all' || d.department === dept
      const matchQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.specialization.toLowerCase().includes(q) ||
        d.interests.some((i) => i.toLowerCase().includes(q))
      return matchDept && matchQuery
    })
    out = [...out].sort((a, b) => {
      if (sort === 'experience') return b.experience - a.experience
      if (sort === 'fee-asc') return a.fee - b.fee
      return a.name.localeCompare(b.name)
    })
    return out
  }, [dept, query, sort])

  return (
    <>
      <PageHeader
        eyebrow="Our doctors"
        title="Our consultants, and the clinic days they actually hold"
        lead="Filter by department, sort by experience or fee, then book the slot that suits you."
        crumbs={[{ label: 'Doctors' }]}
        image="galTeam1"
      />

      <section className="py-14 sm:py-20">
        <div className="container">
          {/* Filter bar */}
          <div className="card-base p-4 sm:p-5">
            <div className="grid gap-3 lg:grid-cols-[1fr_auto]">
              <div className="relative">
                <label htmlFor="doc-search" className="sr-only">Search doctors</label>
                <Icon name="search" size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
                <input
                  id="doc-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, specialisation or interest…"
                  className="field pl-11"
                />
              </div>
              <div className="relative">
                <label htmlFor="doc-sort" className="sr-only">Sort doctors</label>
                <select
                  id="doc-sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="field appearance-none pr-11 lg:w-64"
                >
                  {SORTS.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
                <Icon name="filter" size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted" />
              </div>
            </div>

            {/* Department chips */}
            <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1">
              <Chip active={dept === 'all'} onClick={() => setDept('all')}>
                All departments
              </Chip>
              {departments.map((d) => (
                <Chip key={d.slug} active={dept === d.slug} onClick={() => setDept(d.slug)}>
                  {d.name.split(' — ')[0].split(' & ')[0]}
                </Chip>
              ))}
            </div>
          </div>

          <p className="mt-6 font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">
            Showing {list.length} of {doctors.length} consultants
          </p>

          {list.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {list.map((d, i) => (
                <Reveal key={d.slug} delay={(i % 4) * 70}>
                  <DoctorCard doctor={d} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-16 max-w-md text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-clinic-50 text-clinic-400">
                <Icon name="user" size={26} />
              </span>
              <h2 className="mt-5 text-xl">No consultant matches those filters</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Clear the filters to see all {doctors.length}, or call the appointments desk and we
                will find the right specialist for you.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => { setDept('all'); setQuery(''); setSort('name') }}
                >
                  Clear all filters
                </Button>
                <Button to="/contact" size="sm" iconRight="arrowRight">Ask the desk</Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function Chip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition ${
        active
          ? 'bg-clinic-500 text-white shadow-card'
          : 'bg-paper text-ink-soft ring-1 ring-clinic-100 hover:bg-clinic-50 hover:text-clinic-600'
      }`}
    >
      {children}
    </button>
  )
}