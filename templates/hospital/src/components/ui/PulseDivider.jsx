/**
 * The signature device of this design: a short ECG trace that draws itself in.
 * Used as the divider under every section heading, so the whole site carries
 * one recognisable mark taken straight from the subject.
 */
export default function PulseDivider({ className = '', light = false, width = 132 }) {
  return (
    <svg
      viewBox="0 0 132 20"
      width={width}
      height={20}
      className={`ecg-line block ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 10h22l4-7 5 14 6-18 5 20 4-9h20"
        fill="none"
        stroke={light ? '#4FD9C7' : '#12B7A4'}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-ecg-dash"
      />
      <path
        d="M92 10h40"
        stroke={light ? 'rgba(255,255,255,.28)' : 'rgba(11,111,184,.22)'}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="132" cy="10" r="2.6" fill={light ? '#4FD9C7' : '#12B7A4'} className="animate-ecg-blip" />
    </svg>
  )
}
