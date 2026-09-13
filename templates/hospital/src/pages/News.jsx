import { useMemo, useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import BlogCard from '../components/cards/BlogCard'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import SmartImage from '../components/ui/SmartImage'
import Badge from '../components/ui/Badge'
import { Input } from '../components/ui/Field'
import { news, newsCategories } from '../data/news'
import { pageTitle } from '../data/site'
import { formatDate } from '../lib/utils'
import usePageMeta from '../lib/usePageMeta'
import { Link } from 'react-router-dom'

const PAGE_SIZE = 6

export default function News() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [shown, setShown] = useState(PAGE_SIZE)

  usePageMeta({
    title: pageTitle('News & Health Articles'),
    description:
      'Health tips, medical news and hospital announcements written by our consultants and nurses.',
  })

  const lead = news.find((n) => n.featured) || news[0]

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return news
      .filter((n) => n.slug !== lead.slug)
      .filter((n) => (category === 'All' ? true : n.category === category))
      .filter((n) =>
        !q ? true : (n.title + n.excerpt + n.author).toLowerCase().includes(q),
      )
  }, [category, query, lead.slug])

  const visible = filtered.slice(0, shown)

  return (
    <>
      <PageHeader
        eyebrow="News & health articles"
        title="Written by the people who treat you"
        lead="Every article here is written or reviewed by one of our consultants — no syndicated filler, no scare stories."
        crumbs={[{ label: 'News' }]}
        image="newsHeart"
      />

      {/* Featured article */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <Link
            to={`/news/${lead.slug}`}
            className="group grid overflow-hidden rounded-4xl border border-clinic-100 bg-white shadow-card transition duration-300 hover:shadow-lift lg:grid-cols-2"
          >
            <SmartImage
              name={lead.image}
              alt={lead.title}
              ratio="16/10"
              width={1200}
              responsive
              className="h-full"
              imgClassName="transition-transform duration-[1100ms] group-hover:scale-[1.05]"
            >
              <span className="absolute left-5 top-5">
                <Badge tone="solid" icon="sparkle">Featured</Badge>
              </span>
            </SmartImage>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge tone="mint">{lead.category}</Badge>
                <span className="font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">
                  {formatDate(lead.date)} · {lead.readTime} min read
                </span>
              </div>
              <h2 className="mt-4 text-[clamp(1.4rem,2.8vw,2.1rem)] leading-[1.15] transition-colors group-hover:text-clinic-600">
                {lead.title}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.8] text-ink-muted">{lead.excerpt}</p>
              <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-ink-soft">
                <Icon name="user" size={15} className="text-clinic-400" />
                {lead.author}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-clinic-500">
                Read the full article
                <Icon name="arrowRight" size={17} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="border-t border-clinic-100 bg-paper py-14 sm:py-20">
        <div className="container">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-wrap lg:px-0">
              {newsCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => { setCategory(c); setShown(PAGE_SIZE) }}
                  className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-semibold transition ${
                    category === c
                      ? 'border-clinic-500 bg-clinic-500 text-white shadow-card'
                      : 'border-clinic-100 bg-white text-ink-soft hover:border-clinic-300 hover:text-clinic-600'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="relative lg:w-80">
              <Icon name="search" size={17} className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-ink-muted" />
              <Input
                type="search"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setShown(PAGE_SIZE) }}
                placeholder="Search articles…"
                className="[&_input]:pl-11"
                aria-label="Search articles"
              />
            </div>
          </div>

          {visible.length > 0 ? (
            <>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) * 80}>
                    <BlogCard article={a} />
                  </Reveal>
                ))}
              </div>

              {shown < filtered.length && (
                <div className="mt-12 text-center">
                  <Button onClick={() => setShown((s) => s + PAGE_SIZE)} variant="outline" icon="plus">
                    Load more articles
                  </Button>
                  <p className="mt-3 font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">
                    Showing {visible.length} of {filtered.length}
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="mx-auto mt-16 max-w-md text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-clinic-50 text-clinic-400">
                <Icon name="search" size={26} />
              </span>
              <h2 className="mt-5 text-xl">No articles matched</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Try a different word, or clear the filters to see everything we have published.
              </p>
              <Button
                onClick={() => { setQuery(''); setCategory('All') }}
                variant="outline" size="sm" className="mt-6"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <div className="overflow-hidden rounded-4xl bg-ink p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="eyebrow text-mint-300">Health letter</p>
                <h2 className="mt-3 text-[clamp(1.4rem,3vw,2.1rem)] leading-tight text-white">
                  One useful health email a month. Nothing else.
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-clinic-100/80">
                  Seasonal advice, clinic changes and new services — written by our consultants and
                  short enough to read on the commute.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle') // idle | error | done

  function submit(e) {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setState('error')
      return
    }
    setState('done')
  }

  if (state === 'done') {
    return (
      <div className="flex items-center gap-3 rounded-xl2 bg-mint-500/15 p-5 text-mint-200 ring-1 ring-mint-400/30 lg:w-[360px]">
        <Icon name="check" size={20} strokeWidth={2.6} />
        <p className="text-sm font-semibold">
          Thank you — you are on the list. (Demo only: nothing was sent.)
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="lg:w-[360px]" noValidate>
      <label htmlFor="newsletter" className="sr-only">Email address</label>
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input
          id="newsletter"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setState('idle') }}
          placeholder="you@example.com"
          className="field flex-1 border-white/15 bg-white/10 text-white placeholder:text-clinic-100/50 focus:border-mint-400"
        />
        <Button as="button" type="submit" variant="mint" iconRight="send">Subscribe</Button>
      </div>
      {state === 'error' && (
        <p role="alert" className="mt-2 text-xs font-medium text-emergency-400">
          Please enter a valid email address.
        </p>
      )}
    </form>
  )
}