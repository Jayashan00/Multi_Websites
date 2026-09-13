import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { defaultConfig, type SiteConfig, type ColorRamp } from './defaultConfig';

const API_BASE = (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:8080';

function deepMerge<T>(base: T, patch: Partial<T> | undefined | null): T {
  if (!patch) return base;
  const out: any = Array.isArray(base) ? [...(base as any)] : { ...(base as any) };
  for (const key of Object.keys(patch)) {
    const patchVal = (patch as any)[key];
    const baseVal = (base as any)[key];
    if (
      patchVal &&
      typeof patchVal === 'object' &&
      !Array.isArray(patchVal) &&
      baseVal &&
      typeof baseVal === 'object' &&
      !Array.isArray(baseVal)
    ) {
      out[key] = deepMerge(baseVal, patchVal);
    } else if (patchVal !== undefined && patchVal !== null && patchVal !== '') {
      out[key] = patchVal;
    }
  }
  return out;
}

function hexToRgbTriplet(hex: string): string {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
}

function applyColorRamp(varPrefix: string, ramp: ColorRamp) {
  const root = document.documentElement;
  (Object.keys(ramp) as (keyof ColorRamp)[]).forEach((shade) => {
    root.style.setProperty(`--${varPrefix}-${shade}-rgb`, hexToRgbTriplet(ramp[shade]));
  });
}

const SiteConfigCtx = createContext<SiteConfig>(defaultConfig);

export function useSiteConfig() {
  return useContext(SiteConfigCtx);
}

export function SiteConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>(defaultConfig);

  const siteId = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('siteId') || (window as any).__SITE_ID__ || null;
  }, []);

  useEffect(() => {
    if (!siteId) return; // no siteId -> keep default template exactly as delivered
    let cancelled = false;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    fetch(`${API_BASE}/api/public/sites/${encodeURIComponent(siteId)}`, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data) {
          setConfig((prev) => deepMerge(prev, data));
        }
      })
      .catch(() => {
        // Silently fall back to defaults — a broken/offline backend must never break the site.
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timeout);
    };
  }, [siteId]);

  useEffect(() => {
    applyColorRamp('brand', config.primaryColor);
  }, [config.primaryColor]);

  return <SiteConfigCtx.Provider value={config}>{children}</SiteConfigCtx.Provider>;
}
