import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Breadcrumbs } from './Breadcrumbs';
import { WhatsAppButton } from '../site-config/WhatsAppButton';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">
              {pathname !== '/' && <Breadcrumbs />}
              <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
