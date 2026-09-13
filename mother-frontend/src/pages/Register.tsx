import { useState, type FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ApiError } from '../api/client';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setFieldErrors({});
    setLoading(true);
    try {
      await register(name, email, password);
      const fromTemplate = (location.state as { fromTemplate?: string })?.fromTemplate;
      navigate(fromTemplate ? '/dashboard/new-site' : '/dashboard', { state: { templateSlug: fromTemplate } });
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
        if (err.fieldErrors) setFieldErrors(err.fieldErrors);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-5 py-12">
      <div className="w-full max-w-sm">
        <Link to="/" className="font-display text-xl font-semibold text-ink">website.lk</Link>
        <h1 className="mt-6 font-display text-3xl font-medium text-ink">Create your account</h1>
        <p className="mt-2 text-sm text-ink/60">Start customising a template for your business.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="text-sm font-medium text-ink/70">Your name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-ink/40"
              placeholder="Kasun Perera"
            />
            {fieldErrors.name && <p className="mt-1 text-xs text-flame">{fieldErrors.name}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-ink/70">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-ink/40"
              placeholder="you@business.lk"
            />
            {fieldErrors.email && <p className="mt-1 text-xs text-flame">{fieldErrors.email}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-ink/70">Password</label>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-ink/40"
              placeholder="At least 8 characters"
            />
            {fieldErrors.password && <p className="mt-1 text-xs text-flame">{fieldErrors.password}</p>}
          </div>

          {error && <p className="text-sm text-flame">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-ink px-4 py-3 text-sm font-semibold text-paper transition hover:bg-ink-soft disabled:opacity-60"
          >
            {loading ? 'Creating account…' : 'Create account'}
          </button>
        </form>

        <p className="mt-6 text-sm text-ink/60">
          Already have an account? <Link to="/login" className="font-medium text-ink hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
