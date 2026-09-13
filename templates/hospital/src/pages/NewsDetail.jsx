import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import SmartImage from '../components/ui/SmartImage'
import Icon from '../components/ui/Icon'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import BlogCard from '../components/cards/BlogCard'
import { news, getArticle } from '../data/news'
import { doctors } from '../data/doctors'
import { pageTitle } from '../data/site'
import { formatLongDate } from '../lib/utils'
import usePageMeta from '../lib/usePageMeta'

export default function NewsDetail() {
  const { slug } = useParams()
  const article = getArticle(slug)
  const [copied, setCopied] = useState(false)

  usePageMeta({
    title: article ? pageTitle(article.title) : pageTitle('Article not found'),
    description: article?.excerpt,
  })

  if (!article) return <Navigate to="/news" replace />

  const author = doctors.find((d) => d.name === article.author)
  const related = news
    .filter((n) => n.slug !== article.slug && n.category === article.category)
    .concat(news.filter((n) => n.slug !== article.slug && n.category !== article.category))
    .slice(0, 3)

  const share = typeof window !== 'undefined' ? window.location.href : ''

  function copyLink() {
    navigator.clipboard?.writeText(share).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    })
  }

  return (
    <>
      <PageHeader
        eyebrow={article.category}
        title={article.title}
        lead={article.excerpt}
        crumbs={[{ label: 'News', to: '/news' }, { label: article.title }]}
        image={article.image}
      />

      <article className="py-14 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
          <div className="min-w-0">
            <SmartImage
              name={article.image}
              alt={article.title}
              ratio="16/9"
              width={1200}
              responsive
              priority
              className="rounded-4xl shadow-card"
            />

            <div className="mt-7 flex flex-wrap items-center gap-3 border-b border-dashed border-clinic-100 pb-6">
              <Badge tone="mint">{article.category}</Badge>
              <span className="font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">
                {formatLongDate(article.date)}
              </span>
              <span className="font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">
                · {article.readTime} min read
              </span>
            </div>

            <div className="prose-clinic mt-8 max-w-[68ch]">
              {article.body.map((block, i) => {
                if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
                if (block.type === 'h3') return <h3 key={i}>{block.text}</h3>
                if (block.type === 'quote') return <blockquote key={i}>{block.text}</blockquote>
                if (block.type === 'ul')
                  return (
                    <ul key={i}>
                      {block.items.map((it) => <li key={it}>{it}</li>)}
                    </ul>
                  )
                return <p key={i}>{block.text}</p>
              })}
            </div>

            {/* Medical disclaimer */}
            <div className="mt-10 flex gap-3.5 rounded-xl2 border border-dashed border-clinic-200 bg-clinic-50/50 p-5">
              <Icon name="info" size={18} className="mt-0.5 shrink-0 text-clinic-500" />
              <p className="text-[13.5px] leading-relaxed text-ink-soft">
                This article is general information, not a diagnosis. If any of it sounds like your
                own situation, book a consultation rather than acting on it alone —
                <Link to="/appointment" className="ml-1 font-semibold text-clinic-600 underline-offset-2 hover:underline">
                  book an appointment
                </Link>
                .
              </p>
            </div>

            {/* Share */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted">Share</span>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(share)}`}
                target="_blank" rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-clinic-100 bg-white text-clinic-600 transition hover:border-clinic-300 hover:bg-clinic-50"
                aria-label="Share on Facebook"
              >
                <Icon name="facebook" size={17} />
              </a>

              <a
                href={`https://x.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(share)}`}
                target="_blank" rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-clinic-100 bg-white text-clinic-600 transition hover:border-clinic-300 hover:bg-clinic-50"
                aria-label="Share on X"
              >
                <Icon name="x" size={17} />
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(share)}`}
                target="_blank" rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-clinic-100 bg-white text-clinic-600 transition hover:border-clinic-300 hover:bg-clinic-50"
                aria-label="Share on LinkedIn"
              >
                <Icon name="linkedin" size={17} />
              </a>
              <button
                onClick={copyLink}
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-clinic-100 bg-white px-4 text-[13px] font-semibold text-ink-soft transition hover:border-clinic-300 hover:text-clinic-600"
              >
                <Icon name={copied ? 'check' : 'external'} size={15} />
                {copied ? 'Link copied' : 'Copy link'}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="card-base p-6">
              <p className="eyebrow">Written by</p>
              <div className="mt-4 flex items-center gap-3.5">
                {author ? (
                  <SmartImage name={author.photo} alt="" ratio="1/1" width={140} className="h-14 w-14 rounded-xl" />
                ) : (
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-clinic-50 text-clinic-500">
                    <Icon name="user" size={22} />
                  </span>
                )}
                <div className="min-w-0">
                  <p className="font-display text-[15px] font-bold leading-tight">{article.author}</p>
                  {author && (
                    <p className="mt-0.5 text-[13px] font-semibold text-mint-600">{author.specialization}</p>
                  )}
                </div>
              </div>
              {author && (
                <>
                  <p className="mt-3.5 text-[13px] leading-relaxed text-ink-muted">{author.bio}</p>
                  <Button to={`/doctors/${author.slug}`} variant="outline" size="sm" full className="mt-4" iconRight="arrowRight">
                    View profile
                  </Button>
                </>
              )}
            </div>

            <div className="rounded-xl2 bg-ink p-6 text-white">
              <h2 className="text-base text-white">Worried about something you read?</h2>
              <p className="mt-2 text-[13px] leading-relaxed text-clinic-100/80">
                A consultation costs less than most people expect, and answers the question properly.
              </p>
              <Button to="/appointment" variant="mint" size="sm" full className="mt-4" icon="calendar">
                Book an appointment
              </Button>
            </div>
          </aside>
        </div>
      </article>

      {/* Related */}
      <section className="border-t border-clinic-100 bg-paper py-14 sm:py-20">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[clamp(1.4rem,2.8vw,2rem)]">Keep reading</h2>
            <Button to="/news" variant="ghost" size="sm" iconRight="arrowRight">All articles</Button>
          </div>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <BlogCard article={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}