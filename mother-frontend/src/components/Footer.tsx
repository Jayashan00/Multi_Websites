export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper/70">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <span className="font-display text-xl font-semibold text-paper">website.lk</span>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/60">
              One platform, built in Sri Lanka, for launching and running the websites local
              businesses actually need — gyms, clinics, restaurants and more, live in days.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-paper">Platform</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/60">
              <li><a href="/templates" className="hover:text-paper">Browse templates</a></li>
              <li><a href="/#pricing" className="hover:text-paper">Pricing</a></li>
              <li><a href="/#how-it-works" className="hover:text-paper">How it works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-paper">Get in touch</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/60">
              <li>hello@website.lk</li>
              <li>Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-paper/10 pt-6 text-xs text-paper/40">
          © {new Date().getFullYear()} website.lk. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
