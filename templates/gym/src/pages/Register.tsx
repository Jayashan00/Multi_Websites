import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, User, Mail, Phone, Calendar, PartyPopper, AlertCircle } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { TextField, TextAreaField, SelectField } from '@/components/FormField';
import { images, membershipPlans } from '@/lib/data';
import {
  validateName, validateEmail, validatePhone, validateAge, hasErrors, type Errors,
} from '@/lib/validation';

const initialForm = {
  plan: 2,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dob: '',
  goals: '',
  experience: 'Beginner',
};

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [terms, setTerms] = useState(false);
  const [termsError, setTermsError] = useState('');

  const validateStep2 = (data = form): Errors => ({
    firstName: validateName('First name', data.firstName),
    lastName: validateName('Last name', data.lastName),
    email: validateEmail(data.email),
    phone: validatePhone(data.phone),
    dob: validateAge(data.dob, 16),
  });

  const update = (key: keyof typeof form) => (value: string | number) => {
    const nextForm = { ...form, [key]: value };
    setForm(nextForm);
    if (touched[key]) setErrors(validateStep2(nextForm));
  };

  const blur = (key: keyof typeof form) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validateStep2());
  };

  const goToStep3 = () => {
    const nextErrors = validateStep2();
    setErrors(nextErrors);
    setTouched({ firstName: true, lastName: true, email: true, phone: true, dob: true });
    if (hasErrors(nextErrors)) {
      document.querySelector('[aria-invalid="true"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validateStep2();
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) {
      setStep(2);
      setTouched({ firstName: true, lastName: true, email: true, phone: true, dob: true });
      return;
    }
    if (!terms) {
      setTermsError('You must accept the Terms of Service to continue.');
      return;
    }
    setTermsError('');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 1400);
  };

  if (done) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center container-mw py-20">
        <Reveal>
          <div className="text-center max-w-md">
            <div className="flex items-center justify-center w-20 h-20 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 mx-auto mb-6 animate-float">
              <PartyPopper className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">Welcome to IronCore, {form.firstName}!</h1>
            <p className="text-neutral-400 mb-8">
              Your registration is confirmed. Check {form.email} for your 7-day free trial pass and next steps. We cannot wait to see you in the gym.
            </p>
            <Button onClick={() => navigate('/')}>Back to Home</Button>
          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Join Now"
        title={<>Start Your <span className="text-gradient">Journey</span></>}
        subtitle="Get a 7-day free trial, a complimentary fitness assessment, and your first class on us."
        bgImage={images.heroFighter}
      />

      <section className="section-py">
        <div className="container-mw max-w-3xl mx-auto">
          {/* Steps */}
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-10">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition-colors ${
                    step >= s ? 'bg-orange-500 text-white' : 'bg-neutral-900 border border-neutral-800 text-neutral-500'
                  }`}>
                    {step > s ? <Check className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && <div className={`w-12 h-px ${step > s ? 'bg-orange-500' : 'bg-neutral-800'}`} />}
                </div>
              ))}
            </div>
          </Reveal>

          <form onSubmit={handleSubmit} noValidate className="card p-7 md:p-8">
            {step === 1 && (
              <Reveal>
                <h2 className="text-2xl font-bold text-white mb-2">Choose Your Plan</h2>
                <p className="text-neutral-400 text-sm mb-6">You can change or cancel anytime.</p>
                <div className="space-y-3">
                  {membershipPlans.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => update('plan')(plan.id)}
                      className={`w-full flex items-center justify-between p-5 rounded-xl border text-left transition-all ${
                        form.plan === plan.id ? 'border-orange-500 bg-orange-500/5' : 'border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-lg">{plan.name}</span>
                          {plan.popular && <span className="px-2 py-0.5 bg-orange-500 text-white text-xs rounded-full">Popular</span>}
                        </div>
                        <p className="text-sm text-neutral-400 mt-1">{plan.features.slice(0, 3).join(' · ')}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gradient">${plan.price}</div>
                        <div className="text-xs text-neutral-500">/month</div>
                      </div>
                    </button>
                  ))}
                </div>
                <Button type="button" fullWidth className="mt-7" onClick={() => setStep(2)}>
                  Continue
                </Button>
              </Reveal>
            )}

            {step === 2 && (
              <Reveal>
                <h2 className="text-2xl font-bold text-white mb-2">Your Details</h2>
                <p className="text-neutral-400 text-sm mb-6">Just a few things to set up your account.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <TextField
                    id="firstName" label="First Name" required placeholder="John"
                    icon={<User className="w-5 h-5" />}
                    value={form.firstName} error={errors.firstName}
                    onChange={update('firstName')} onBlur={blur('firstName')}
                  />
                  <TextField
                    id="lastName" label="Last Name" required placeholder="Doe"
                    icon={<User className="w-5 h-5" />}
                    value={form.lastName} error={errors.lastName}
                    onChange={update('lastName')} onBlur={blur('lastName')}
                  />
                  <TextField
                    id="email" label="Email" type="email" required placeholder="john@example.com"
                    icon={<Mail className="w-5 h-5" />}
                    value={form.email} error={errors.email}
                    onChange={update('email')} onBlur={blur('email')}
                  />
                  <TextField
                    id="phone" label="Phone" type="tel" required placeholder="(555) 123-4567"
                    icon={<Phone className="w-5 h-5" />}
                    value={form.phone} error={errors.phone}
                    onChange={update('phone')} onBlur={blur('phone')}
                  />
                  <TextField
                    id="dob" label="Date of Birth" type="date" required
                    icon={<Calendar className="w-5 h-5" />}
                    value={form.dob} error={errors.dob}
                    onChange={update('dob')} onBlur={blur('dob')}
                  />
                  <SelectField
                    id="experience" label="Experience Level" value={form.experience}
                    options={['Beginner', 'Intermediate', 'Advanced']}
                    onChange={update('experience')}
                  />
                </div>
                <TextAreaField
                  id="goals" label="Your Goals (optional)" rows={3} className="mt-4"
                  placeholder="Tell us what you want to achieve..."
                  value={form.goals} onChange={update('goals')}
                />
                <div className="flex gap-3 mt-7">
                  <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(1)}>Back</Button>
                  <Button type="button" className="flex-1" onClick={goToStep3}>Continue</Button>
                </div>
              </Reveal>
            )}

            {step === 3 && (
              <Reveal>
                <h2 className="text-2xl font-bold text-white mb-2">Confirm & Submit</h2>
                <p className="text-neutral-400 text-sm mb-6">Review your registration details.</p>
                <div className="bg-neutral-800/40 rounded-xl p-5 mb-6 space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-neutral-500">Plan</span><span className="text-white font-medium">{membershipPlans.find((p) => p.id === form.plan)?.name}</span></div>
                  <div className="flex justify-between"><span className="text-neutral-500">Name</span><span className="text-white font-medium">{form.firstName} {form.lastName}</span></div>
                  <div className="flex justify-between"><span className="text-neutral-500">Email</span><span className="text-white font-medium">{form.email}</span></div>
                  <div className="flex justify-between"><span className="text-neutral-500">Phone</span><span className="text-white font-medium">{form.phone}</span></div>
                  <div className="flex justify-between"><span className="text-neutral-500">Experience</span><span className="text-white font-medium">{form.experience}</span></div>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={terms}
                    onChange={(e) => { setTerms(e.target.checked); if (e.target.checked) setTermsError(''); }}
                    className="mt-1 accent-orange-500"
                  />
                  <label htmlFor="terms" className="text-sm text-neutral-400">
                    I agree to the Terms of Service and Privacy Policy. I understand this is a 7-day free trial and I can cancel anytime.
                  </label>
                </div>
                {termsError && (
                  <p role="alert" className="flex items-center gap-1.5 mb-4 text-sm text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0" /> {termsError}
                  </p>
                )}
                <div className="flex gap-3 mt-5">
                  <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(2)}>Back</Button>
                  <Button type="submit" className="flex-1" loading={submitting}>
                    {submitting ? 'Submitting...' : 'Complete Registration'}
                  </Button>
                </div>
              </Reveal>
            )}
          </form>
        </div>
      </section>
    </>
  );
}