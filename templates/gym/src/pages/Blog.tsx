import { useState } from 'react';
import { Search } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { BlogCard } from '@/components/BlogCard';
import { images, blogPosts } from '@/lib/data';

const categories = ['All', 'Training', 'Recovery', 'Nutrition', 'Cardio', 'Mobility'];

export default function Blog() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = blogPosts.filter((p) => {
    const matchCat = category === 'All' || p.category === category;
    const matchQuery =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <>
      <PageHeader
        eyebrow="Fitness Blog"
        title={<>Knowledge & <span className="text-gradient">Insights</span></>}
        subtitle="Evidence-based articles on training, nutrition, recovery, and mindset from our expert coaches."
        bgImage={images.blog2}
      />

      <section className="section-py">
        <div className="container-mw">
          {/* Search + filters */}
          <Reveal>
            <div className="flex flex-col md:flex-row gap-4 mb-10">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <label htmlFor="blog-search" className="sr-only">Search articles</label>
                <input
                  id="blog-search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="input-field pl-11"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`shrink-0 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      category === c
                        ? 'bg-orange-500 text-white'
                        : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Posts */}
          {filtered.length === 0 ? (
            <p className="text-center text-neutral-500 py-20">No articles found. Try a different search.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <Reveal key={post.id} delay={i * 60}>
                  <BlogCard post={post} to={`/blog/${post.slug}`} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}