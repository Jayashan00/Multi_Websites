import { Link } from 'react-router-dom';
import {
  ArrowRight, Dumbbell, HeartPulse, Star, Users, Trophy, Clock,
  ShieldCheck, Award, ChevronRight,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { ProgramCard } from '@/components/ProgramCard';
import { TrainerCard } from '@/components/TrainerCard';
import { MembershipCard } from '@/components/MembershipCard';
import { BlogCard } from '@/components/BlogCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { GalleryGrid } from '@/components/GalleryGrid';
import { CTASection } from '@/components/CTASection';
import { FacilitiesPreview } from '@/components/FacilitiesPreview';
import { ContactStrip } from '@/components/ContactStrip';
import { useCountUp } from '@/hooks/useCountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { images, stats, programs, trainers, membershipPlans, transformations, testimonials, blogPosts } from '@/lib/data';
import { HeroSlider } from '@/components/HeroSlider';

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. STATS */}
      <StatsSection />

      {/* 3. ABOUT TEASER */}
      <AboutTeaserSection />

      {/* 4. PROGRAMS PREVIEW */}
      <ProgramsSection />

      {/* 5. WHY CHOOSE US */}
      <WhyChooseSection />

      {/* 6. TRAINERS PREVIEW */}
      <TrainersSection />

      {/* 7. MEMBERSHIP TEASER */}
      <MembershipSection />

      {/* 8. FACILITIES PREVIEW */}
      <FacilitiesPreview />

      {/* 9. GALLERY PREVIEW */}
      <GallerySection />

      {/* 10. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 11. SCHEDULE TEASER */}
      <ScheduleSection />

      {/* 12. BLOG PREVIEW */}
      <BlogSection />

      {/* 13. CONTACT */}
      <ContactStrip />

      {/* 14. CTA */}
      <CTASection />
    </>
  );
}

