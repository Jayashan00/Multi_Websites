import { Flame, Beef, Wheat, Droplet, Check, Apple, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { images, nutritionPlans, healthArticles } from '@/lib/data';

const tips = [
  { icon: Apple, title: 'Eat Real Food', desc: 'Prioritize whole, minimally processed foods 80% of the time. Quality matters more than perfection.' },
  { icon: Droplet, title: 'Hydrate Smart', desc: 'Aim for half your body weight in ounces of water daily. Add electrolytes for intense training days.' },
  { icon: Beef, title: 'Protein First', desc: 'Include 25-40g of protein per meal to support muscle repair, satiety, and recovery.' },
  { icon: Flame, title: 'Time Your Fuel', desc: 'Eat carbs around your workouts for energy and protein after for recovery. Timing amplifies results.' },
];

export default function Nutrition() {
  return (
    <>
      <PageHeader
        eyebrow="Nutrition"
        title={<>Fuel Your <span className="text-gradient">Progress</span></>}
        subtitle="Training is only half the equation. Our nutrition plans make the other half effortless."
        bgImage={images.nutrition1}
      />

      {/* Plans */}
      <section className="section-py">
        <div className="container-mw">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-eyebrow justify-center">Nutrition Plans</p>
              <h2 className="section-title text-white">Plans for Every Goal</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {nutritionPlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 80}>
                <div className="card card-hover group h-full flex flex-col md:flex-row">
                  <div className="relative md:w-48 shrink-0 overflow-hidden">
                    <img src={images[plan.image as keyof typeof images]} alt={plan.name} className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex-1">
                    <span className="text-xs text-orange-400 font-semibold uppercase tracking-wide">{plan.goal}</span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2">{plan.name}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-4">{plan.description}</p>
                    <div className="flex flex-wrap gap-3 mb-4 text-xs">
                      <span className="px-2.5 py-1 bg-neutral-800/60 rounded-md text-neutral-300">{plan.calories}</span>
                      <span className="px-2.5 py-1 bg-neutral-800/60 rounded-md text-neutral-300">{plan.macro}</span>
                      <span className="px-2.5 py-1 bg-neutral-800/60 rounded-md text-neutral-300">{plan.meals} meals/day</span>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-neutral-300">
                          <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section-py bg-neutral-900/30">
        <div className="container-mw">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-eyebrow justify-center">Expert Tips</p>
              <h2 className="section-title text-white">Nutrition Fundamentals</h2>
              <p className="text-neutral-400 mt-4 text-lg">Four principles that make every plan work better.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="card p-7 h-full">
                  <span className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-500 mb-5">
                    <t.icon className="w-7 h-7" />
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{t.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Macro guide */}
      <section className="section-py">
        <div className="container-mw max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="section-eyebrow justify-center">Macros 101</p>
              <h2 className="section-title text-white">Understanding Macronutrients</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Beef, name: 'Protein', role: 'Builds & repairs muscle', detail: 'Aim for 0.7-1g per pound of body weight from lean meats, fish, eggs, dairy, and plant sources.' },
              { icon: Wheat, name: 'Carbohydrates', role: 'Primary energy source', detail: 'Fuel workouts and recovery with rice, oats, potatoes, fruits, and whole grains.' },
              { icon: Droplet, name: 'Fats', role: 'Hormones & absorption', detail: 'Support hormone health with avocados, nuts, olive oil, and fatty fish. 20-30% of calories.' },
            ].map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <div className="card p-6 h-full text-center">
                  <span className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-500 mb-4">
                    <m.icon className="w-7 h-7" />
                  </span>
                  <h3 className="text-lg font-bold text-white">{m.name}</h3>
                  <p className="text-orange-400 text-sm font-medium mb-3">{m.role}</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">{m.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Health Articles */}
      <section className="section-py bg-neutral-900/30">
        <div className="container-mw">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-eyebrow justify-center">Health Articles</p>
              <h2 className="section-title text-white">Expert Advice & Reading</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthArticles.map((a, i) => (
              <Reveal key={a.id} delay={i * 80}>
                <article className="card card-hover group h-full flex flex-col">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={images[a.image as keyof typeof images]}
                      alt={a.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-orange-500 text-white text-[11px] font-bold uppercase rounded-full">
                      {a.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="flex items-center gap-1.5 text-xs text-neutral-500 mb-2">
                      <Clock className="w-3.5 h-3.5" /> {a.readTime}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2">{a.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed flex-1">{a.summary}</p>
                    <Link to="/blog" className="flex items-center gap-1.5 text-orange-500 text-sm font-medium mt-4">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}