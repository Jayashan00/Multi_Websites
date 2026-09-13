// Generates a Tailwind-like shade ramp (50..900) from one base color the user
// picks, by adjusting lightness in HSL space. This keeps hue/saturation
// consistent while producing the light/dark steps every template expects.

function hexToHsl(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16) / 255;
  const g = parseInt(clean.substring(2, 4), 16) / 255;
  const b = parseInt(clean.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      default: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100];
}

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const toHex = (x: number) =>
    Math.round(x * 255)
      .toString(16)
      .padStart(2, '0');
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

// Target lightness for each shade — 500 sits near the user's chosen color.
const LIGHTNESS_STEPS: Record<string, number> = {
  '50': 97, '100': 93, '200': 84, '300': 72, '400': 60,
  '500': 48, '600': 40, '700': 32, '800': 24, '900': 16, '950': 9,
};

export function paletteFromHex(baseHex: string): Record<string, string> {
  const [h, s] = hexToHsl(baseHex);
  const ramp: Record<string, string> = {};
  for (const [shade, lightness] of Object.entries(LIGHTNESS_STEPS)) {
    // Slightly desaturate the very light/dark ends so they don't look neon or muddy.
    const adjustedS = shade === '50' || shade === '100' ? Math.max(s * 0.5, 15) : s;
    ramp[shade] = hslToHex(h, adjustedS, lightness);
  }
  return ramp;
}
