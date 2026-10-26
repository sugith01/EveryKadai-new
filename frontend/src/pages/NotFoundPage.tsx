import { Link } from 'react-router-dom';
import { Home, FileQuestion } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-50 text-rose-600 border border-rose-100 mx-auto shadow-xs">
          <FileQuestion className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">404 – Page Not Found</h1>
        <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="btn-primary w-full sm:w-auto px-6 py-3 text-sm font-semibold inline-flex items-center justify-center gap-2"
          >
            <Home className="h-4 w-4" />
            <span>Go to Homepage</span>
          </Link>
          <Link
            to="/sitemap"
            className="btn-secondary w-full sm:w-auto px-6 py-3 text-slate-700 text-sm font-semibold transition text-center"
          >
            Browse Sitemap
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-100 text-xs text-slate-500">
          Looking for billing software? Check our{' '}
          <Link to="/pricing" className="text-rose-600 font-semibold hover:underline">
            Pricing Plans
          </Link>
          {' '}or{' '}
          <Link to="/gst-accounting-pc" className="text-rose-600 font-semibold hover:underline">
            Desktop App
          </Link>.
        </div>
      </div>
    </div>
  );
};
