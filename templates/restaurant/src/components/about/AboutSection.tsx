import type { ReactNode } from 'react'

type AboutSectionProps = {
  id: string
  eyebrow: string
  title: string
  description: string
  children: ReactNode
  tone?: 'light' | 'muted' | 'dark'
}

const toneClasses = {
  light: 'bg-white text-stone-950',
  muted: 'bg-[#fbf8f2] text-stone-950',
  dark: 'bg-stone-950 text-white',
}

export function AboutSection({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = 'light',
}: AboutSectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 ${toneClasses[tone]}`}>
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase opacity-60">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 opacity-70">
            {description}
          </p>
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
