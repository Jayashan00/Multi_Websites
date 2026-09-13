import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { images, facilities } from '@/lib/data';

export function FacilitiesPreview() {
  return (
    <section className="section-py">
      <div className="container-mw">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="section-eyebrow">Inside The Gym</p>
              <h2 className="section-title text-white">Our Facilities</h2>
            </div>
            <Link to="/facilities" className="btn-outline">
              Explore Facilities <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.slice(0, 4).map((f, i) => (
            <Reveal key={f.id} delay={i * 80}>
              <Link to="/facilities" className="card card-hover group block h-full">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={images[f.image as keyof typeof images]}
                    alt={f.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 right-5 text-lg font-bold text-white">{f.name}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}