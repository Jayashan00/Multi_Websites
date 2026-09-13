type TeamProfileCardProps = {
  name: string
  role: string
  experience: string
  specialties: Array<string>
  image: string
  imageAlt: string
  imageLabel: string
  number: string
  featured?: boolean
}

const socialLinks = [
  { label: 'Instagram', shortLabel: 'IG', href: 'https://www.instagram.com/' },
  { label: 'Facebook', shortLabel: 'FB', href: 'https://www.facebook.com/' },
  { label: 'LinkedIn', shortLabel: 'IN', href: 'https://www.linkedin.com/' },
]

export function TeamProfileCard({
  name,
  role,
  experience,
  specialties,
  image,
  imageAlt,
  imageLabel,
  number,
  featured = false,
}: TeamProfileCardProps) {
  return (
    <article
      className={`reveal-on-scroll group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_18px_50px_rgba(41,37,36,0.07)] transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-[0_28px_70px_rgba(41,37,36,0.14)] ${
        featured ? 'lg:row-span-2' : 'lg:grid lg:grid-cols-[0.82fr_1.18fr]'
      }`}
    >
      <div
        className={`relative overflow-hidden bg-stone-900 ${
          featured ? 'min-h-[34rem] lg:min-h-[43rem]' : 'min-h-80 lg:min-h-full'
        }`}
      >
        <img
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          loading="lazy"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/10" />
        <span className="absolute top-5 left-5 rounded-full border border-white/20 bg-stone-950/25 px-4 py-2 text-[0.6rem] font-bold tracking-[0.15em] text-white uppercase backdrop-blur-md">
          {imageLabel}
        </span>
        <span className="absolute right-5 bottom-5 font-serif text-3xl text-white/60">
          {number}
        </span>
      </div>

      <div
        className={`flex flex-col p-6 sm:p-8 ${featured ? '' : 'justify-center'}`}
      >
        <p className="text-xs font-bold tracking-[0.16em] text-amber-700 uppercase">
          {role}
        </p>
        <h3
          className={`mt-3 font-serif font-semibold tracking-tight ${
            featured ? 'text-4xl' : 'text-3xl'
          }`}
        >
          {name}
        </h3>
        <div className="mt-5 flex items-center gap-3 border-y border-stone-200 py-4">
          <span className="font-serif text-2xl text-amber-700">
            {experience.split(' ')[0]}
          </span>
          <p className="text-xs leading-5 text-stone-500">{experience}</p>
        </div>

        <div className="mt-6">
          <p className="text-[0.62rem] font-bold tracking-[0.15em] text-stone-400 uppercase">
            Specialties
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <span
                className="rounded-full bg-[#f7f2e9] px-3 py-1.5 text-xs text-stone-600 transition-colors duration-300 group-hover:bg-amber-100 group-hover:text-amber-900"
                key={specialty}
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-stone-200 pt-5">
          <p className="text-[0.62rem] font-semibold tracking-wider text-stone-400 uppercase">
            Follow the craft
          </p>
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                aria-label={`Follow ${name} on ${social.label}`}
                className="grid size-9 place-items-center rounded-full border border-stone-300 text-[0.58rem] font-bold text-stone-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-stone-950 hover:bg-stone-950 hover:text-white"
                href={social.href}
                key={social.label}
                rel="noreferrer"
                target="_blank"
              >
                {social.shortLabel}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
