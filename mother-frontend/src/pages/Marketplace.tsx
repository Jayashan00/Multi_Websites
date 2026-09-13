import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNav } from '../components/TopNav';
import { Footer } from '../components/Footer';
import { api } from '../api/client';
import type { Template } from '../api/types';
import { useAuth } from '../context/AuthContext';
import { ArrowUpRight, Loader2 } from 'lucide-react';

export function Marketplace() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get<Template[]>('/api/public/templates')
      .then(setTemplates)
      .catch(() => setError('Could not load templates. Is the backend running on port 8080?'))
      .finally(() => setLoading(false));
  }, []);

  function pickTemplate(slug: string) {
    if (!user) {
      navigate('/register', { state: { fromTemplate: slug } });
      return;
    }
    navigate('/dashboard/new-site', { state: { templateSlug: slug } });
  }

  return (
    <div className="min-h-screen bg-paper">
      <TopNav />

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8">
        <p className="text-sm font-medium text-brass-700">Templates</p>
        <h1 className="mt-3 max-w-xl font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Built for the businesses that ask for them most
        </h1>
        <p className="mt-4 max-w-lg text-ink/65">
          Every template below is a full, working website — pick one and every page, image and
          colour becomes yours to edit.
        </p>

        {loading && (
          <div className="mt-16 flex items-center gap-2 text-ink/50">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading templates…
          </div>
        )}

        {error && (
          <div className="mt-16 rounded-2xl border border-flame/30 bg-flame/5 p-6 text-sm text-flame">
            {error}
          </div>
        )}

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <div key={t.id} className="group overflow-hidden rounded-3xl border border-ink/10 bg-white transition hover:border-ink/25">
              <div className="aspect-[4/3] overflow-hidden bg-ink/5">
                {t.thumbnailUrl && (
                  <img
                    src={t.thumbnailUrl}
                    alt={t.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brass-600">{t.category}</p>
                <h3 className="mt-2 font-display text-xl font-medium text-ink">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{t.description}</p>
                {t.pages && (
                  <p className="mt-3 text-xs text-ink/40">
                    {t.pages.length} pages · {t.pages.slice(0, 3).join(', ')}{t.pages.length > 3 ? '…' : ''}
                  </p>
                )}
                <div className="mt-5 flex items-center gap-3">
                  <button
                    onClick={() => pickTemplate(t.slug)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink-soft"
                  >
                    Use this template <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                  {t.previewUrl && (
                    <a
                      href={t.previewUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-ink/50 hover:text-ink"
                    >
                      Live preview
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
