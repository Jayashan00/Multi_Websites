import { useState, type FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ApiError } from '../api/client';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const user = await login(email, password);
      const dest = (location.state as { from?: string })?.from;
      navigate(dest || (user.role === 'ADMIN' ? '/admin' : '/dashboard'));
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-5">
      <div className="w-full max-w-sm">
        <Link to="/" className="font-display text-xl font-semibold text-ink">website.lk</Link>
        <h1 className="mt-6 font-display text-3xl font-medium text-ink">Welcome back</h1>
        <p className="mt-2 text-sm text-ink/60">Sign in to manage your website.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
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
          </div>
          <div>
            <label className="text-sm font-medium text-ink/70">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-ink/40"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-sm text-flame">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-ink px-4 py-3 text-sm font-semibold text-paper transition hover:bg-ink-soft disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="mt-6 text-sm text-ink/60">
          Don't have an account? <Link to="/register" className="font-medium text-ink hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
}
