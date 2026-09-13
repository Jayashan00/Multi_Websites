export interface RestaurantSiteConfig {
  businessName: string;
  monogram: string; // short badge text, e.g. "RN"
  subtitle: string; // e.g. "Fine dining · Colombo"
  logoUrl?: string;
  heroImageUrl?: string;
  address: string;
  mapUrl: string;
  phone?: string;
  email?: string;
  whatsapp: {
    number: string;
    defaultMessage: string;
    enabled: boolean;
  };
}

export const defaultConfig: RestaurantSiteConfig = {
  businessName: 'Restaurant Name',
  monogram: 'RN',
  subtitle: 'Fine dining · Colombo',
  address: 'Colombo 03, Sri Lanka',
  mapUrl: 'https://maps.google.com/?q=Colombo+03+Sri+Lanka',
  whatsapp: {
    number: '',
    defaultMessage: "Hi! I'd like to make a reservation.",
    enabled: false,
  },
};

// Tailwind v4 already defines --color-amber-* as real CSS variables on :root,
// so no config-file changes are needed here — we simply override those
// variables at runtime. These are only used as an explicit fallback ramp.
export const DEFAULT_AMBER = {
  50: '#fffbeb', 100: '#fef3c7', 200: '#fee685', 300: '#ffd236', 400: '#fcbb00',
  500: '#f99c00', 600: '#e17100', 700: '#bb4d00', 800: '#973c00', 900: '#7b3306',
};
