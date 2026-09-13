import { useEffect, useState } from 'react';
import { DashboardShell } from '../../components/DashboardShell';
import { api } from '../../api/client';
import type { Site, Template } from '../../api/types';
import { Loader2 } from 'lucide-react';

export function AdminOverview() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get<Template[]>('/api/admin/templates'),
      api.get<Site[]>('/api/admin/sites'),
    ]).then(([t, s]) => {
      setTemplates(t);
      setSites(s);
      setLoading(false);
    });
  }, []);

  const published = sites.filter((s) => s.published).length;

  return (
    <DashboardShell admin>
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-10">
        <h1 className="font-display text-3xl font-medium text-ink">Platform overview</h1>
        <p className="mt-1 text-sm text-ink/60">A snapshot of everything running on website.lk.</p>

        {loading ? (
          <div className="mt-16 flex items-center gap-2 text-ink/50">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading…
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <StatCard label="Templates" value={templates.length} sub={`${templates.filter((t) => t.active).length} active`} />
            <StatCard label="Websites created" value={sites.length} sub={`${published} published`} />
            <StatCard label="Draft sites" value={sites.length - published} sub="awaiting publish" />
          </div>
        )}

        <div className="mt-10 rounded-2xl border border-ink/10 bg-white p-6">
          <h2 className="font-display text-lg font-medium text-ink">Templates in the marketplace</h2>
          <div className="mt-4 divide-y divide-ink/10">
            {templates.map((t) => (
              <div key={t.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.category} · {sites.filter((s) => s.templateSlug === t.slug).length} sites built</p>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${t.active ? 'bg-green-100 text-green-700' : 'bg-ink/5 text-ink/50'}`}>
                  {t.active ? 'Active' : 'Hidden'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

function StatCard({ label, value, sub }: { label: string; value: number; sub: string }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-6">
      <p className="text-sm font-medium text-ink/60">{label}</p>
      <p className="mt-2 font-display text-3xl font-medium text-ink">{value}</p>
      <p className="mt-1 text-xs text-ink/40">{sub}</p>
    </div>
  );
}
