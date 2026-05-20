import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050806] text-white">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-white/70">The page you’re looking for doesn’t exist.</p>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/';
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-400 px-5 py-3 text-sm font-semibold text-black"
        >
          <ArrowLeft className="h-4 w-4" /> Back Home
        </a>
      </div>
    </div>
  );
}
