import { useState } from 'react';
import { Star, Play } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Modal } from '@/components/Modal';
import { images, testimonials, videoTestimonials } from '@/lib/data';

export default function Testimonials() {
  const [video, setVideo] = useState<typeof videoTestimonials[number] | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Member Stories"
        title={<>What Members <span className="text-gradient">Say</span></>}
        subtitle="Do not just take our word for it. Hear from the people who call IronCore their second home."
        bgImage={images.heroBike}
      />

      <section className="section-py">
        <div className="container-mw">
          {/* Rating summary */}
          <Reveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-14 p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient">4.9</div>
                <div className="flex items-center justify-center gap-1 mt-1 text-orange-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-neutral-800" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2,400+ Reviews</div>
                <p className="text-sm text-neutral-400 mt-1">Across Google, Yelp, and our app</p>
              </div>
            </div>
          </Reveal>

          {/* Success stories slider */}
          <Reveal>
            <div className="mb-20">
              <p className="section-eyebrow justify-center w-full text-center">Success Stories</p>
              <TestimonialSlider />
            </div>
          </Reveal>

          {/* Video testimonials */}
          <Reveal>
            <div className="text-center mb-10">
              <p className="section-eyebrow justify-center">Watch Their Stories</p>
              <h2 className="section-title text-white">Video Testimonials</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {videoTestimonials.map((v, i) => (
              <Reveal key={v.id} delay={i * 80}>
                <button onClick={() => setVideo(v)} className="card card-hover group block w-full text-left">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={images[v.thumb as keyof typeof images]}
                      alt={v.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </span>
                    </span>
                    <span className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-xs text-white">
                      {v.duration}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white">{v.name}</h3>
                    <p className="text-sm text-neutral-400 mt-1">{v.result}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Rating cards grid */}
          <Reveal>
            <div className="text-center mb-10">
              <p className="section-eyebrow justify-center">Member Reviews</p>
              <h2 className="section-title text-white">All Reviews</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={i * 80}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video modal (UI only) */}
      <Modal
        open={!!video}
        onClose={() => setVideo(null)}
        title={video ? `${video.name} video testimonial` : undefined}
        maxWidth="max-w-3xl"
      >
        {video && (
          <>
            <div className="aspect-video bg-black">
              <video
                src="https://cdn.coverr.co/videos/coverr-a-man-lifting-weights-in-the-gym-4243/1080p.mp4"
                poster={images[video.thumb as keyof typeof images]}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{video.name}</h3>
              <p className="text-sm text-neutral-400 mt-1">{video.result}</p>
            </div>
          </>
        )}
      </Modal>

      <CTASection />
    </>
  );
}