import { Link } from 'react-router-dom';
import { Dumbbell, HeartPulse, Flower2, Flame, Swords, Zap, Activity, UserCheck, Clock } from 'lucide-react';
import { images, programs } from '@/lib/data';

type Program = typeof programs[number];

const programIcons: Record<string, typeof Dumbbell> = {
  Dumbbell, HeartPulse, Flower2, Flame, Swords, Zap, Activity, UserCheck,
};

export function ProgramCard({ program, to = '/programs' }: { program: Program; to?: string }) {
  const Icon = programIcons[program.icon] || Dumbbell;

  return (
    <Link to={to} className="card card-hover group block h-full">
      <div className="relative h-52 overflow-hidden">
        <img
          src={images[program.image as keyof typeof images]}
          alt={program.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
        <span className="absolute top-4 left-4 flex items-center justify-center w-11 h-11 bg-orange-500 rounded-lg text-white">
          <Icon className="w-6 h-6" />
        </span>
        <span className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white font-medium">
          {program.level}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
          {program.name}
        </h3>
        <p className="text-sm text-neutral-400 mb-4 leading-relaxed">{program.description}</p>
        <div className="flex items-center gap-4 text-xs text-neutral-500">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {program.duration}</span>
          <span className="flex items-center gap-1.5"><Flame className="w-4 h-4" /> {program.calories} cal</span>
        </div>
      </div>
    </Link>
  );
}

export default ProgramCard;