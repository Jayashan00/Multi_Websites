import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';
import { useSiteConfig } from '../site-config/SiteConfigContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/membership', label: 'Membership' },
  { to: '/programs', label: 'Programs' },
  { to: '/trainers', label: 'Trainers' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/nutrition', label: 'Nutrition' },
  { to: '/blog', label: 'Blog' },
  { to: '/testimonials', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { businessName, businessNameAccent, logoUrl } = useSiteConfig();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-mw flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-lg group-hover:bg-orange-600 transition-colors overflow-hidden">
            {logoUrl ? (
              <img src={logoUrl} alt={`${businessName}${businessNameAccent}`} className="w-full h-full object-cover" />
            ) : (
              <Dumbbell className="w-6 h-6 text-white" />
            )}
          </span>
          <span className="font-bold text-xl tracking-tight uppercase">
            {businessName}<span className="text-orange-500">{businessNameAccent}</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-orange-500'
                      : 'text-neutral-300 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/personal-training" className="btn-ghost text-sm">
            Personal Training
          </Link>
          <Link to="/register" className="btn-primary text-sm py-2.5 px-5">
            Join Now
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[600px] border-b border-neutral-800' : 'max-h-0'
        }`}
      >
        <div className="container-mw py-4 bg-neutral-950/98 backdrop-blur-md">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-orange-500/10 text-orange-500'
                        : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2 flex gap-3">
              <Link to="/personal-training" className="btn-outline flex-1 text-sm py-2.5">
                Personal Training
              </Link>
              <Link to="/register" className="btn-primary flex-1 text-sm py-2.5">
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
