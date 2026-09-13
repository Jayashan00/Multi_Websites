import SectionHeading from '../ui/SectionHeading'
import DepartmentCard from '../cards/DepartmentCard'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { departments } from '../../data/departments'

export default function DepartmentsGrid({ limit = 6, showAll = false }) {
  const list = showAll ? departments : departments.slice(0, limit)

  return (
    <section className="relative bg-paper py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-clinic opacity-60"
        style={{ backgroundSize: '38px 38px' }}
        aria-hidden="true"
      />
      <div className="container relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Ten specialist departments"
            title="Find the right department before you arrive"
            lead="Each department lists its consultants, services and clinic hours, so you can book the right person the first time."
          />
          {!showAll && (
            <Button to="/departments" variant="outline" iconRight="arrowRight" className="shrink-0">
              All departments
            </Button>
          )}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 3) * 90}>
              <DepartmentCard dept={d} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
