import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const labels: Record<string, string> = {
  about: 'About Us',
  membership: 'Membership Plans',
  programs: 'Workout Programs',
  trainers: 'Trainers',
  facilities: 'Facilities',
  gallery: 'Transformation Gallery',
  schedule: 'Class Schedule',
  register: 'Membership Registration',
  'personal-training': 'Personal Training',
  nutrition: 'Nutrition & Diet',
  blog: 'Blog',
  testimonials: 'Testimonials',
  contact: 'Contact',
};

export function Breadcrumbs() {
  const { pathname } = useLocation();
  const parts = pathname.split('/').filter(Boolean);

  if (parts.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="border-b border-neutral-800 bg-neutral-950">
      <div className="container-mw py-3">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          <li>
            <Link to="/" className="flex items-center gap-1.5 text-neutral-400 hover:text-orange-500 transition-colors">
              <Home className="w-4 h-4" /> Home
            </Link>
          </li>
          {parts.map((part, i) => {
            const to = '/' + parts.slice(0, i + 1).join('/');
            const isLast = i === parts.length - 1;
            const label = labels[part] || part.replace(/-/g, ' ');
            return (
              <li key={to} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-neutral-600" />
                {isLast ? (
                  <span className="text-orange-500 font-medium capitalize" aria-current="page">{label}</span>
                ) : (
                  <Link to={to} className="text-neutral-400 hover:text-orange-500 transition-colors capitalize">{label}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}