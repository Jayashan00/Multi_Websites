import type { ReactNode } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutGrid, Plus, LogOut, ShieldCheck, Globe2 } from 'lucide-react';

export function DashboardShell({ children, admin = false }: { children: ReactNode; admin?: boolean }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
      isActive ? 'bg-ink text-paper' : 'text-ink/60 hover:bg-ink/5 hover:text-ink'
    }`;

  return (
    <div className="flex min-h-screen bg-paper">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-ink/10 bg-white p-5 sm:flex">
        <Link to="/" className="mb-8 font-display text-lg font-semibold text-ink">website.lk</Link>

        {admin ? (
          <nav className="space-y-1">
            <NavLink to="/admin" end className={linkClass}>
              <ShieldCheck className="h-4 w-4" /> Overview
            </NavLink>
            <NavLink to="/admin/templates" className={linkClass}>
              <LayoutGrid className="h-4 w-4" /> Templates
            </NavLink>
            <NavLink to="/admin/sites" className={linkClass}>
              <Globe2 className="h-4 w-4" /> All sites
            </NavLink>
          </nav>
        ) : (
          <nav className="space-y-1">
            <NavLink to="/dashboard" end className={linkClass}>
              <LayoutGrid className="h-4 w-4" /> My sites
            </NavLink>
            <NavLink to="/dashboard/new-site" className={linkClass}>
              <Plus className="h-4 w-4" /> New website
            </NavLink>
          </nav>
        )}

        <div className="mt-auto space-y-3 border-t border-ink/10 pt-4">
          <div>
            <p className="truncate text-sm font-medium text-ink">{user?.name}</p>
            <p className="truncate text-xs text-ink/50">{user?.email}</p>
          </div>
          <button
            onClick={() => { logout(); navigate('/'); }}
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-ink/60 hover:bg-ink/5 hover:text-ink"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-x-hidden">{children}</main>
    </div>
  );
}
