import { TeamProfileCard } from './TeamProfileCard'

const profiles = [
  {
    number: '01',
    name: 'Chef Dilan Perera',
    role: 'Executive Chef',
    experience: '18 years of culinary experience',
    specialties: ['Modern Sri Lankan', 'Seafood', 'Seasonal menus'],
    image: '/images/head-chef.jpg',
    imageAlt: 'Chef Dilan Perera, executive chef',
    imageLabel: 'The chef',
    featured: true,
  },
  {
    number: '02',
    name: 'Chef Amaya Silva',
    role: 'Pastry Chef',
    experience: '11 years of pastry experience',
    specialties: ['Artisan desserts', 'Chocolate', 'Tropical fruit'],
    image: '/images/chef-amaya-silva.png',
    imageAlt: 'Chef Amaya Silva, pastry chef',
    imageLabel: 'The pastry chef',
  },
  {
    number: '03',
    name: 'Chef Ruwan Fernando',
    role: 'Sous Chef',
    experience: '9 years of kitchen experience',
    specialties: ['Open-flame cooking', 'Pasta', 'Local produce'],
    image: '/images/chef-ruwan-fernando.png',
    imageAlt: 'Chef Ruwan Fernando, sous chef',
    imageLabel: 'The sous chef',
  },
]

export function ChefProfiles() {
  return (
    <section
      className="relative overflow-hidden bg-[#f7f2e9] text-stone-950"
      id="culinary-team"
    >
      <div
        aria-hidden="true"
        className="absolute top-28 -right-64 size-[38rem] rounded-full border border-amber-200/70"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-amber-600" />
              <p className="text-xs font-bold tracking-[0.19em] text-amber-700 uppercase">
                Culinary leadership
              </p>
            </div>
            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.02] font-semibold tracking-[-0.045em] sm:text-6xl">
              Different hands.
              <span className="block text-stone-400 italic">
                One unmistakable voice.
              </span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
            Technique, curiosity, and respect for Sri Lankan ingredients bring
            this culinary team together.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {profiles.map((profile) => (
            <TeamProfileCard key={profile.name} {...profile} />
          ))}
        </div>
      </div>
    </section>
  )
}
