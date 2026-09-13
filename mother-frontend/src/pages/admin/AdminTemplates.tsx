import { useEffect, useState, type FormEvent } from 'react';
import { DashboardShell } from '../../components/DashboardShell';
import { api, ApiError } from '../../api/client';
import type { Template } from '../../api/types';
import { Loader2, Plus, Trash2 } from 'lucide-react';

const emptyForm = {
  slug: '',
  name: '',
  category: '',
  description: '',
  thumbnailUrl: '',
  previewUrl: '',
  devPort: '',
  serverRendered: false,
  secondaryColorCustomizable: false,
  pages: '',
};

export function AdminTemplates() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function load() {
    api.get<Template[]>('/api/admin/templates').then((data) => {
      setTemplates(data);
      setLoading(false);
    });
  }

  useEffect(load, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await api.post('/api/admin/templates', {
        slug: form.slug.trim().toLowerCase().replace(/\s+/g, '-'),
        name: form.name,
        category: form.category,
        description: form.description,
        thumbnailUrl: form.thumbnailUrl || undefined,
        previewUrl: form.previewUrl || undefined,
        devPort: form.devPort ? Number(form.devPort) : undefined,
        serverRendered: form.serverRendered,
        secondaryColorCustomizable: form.secondaryColorCustomizable,
        pages: form.pages.split(',').map((p) => p.trim()).filter(Boolean),
        active: true,
      });
      setForm(emptyForm);
      setShowForm(false);
      load();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Could not create the template.');
    } finally {
      setSubmitting(false);
    }
  }

  async function toggleActive(t: Template) {
    await api.put(`/api/admin/templates/${t.id}`, { ...t, active: !t.active });
    load();
  }

  async function remove(t: Template) {
    if (!confirm(`Remove "${t.name}" from the marketplace? Existing sites built on it will keep working, but new ones can't be created from it.`)) return;
    await api.del(`/api/admin/templates/${t.id}`);
    load();
  }

  return (
    <DashboardShell admin>
      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-medium text-ink">Templates</h1>
            <p className="mt-1 text-sm text-ink/60">
              Add a new template whenever you drop a new frontend folder into /templates.
            </p>
          </div>
          <button
            onClick={() => setShowForm((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper hover:bg-ink-soft"
          >
            <Plus className="h-4 w-4" /> Add template
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-2xl border border-ink/10 bg-white p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <TextInput label="Slug (folder name, e.g. 'salon')" value={form.slug} onChange={(v) => setForm({ ...form, slug: v })} required />
              <TextInput label="Display name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <TextInput label="Category" value={form.category} onChange={(v) => setForm({ ...form, category: v })} required />
              <TextInput label="Dev port (where its own dev server runs)" value={form.devPort} onChange={(v) => setForm({ ...form, devPort: v })} />
              <TextInput label="Thumbnail image URL" value={form.thumbnailUrl} onChange={(v) => setForm({ ...form, thumbnailUrl: v })} />
              <TextInput label="Preview URL (e.g. http://localhost:5177)" value={form.previewUrl} onChange={(v) => setForm({ ...form, previewUrl: v })} />
            </div>
            <TextInput label="Description" value={form.description} onChange={(v) => setForm({ ...form, description: v })} textarea />
            <TextInput label="Pages (comma-separated)" value={form.pages} onChange={(v) => setForm({ ...form, pages: v })} />
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm text-ink">
                <input type="checkbox" checked={form.serverRendered} onChange={(e) => setForm({ ...form, serverRendered: e.target.checked })} />
                Ships its own Node server (SSR)
              </label>
              <label className="flex items-center gap-2 text-sm text-ink">
                <input type="checkbox" checked={form.secondaryColorCustomizable} onChange={(e) => setForm({ ...form, secondaryColorCustomizable: e.target.checked })} />
                Has a customizable secondary colour
              </label>
            </div>
            {error && <p className="text-sm text-flame">{error}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-ink-soft disabled:opacity-60"
            >
              {submitting ? 'Adding…' : 'Add to marketplace'}
            </button>
          </form>
        )}

        {loading ? (
          <div className="mt-10 flex items-center gap-2 text-ink/50">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading…
          </div>
        ) : (
          <div className="mt-8 space-y-3">
            {templates.map((t) => (
              <div key={t.id} className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white p-5">
                <div>
                  <p className="font-medium text-ink">{t.name} <span className="text-ink/40">/{t.slug}</span></p>
                  <p className="text-sm text-ink/50">{t.category} · port {t.devPort || '—'} {t.serverRendered && '· SSR'}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleActive(t)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium ${t.active ? 'bg-green-100 text-green-700' : 'bg-ink/5 text-ink/50'}`}
                  >
                    {t.active ? 'Active' : 'Hidden'}
                  </button>
                  <button onClick={() => remove(t)} className="rounded-full p-2 text-ink/40 hover:bg-flame/10 hover:text-flame">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardShell>
  );
}

function TextInput({
  label, value, onChange, required = false, textarea = false,
}: { label: string; value: string; onChange: (v: string) => void; required?: boolean; textarea?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-ink/70">{label}</label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={2}
          className="mt-1.5 w-full rounded-xl border border-ink/15 px-3.5 py-2.5 text-sm outline-none focus:border-ink/40"
        />
      ) : (
        <input
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-ink/15 px-3.5 py-2.5 text-sm outline-none focus:border-ink/40"
        />
      )}
    </div>
  );
}
