// Default configuration — exactly mirrors the original template's hardcoded content.
// If no siteId is present in the URL, or the backend is unreachable, the template
// renders identically to how it was delivered. Nothing here changes the default look.

export interface ColorRamp {
  '50': string; '100': string; '200': string; '300': string; '400': string;
  '500': string; '600': string; '700': string; '800': string; '900': string; '950': string;
}

export interface SiteConfig {
  siteId?: string;
  businessName: string;
  businessNameAccent: string; // the highlighted part, e.g. "Core" in "Iron|Core"
  tagline: string;
  logoUrl?: string;
  heroImageUrl?: string;
  heroVideoUrl?: string;
  primaryColor: ColorRamp;
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
  whatsapp: {
    number: string; // digits only, with country code, e.g. "94771234567"
    defaultMessage: string;
    enabled: boolean;
  };
}

// Tailwind v3's built-in "orange" scale — used as the fallback so the template
// looks pixel-identical to the original until a user picks a custom color.
export const DEFAULT_ORANGE: ColorRamp = {
  '50': '#fff7ed', '100': '#ffedd5', '200': '#fed7aa', '300': '#fdba74', '400': '#fb923c',
  '500': '#f97316', '600': '#ea580c', '700': '#c2410c', '800': '#9a3412', '900': '#7c2d12', '950': '#431407',
};

export const defaultConfig: SiteConfig = {
  businessName: 'Iron',
  businessNameAccent: 'Core',
  tagline: 'More than a gym. We are a community built to help you become the strongest version of yourself.',
  primaryColor: DEFAULT_ORANGE,
  contact: {
    address: '123 Fitness Avenue, Downtown District, Metro City 10001',
    phone: '(555) 123-4567',
    email: 'hello@ironcore.fit',
    hours: '5:00 AM - 11:00 PM',
  },
  social: {},
  whatsapp: {
    number: '',
    defaultMessage: "Hi! I'd like to know more about your gym memberships.",
    enabled: false,
  },
};
