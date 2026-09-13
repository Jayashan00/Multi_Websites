import SectionHeading from '../ui/SectionHeading'
import BlogCard from '../cards/BlogCard'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { news } from '../../data/news'

export default function LatestNews({ limit = 3 }) {
  const list = [...news]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)

  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="News & health articles"
            title="Written by the doctors who run the clinics"
            lead="Practical health advice and hospital news, in plain language — no sponsored posts, no filler."
          />
          <Button to="/news" variant="outline" iconRight="arrowRight" className="shrink-0">
            All articles
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {list.map((a, i) => (
            <Reveal key={a.slug} delay={i * 90}>
              <BlogCard article={a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
