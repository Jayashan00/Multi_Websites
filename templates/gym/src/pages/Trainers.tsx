import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Users, Clock, Calendar, Instagram, Facebook, Twitter, Target } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { TrainerCard } from '@/components/TrainerCard';
import { Modal } from '@/components/Modal';
import { images, trainers } from '@/lib/data';

export default function Trainers() {
  const [selected, setSelected] = useState<(typeof trainers)[number] | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title={<>Meet the <span className="text-gradient">Coaches</span></>}
        subtitle="Certified, experienced, and genuinely invested in your success. Every trainer here is here to help you win."
        bgImage={images.trainer1}
      />

      <section className="section-py">
        <div className="container-mw">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((t, i) => (
              <Reveal key={t.id} delay={i * 80}>
                <TrainerCard trainer={t} onClick={() => setSelected(t)} showSocials />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected ? selected.name + ' profile' : undefined}
        maxWidth="max-w-3xl"
      >
        {selected && (
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-full min-h-[320px]">
              <img
                src={images[selected.image as keyof typeof images]}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-7">
              <span className="text-xs text-orange-400 font-semibold uppercase tracking-wide">
                {selected.specialty}
              </span>
              <h2 className="text-2xl font-bold text-white mt-1 mb-3">{selected.name}</h2>
              <p className="text-neutral-400 leading-relaxed mb-5">{selected.bio}</p>

              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-neutral-800/50 rounded-lg p-3 text-center">
                  <Star className="w-5 h-5 text-orange-500 mx-auto mb-1 fill-current" />
                  <div className="text-white font-bold text-sm">{selected.rating}</div>
                  <div className="text-xs text-neutral-500">Rating</div>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-3 text-center">
                  <Users className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">{selected.clients}</div>
                  <div className="text-xs text-neutral-500">Clients</div>
                </div>
                <div className="bg-neutral-800/50 rounded-lg p-3 text-center">
                  <Clock className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">{selected.experience}</div>
                  <div className="text-xs text-neutral-500">Experience</div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-orange-500" />
                  Certifications
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.certifications.map((certification) => (
                    <span key={certification} className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs text-orange-400 font-medium">
                      {certification}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-orange-500" />
                  Specializations
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.specializations.map((specialization) => (
                    <span key={specialization} className="px-3 py-1.5 bg-neutral-800/60 border border-neutral-700 rounded-full text-xs text-neutral-300 font-medium">
                      {specialization}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mb-6">
                {[
                  { Icon: Instagram, href: selected.socials.instagram, label: 'Instagram' },
                  { Icon: Facebook, href: selected.socials.facebook, label: 'Facebook' },
                  { Icon: Twitter, href: selected.socials.twitter, label: 'Twitter' },
                ].map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={selected.name + ' on ' + link.label} className="flex items-center justify-center w-10 h-10 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-400 hover:text-orange-500 hover:border-orange-500 transition-colors">
                    <link.Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              <Link to="/personal-training" className="btn-primary w-full">
                Book a Session
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}
      </Modal>

      <CTASection />
    </>
  );
}
