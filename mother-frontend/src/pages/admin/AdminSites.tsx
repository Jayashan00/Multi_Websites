import { useEffect, useState } from 'react';
import { DashboardShell } from '../../components/DashboardShell';
import { api } from '../../api/client';
import type { Site, Template } from '../../api/types';
import { ExternalLink, Loader2 } from 'lucide-react';

export function AdminSites() {
  const [sites, setSites] = useState<Site[]>([]);
  const [templates, setTemplates] = useState<Record<string, Template>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get<Site[]>('/api/admin/sites'),
      api.get<Template[]>('/api/public/templates'),
    ]).then(([s, t]) => {
      setSites(s);
      setTemplates(Object.fromEntries(t.map((tpl) => [tpl.slug, tpl])));
      setLoading(false);
    });
  }, []);

  return (
    <DashboardShell admin>
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-10">
        <h1 className="font-display text-3xl font-medium text-ink">All sites</h1>
        <p className="mt-1 text-sm text-ink/60">Every website built by every user on the platform.</p>

        {loading ? (
          <div className="mt-10 flex items-center gap-2 text-ink/50">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading…
          </div>
        ) : (
          <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-ink/10 bg-ink/[0.02] text-xs uppercase tracking-wide text-ink/50">
                <tr>
                  <th className="px-5 py-3 font-medium">Business</th>
                  <th className="px-5 py-3 font-medium">Template</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Owner</th>
                  <th className="px-5 py-3 font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {sites.map((site) => {
                  const template = templates[site.templateSlug];
                  const preview = template?.previewUrl ? `${template.previewUrl}?siteId=${site.id}` : null;
                  return (
                    <tr key={site.id}>
                      <td className="px-5 py-3.5 font-medium text-ink">{site.businessName || 'Untitled'}</td>
                      <td className="px-5 py-3.5 text-ink/60">{template?.name || site.templateSlug}</td>
                      <td className="px-5 py-3.5">
                        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${site.published ? 'bg-green-100 text-green-700' : 'bg-ink/5 text-ink/50'}`}>
                          {site.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-ink/50">{site.ownerUserId}</td>
                      <td className="px-5 py-3.5 text-right">
                        {preview && (
                          <a href={preview} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-ink/50 hover:text-ink">
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}
