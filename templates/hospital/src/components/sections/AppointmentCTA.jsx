import Button from '../ui/Button'
import Icon from '../ui/Icon'
import SmartImage from '../ui/SmartImage'
import { site } from '../../data/site'

const steps = [
  { n: '01', title: 'Pick a department', text: 'Or skip straight to a named consultant if you already have one.' },
  { n: '02', title: 'Choose a day and time', text: 'Only slots the doctor actually holds a clinic for are shown.' },
  { n: '03', title: 'Confirm your details', text: 'You get an SMS confirmation and a reminder the evening before.' },
]

export default function AppointmentCTA() {
  return (
    <section className="relative overflow-hidden bg-clinic-800">
      <SmartImage
        name="receptionDesk"
        alt=""
        ratio="auto"
        width={1600}
        className="absolute inset-0 h-full w-full"
        imgClassName="opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-clinic-900 via-clinic-900/94 to-clinic-800/70" />

      <div className="container relative grid gap-12 py-20 lg:grid-cols-2 lg:items-center sm:py-24">
        <div>
          <p className="eyebrow text-mint-300">Booking takes about a minute</p>
          <h2 className="mt-3 text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.1] text-white">
            Stop queueing. Book the slot that suits you.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-[1.8] text-clinic-100/85">
            Booked patients are seen within fifteen minutes of their appointment time. Walk-ins are
            always welcome too — you will simply be triaged in order of clinical need.
          </p>

          <ol className="mt-9 space-y-5">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint-500/15 font-mono text-sm font-semibold text-mint-300 ring-1 ring-mint-400/25">
                  {s.n}
                </span>
                <span>
                  <span className="block font-display text-[15px] font-bold text-white">{s.title}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-clinic-100/70">{s.text}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/appointment" variant="mint" size="lg" icon="calendar">
              Book an appointment
            </Button>
            <Button
              href={`tel:${site.phones.appointments.replace(/\s/g, '')}`}
              variant="white"
              size="lg"
              icon="phone"
            >
              Or call the desk
            </Button>
          </div>
        </div>

        {/* A glanceable "what to bring" card — genuinely useful, not decoration */}
        <div className="rounded-4xl border border-white/12 bg-white/[.07] p-7 shadow-lift backdrop-blur-xl">
          <h3 className="text-lg text-white">What to bring with you</h3>
          <ul className="mt-5 space-y-3.5">
            {[
              'Your national identity card or passport',
              'Any insurance card and authorisation letter',
              'A list of the medicines you take, or the boxes',
              'Previous reports, scans and clinic notes',
              'For a fasting package: nothing but water since 9 pm',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-clinic-100/85">
                <Icon name="check" size={17} strokeWidth={2.6} className="mt-0.5 shrink-0 text-mint-400" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-mint-500/12 p-4 ring-1 ring-mint-400/25">
            <Icon name="info" size={18} className="mt-0.5 shrink-0 text-mint-300" />
            <p className="text-sm leading-relaxed text-clinic-100/85">
              Booking for a parent or child? Enter their name and date of birth, and your own phone
              number — every reminder comes to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
