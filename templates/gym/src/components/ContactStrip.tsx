import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const details = [
  { icon: MapPin, title: 'Location', value: '123 Fitness Avenue, Metro City' },
  { icon: Phone, title: 'Call Us', value: '(555) 123-4567' },
  { icon: Mail, title: 'Email', value: 'hello@ironcore.fit' },
  { icon: Clock, title: 'Open Hours', value: 'Mon - Sun · 5:00 AM - 11:00 PM' },
];

export function ContactStrip() {
  return (
    <section className="section-py bg-neutral-900/30 border-y border-neutral-800">
      <div className="container-mw">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-eyebrow justify-center">Get In Touch</p>
            <h2 className="section-title text-white">Visit Us Today</h2>
            <p className="text-neutral-400 mt-4 text-lg">
              Drop by for a tour, or send us a message. Our team is here seven days a week.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {details.map((d, i) => (
            <Reveal key={d.title} delay={i * 70}>
              <div className="card p-6 h-full text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-lg text-orange-500 mb-4">
                  <d.icon className="w-6 h-6" />
                </span>
                <h3 className="font-semibold text-white mb-1">{d.title}</h3>
                <p className="text-sm text-neutral-400">{d.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact" className="btn-primary">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}