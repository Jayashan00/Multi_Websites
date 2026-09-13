import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, TrendingUp, Leaf, HandHeart, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { FacilitiesPreview } from '@/components/FacilitiesPreview';
import { useCountUp } from '@/hooks/useCountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { images, stats } from '@/lib/data';

const values = [
  { icon: Heart, title: 'Passion', desc: 'We love what we do and it shows in every session, every interaction, every detail.' },
  { icon: Users, title: 'Community', desc: 'We are stronger together. Our members are not customers, they are family.' },
  { icon: TrendingUp, title: 'Excellence', desc: 'We never stop improving. Better equipment, better coaching, better results.' },
  { icon: Leaf, title: 'Integrity', desc: 'We do what is right for you, not what is easy for us. Honest advice, always.' },
];

const milestones = [
  { year: '2011', title: 'IronCore is Born', desc: 'Founded in a 2,000 sq ft space with a single rack and a big dream.' },
  { year: '2014', title: 'First Expansion', desc: 'Grew to 8,000 sq ft and added our first group class studio.' },
  { year: '2017', title: 'Trainer Academy', desc: 'Launched our internal coach development program to ensure quality.' },
  { year: '2020', title: 'Digital Platform', desc: 'Released our app for class booking, progress tracking, and virtual training.' },
  { year: '2023', title: 'Flagship Facility', desc: 'Opened our 12,000 sq ft flagship with recovery lounge and sauna.' },
  { year: '2026', title: '5,000 Members', desc: 'Crossed 5,000 active members and a 98% satisfaction rate.' },
];

const team = [
  { name: 'Daniel Reyes', role: 'Founder & Head Coach', bio: '20 years in fitness. Daniel built IronCore to be the gym he always wished existed.' },
  { name: 'Maya Thompson', role: 'Operations Director', bio: 'Keeps everything running smoothly so members always have a flawless experience.' },
  { name: 'Marcus Steel', role: 'Head of Strength', bio: 'Leads our strength coaching team and develops all strength programming.' },
  { name: 'Elena Rodriguez', role: 'Head of Mobility', bio: 'Oversees yoga, mobility, and recovery programs across all locations.' },
];
/* ---------- STATISTICS ---------- */
function StatItem({ stat, start, delay }: { stat: typeof stats[number]; start: boolean; delay: number }) {
  const value = useCountUp(stat.value, 2000, start);
  return (
    <div className="text-center" style={{ transitionDelay: `${delay}ms` }}>
      <p className="text-4xl md:text-5xl font-bold text-gradient">
        {value.toLocaleString()}{stat.suffix}
      </p>
      <p className="text-sm text-neutral-400 mt-2 uppercase tracking-wide">{stat.label}</p>
    </div>
  );
}

function StatsSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <section className="section-py bg-neutral-900/30 border-y border-neutral-800">
      <div className="container-mw">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-eyebrow justify-center">By The Numbers</p>
          <h2 className="section-title text-white">IronCore in Numbers</h2>
        </div>
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} start={visible} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title={<>About <span className="text-gradient">IronCore</span></>}
        subtitle="We are on a mission to make elite fitness accessible, supportive, and genuinely life-changing."
        bgImage={images.aboutGym}
      />

      {/* Mission & Vision */}
      <section className="section-py">
        <div className="container-mw grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img src={images.aboutMission} alt="Training" className="rounded-2xl w-full object-cover h-[480px]" />
              <div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 max-w-[240px] hidden md:block">
                <HandHeart className="w-8 h-8 text-orange-500 mb-2" />
                <p className="text-sm text-neutral-300">Member-first philosophy since day one.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-8">
              <div>
                <span className="flex items-center gap-2 text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
                  <Target className="w-5 h-5" /> Our Mission
                </span>
                <h2 className="text-2xl font-bold text-white mb-3">Empower Every Body</h2>
                <p className="text-neutral-400 leading-relaxed">
                  To provide world-class coaching, premium facilities, and a supportive community that helps every person, regardless of starting point, become the strongest and healthiest version of themselves.
                </p>
              </div>
              <div>
                <span className="flex items-center gap-2 text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
                  <Eye className="w-5 h-5" /> Our Vision
                </span>
                <h2 className="text-2xl font-bold text-white mb-3">Redefine Fitness</h2>
                <p className="text-neutral-400 leading-relaxed">
                  To be the gym that proves fitness can be welcoming, intelligent, and sustainable. A place where results and belonging go hand in hand.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-neutral-900/30">
        <div className="container-mw">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-eyebrow justify-center">What We Stand For</p>
              <h2 className="section-title text-white">Our Core Values</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card card-hover p-7 h-full text-center">
                  <span className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-500 mb-5">
                    <v.icon className="w-7 h-7" />
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
            <StatsSection />

            {/* Facilities Overview */}
            <FacilitiesPreview />

            {/* Timeline */}
      <section className="section-py">
        <div className="container-mw">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-eyebrow justify-center">Our Journey</p>
              <h2 className="section-title text-white">15 Years of Growth</h2>
            </div>
          </Reveal>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 md:-translate-x-px" />
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 80}>
                <div className={`relative flex gap-6 mb-10 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full ring-4 ring-neutral-950" />
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="card p-6">
                      <span className="text-orange-500 font-bold text-lg">{m.year}</span>
                      <h3 className="text-white font-bold text-lg mt-1 mb-1">{m.title}</h3>
                      <p className="text-sm text-neutral-400">{m.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-py bg-neutral-900/30">
        <div className="container-mw">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-eyebrow justify-center">Leadership</p>
              <h2 className="section-title text-white">Meet the Team Behind It All</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="card p-6 h-full text-center">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-2xl font-bold mb-4">
                    {m.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <h3 className="text-white font-bold">{m.name}</h3>
                  <p className="text-orange-500 text-sm font-medium mb-3">{m.role}</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="text-center mt-12">
              <Link to="/trainers" className="btn-primary">
                Meet Our Trainers <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
