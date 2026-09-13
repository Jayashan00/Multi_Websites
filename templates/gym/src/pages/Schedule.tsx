import { useState } from 'react';
import { Clock, MapPin, User, Flame, Check } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { images, classSchedule } from '@/lib/data';

const intensityStyles: Record<string, string> = {
  High: 'bg-red-500/10 text-red-400 border-red-500/20',
  Medium: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Low: 'bg-green-500/10 text-green-400 border-green-500/20',
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const [booked, setBooked] = useState<string | null>(null);

  const day = classSchedule[activeDay];

  return (
    <>
      <PageHeader
        eyebrow="Class Schedule"
        title={<>Plan Your <span className="text-gradient">Week</span></>}
        subtitle="50+ classes every week. Book your spot in seconds and never miss a session."
        bgImage={images.facilityYoga}
      />

      <section className="section-py">
        <div className="container-mw">
          {/* Day tabs */}
          <Reveal>
            <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
              {classSchedule.map((d, i) => (
                <button
                  key={d.day}
                  onClick={() => setActiveDay(i)}
                  className={`shrink-0 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                    activeDay === i
                      ? 'bg-orange-500 text-white'
                      : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  {d.day}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Class list */}
          <div className="space-y-4">
            {day.classes.map((c, i) => {
              const bookingKey = `${activeDay}-${i}`;
              const isBooked = booked === bookingKey;
              const full = c.spots === 0;
              return (
                <Reveal key={i} delay={i * 60}>
                  <div className="card card-hover p-5 flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 md:w-32 shrink-0">
                      <span className="text-2xl font-bold text-orange-500">{c.time}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{c.name}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-neutral-400">
                        <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {c.trainer}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {c.room}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 60 min</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${intensityStyles[c.intensity]}`}>
                        <Flame className="w-3 h-3 inline mr-1" /> {c.intensity}
                      </span>
                      <span className={`text-sm ${full ? 'text-red-400' : 'text-neutral-400'}`}>
                        {full ? 'Full' : `${c.spots} spots`}
                      </span>
                      {isBooked ? (
                        <span className="btn-primary py-2.5 px-5 text-sm opacity-100 pointer-events-none">
                          <Check className="w-4 h-4" /> Booked
                        </span>
                      ) : (
                        <button
                          onClick={() => setBooked(bookingKey)}
                          disabled={full}
                          className={`btn-primary text-sm py-2.5 px-5 ${full ? 'opacity-40 cursor-not-allowed hover:translate-y-0 hover:shadow-none' : ''}`}
                        >
                          Book
                        </button>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Legend */}
          <Reveal>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
              <span className="text-neutral-500">Intensity:</span>
              {Object.entries(intensityStyles).map(([level, style]) => (
                <span key={level} className={`px-3 py-1 rounded-full text-xs font-medium border ${style}`}>
                  {level}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
