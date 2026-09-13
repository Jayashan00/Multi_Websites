import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DashboardShell } from '../../components/DashboardShell';
import { UploadField } from '../../components/UploadField';
import { api, ApiError } from '../../api/client';
import type { Site, Template } from '../../api/types';
import { paletteFromHex } from '../../utils/palette';
import { ExternalLink, Loader2, Check } from 'lucide-react';

type Section = 'identity' | 'branding' | 'contact' | 'whatsapp' | 'publish';

export function CustomizeSite() {
  const { id } = useParams<{ id: string }>();
  const [site, setSite] = useState<Site | null>(null);
  const [template, setTemplate] = useState<Template | null>(null);
  const [section, setSection] = useState<Section>('identity');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    api.get<Site[]>('/api/sites/mine').then(async (mine) => {
      const found = mine.find((s) => s.id === id);
      if (found) {
        setSite(found);
        const t = await api.get<Template>(`/api/public/templates/${found.templateSlug}`);
        setTemplate(t);
      }
      setLoading(false);
    });
  }, [id]);

  function update<K extends keyof Site>(key: K, value: Site[K]) {
    setSite((prev) => (prev ? { ...prev, [key]: value } : prev));
    setSaved(false);
  }

  function updateNested<K extends 'contact' | 'social' | 'whatsapp' | 'seo'>(
    key: K,
    patch: Partial<Site[K]>,
  ) {
    setSite((prev) => (prev ? { ...prev, [key]: { ...prev[key], ...patch } } : prev));
    setSaved(false);
  }

  async function save() {
    if (!site) return;
    setSaving(true);
    setError(null);
    try {
      const updated = await api.put<Site>(`/api/sites/${site.id}`, site);
      setSite(updated);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Could not save your changes.');
    } finally {
      setSaving(false);
    }
  }

  async function togglePublish() {
    if (!site) return;
    const updated = await api.patch<Site>(`/api/sites/${site.id}/publish`, { published: !site.published });
    setSite(updated);
  }

  if (loading) {
    return (
      <DashboardShell>
        <div className="flex h-full items-center justify-center py-24 text-ink/50">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading your site…
        </div>
      </DashboardShell>
    );
  }

  if (!site || !template) {
    return (
      <DashboardShell>
        <div className="p-10 text-ink/60">Site not found.</div>
      </DashboardShell>
    );
  }

  const previewUrl = template.previewUrl ? `${template.previewUrl}?siteId=${site.id}` : null;
  const tabs: { key: Section; label: string }[] = [
    { key: 'identity', label: 'Business identity' },
    { key: 'branding', label: 'Branding & colours' },
    { key: 'contact', label: 'Contact & social' },
    { key: 'whatsapp', label: 'WhatsApp' },
    { key: 'publish', label: 'Publish' },
  ];

  return (
    <DashboardShell>
      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brass-600">{template.name}</p>
            <h1 className="mt-1 font-display text-3xl font-medium text-ink">
              Customise {site.businessName || 'your site'}
            </h1>
          </div>
          {previewUrl && (
            <a
              href={previewUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2.5 text-sm font-medium text-ink hover:border-ink/30"
            >
              Live preview <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto border-b border-ink/10 pb-px">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSection(tab.key)}
              className={`whitespace-nowrap border-b-2 px-3 py-3 text-sm font-medium transition ${
                section === tab.key ? 'border-ink text-ink' : 'border-transparent text-ink/50 hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          {section === 'identity' && (
            <div className="space-y-5 rounded-2xl border border-ink/10 bg-white p-6">
              <Field label="Business name" value={site.businessName || ''} onChange={(v) => update('businessName', v)} />
              <Field
                label="Accent part of name (optional — shown in a different colour)"
                value={site.businessNameAccent || ''}
                onChange={(v) => update('businessNameAccent', v)}
              />
              <Field label="Tagline" value={site.tagline || ''} onChange={(v) => update('tagline', v)} textarea />
              <Field label="Subtitle (short line under your name, e.g. 'Fine dining · Colombo')" value={site.subtitle || ''} onChange={(v) => update('subtitle', v)} />
            </div>
          )}

          {section === 'branding' && (
            <div className="space-y-6 rounded-2xl border border-ink/10 bg-white p-6">
              <UploadField label="Logo" value={site.logoUrl} onChange={(url) => update('logoUrl', url)} />
              <UploadField label="Hero image" value={site.heroImageUrl} onChange={(url) => update('heroImageUrl', url)} />
              <UploadField label="Hero video (optional)" value={site.heroVideoUrl} onChange={(url) => update('heroVideoUrl', url)} accept="video/*" />

              <ColorField
                label="Primary brand colour"
                value={site.primaryColor?.['500'] || template.defaultPrimaryColor?.['500'] || '#C99A44'}
                onChange={(hex) => update('primaryColor', paletteFromHex(hex))}
              />
              {template.secondaryColorCustomizable && (
                <ColorField
                  label="Secondary / accent colour"
                  value={site.secondaryColor?.['500'] || template.defaultSecondaryColor?.['500'] || '#12B7A4'}
                  onChange={(hex) => update('secondaryColor', paletteFromHex(hex))}
                />
              )}
            </div>
          )}

          {section === 'contact' && (
            <div className="space-y-5 rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-lg font-medium text-ink">Contact details</h3>
              <Field label="Address" value={site.contact.address || ''} onChange={(v) => updateNested('contact', { address: v })} />
              <Field label="Phone" value={site.contact.phone || ''} onChange={(v) => updateNested('contact', { phone: v })} />
              <Field label="Email" value={site.contact.email || ''} onChange={(v) => updateNested('contact', { email: v })} />
              <Field label="Opening hours" value={site.contact.hours || ''} onChange={(v) => updateNested('contact', { hours: v })} />

              <h3 className="pt-4 font-display text-lg font-medium text-ink">Social links</h3>
              <Field label="Facebook URL" value={site.social.facebook || ''} onChange={(v) => updateNested('social', { facebook: v })} />
              <Field label="Instagram URL" value={site.social.instagram || ''} onChange={(v) => updateNested('social', { instagram: v })} />
              <Field label="Twitter / X URL" value={site.social.twitter || ''} onChange={(v) => updateNested('social', { twitter: v })} />
              <Field label="YouTube URL" value={site.social.youtube || ''} onChange={(v) => updateNested('social', { youtube: v })} />
            </div>
          )}

          {section === 'whatsapp' && (
            <div className="space-y-5 rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-lg font-medium text-ink">WhatsApp button</h3>
              <p className="text-sm text-ink/60">
                Adds a floating WhatsApp button to every page of your site. Visitors tap it to start a
                chat with your number, with a message you write pre-filled.
              </p>
              <label className="flex items-center gap-2.5 text-sm font-medium text-ink">
                <input
                  type="checkbox"
                  checked={site.whatsapp.enabled}
                  onChange={(e) => updateNested('whatsapp', { enabled: e.target.checked })}
                  className="h-4 w-4 rounded border-ink/30"
                />
                Show the WhatsApp button on my site
              </label>
              <Field
                label="WhatsApp number (with country code, digits only — e.g. 94771234567)"
                value={site.whatsapp.number || ''}
                onChange={(v) => updateNested('whatsapp', { number: v.replace(/[^\d]/g, '') })}
              />
              <Field
                label="Default message"
                value={site.whatsapp.defaultMessage || ''}
                onChange={(v) => updateNested('whatsapp', { defaultMessage: v })}
                textarea
              />
            </div>
          )}

          {section === 'publish' && (
            <div className="space-y-5 rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-lg font-medium text-ink">Publish your site</h3>
              <p className="text-sm text-ink/60">
                Save your changes first, then publish when you're ready to go live.
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePublish}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    site.published ? 'bg-ink/5 text-ink' : 'bg-flame text-white hover:bg-flame/90'
                  }`}
                >
                  {site.published ? 'Unpublish' : 'Publish now'}
                </button>
                <span className={`text-sm font-medium ${site.published ? 'text-green-700' : 'text-ink/50'}`}>
                  {site.published ? 'Live' : 'Draft — only visible via preview link'}
                </span>
              </div>
            </div>
          )}
        </div>

        {error && <p className="mt-4 text-sm text-flame">{error}</p>}

        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={save}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink-soft disabled:opacity-60"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : saved ? <Check className="h-4 w-4" /> : null}
            {saving ? 'Saving…' : saved ? 'Saved' : 'Save changes'}
          </button>
        </div>
      </div>
    </DashboardShell>
  );
}

function Field({
  label,
  value,
  onChange,
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink/70">{label}</label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-2.5 text-sm outline-none focus:border-ink/40"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-2.5 text-sm outline-none focus:border-ink/40"
        />
      )}
    </div>
  );
}

function ColorField({ label, value, onChange }: { label: string; value: string; onChange: (hex: string) => void }) {
  const ramp = paletteFromHex(value);
  return (
    <div>
      <label className="text-sm font-medium text-ink/70">{label}</label>
      <div className="mt-1.5 flex items-center gap-3">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-14 cursor-pointer rounded-lg border border-ink/15"
        />
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-32 rounded-xl border border-ink/15 px-3 py-2 text-sm outline-none focus:border-ink/40"
        />
        <div className="flex overflow-hidden rounded-lg border border-ink/10">
          {['200', '400', '500', '600', '800'].map((shade) => (
            <div key={shade} style={{ backgroundColor: ramp[shade] }} className="h-8 w-8" title={shade} />
          ))}
        </div>
      </div>
    </div>
  );
}
