import Breadcrumbs from './Breadcrumbs'
import SmartImage from './SmartImage'

/**
 * Shared hero band at the top of every inner page.
 *
 * The band owns its own height (min-h + padding) rather than inheriting it
 * from the background photograph, so every page opens with the same
 * proportions no matter how tall the image is or how long the title runs.
 */
export default function PageHeader({ eyebrow, title, lead, crumbs = [], image = 'hospitalCorridor' }) {
  return (
    <section className="relative flex min-h-[300px] items-center overflow-hidden bg-ink sm:min-h-[360px] lg:min-h-[400px]">
      <SmartImage
        name={image}
        alt=""
        ratio="auto"
        width={1600}
        priority
        className="absolute inset-0 h-full w-full"
        imgClassName="opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/55" />
      <div
        className="absolute inset-0 bg-grid-clinic opacity-[.35] mix-blend-overlay"
        style={{ backgroundSize: '38px 38px' }}
        aria-hidden="true"
      />

      {/* pb clears the ECG trace pinned to the bottom edge */}
      <div className="container relative w-full py-12 pb-20 sm:py-16 sm:pb-24">
        <Breadcrumbs items={crumbs} light />
        {eyebrow && <p className="eyebrow mt-5 text-mint-300">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-[clamp(1.8rem,4.2vw,2.9rem)] leading-[1.1] text-white">
          {title}
        </h1>
        {lead && (
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.75] text-clinic-100 sm:text-base">
            {lead}
          </p>
        )}
      </div>

      {/* ECG trace along the bottom edge — the site's signature mark */}
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 h-8 w-full text-mint-400/45"
        aria-hidden="true"
      >
        <path
          d="M0 26h180l10-14 12 26 14-32 12 36 10-16h160l10-14 12 26 14-32 12 36 10-16h180l10-14 12 26 14-32 12 36 10-16h300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </section>
  )
}