import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { defaultConfig, type RestaurantSiteConfig } from './defaultConfig';

const API_BASE =
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_API_BASE_URL) ||
  'http://localhost:8080';

function deepMerge<T>(base: T, patch: Partial<T> | undefined | null): T {
  if (!patch) return base;
  const out: any = { ...(base as any) };
  for (const key of Object.keys(patch)) {
    const patchVal = (patch as any)[key];
    const baseVal = (base as any)[key];
    if (
      patchVal &&
      typeof patchVal === 'object' &&
      !Array.isArray(patchVal) &&
      baseVal &&
      typeof baseVal === 'object'
    ) {
      out[key] = deepMerge(baseVal, patchVal);
    } else if (patchVal !== undefined && patchVal !== null && patchVal !== '') {
      out[key] = patchVal;
    }
  }
  return out;
}

function applyAmberRamp(ramp: Record<string, string>) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  Object.entries(ramp).forEach(([shade, hex]) => {
    root.style.setProperty(`--color-amber-${shade}`, hex);
  });
}

const SiteConfigCtx = createContext<RestaurantSiteConfig>(defaultConfig);

export function useSiteConfig() {
  return useContext(SiteConfigCtx);
}

export function SiteConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<RestaurantSiteConfig>(defaultConfig);

  const siteId = useMemo(() => {
    if (typeof window === 'undefined') return null;
    return new URLSearchParams(window.location.search).get('siteId');
  }, []);

  useEffect(() => {
    if (!siteId) return;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    fetch(`${API_BASE}/api/public/sites/${encodeURIComponent(siteId)}`, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) {
          setConfig((prev) => deepMerge(prev, data));
          if (data.primaryColor) applyAmberRamp(data.primaryColor);
        }
      })
      .catch(() => {
        /* offline backend — keep defaults */
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, [siteId]);

  return <SiteConfigCtx.Provider value={config}>{children}</SiteConfigCtx.Provider>;
}
