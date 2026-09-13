import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { useSiteConfig } from '../site-config/SiteConfigContext';

export function Footer() {
  const { businessName, businessNameAccent, logoUrl, tagline, contact, social } = useSiteConfig();
  const socialLinks = [
    social.instagram && { icon: Instagram, href: social.instagram },
    social.facebook && { icon: Facebook, href: social.facebook },
    social.twitter && { icon: Twitter, href: social.twitter },
    social.youtube && { icon: Youtube, href: social.youtube },
  ].filter(Boolean) as { icon: typeof Instagram; href: string }[];
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="container-mw py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <span className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-lg overflow-hidden">
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
            <p className="text-neutral-400 text-sm leading-relaxed mb-5">
              {tagline}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-orange-500 hover:border-orange-500 transition-colors"
                  aria-label="Social link"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/membership', label: 'Membership' },
                { to: '/programs', label: 'Workout Programs' },
                { to: '/trainers', label: 'Our Trainers' },
                { to: '/schedule', label: 'Class Schedule' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-neutral-400 hover:text-orange-500 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white mb-5">Resources</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/gallery', label: 'Transformation Gallery' },
                { to: '/nutrition', label: 'Nutrition Plans' },
                { to: '/blog', label: 'Fitness Blog' },
                { to: '/personal-training', label: 'Personal Training' },
                { to: '/contact', label: 'Contact Us' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-neutral-400 hover:text-orange-500 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white mb-5">Visit Us</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span>{contact.email}</span>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
              <p className="text-xs text-neutral-500">Open 7 days a week</p>
              <p className="text-sm text-white font-semibold">{contact.hours}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} {businessName}{businessNameAccent} Fitness. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
