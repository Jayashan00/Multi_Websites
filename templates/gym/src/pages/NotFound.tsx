import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center container-mw">
      <div className="text-center">
        <div className="text-8xl md:text-9xl font-bold text-gradient mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-neutral-400 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. Let us get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Home className="w-5 h-5" /> Back to Home
          </Link>
          <Link to="/programs" className="btn-outline">
            <ArrowLeft className="w-5 h-5" /> Browse Programs
          </Link>
        </div>
      </div>
    </div>
  );
}
