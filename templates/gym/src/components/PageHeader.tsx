import { Reveal } from '@/components/Reveal';
import type { ReactNode } from 'react';

type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  bgImage: string;
};

export function PageHeader({ eyebrow, title, subtitle, bgImage }: PageHeaderProps) {
  return (
    <section className="relative min-h-[340px] md:min-h-[400px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/40" />
      </div>
      <div className="container-mw relative z-10 py-16">
        <Reveal>
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight text-white text-shadow-lg max-w-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-neutral-300 max-w-2xl leading-relaxed">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
