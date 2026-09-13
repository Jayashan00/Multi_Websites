import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

import { Landing } from './pages/Landing';
import { Marketplace } from './pages/Marketplace';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

import { MySites } from './pages/dashboard/MySites';
import { NewSite } from './pages/dashboard/NewSite';
import { CustomizeSite } from './pages/dashboard/CustomizeSite';

import { AdminOverview } from './pages/admin/AdminOverview';
import { AdminTemplates } from './pages/admin/AdminTemplates';
import { AdminSites } from './pages/admin/AdminSites';

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-5 text-center">
      <p className="font-display text-6xl font-medium text-ink">404</p>
      <p className="mt-3 text-ink/60">This page doesn't exist.</p>
      <a href="/" className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper">
        Back to home
      </a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/templates" element={<Marketplace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<ProtectedRoute><MySites /></ProtectedRoute>} />
          <Route path="/dashboard/new-site" element={<ProtectedRoute><NewSite /></ProtectedRoute>} />
          <Route path="/dashboard/sites/:id" element={<ProtectedRoute><CustomizeSite /></ProtectedRoute>} />

          <Route path="/admin" element={<ProtectedRoute adminOnly><AdminOverview /></ProtectedRoute>} />
          <Route path="/admin/templates" element={<ProtectedRoute adminOnly><AdminTemplates /></ProtectedRoute>} />
          <Route path="/admin/sites" element={<ProtectedRoute adminOnly><AdminSites /></ProtectedRoute>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
