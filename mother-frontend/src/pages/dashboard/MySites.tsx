import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardShell } from '../../components/DashboardShell';
import { api, ApiError } from '../../api/client';
import type { Site, Template } from '../../api/types';
import { Plus, ExternalLink, Settings, Loader2, Trash2 } from 'lucide-react';

export function MySites() {
  const [sites, setSites] = useState<Site[]>([]);
  const [templates, setTemplates] = useState<Record<string, Template>>({});
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    load();
  }, []);

  function load() {
    setLoading(true);
    Promise.all([
      api.get<Site[]>('/api/sites/mine'),
      api.get<Template[]>('/api/public/templates'),
    ])
      .then(function (results) {
        const mySites = results[0];
        const allTemplates = results[1];
        setSites(mySites);
        const map: Record<string, Template> = {};
        for (let i = 0; i < allTemplates.length; i++) {
          map[allTemplates[i].slug] = allTemplates[i];
        }
        setTemplates(map);
      })
      .finally(function () {
        setLoading(false);
      });
  }

  function getPreviewUrl(site: Site): string | null {
    const template = templates[site.templateSlug];
    if (!template || !template.previewUrl) {
      return null;
    }
    return template.previewUrl + '?siteId=' + site.id;
  }

  function handleDelete(site: Site) {
    const confirmed = confirm('Delete "' + (site.businessName || 'this site') + '"? This cannot be undone.');
    if (!confirmed) {
      return;
    }

    setDeletingId(site.id);
    setError(null);

    api
      .del('/api/sites/' + site.id)
      .then(function () {
        setSites(function (prev) {
          return prev.filter(function (s) {
            return s.id !== site.id;
          });
        });
      })
      .catch(function (err) {
        if (err instanceof ApiError) {
          setError(err.message);
        } else {
          setError('Could not delete this site. Try again.');
        }
      })
      .finally(function () {
        setDeletingId(null);
      });
  }

  return (
    <DashboardShell>
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-medium text-ink">My sites</h1>
            <p className="mt-1 text-sm text-ink/60">Everything you have built, in one place.</p>
          </div>
          <Link
            to="/dashboard/new-site"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper hover:bg-ink-soft"
          >
            <Plus className="h-4 w-4" />
            <span>New website</span>
          </Link>
        </div>

        {error !== null && (
          <p className="mt-4 rounded-xl border border-flame/30 bg-flame/5 px-4 py-3 text-sm text-flame">
            {error}
          </p>
        )}

        {loading === true && (
          <div className="mt-16 flex items-center gap-2 text-ink/50">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading your sites...</span>
          </div>
        )}

        {loading === false && sites.length === 0 && (
          <div className="mt-16 rounded-3xl border border-dashed border-ink/20 p-12 text-center">
            <p className="font-display text-xl text-ink">You have not built a website yet</p>
            <p className="mt-2 text-sm text-ink/60">Pick a template and make it yours in a few minutes.</p>
            <Link
              to="/dashboard/new-site"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-ink-soft"
            >
              <Plus className="h-4 w-4" />
              <span>Start now</span>
            </Link>
          </div>
        )}

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {sites.map(function (site) {
            const template = templates[site.templateSlug];
            const preview = getPreviewUrl(site);
            const isDeleting = deletingId === site.id;
            const templateLabel = template ? template.name : site.templateSlug;
            const businessLabel = site.businessName ? site.businessName : 'Untitled site';
            const statusLabel = site.published ? 'Published' : 'Draft';
            const statusClass = site.published
              ? 'rounded-full px-2.5 py-1 text-xs font-medium bg-green-100 text-green-700'
              : 'rounded-full px-2.5 py-1 text-xs font-medium bg-ink/5 text-ink/50';

            return (
              <div key={site.id} className="rounded-2xl border border-ink/10 bg-white p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brass-600">
                      {templateLabel}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-medium text-ink">
                      {businessLabel}
                    </h3>
                  </div>
                  <span className={statusClass}>{statusLabel}</span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <Link
                    to={'/dashboard/sites/' + site.id}
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3.5 py-2 text-sm font-medium text-ink hover:border-ink/30"
                  >
                    <Settings className="h-3.5 w-3.5" />
                    <span>Customise</span>
                  </Link>

                  {preview !== null && (
                    <a
                      href={preview}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/60 hover:text-ink"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Preview</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={function () {
                      handleDelete(site);
                    }}
                    disabled={isDeleting}
                    className="ml-auto inline-flex items-center gap-1.5 rounded-full p-2 text-ink/40 transition hover:bg-flame/10 hover:text-flame disabled:opacity-50"
                    aria-label="Delete site"
                    title="Delete site"
                  >
                    {isDeleting === true && <Loader2 className="h-4 w-4 animate-spin" />}
                    {isDeleting === false && <Trash2 className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardShell>
  );
}