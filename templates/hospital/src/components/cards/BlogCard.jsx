import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import SmartImage from '../ui/SmartImage'
import Badge from '../ui/Badge'
import { formatDate } from '../../lib/utils'

export default function BlogCard({ article, horizontal = false }) {
  if (horizontal) {
    return (
      <Link
        to={`/news/${article.slug}`}
        className="card-base card-hover group grid gap-0 overflow-hidden sm:grid-cols-[minmax(0,240px)_1fr]"
      >
        <SmartImage
          name={article.image}
          alt={article.title}
          ratio="4/3"
          width={520}
          className="h-full"
          imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.06]"
        />
        <div className="flex flex-col p-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="mint">{article.category}</Badge>
            <span className="font-mono text-2xs uppercase tracking-[0.1em] text-ink-muted">
              {formatDate(article.date)} · {article.readTime} min read
            </span>
          </div>
          <h3 className="mt-3 text-[18px] leading-snug transition-colors group-hover:text-clinic-600">
            {article.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{article.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-clinic-500">
            Read article
            <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/news/${article.slug}`} className="card-base card-hover group flex flex-col overflow-hidden">
      <SmartImage
        name={article.image}
        alt={article.title}
        ratio="16/10"
        width={640}
        imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.06]"
      >
        <span className="absolute left-4 top-4">
          <Badge tone="solid">{article.category}</Badge>
        </span>
      </SmartImage>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-2xs uppercase tracking-[0.1em] text-ink-muted">
          {formatDate(article.date)} · {article.readTime} min read
        </p>
        <h3 className="mt-2.5 text-[17px] leading-snug transition-colors group-hover:text-clinic-600">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{article.excerpt}</p>
        <p className="mt-4 border-t border-dashed border-clinic-100 pt-3.5 text-xs font-semibold text-ink-soft">
          {article.author}
        </p>
      </div>
    </Link>
  )
}
