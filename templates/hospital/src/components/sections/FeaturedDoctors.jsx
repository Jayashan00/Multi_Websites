import SectionHeading from '../ui/SectionHeading'
import DoctorCard from '../cards/DoctorCard'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { featuredDoctors } from '../../data/doctors'

export default function FeaturedDoctors({ limit = 4 }) {
  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured consultants"
            title="The doctor you book is the doctor you see"
            lead="Every consultant below holds their own clinic. Pick a name, pick a slot, and the same specialist follows your case through."
          />
          <Button to="/doctors" variant="outline" iconRight="arrowRight" className="shrink-0">
            All 12 doctors
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDoctors.slice(0, limit).map((d, i) => (
            <Reveal key={d.slug} delay={(i % 4) * 80}>
              <DoctorCard doctor={d} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
