import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Check, Send, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { TextField, TextAreaField, SelectField } from '@/components/FormField';
import { images, socialLinks } from '@/lib/data';
import {
  validateName, validateEmail, validatePhone, validateMessage, hasErrors, type Errors,
} from '@/lib/validation';

const socialIcons = { Instagram, Facebook, Twitter, Youtube } as const;

const subjects = ['General Inquiry', 'Membership Question', 'Personal Training', 'Corporate Plans', 'Feedback'];

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: subjects[0],
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const validate = (data = form): Errors => ({
    firstName: validateName('First name', data.firstName),
    lastName: validateName('Last name', data.lastName),
    email: validateEmail(data.email),
    phone: validatePhone(data.phone),
    message: validateMessage(data.message, 10),
  });

  const update = (key: keyof typeof form) => (value: string) => {
    const nextForm = { ...form, [key]: value };
    setForm(nextForm);
    if (touched[key]) setErrors(validate(nextForm));
  };

  const blur = (key: keyof typeof form) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setTouched({ firstName: true, lastName: true, email: true, phone: true, message: true });
    if (hasErrors(nextErrors)) {
      document.querySelector('[aria-invalid="true"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 1400);
  };

  const reset = () => {
    setForm(initialForm);
    setErrors({});
    setTouched({});
    setDone(false);
  };

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title={<>Contact <span className="text-gradient">Us</span></>}
        subtitle="Questions about membership, training, or just want to say hi? We would love to hear from you."
        bgImage={images.facilityInterior}
      />

      <section className="section-py">
        <div className="container-mw grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Visit IronCore</h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, title: 'Location', lines: ['123 Fitness Avenue', 'Downtown District, Metro City 10001'] },
                  { icon: Phone, title: 'Phone', lines: ['(555) 123-4567', 'Mon - Sun'] },
                  { icon: Mail, title: 'Email', lines: ['hello@ironcore.fit', 'We reply within 24 hours'] },
                  { icon: Clock, title: 'Hours', lines: ['Mon - Fri: 5:00 AM - 11:00 PM', 'Sat - Sun: 7:00 AM - 9:00 PM'] },
                ].map((info) => (
                  <div key={info.title} className="flex items-start gap-4 p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
                    <span className="flex items-center justify-center w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-lg text-orange-500 shrink-0">
                      <info.icon className="w-6 h-6" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                      {info.lines.map((l) => (
                        <p key={l} className="text-sm text-neutral-400">{l}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-6 p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
                <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {socialLinks.map((s) => {
                    const Icon = socialIcons[s.name as keyof typeof socialIcons];
                    return (
                        <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg border border-neutral-800 hover:border-orange-500/60 hover:bg-neutral-800/40 transition-colors group">
                        <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-lg text-orange-500 shrink-0">
                          <Icon className="w-5 h-5" />
                        </span>
                        <span>
                          <span className="block text-sm font-medium text-white group-hover:text-orange-500 transition-colors">{s.name}</span>
                          <span className="block text-xs text-neutral-500">{s.handle}</span>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-800">
                <iframe
                  title="IronCore Fitness location"
                  src="https://www.google.com/maps?q=Colombo,Sri+Lanka&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0, filter: 'grayscale(30%) invert(92%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={150}>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
              {done ? (
                <div className="card p-10 text-center">
                  <div className="flex items-center justify-center w-20 h-20 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 mx-auto mb-6 animate-float">
                    <Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-neutral-400 mb-6">Thanks for reaching out. Our team will get back to you within 24 hours.</p>
                  <Button variant="outline" onClick={reset}>Send Another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="card p-7 md:p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <TextField
                      id="firstName" label="First Name" required placeholder="John"
                      value={form.firstName} error={errors.firstName}
                      onChange={update('firstName')} onBlur={blur('firstName')}
                    />
                    <TextField
                      id="lastName" label="Last Name" required placeholder="Doe"
                      value={form.lastName} error={errors.lastName}
                      onChange={update('lastName')} onBlur={blur('lastName')}
                    />
                  </div>
                  <TextField
                    id="email" label="Email" type="email" required placeholder="john@example.com"
                    value={form.email} error={errors.email}
                    onChange={update('email')} onBlur={blur('email')}
                  />
                  <TextField
                    id="phone" label="Phone" type="tel" required placeholder="(555) 123-4567"
                    value={form.phone} error={errors.phone}
                    onChange={update('phone')} onBlur={blur('phone')}
                  />
                  <SelectField
                    id="subject" label="Subject" value={form.subject}
                    options={subjects} onChange={update('subject')}
                  />
                  <TextAreaField
                    id="message" label="Message" required rows={5}
                    placeholder="How can we help you?"
                    value={form.message} error={errors.message}
                    onChange={update('message')} onBlur={blur('message')}
                  />
                  <Button type="submit" fullWidth loading={submitting}>
                    {submitting ? 'Sending...' : (<><Send className="w-5 h-5" /> Send Message</>)}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}