export interface ColorRamp {
  [shade: string]: string;
}

export interface Template {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  thumbnailUrl?: string;
  previewUrl?: string;
  devPort?: number;
  serverRendered: boolean;
  defaultPrimaryColor?: ColorRamp;
  defaultSecondaryColor?: ColorRamp;
  secondaryColorCustomizable: boolean;
  pages?: string[];
  active: boolean;
}

export interface SiteContact {
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
  mapEmbedUrl?: string;
}

export interface SiteSocial {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
  tiktok?: string;
}

export interface SiteWhatsApp {
  number?: string;
  defaultMessage?: string;
  enabled: boolean;
}

export interface SiteSeo {
  title?: string;
  description?: string;
}

export interface Site {
  id: string;
  ownerUserId: string;
  templateSlug: string;
  businessName?: string;
  businessNameAccent?: string;
  monogram?: string;
  tagline?: string;
  subtitle?: string;
  logoUrl?: string;
  heroImageUrl?: string;
  heroVideoUrl?: string;
  primaryColor?: ColorRamp;
  secondaryColor?: ColorRamp;
  contact: SiteContact;
  social: SiteSocial;
  whatsapp: SiteWhatsApp;
  seo: SiteSeo;
  published: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
}

export interface Media {
  id: string;
  url: string;
  originalFilename: string;
  contentType: string;
  sizeBytes: number;
}
