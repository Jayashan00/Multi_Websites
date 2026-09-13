import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative section-py overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/896058/pexels-photo-896058.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/70" />
      </div>
      <div className="container-mw relative z-10 text-center max-w-3xl mx-auto">
        <p className="section-eyebrow justify-center">Start Today</p>
        <h2 className="section-title text-white mb-5">
          Your Transformation <span className="text-gradient">Begins Now</span>
        </h2>
        <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
          Join 5,000+ members who decided to invest in themselves. Get a free 7-day trial, a complimentary fitness assessment, and your first class on us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register" className="btn-primary">
            Claim Your Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/membership" className="btn-outline">
            View Membership Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
