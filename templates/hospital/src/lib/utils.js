import { site } from '../data/site'
export function formatDate(iso, opts = {}) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    ...opts,
  })
}

export function formatLongDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}


export function rupees(n) {
  return `${site.currency} ${Number(n).toLocaleString(site.locale)}`
}

export function slugToTitle(slug = '') {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

/** Returns YYYY-MM-DD for today, used as the min date on the booking form. */
export function todayISO() {
  const d = new Date()
  const off = d.getTimezoneOffset()
  return new Date(d.getTime() - off * 60_000).toISOString().slice(0, 10)
}

export function maxDateISO(daysAhead = 60) {
  const d = new Date()
  d.setDate(d.getDate() + daysAhead)
  const off = d.getTimezoneOffset()
  return new Date(d.getTime() - off * 60_000).toISOString().slice(0, 10)
}

export function dayName(iso) {
  if (!iso) return ''
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', { weekday: 'long' })
}

/** Deterministic booking reference, e.g. MCP-8H2K4Q */
export function bookingReference() {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'
  let out = ''
  for (let i = 0; i < 6; i++) out += chars[Math.floor(Math.random() * chars.length)]
  return `MCP-${out}`
}

export function cx(...parts) {
  return parts.filter(Boolean).join(' ')
}
