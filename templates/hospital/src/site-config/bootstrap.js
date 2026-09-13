import { site } from '../data/site'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

// Tailwind's built-in default palettes for this template's two brand tokens,
// used purely as the CSS-variable fallback so an un-customized site looks
// pixel-identical to how it was delivered.
export const DEFAULT_CLINIC = {
  50: '#EAF4FD', 100: '#D0E7FA', 200: '#A2CFF5', 300: '#6FB2EC', 400: '#3C92DE',
  500: '#0B6FB8', 600: '#095B98', 700: '#074877', 800: '#053757', 900: '#04283F',
}
export const DEFAULT_MINT = {
  50: '#E7FBF7', 100: '#C6F5ED', 200: '#8FEADD', 300: '#4FD9C7', 400: '#20C4AF',
  500: '#12B7A4', 600: '#0D9284', 700: '#0A7167', 800: '#08554E', 900: '#063E39',
}

function hexToRgbTriplet(hex) {
  const clean = hex.replace('#', '')
  const r = parseInt(clean.substring(0, 2), 16)
  const g = parseInt(clean.substring(2, 4), 16)
  const b = parseInt(clean.substring(4, 6), 16)
  return `${r} ${g} ${b}`
}

function applyRamp(prefix, ramp) {
  if (!ramp) return
  const root = document.documentElement
  Object.keys(ramp).forEach((shade) => {
    root.style.setProperty(`--${prefix}-${shade}-rgb`, hexToRgbTriplet(ramp[shade]))
  })
}

function deepMerge(base, patch) {
  if (!patch || typeof patch !== 'object') return base
  for (const key of Object.keys(patch)) {
    const val = patch[key]
    if (val && typeof val === 'object' && !Array.isArray(val) && base[key] && typeof base[key] === 'object') {
      deepMerge(base[key], val)
    } else if (val !== undefined && val !== null && val !== '') {
      base[key] = val
    }
  }
  return base
}

function getSiteId() {
  const params = new URLSearchParams(window.location.search)
  return params.get('siteId') || window.__SITE_ID__ || null
}

/**
 * Loads site customization (if a siteId is present) and mutates the shared
 * `site` object in place, then applies color variables. Resolves quickly
 * either way (max 6s) so a slow/offline backend never blocks the page.
 */
export async function bootstrapSiteConfig() {
  applyRamp('clinic', DEFAULT_CLINIC)
  applyRamp('mint', DEFAULT_MINT)

  const siteId = getSiteId()
  if (!siteId) return

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 6000)

  try {
    const res = await fetch(`${API_BASE}/api/public/sites/${encodeURIComponent(siteId)}`, {
      signal: controller.signal,
    })
    if (res.ok) {
      const data = await res.json()
      deepMerge(site, data)
      if (data.primaryColor) applyRamp('clinic', data.primaryColor)
      if (data.secondaryColor) applyRamp('mint', data.secondaryColor)
    }
  } catch {
    // Offline/slow backend — proceed with defaults, never block the page.
  } finally {
    clearTimeout(timeout)
  }
}
