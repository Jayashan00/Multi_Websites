import { Link } from 'react-router-dom';
import { Dumbbell, HeartPulse, Flower2, Flame, Swords, Zap, Activity, UserCheck, Clock, TrendingUp, Check, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { images, programs } from '@/lib/data';

const programIcons: Record<string, typeof Dumbbell> = {
  Dumbbell, HeartPulse, Flower2, Flame, Swords, Zap, Activity, UserCheck,
};

export default function Programs() {
  return (
    <>
      <PageHeader
        eyebrow="Workout Programs"
        title={<>Train With <span className="text-gradient">Purpose</span></>}
        subtitle="Seven signature programs designed by certified coaches to deliver real, measurable results."
        bgImage={images.programCrossfit}
      />

      <section className="section-py">
        <div className="container-mw space-y-16">
          {programs.map((p, i) => {
            const Icon = programIcons[p.icon] || Dumbbell;
            const reversed = i % 2 === 1;
            return (
              <Reveal key={p.id}>
                <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reversed ? 'lg:[direction:rtl]' : ''}`}>
                  <div className="relative lg:[direction:ltr]">
                    <img src={images[p.image as keyof typeof images]} alt={p.name} className="rounded-2xl w-full object-cover h-[360px] md:h-[440px]" />
                    <div className="absolute top-5 left-5 flex items-center gap-3">
                      <span className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-lg text-white">
                        <Icon className="w-6 h-6" />
                      </span>
                      <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                        {p.level}
                      </span>
                    </div>
                  </div>
                  <div className="lg:[direction:ltr]">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{p.name}</h2>
                    <p className="text-neutral-400 text-lg leading-relaxed mb-5">{p.description}</p>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-2 text-neutral-300">
                        <Clock className="w-5 h-5 text-orange-500" />
                        <span className="text-sm">{p.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-300">
                        <Flame className="w-5 h-5 text-orange-500" />
                        <span className="text-sm">{p.calories} cal</span>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-300">
                        <TrendingUp className="w-5 h-5 text-orange-500" />
                        <span className="text-sm">Progressive</span>
                      </div>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-7">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-300">
                          <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4 p-4 mb-7 bg-neutral-900 border border-neutral-800 rounded-xl">
                                          <img
                                            src={images[p.trainerImage as keyof typeof images]}
                                            alt={p.trainer}
                                            loading="lazy"
                                            className="w-14 h-14 rounded-full object-cover"
                                          />
                                          <div>
                                            <p className="text-xs text-neutral-500 uppercase tracking-wide">Lead Trainer</p>
                                            <p className="font-bold text-white">{p.trainer}</p>
                                            <p className="text-xs text-orange-400">{p.trainerRole}</p>
                                          </div>
                                          <Link to="/trainers" className="ml-auto text-sm text-orange-500 hover:text-orange-400 font-medium">
                                            View Profile
                                          </Link>
                                        </div>

                                        <Link to="/schedule" className="btn-primary">
                      Find a Class <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
