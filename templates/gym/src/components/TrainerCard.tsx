import { Link } from 'react-router-dom';
import { Star, Instagram, Facebook, Twitter } from 'lucide-react';
import { images, trainers } from '@/lib/data';

type Trainer = typeof trainers[number];

type TrainerCardProps = {
  trainer: Trainer;
  to?: string;
  onClick?: () => void;
  showSocials?: boolean;
};

function TrainerSocials({ trainer }: { trainer: Trainer }) {
  const links = [
    { Icon: Instagram, href: trainer.socials.instagram, label: 'Instagram' },
    { Icon: Facebook, href: trainer.socials.facebook, label: 'Facebook' },
    { Icon: Twitter, href: trainer.socials.twitter, label: 'Twitter' },
  ];

  return (
    <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {links.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={trainer.name + ' on ' + link.label} onClick={(e) => e.stopPropagation()} className="flex items-center justify-center w-9 h-9 bg-black/60 backdrop-blur-sm rounded-lg text-white hover:bg-orange-500 transition-colors">
          <link.Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}

function TrainerVisual({ trainer }: { trainer: Trainer }) {
  return (
    <div className="relative h-80 overflow-hidden">
      <img
        src={images[trainer.image as keyof typeof images]}
        alt={trainer.name}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 p-5">
        <span className="text-xs text-orange-400 font-semibold uppercase tracking-wide">
          {trainer.specialty}
        </span>
        <h3 className="text-xl font-bold text-white mt-1">{trainer.name}</h3>
        <div className="flex items-center gap-3 mt-2">
          <span className="flex items-center gap-1 text-orange-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm text-neutral-300">{trainer.rating}</span>
          </span>
          <span className="text-xs text-neutral-500">{trainer.clients} clients</span>
        </div>
      </div>
    </div>
  );
}

export function TrainerCard({ trainer, to = '/trainers', onClick, showSocials = false }: TrainerCardProps) {
  return (
    <div className="card card-hover group relative text-left w-full">
      {showSocials && <TrainerSocials trainer={trainer} />}
      {onClick ? (
        <button type="button" onClick={onClick} className="block text-left w-full">
          <TrainerVisual trainer={trainer} />
        </button>
      ) : (
        <Link to={to} className="block">
          <TrainerVisual trainer={trainer} />
        </Link>
      )}
    </div>
  );
}

export default TrainerCard;

