import SectionHeading from '../ui/SectionHeading'
import PackageCard from '../cards/PackageCard'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { healthPackages } from '../../data/packages'

export default function HealthPackagesSection({ limit = 3, showAll = false }) {
  const list = showAll ? healthPackages : healthPackages.slice(0, limit)

  return (
    <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
      <div className="container relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Health checkup packages"
            title="One morning, one report, one clear conversation"
            lead="Structured screening at a fixed, published price. Every package ends with a consultant explaining the results face to face — not a printout handed over at a counter."
          />
          {!showAll && (
            <Button to="/health-packages" variant="outline" iconRight="arrowRight" className="shrink-0">
              Compare all packages
            </Button>
          )}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <PackageCard pkg={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
