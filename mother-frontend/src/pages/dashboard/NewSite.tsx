import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DashboardShell } from '../../components/DashboardShell';
import { api, ApiError } from '../../api/client';
import type { Site, Template } from '../../api/types';
import { Loader2 } from 'lucide-react';

export function NewSite() {
  const location = useLocation();
  const navigate = useNavigate();
  const preselected = (location.state as { templateSlug?: string })?.templateSlug;

  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get<Template[]>('/api/public/templates').then((list) => {
      setTemplates(list);
      setLoading(false);
    });
  }, []);

  async function createSite(template: Template) {
    setCreating(true);
    setError(null);
    try {
      const site = await api.post<Site>('/api/sites', {
        templateSlug: template.slug,
        businessName: template.name,
        contact: {},
        social: {},
        whatsapp: { enabled: false },
        seo: {},
      });
      navigate(`/dashboard/sites/${site.id}`, { replace: true });
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Could not create the site. Try again.');
      setCreating(false);
    }
  }

  useEffect(() => {
    if (!loading && preselected) {
      const template = templates.find((t) => t.slug === preselected);
      if (template) createSite(template);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, preselected, templates]);

  if (preselected && (loading || creating)) {
    return (
      <DashboardShell>
        <div className="flex h-full items-center justify-center py-24 text-ink/50">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Setting up your new site…
        </div>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10">
        <h1 className="font-display text-3xl font-medium text-ink">Choose a template</h1>
        <p className="mt-1 text-sm text-ink/60">You can fully customise it in the next step.</p>

        {error && <p className="mt-4 text-sm text-flame">{error}</p>}

        {loading ? (
          <div className="mt-10 flex items-center gap-2 text-ink/50">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading templates…
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => createSite(t)}
                disabled={creating}
                className="overflow-hidden rounded-2xl border border-ink/10 bg-white text-left transition hover:border-ink/30 disabled:opacity-60"
              >
                <div className="aspect-[4/3] overflow-hidden bg-ink/5">
                  {t.thumbnailUrl && <img src={t.thumbnailUrl} alt={t.name} className="h-full w-full object-cover" />}
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brass-600">{t.category}</p>
                  <h3 className="mt-1 font-display text-base font-medium text-ink">{t.name}</h3>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </DashboardShell>
  );
}
