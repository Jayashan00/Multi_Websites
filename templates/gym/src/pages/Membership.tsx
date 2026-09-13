import { useState } from 'react';
import { ChevronDown, ShieldCheck, Clock, Users, Gift } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { MembershipCard } from '@/components/MembershipCard';
import { images, membershipPlans, pricingFaq } from '@/lib/data';

const perks = [
  { icon: Clock, title: 'No Contracts', desc: 'Month-to-month. Cancel anytime with 30 days notice.' },
  { icon: Gift, title: 'Free Trial', desc: '7 days of full access, on us. No card required.' },
  { icon: Users, title: 'Family Plans', desc: 'Discounted rates for families and groups of 5+.' },
  { icon: ShieldCheck, title: 'No Hidden Fees', desc: 'Transparent pricing. What you see is what you pay.' },
];

export default function Membership() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <PageHeader
        eyebrow="Membership"
        title={<>Choose Your <span className="text-gradient">Membership</span></>}
        subtitle="Four ways to train with us — three rolling memberships plus a dedicated personal training package. No long-term contracts."
        bgImage={images.facilityInterior}
      />

      {/* Billing toggle */}
      <section className="section-py">
        <div className="container-mw">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm font-medium ${billing === 'monthly' ? 'text-white' : 'text-neutral-500'}`}>Monthly</span>
              <button
                onClick={() => setBilling((b) => (b === 'monthly' ? 'annual' : 'monthly'))}
                className="relative w-14 h-7 bg-neutral-800 rounded-full transition-colors"
                aria-label="Toggle billing period"
              >
                <span className={`absolute top-1 w-5 h-5 bg-orange-500 rounded-full transition-all ${billing === 'annual' ? 'left-8' : 'left-1'}`} />
              </button>
              <span className={`text-sm font-medium ${billing === 'annual' ? 'text-white' : 'text-neutral-500'}`}>
                Annual <span className="text-orange-500 text-xs">Save 20%</span>
              </span>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {membershipPlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 100}>
                <MembershipCard plan={plan} billing={billing} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-py bg-neutral-900/30">
        <div className="container-mw">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-eyebrow justify-center">Member Benefits</p>
              <h2 className="section-title text-white">Why Join IronCore?</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="card p-7 h-full text-center">
                  <span className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-500 mb-5">
                    <p.icon className="w-7 h-7" />
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-neutral-400">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py">
        <div className="container-mw max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="section-eyebrow justify-center">Questions</p>
              <h2 className="section-title text-white">Membership FAQ</h2>
            </div>
          </Reveal>
          <div className="space-y-3">
            {pricingFaq.map((faq, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-white">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-orange-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40' : 'max-h-0'}`}>
                    <p className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}