/* ---------- HERO ---------- */
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden -mt-16 md:-mt-20">
      <HeroSlider />
      <div className="container-mw relative z-10 py-20">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Now offering 7-day free trials
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] text-white text-shadow-lg mb-6">
              Build Your<br />
              <span className="text-gradient">Strongest</span> Self
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-xl leading-relaxed">
              Premium equipment, world-class trainers, and a community that pushes you further. This is not just a gym. This is where transformation happens.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="btn-primary text-base">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/programs" className="btn-outline text-base">
                Explore Programs
              </Link>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-3">
                {trainers.slice(0, 4).map((t) => (
                  <img
                    key={t.id}
                    src={images[t.image as keyof typeof images]}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border-2 border-neutral-950 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-neutral-400 mt-1">Rated 4.9 by 2,000+ members</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-gradient-to-t from-neutral-950/90 to-transparent">
        <div className="container-mw py-5">
          <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {['Strength', 'Cardio', 'Yoga', 'CrossFit', 'Boxing', 'HIIT', 'Mobility', 'Nutrition'].map((tag) => (
              <li key={tag}>
                <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs sm:text-sm text-neutral-300 whitespace-nowrap hover:border-orange-500/50 hover:text-white transition-colors">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- STATS ---------- */
function StatsSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <section className="border-y border-neutral-800 bg-neutral-900/50">
      <div ref={ref} className="container-mw py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} start={visible} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, start, delay }: { stat: typeof stats[number]; start: boolean; delay: number }) {
  const value = useCountUp(stat.value, 1800, start);
  return (
    <div className="text-center" style={{ transitionDelay: `${delay}ms` }}>
      <div className="text-4xl md:text-5xl font-bold text-gradient">
        {value}{stat.suffix}
      </div>
      <div className="text-sm text-neutral-400 mt-1 uppercase tracking-wide">{stat.label}</div>
    </div>
  );
}

/* ---------- ABOUT TEASER ---------- */
function AboutTeaserSection() {
  return (
    <section className="section-py">
      <div className="container-mw grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img src={images.aboutGym} alt="Gym interior" className="rounded-2xl w-full object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm uppercase tracking-wide">Years of Excellence</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="section-eyebrow">Welcome to IronCore</p>
          <h2 className="section-title text-white mb-5">
            More Than a Gym.<br />A <span className="text-gradient">Movement.</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-6">
            Since 2011, IronCore has been redefining what a fitness experience can be. We believe everyone deserves access to elite-level coaching, premium facilities, and a community that genuinely cares about your progress.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: ShieldCheck, label: 'Certified Coaches' },
              { icon: Award, label: 'Award-Winning Facility' },
              { icon: Users, label: 'Supportive Community' },
              { icon: Trophy, label: 'Proven Results' },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-lg text-orange-500">
                  <f.icon className="w-5 h-5" />
                </span>
                <span className="text-sm text-neutral-300 font-medium">{f.label}</span>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn-primary">
            Our Story <ArrowRight className="w-5 h-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PROGRAMS ---------- */
function ProgramsSection() {
  return (
    <section className="section-py bg-neutral-900/30">
      <div className="container-mw">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <p className="section-eyebrow">What We Offer</p>
            <h2 className="section-title text-white">Workout Programs</h2>
          </Reveal>
          <Reveal delay={100}>
            <Link to="/programs" className="btn-ghost text-orange-500">
              View All Programs <ChevronRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProgramCard program={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY CHOOSE US ---------- */
function WhyChooseSection() {
  const features = [
    { icon: Dumbbell, title: 'Premium Equipment', desc: 'Top-of-the-line machines and free weights, meticulously maintained and never overcrowded.' },
    { icon: Users, title: 'Expert Trainers', desc: 'Every coach is certified, experienced, and invested in helping you reach your goals.' },
    { icon: Clock, title: 'Flexible Hours', desc: 'Open 18 hours a day, 7 days a week. Train on your schedule, not ours.' },
    { icon: HeartPulse, title: 'Holistic Approach', desc: 'Fitness, nutrition, and recovery under one roof. We support your whole journey.' },
    { icon: ShieldCheck, title: 'Clean & Safe', desc: 'Hospital-grade cleaning protocols and spacious layouts for your comfort and safety.' },
    { icon: Trophy, title: 'Proven Results', desc: 'Thousands of transformations. We measure our success by yours.' },
  ];
  return (
    <section className="section-py">
      <div className="container-mw">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-eyebrow justify-center">Why IronCore</p>
            <h2 className="section-title text-white">The IronCore Difference</h2>
            <p className="text-neutral-400 mt-4 text-lg">
              We obsess over the details so you can focus on what matters: showing up and getting better.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="card card-hover p-7 h-full">
                <span className="flex items-center justify-center w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-500 mb-5">
                  <f.icon className="w-7 h-7" />
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TRAINERS ---------- */
function TrainersSection() {
  return (
    <section className="section-py bg-neutral-900/30">
      <div className="container-mw">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <p className="section-eyebrow">Meet the Team</p>
            <h2 className="section-title text-white">Expert Trainers</h2>
          </Reveal>
          <Reveal delay={100}>
            <Link to="/trainers" className="btn-ghost text-orange-500">
              Meet All Trainers <ChevronRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.slice(0, 4).map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <TrainerCard trainer={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MEMBERSHIP ---------- */
function MembershipSection() {
  return (
    <section className="section-py">
      <div className="container-mw">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-eyebrow justify-center">Membership Plans</p>
            <h2 className="section-title text-white">Choose Your Plan</h2>
            <p className="text-neutral-400 mt-4 text-lg">
              Flexible, no-contract memberships. Cancel anytime, no questions asked.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {membershipPlans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 100}>
              <MembershipCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
function GallerySection() {
  const galleryItems = transformations.map((t) => ({
    src: images[t.image as keyof typeof images],
    alt: `${t.name} transformation`,
    caption: `${t.name} · ${t.goal}`,
  }));

  return (
    <section className="section-py bg-neutral-900/30">
      <div className="container-mw">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <p className="section-eyebrow">Real Results</p>
            <h2 className="section-title text-white">Transformation Gallery</h2>
          </Reveal>
          <Reveal delay={100}>
            <Link to="/gallery" className="btn-ghost text-orange-500">
              See All Transformations <ChevronRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
        <Reveal>
          <GalleryGrid items={galleryItems} columns={3} />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function TestimonialsSection() {
  return (
    <section className="section-py">
      <div className="container-mw">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-eyebrow justify-center">Member Stories</p>
            <h2 className="section-title text-white">What Our Members Say</h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SCHEDULE TEASER ---------- */
function ScheduleSection() {
  return (
    <section className="section-py bg-neutral-900/30">
      <div className="container-mw grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="section-eyebrow">Plan Your Week</p>
          <h2 className="section-title text-white mb-5">
            50+ Classes <span className="text-gradient">Every Week</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            From sunrise HIIT to evening yoga, we have a class for every schedule and every goal. Book your spot in seconds with our app.
          </p>
          <div className="space-y-3 mb-8">
            {[
              { day: 'Mon - Fri', time: '5:00 AM - 11:00 PM' },
              { day: 'Saturday', time: '7:00 AM - 9:00 PM' },
              { day: 'Sunday', time: '8:00 AM - 8:00 PM' },
            ].map((h) => (
              <div key={h.day} className="flex items-center justify-between p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <span className="text-white font-medium">{h.day}</span>
                <span className="text-neutral-400 text-sm">{h.time}</span>
              </div>
            ))}
          </div>
          <Link to="/schedule" className="btn-primary">
            View Full Schedule <ArrowRight className="w-5 h-5" />
          </Link>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative">
            <img src={images.facilityYoga} alt="Class in session" className="rounded-2xl w-full object-cover h-[420px]" />
            <div className="absolute -top-5 -left-5 bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-xl">
              <div className="text-3xl font-bold text-orange-500">50+</div>
              <div className="text-xs text-neutral-400 uppercase">Weekly Classes</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- BLOG ---------- */
function BlogSection() {
  return (
    <section className="section-py">
      <div className="container-mw">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <p className="section-eyebrow">From the Blog</p>
            <h2 className="section-title text-white">Latest Articles</h2>
          </Reveal>
          <Reveal delay={100}>
            <Link to="/blog" className="btn-ghost text-orange-500">
              Read All Articles <ChevronRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post, i) => (
            <Reveal key={post.id} delay={i * 80}>
              <BlogCard post={post} to={`/blog/${post.slug}`} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}