import { Link } from 'react-router-dom';
import { Check, CalendarClock } from 'lucide-react';
import { membershipPlans } from '@/lib/data';

type Plan = typeof membershipPlans[number];

export function MembershipCard({
  plan,
  billing = 'monthly',
}: {
  plan: Plan;
  billing?: 'monthly' | 'annual';
}) {
  // One-off packages (e.g. Personal Training) are not affected by the annual toggle.
  const annualApplies = plan.annual && billing === 'annual';
  const price = annualApplies ? Math.round(plan.price * 0.8) : plan.price;
  const annualSaving = plan.price * 12 - price * 12;

  return (
    <div
      className={`card card-hover p-7 h-full relative flex flex-col ${
        plan.popular ? 'pt-12 border-orange-500 shadow-lg shadow-orange-500/10' : ''
      }`}
    >
      {plan.popular && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap px-5 py-1.5 bg-orange-500 text-white text-xs font-bold uppercase rounded-b-xl">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>

      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-4xl font-bold text-gradient">${price}</span>
        <span className="text-neutral-500">/{plan.period}</span>
      </div>

      {/* Duration — required by the proposal spec */}
      <p className="flex items-center gap-2 text-sm text-neutral-300 mb-3">
        <CalendarClock className="w-4 h-4 text-orange-500 shrink-0" />
        <span>{plan.duration}</span>
      </p>

      {annualApplies ? (
        <p className="text-xs text-orange-400 mb-4">Billed annually. Save ${annualSaving}/year.</p>
      ) : plan.annual ? (
        <p className="text-xs text-neutral-500 mb-4">No contract · cancel anytime</p>
      ) : (
        <p className="text-xs text-neutral-500 mb-4">One-off package · no monthly commitment</p>
      )}

      <ul className="space-y-3 mb-7 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-neutral-300">
            <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link to="/register" className={plan.popular ? 'btn-primary w-full' : 'btn-outline w-full'}>
        {plan.cta}
      </Link>
    </div>
  );
}

export default MembershipCard;