import { useState } from 'react';
import {
  Check,
  Star,
  Users,
  TrendingUp,
  Loader2,
  PartyPopper,
} from 'lucide-react';

import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import {
  images,
  personalTrainingPackages,
  trainers,
} from '@/lib/data';

export default function PersonalTraining() {
  const [pkg, setPkg] = useState(2);
  const [trainer, setTrainer] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 1400);
  };

  const selectPackage = (packageId: number) => {
    setPkg(packageId);

    document.getElementById('booking')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <PageHeader
        eyebrow="Personal Training"
        title={
          <>
            One-on-One{' '}
            <span className="text-gradient">Coaching</span>
          </>
        }
        subtitle="Get a program built around your body, your goals, and your schedule with a dedicated coach."
        bgImage={images.personalTraining}
      />

      {/* Benefits */}
      <section className="section-py">
        <div className="container-mw">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-eyebrow justify-center">
                Why Personal Training
              </p>

              <h2 className="section-title text-white">
                Coaching That Actually Works
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Faster Results',
                desc: '2-3x faster progress than training alone.',
              },
              {
                icon: Star,
                title: 'Expert Guidance',
                desc: 'Perfect form, smart programming, zero guesswork.',
              },
              {
                icon: Users,
                title: 'Accountability',
                desc: 'A coach in your corner who keeps you showing up.',
              },
              {
                icon: Check,
                title: 'Fully Custom',
                desc: 'Built around your body, injuries, and goals.',
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Reveal
                  key={benefit.title}
                  delay={index * 80}
                >
                  <div className="card p-7 h-full text-center">
                    <span className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-500 mb-5">
                      <Icon className="w-7 h-7" />
                    </span>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-neutral-400">
                      {benefit.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Packages */}
      <section className="section-py bg-neutral-900/30">
        <div className="container-mw">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-eyebrow justify-center">
                Training Packages
              </p>

              <h2 className="section-title text-white">
                Choose Your Package
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {personalTrainingPackages.map((packageItem, index) => (
              <Reveal
                key={packageItem.id}
                delay={index * 100}
              >
                <div
                  className={`
                    card card-hover h-full relative flex flex-col p-7
                    ${
                      packageItem.popular
                        ? 'pt-12 border-orange-500 shadow-lg shadow-orange-500/10'
                        : ''
                    }
                  `}
                >
                  {packageItem.popular && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap px-5 py-1.5 bg-orange-500 text-white text-xs font-bold uppercase rounded-b-xl">
                      Best Value
                    </span>
                  )}

                  <h3 className="text-2xl font-bold text-white">
                    {packageItem.name}
                  </h3>

                  <p className="text-sm text-neutral-400 mt-1 mb-4">
                    {packageItem.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold text-gradient">
                      ${packageItem.total}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-500 mb-5">
                    {packageItem.sessions} sessions · $
                    {packageItem.pricePer}/session
                  </p>

                  <ul className="space-y-3 mb-7 flex-1">
                    {packageItem.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-neutral-300"
                      >
                        <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => selectPackage(packageItem.id)}
                    className={
                      packageItem.popular
                        ? 'btn-primary w-full'
                        : 'btn-outline w-full'
                    }
                  >
                    Select {packageItem.name}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section
        className="section-py scroll-mt-24"
        id="booking"
      >
        <div className="container-mw max-w-2xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="section-eyebrow justify-center">
                Book a Session
              </p>

              <h2 className="section-title text-white">
                Reserve Your Spot
              </h2>
            </div>
          </Reveal>

          {done ? (
            <Reveal>
              <div className="card p-10 text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 mx-auto mb-6 animate-float">
                  <PartyPopper className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Booking Confirmed!
                </h3>

                <p className="text-neutral-400 mb-6">
                  Your trainer will reach out within 24 hours to
                  schedule your first session. Get ready to work.
                </p>

                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => setDone(false)}
                >
                  Make Another Booking
                </button>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form
                onSubmit={handleSubmit}
                className="card p-7 md:p-8 space-y-5"
              >
                <div>
                  <label
                    htmlFor="package"
                    className="label-field"
                  >
                    Package
                  </label>

                  <select
                    id="package"
                    value={pkg}
                    onChange={(e) =>
                      setPkg(Number(e.target.value))
                    }
                    className="input-field"
                  >
                    {personalTrainingPackages.map(
                      (packageItem) => (
                        <option
                          key={packageItem.id}
                          value={packageItem.id}
                        >
                          {packageItem.name} - $
                          {packageItem.total} (
                          {packageItem.sessions} sessions)
                        </option>
                      ),
                    )}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="trainer"
                    className="label-field"
                  >
                    Preferred Trainer
                  </label>

                  <select
                    id="trainer"
                    value={trainer}
                    onChange={(e) =>
                      setTrainer(Number(e.target.value))
                    }
                    className="input-field"
                  >
                    {trainers.map((trainerItem) => (
                      <option
                        key={trainerItem.id}
                        value={trainerItem.id}
                      >
                        {trainerItem.name} -{' '}
                        {trainerItem.specialty}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="label-field"
                    >
                      Full Name
                    </label>

                    <input
                      id="fullName"
                      name="fullName"
                      required
                      type="text"
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="label-field"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      required
                      type="tel"
                      className="input-field"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="label-field"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="goals"
                    className="label-field"
                  >
                    Your Goals
                  </label>

                  <textarea
                    id="goals"
                    name="goals"
                    rows={3}
                    className="input-field resize-none"
                    placeholder="What do you want to achieve with personal training?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    'Book My Sessions'
                  )}
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}