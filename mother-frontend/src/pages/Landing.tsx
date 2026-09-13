import { Link } from 'react-router-dom';
import { TopNav } from '../components/TopNav';
import { Footer } from '../components/Footer';
import { ArrowUpRight, MessageCircle, Palette, Rocket, Image as ImageIcon } from 'lucide-react';

const TEMPLATE_CARDS = [
  { name: 'Gym & Fitness', rotate: '-rotate-6', translate: 'translate-x-0 -translate-y-2', img: 'https://images.pexels.com/photos/17956264/pexels-photo-17956264.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Hospital & Clinic', rotate: 'rotate-2', translate: 'translate-x-10 translate-y-4', img: '/thumbnails/hospital.jpg' },
  { name: 'Restaurant', rotate: 'rotate-[10deg]', translate: 'translate-x-24 -translate-y-6', img: '/thumbnails/restaurant.jpg' },
];

export function Landing() {
  return (
    <div className="min-h-screen bg-paper">
      <TopNav />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-medium text-brass-700">For businesses across Sri Lanka</p>
            <h1 className="mt-4 max-w-xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
              One studio.<br />Every business,<br />its own website.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
              Pick a template built for what you do — a gym, a clinic, a restaurant — and make it
              yours: your name, your photos, your colours, your WhatsApp number. Live in days, not months.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/templates"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition hover:bg-ink-soft"
              >
                Browse templates
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/register" className="text-sm font-semibold text-ink/70 hover:text-ink">
                Create your account
              </Link>
            </div>
          </div>

          {/* Layered "many sites, one platform" visual */}
          <div className="relative h-[340px] sm:h-[400px]">
            {TEMPLATE_CARDS.map((card, i) => (
              <div
                key={card.name}
                className={`absolute left-0 top-0 w-64 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_30px_60px_-20px_rgba(11,31,28,0.35)] transition-transform ${card.rotate} ${card.translate}`}
                style={{ zIndex: i }}
              >
                <div className="flex items-center gap-1.5 border-b border-ink/5 bg-ink/[0.03] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-ink/15" />
                  <span className="h-2 w-2 rounded-full bg-ink/15" />
                  <span className="h-2 w-2 rounded-full bg-ink/15" />
                  <span className="ml-2 truncate text-[10px] text-ink/40">website.lk/{card.name.toLowerCase().split(' ')[0]}</span>
                </div>
                <img src={card.img} alt={card.name} className="h-40 w-full object-cover" />
                <div className="px-3 py-2.5">
                  <p className="text-xs font-semibold text-ink">{card.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-ink/10 bg-ink py-20 text-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="max-w-lg font-display text-3xl font-medium tracking-tight sm:text-4xl">
            From choosing a template to going live
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            <div>
              <Palette className="h-6 w-6 text-brass-400" />
              <h3 className="mt-4 font-display text-xl font-medium">Choose &amp; customise</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                Pick a template for your industry, then set your name, logo, photos and brand colour
                right from your dashboard — no code, no designer needed.
              </p>
            </div>
            <div>
              <MessageCircle className="h-6 w-6 text-brass-400" />
              <h3 className="mt-4 font-display text-xl font-medium">Connect WhatsApp</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                Add your WhatsApp number once. Every visitor gets a one-tap button straight to your
                chat, with a message you write.
              </p>
            </div>
            <div>
              <Rocket className="h-6 w-6 text-brass-400" />
              <h3 className="mt-4 font-display text-xl font-medium">Publish</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                When it looks right, publish it. Need a new page or section later? Add it any time —
                your site keeps growing with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-ink/10 bg-white p-8">
            <ImageIcon className="h-6 w-6 text-flame" />
            <h3 className="mt-4 font-display text-xl font-medium text-ink">Your own photos and video</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              Upload your own hero image or video, your logo, and gallery photos — every template
              is built to hold real content from day one, not stock placeholders.
            </p>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white p-8">
            <Palette className="h-6 w-6 text-flame" />
            <h3 className="mt-4 font-display text-xl font-medium text-ink">A colour palette that's actually yours</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              Pick one brand colour and the whole site — buttons, headings, accents — adjusts to
              match, generated automatically into a full palette.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-ink/10 bg-brass-50 py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Straightforward pricing
          </h2>
          <p className="mt-4 text-ink/65">
            One plan while we're in early access: pick any template, customise it fully, and publish.
            Talk to us about ongoing hosting and support for your business.
          </p>
          <Link
            to="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-flame px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-flame/90"
          >
            Start building your site
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
