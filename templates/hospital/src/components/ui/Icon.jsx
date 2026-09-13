/**
 * A single hand-picked icon set drawn as inline SVG.
 * Keeping icons in one file (instead of an icon package) means no extra
 * dependency, no unused weight in the bundle, and one place to restyle.
 */
const P = {
  // navigation / ui
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  chevronDown: 'M6 9l6 6 6-6',
  chevronRight: 'M9 6l6 6-6 6',
  chevronLeft: 'M15 6l-6 6 6 6',
  arrowRight: 'M4 12h15m0 0l-6-6m6 6l-6 6',
  arrowUp: 'M12 20V4m0 0l-6 6m6-6l6 6',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6.5-1.5L21 21',
  check: 'M5 13l4 4L19 7',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
  filter: 'M4 5h16M7 12h10M10 19h4',
  external: 'M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5',
  download: 'M12 4v11m0 0l-4-4m4 4l4-4M4 19h16',
  quote: 'M9 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2H4m15-10h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2h-1',

  // contact
  phone: 'M4 5c0 8.284 6.716 15 15 15v-3.2a1 1 0 0 0-.757-.97l-3.2-.8a1 1 0 0 0-1.02.36l-.86 1.07a11.5 11.5 0 0 1-5.62-5.62l1.07-.86a1 1 0 0 0 .36-1.02l-.8-3.2A1 1 0 0 0 7.2 4H4z',
  mail: 'M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zm0 .5l9 6 9-6',
  pin: 'M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-13.5V12l3.5 2',
  calendar: 'M4 8h16M7 4v3m10-3v3M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-8 8a8 8 0 0 1 16 0',
  users: 'M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 8a7 7 0 0 1 14 0m2.5-15.7a4 4 0 0 1 0 7.4M18 20a7 7 0 0 0-2-4.9',

  // medical
  heart: 'M12 20s-7.5-4.6-9.3-9A5 5 0 0 1 12 6.6 5 5 0 0 1 21.3 11c-1.8 4.4-9.3 9-9.3 9z',
  pulse: 'M3 12h3.5l2-6 3.5 12 2.5-8 1.5 2H21',
  stethoscope: 'M6 3v5a4 4 0 0 0 8 0V3M6 3H4m2 0h1M14 3h-1m1 0h2m-6 9v2a5 5 0 0 0 10 0v-2m0 0a2 2 0 1 0 0-.01',
  brain: 'M9.5 4A2.5 2.5 0 0 0 7 6.5 2.5 2.5 0 0 0 5 9c0 1 .5 1.8 1.2 2.3A2.6 2.6 0 0 0 5.5 13c0 1.1.7 2 1.7 2.4A2.5 2.5 0 0 0 9.5 20c.9 0 1.7-.5 2.1-1.2V4.8A2.5 2.5 0 0 0 9.5 4zm5 0A2.5 2.5 0 0 1 17 6.5 2.5 2.5 0 0 1 19 9c0 1-.5 1.8-1.2 2.3.5.5.7 1.1.7 1.7 0 1.1-.7 2-1.7 2.4A2.5 2.5 0 0 1 14.5 20c-.9 0-1.7-.5-2.1-1.2',
  bone: 'M7.5 4a2.5 2.5 0 0 0-2 4 2.5 2.5 0 0 0 1.6 4.3l4.6 4.6A2.5 2.5 0 0 0 16 18.5a2.5 2.5 0 0 0 2-4 2.5 2.5 0 0 0-1.6-4.3L11.8 5.6A2.5 2.5 0 0 0 7.5 4z',
  baby: 'M12 21a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM9.5 12h.01M14.5 12h.01M9.8 16a3.5 3.5 0 0 0 4.4 0M10 4.5a2 2 0 0 1 4 0',
  female: 'M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 0v6m-3-3h6',
  ear: 'M7 9a5 5 0 0 1 10 0c0 3-2.5 4-3.5 5.5S12.5 19 11 19a2 2 0 0 1-2-2M9.5 9a2.5 2.5 0 0 1 5 0',
  tooth: 'M8 3c-2 0-3.5 1.7-3.5 4 0 2.6.7 4 1.2 6.5.4 2 .3 5.5 2 5.5s1.6-4 2.8-4 1.1 4 2.8 4 1.6-3.5 2-5.5c.5-2.5 1.2-3.9 1.2-6.5 0-2.3-1.5-4-3.5-4-1.5 0-2 .8-2.5.8S9.5 3 8 3z',
  scan: 'M4 8V6a2 2 0 0 1 2-2h2m8 0h2a2 2 0 0 1 2 2v2m0 8v2a2 2 0 0 1-2 2h-2m-8 0H6a2 2 0 0 1-2-2v-2m0-4h16',
  flask: 'M9 3h6M10 3v6.5L5.2 17A2 2 0 0 0 6.9 20h10.2a2 2 0 0 0 1.7-3L14 9.5V3M7.5 15h9',
  pill: 'M10.5 3.5a5 5 0 0 1 7 7l-7 7a5 5 0 0 1-7-7l7-7zm-3.5 3.5 7 7',
  syringe: 'M3 21l4-4M6 18l-3-3m11-11 4 4M15 4l5 5M9 15l6-6 4 4-6 6H9v-4zM11 11l2 2',
  ambulance: 'M3 17V8a1 1 0 0 1 1-1h9v10M13 10h4l4 4v3h-3m-13 0h3m7 0h3M8 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 9v4m-2-2h4',
  clipboard: 'M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1zM8 6H6a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2M9 12h6M9 16h4',
  alert: 'M12 9v4m0 3h.01M10.3 4.3 2.6 17.4A2 2 0 0 0 4.3 20.4h15.4a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0z',
  shield: 'M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3zm-3 9 2 2 4-4',
  bed: 'M3 18V7m0 6h18v5M7 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm4-1h10a0 0 0 0 1 0 0',
  car: 'M5 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7 15h10M4 15v-3.2a2 2 0 0 1 .2-.9L6 7h12l1.8 3.9c.1.3.2.6.2.9V15',
  coffee: 'M4 8h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm13 1h2a2 2 0 0 1 0 5h-2M6 4v1m4-1v1m4-1v1',
  scale: 'M12 4v16M8 20h8M6 8h12M6 8l-3 6a3 3 0 0 0 6 0L6 8zm12 0-3 6a3 3 0 0 0 6 0l-3-6z',
  sparkle: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zm7 9 .8 2.2L22 15l-2.2.8L19 18l-.8-2.2L16 15l2.2-.8L19 12z',
  star: 'M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5z',
  image: 'M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 11 5-5 4 4 3-3 4 4M9 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
  play: 'M8 5.5v13l11-6.5-11-6.5z',
  award: 'M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-3 .8L7.5 21l4.5-2.4L16.5 21 15 14.8',
  globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-18c-2.5 2.4-3.8 5.4-3.8 9s1.3 6.6 3.8 9c2.5-2.4 3.8-5.4 3.8-9S14.5 5.4 12 3zM3.5 9h17m-17 6h17',
  info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-13h.01M11 12h1v4h1',
  wallet: 'M4 7a2 2 0 0 1 2-2h12v3M4 7v10a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1v-3M4 7h15a1 1 0 0 1 1 1v3m0 0h-4a2 2 0 0 0 0 4h4',
  printer: 'M7 8V4h10v4M7 18H5a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-2M7 14h10v6H7v-6z',
  send: 'M4 12l16-8-6 16-2.5-6.5L4 12z',

  // social
  facebook: 'M14.5 8.5H17V5h-2.5A4.5 4.5 0 0 0 10 9.5V11H8v3.5h2V21h3.5v-6.5H16l.5-3.5h-3V9.5a1 1 0 0 1 1-1z',
  instagram: 'M7.5 3.5h9a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.2 6.8h.01',
  x: 'M4 4l16 16M20 4L4 20',
  linkedin: 'M6.5 9v10M6.5 5.5h.01M11 19v-6a3 3 0 0 1 6 0v6M11 9.5V19',
  youtube: 'M3.5 8.5a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-7zM10.5 9.8l4.5 2.7-4.5 2.7V9.8z',
}

export const iconNames = Object.keys(P)

export default function Icon({ name, size = 20, className = '', strokeWidth = 1.75, ...rest }) {
  const d = P[name]
  if (!d) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      <path d={d} />
    </svg>
  )
}
