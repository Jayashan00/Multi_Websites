import { Building2, Dumbbell, Layers, HeartPulse, Flower2, Lock, Clock } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { images, facilities } from '@/lib/data';

const facilityIcons: Record<string, typeof Building2> = {
  Building2, Dumbbell, Layers, HeartPulse, Flower2, Lock,
};

export default function Facilities() {
  return (
    <>
      <PageHeader
        eyebrow="Our Facilities"
        title={<>World-Class <span className="text-gradient">Facilities</span></>}
        subtitle="12,000 square feet of premium equipment, dedicated zones, and recovery spaces designed for every kind of athlete."
        bgImage={images.facilityInterior}
      />

      <section className="section-py">
        <div className="container-mw">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => {
              const Icon = facilityIcons[f.icon] || Building2;
              return (
                <Reveal key={f.id} delay={i * 80}>
                  <div className="card card-hover group h-full">
                    <div className="relative h-56 overflow-hidden">
                      <img src={images[f.image as keyof typeof images]} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
                      <span className="absolute top-4 left-4 flex items-center justify-center w-11 h-11 bg-orange-500 rounded-lg text-white">
                        <Icon className="w-6 h-6" />
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{f.name}</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed mb-4">{f.description}</p>
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <Clock className="w-4 h-4 text-orange-500" />
                        <span>{f.hours}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Virtual Tour banner */}
      <section className="section-py bg-neutral-900/30">
        <div className="container-mw">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden">
              <img src={images.facilityGym} alt="Gym tour" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-neutral-950/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Take a Virtual Tour</h2>
                <p className="text-neutral-300 max-w-lg mb-6">Explore every corner of our flagship facility from the comfort of your home.</p>
                <a href="/contact" className="btn-primary">Book an In-Person Tour</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
