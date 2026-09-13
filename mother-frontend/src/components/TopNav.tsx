import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function TopNav() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-ink' : 'text-ink/60 hover:text-ink'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-ink font-display text-base font-semibold text-brass-400">
            W
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">website.lk</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/templates" className={linkClass}>Templates</NavLink>
          <NavLink to="/#how-it-works" className={linkClass}>How it works</NavLink>
          <NavLink to="/#pricing" className={linkClass}>Pricing</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link
                to={user.role === 'ADMIN' ? '/admin' : '/dashboard'}
                className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition hover:border-ink/30"
              >
                {user.role === 'ADMIN' ? 'Admin panel' : 'My dashboard'}
              </Link>
              <button
                onClick={() => { logout(); navigate('/'); }}
                className="text-sm font-medium text-ink/50 hover:text-ink"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-ink/70 hover:text-ink">Sign in</Link>
              <Link
                to="/register"
                className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-ink-soft"
              >
                Get started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
