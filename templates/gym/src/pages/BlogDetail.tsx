import { Link, useParams } from 'react-router-dom';
import { Clock, Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { BlogCard } from '@/components/BlogCard';
import { CTASection } from '@/components/CTASection';
import { images, blogPosts } from '@/lib/data';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="section-py">
        <div className="container-mw text-center py-24">
          <h1 className="text-3xl font-bold text-white mb-4">Article not found</h1>
          <p className="text-neutral-400 mb-8">
            The article you are looking for does not exist or has been moved.
          </p>
          <Link to="/blog" className="btn-primary">
            <ArrowLeft className="w-5 h-5" /> Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);
  const fallback = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);
  const suggestions = related.length ? related : fallback;

  return (
    <>
      {/* Article hero */}
      <section className="relative min-h-[380px] md:min-h-[460px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={images[post.image as keyof typeof images]} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
        </div>
        <div className="container-mw relative z-10 py-14">
          <Reveal>
            <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold uppercase rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold uppercase leading-tight text-white max-w-3xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 mt-5 text-sm text-neutral-300">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-orange-500" /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-orange-500" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-orange-500" /> {post.readTime} read</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article body */}
      <section className="section-py">
        <div className="container-mw max-w-3xl mx-auto">
          <Reveal>
            <p className="text-lg md:text-xl text-neutral-200 leading-relaxed border-l-2 border-orange-500 pl-5 mb-10">
              {post.excerpt}
            </p>
          </Reveal>
          <div className="space-y-6">
            {post.content.map((para, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="text-neutral-400 leading-relaxed text-[17px]">{para}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="flex items-center justify-between mt-14 pt-8 border-t border-neutral-800">
              <Link to="/blog" className="btn-ghost text-orange-500">
                <ArrowLeft className="w-4 h-4" /> All Articles
              </Link>
              <Link to="/register" className="btn-primary">
                Start Training <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="section-py bg-neutral-900/30">
        <div className="container-mw">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="section-eyebrow justify-center">Keep Reading</p>
              <h2 className="section-title text-white">Related Articles</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestions.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <BlogCard post={p} to={`/blog/${p.slug}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}