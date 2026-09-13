import SectionHeading from '../ui/SectionHeading'
import SmartImage from '../ui/SmartImage'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import Counter from '../ui/Counter'
import { site } from '../../data/site'

const points = [
  { icon: 'users', title: 'Consultant-led, not registrar-led', text: 'The specialist you booked is the one who sees you — at every visit, not only the first.' },
  { icon: 'clock', title: 'Fifteen-minute promise', text: 'Booked patients are seen within fifteen minutes of their slot. We measure it weekly.' },
  { icon: 'scale', title: 'Written estimates', text: 'Every procedure is quoted in writing before it begins. No bill arrives unannounced.' },
]

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        {/* Image composition */}
        <Reveal className="relative">
          <div className="relative">
            <SmartImage
              name="hospitalLobby"
              alt="The main lobby of the hospital"
              ratio="4/5"
              width={760}
              responsive
              className="rounded-4xl shadow-lift"
            />
            <SmartImage
              name="nurseStation"
              alt="Nurses at the ward station"
              ratio="1/1"
              width={420}
              className="absolute -bottom-8 -right-4 w-44 rounded-3xl border-[6px] border-white shadow-lift sm:-right-8 sm:w-56"
            />
            {/* Floating credential chip */}
            <div className="absolute -left-3 top-8 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lift ring-1 ring-clinic-100 backdrop-blur sm:-left-8">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint-500 text-white">
                <Icon name="award" size={20} />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-extrabold">
                  <Counter to={new Date().getFullYear() - site.established} suffix=" yrs" />
                </span>
                <span className="block font-mono text-2xs uppercase tracking-[0.12em] text-ink-muted">
                  Caring for our city
                </span>
              </span>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <SectionHeading
            eyebrow="About the hospital"
            title={`Built in ${site.established} around one idea: nobody should have to guess.`}
            lead="We started as a 22-bed clinic with three physicians and a small laboratory. What has not changed since is the rule we opened with — a patient leaves knowing what is wrong, what happens next, and what it will cost."
          />

          <ul className="mt-9 space-y-5">
            {points.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-clinic-50 text-clinic-500">
                  <Icon name={p.icon} size={20} />
                </span>
                <span>
                  <span className="block font-display text-[15px] font-bold">{p.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-muted">{p.text}</span>
                </span>
              </Reveal>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/about" iconRight="arrowRight">More about us</Button>
            <Button to="/doctors" variant="outline" icon="users">Meet the doctors</Button>
          </div>
        </div>
      </div>
    </section>
  )
}