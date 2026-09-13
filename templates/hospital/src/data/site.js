/**
 * Central site identity.
 * ---------------------------------------------------------------------------
 * This project ships as an UNBRANDED demo template. Every name, address,
 * phone number and email below is a placeholder. Replace the values in this
 * one file and the whole site updates — header, footer, contact page,
 * meta titles, structured data and forms all read from here.
 */

export const site = {
  name: 'Hospital Name',
  // Used by the logo lock-up: "Hospital" + accented "Name"
  brand: { primary: 'Hospital', accent: 'Name' },
  kicker: 'Hospital · City Name',
  legalName: 'Hospital Name (Pvt) Ltd.',
  tagline: 'Compassionate care, 24 hours a day',
  established: 1998,
  currency: 'Rs.',
  locale: 'en-GB',
  // Customization-layer additions (populated at runtime from the mother platform's
  // backend when this site is served with a ?siteId=... — see src/site-config/).
  logoUrl: null,
  heroImageUrl: null,
  whatsapp: { number: '', defaultMessage: 'Hi! I would like to know more.', enabled: false },
  address: {
    line1: 'Address Line 1, Street Name',
    line2: 'City Name, Postal Code',
  },
  phones: {
    general: '+00 00 000 0000',
    emergency: '000',
    ambulance: '+00 00 000 0001',
    appointments: '+00 00 000 0002',
  },
  email: {
    general: 'info@hospitalname.com',
    appointments: 'appointments@hospitalname.com',
    careers: 'careers@hospitalname.com',
    records: 'records@hospitalname.com',
    corporate: 'corporate@hospitalname.com',
  },
  hours: [
    { label: 'Emergency & Trauma', value: 'Open 24 hours, every day' },
    { label: 'OPD & Consultations', value: 'Mon – Sat · 7.00 am – 9.00 pm' },
    { label: 'Laboratory & Imaging', value: 'Mon – Sun · 6.00 am – 10.00 pm' },
    { label: 'Pharmacy', value: 'Open 24 hours, every day' },
    { label: 'Visiting hours', value: 'Daily · 11.00 am – 1.00 pm, 4.00 – 7.00 pm' },
  ],
  // Placeholder map. Swap the q= value for the real address when branding.
  mapEmbed: 'https://www.google.com/maps?q=hospital&output=embed',
  mapLink: 'https://maps.google.com/?q=hospital',
  social: [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'X', href: '#', icon: 'x' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
  ],
  stats: [
    { value: 27, suffix: '+', label: 'Years of care' },
    { value: 10, suffix: '', label: 'Specialist departments' },
    { value: 120, suffix: '+', label: 'Consultants & nurses' },
    { value: 340, suffix: 'k', label: 'Patients treated' },
  ],
}

/** Page title helper — keeps every meta title consistent and unbranded. */
export const pageTitle = (label) => `${label} — ${site.name}`

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Departments', to: '/departments' },
  { label: 'Doctors', to: '/doctors' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Medical Services', to: '/services' },
      { label: 'Health Packages', to: '/health-packages' },
      { label: 'Gallery', to: '/gallery' },
    ],
  },
  {
    label: 'More',
    to: '/news',
    children: [
      { label: 'News & Health Articles', to: '/news' },
      { label: 'Patient Testimonials', to: '/testimonials' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]