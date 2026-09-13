import { useMemo, useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import Accordion from '../components/ui/Accordion'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { faqs, faqCategories } from '../data/faqs'
import { site, pageTitle } from '../data/site'
import usePageMeta from '../lib/usePageMeta'

const CAT_ICONS = {
  Appointments: 'calendar',
  'Visiting & Admission': 'bed',
  'Payments & Insurance': 'wallet',
  'Reports & Records': 'clipboard',
}

export default function Faq() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  usePageMeta({
    title: pageTitle('Frequently Asked Questions'),
    description:
      'Answers about appointments, visiting hours, admission, payments, insurance and how to get your reports.',
  })

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return faqs
      .filter((f) => (category === 'All' ? true : f.category === category))
      .filter((f) => (!q ? true : (f.q + f.a).toLowerCase().includes(q)))
  }, [category, query])

  const grouped = useMemo(() => {
    const map = new Map()
    filtered.forEach((f) => {
      if (!map.has(f.category)) map.set(f.category, [])
      map.get(f.category).push(f)
    })
    return [...map.entries()]
  }, [filtered])

  return (
    <>
      <PageHeader
        eyebrow="Frequently asked questions"
        title="The questions our front desk answers every day"
        lead="Booking, visiting, paying, and getting your reports — written out plainly so you do not have to phone and ask."
        crumbs={[{ label: 'FAQ' }]}
        image="receptionDesk"
      />

      <section className="py-14 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
          {/* Sidebar filters */}
          <aside className="lg:sticky lg:top-28">
            <label htmlFor="faq-search" className="sr-only">Search questions</label>
            <div className="relative">
              <Icon name="search" size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions…"
                className="field pl-11"
              />
            </div>

            <nav className="mt-6 space-y-1.5" aria-label="FAQ categories">
              {['All', ...faqCategories].map((c) => {
                const count = c === 'All' ? faqs.length : faqs.filter((f) => f.category === c).length
                return (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-sm font-semibold transition ${
                      category === c
                        ? 'bg-clinic-500 text-white shadow-card'
                        : 'text-ink-soft hover:bg-clinic-50 hover:text-clinic-600'
                    }`}
                  >
                    <Icon name={c === 'All' ? 'info' : CAT_ICONS[c] || 'info'} size={17} />
                    <span className="flex-1">{c}</span>
                    <span className={`font-mono text-2xs ${category === c ? 'text-white/70' : 'text-ink-muted'}`}>
                      {count}
                    </span>
                  </button>
                )
              })}
            </nav>

            <div className="mt-8 rounded-xl2 border border-clinic-100 bg-white p-5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint-50 text-mint-600">
                <Icon name="phone" size={19} />
              </span>
              <h2 className="mt-3.5 text-base">Still stuck?</h2>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">
                The front desk is happy to answer anything not covered here.
              </p>
              <Button
                href={`tel:${site.phones.general.replace(/\s/g, '')}`}
                variant="outline" size="sm" icon="phone" full className="mt-4"
              >
                {site.phones.general}
              </Button>
              <Button to="/contact" size="sm" icon="mail" full className="mt-2.5">
                Send a message
              </Button>
            </div>
          </aside>

          {/* Questions */}
          <div className="min-w-0">
            {grouped.length > 0 ? (
              <div className="space-y-12">
                {grouped.map(([cat, items], gi) => (
                  <Reveal key={cat} delay={gi * 60}>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-clinic-50 text-clinic-500">
                          <Icon name={CAT_ICONS[cat] || 'info'} size={19} />
                        </span>
                        <h2 className="text-xl">{cat}</h2>
                        <span className="font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">
                          {items.length} question{items.length > 1 ? 's' : ''}
                        </span>
                      </div>
                      <Accordion items={items} className="mt-5" />
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-md py-16 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-clinic-50 text-clinic-400">
                  <Icon name="search" size={26} />
                </span>
                <h2 className="mt-5 text-xl">Nothing matched “{query}”</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Try a simpler word, or ask us directly — we answer messages within one working day.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button onClick={() => { setQuery(''); setCategory('All') }} variant="outline" size="sm">
                    Clear search
                  </Button>
                  <Button to="/contact" size="sm" iconRight="arrowRight">Ask a question</Button>
                </div>
              </div>
            )}

            {/* Emergency reminder */}
            <div className="mt-14 flex flex-col gap-5 rounded-4xl border border-emergency-100 bg-emergency-50/60 p-7 sm:flex-row sm:items-center">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emergency-500 text-white">
                <Icon name="ambulance" size={22} />
              </span>
              <div className="flex-1">
                <h2 className="text-lg">In an emergency, do not wait for an answer here</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  Come straight to the emergency entrance, or call {site.phones.ambulance} for an
                  ambulance. The line is answered 24 hours a day.
                </p>
              </div>
              <Button
                href={`tel:${site.phones.ambulance.replace(/\s/g, '')}`}
                variant="emergency" icon="phone"
              >
                Call now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}