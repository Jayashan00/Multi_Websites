import PulseDivider from './PulseDivider'

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  light = false,
  className = '',
  pulse = true,
}) {
  const centered = align === 'center'
  return (
    <header
      className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${light ? 'text-mint-300' : ''}`}>{eyebrow}</p>
      )}
      <h2
        className={`mt-3 text-[clamp(1.6rem,3.2vw,2.5rem)] leading-[1.12] ${
          light ? 'text-white' : ''
        }`}
      >
        {title}
      </h2>
      {pulse && (
        <PulseDivider className={`mt-4 ${centered ? 'mx-auto' : ''}`} light={light} />
      )}
      {lead && (
        <p
          className={`mt-4 text-[15px] leading-[1.75] ${
            light ? 'text-clinic-100' : 'text-ink-muted'
          }`}
        >
          {lead}
        </p>
      )}
    </header>
  )
}
