import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { images, blogPosts } from '@/lib/data';

type Post = typeof blogPosts[number];

function BlogCardInner({ post }: { post: Post }) {
  return (
    <>
      <div className="relative h-48 overflow-hidden">
        <img
          src={images[post.image as keyof typeof images]}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold uppercase rounded-full">
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
          <span>{post.date}</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-neutral-400 leading-relaxed mb-4">{post.excerpt}</p>
        <span className="flex items-center gap-1.5 text-orange-500 text-sm font-medium">
          Read More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </>
  );
}

export function BlogCard({
  post,
  to,
  onClick,
}: {
  post: Post;
  /** Render as a link (Home preview). */
  to?: string;
  /** Render as a button that opens the article modal (Blog page). */
  onClick?: () => void;
}) {
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="card card-hover group block text-left w-full h-full">
        <BlogCardInner post={post} />
      </button>
    );
  }
  return (
    <Link to={to ?? '/blog'} className="card card-hover group block h-full">
      <BlogCardInner post={post} />
    </Link>
  );
}

export default BlogCard;