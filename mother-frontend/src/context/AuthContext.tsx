import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { api } from '../api/client';
import type { AuthUser } from '../api/types';

interface AuthResponse extends AuthUser {
  token: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<AuthUser>;
  register: (name: string, email: string, password: string) => Promise<AuthUser>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = localStorage.getItem('mp_user');
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch {
        localStorage.removeItem('mp_user');
      }
    }
    setLoading(false);
  }, []);

  function persist(res: AuthResponse) {
    localStorage.setItem('mp_token', res.token);
    const authUser: AuthUser = { id: res.id, name: res.name, email: res.email, role: res.role as 'USER' | 'ADMIN' };
    localStorage.setItem('mp_user', JSON.stringify(authUser));
    setUser(authUser);
    return authUser;
  }

  async function login(email: string, password: string) {
    const res = await api.post<AuthResponse>('/api/auth/login', { email, password });
    return persist(res);
  }

  async function register(name: string, email: string, password: string) {
    const res = await api.post<AuthResponse>('/api/auth/register', { name, email, password });
    return persist(res);
  }

  function logout() {
    localStorage.removeItem('mp_token');
    localStorage.removeItem('mp_user');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
