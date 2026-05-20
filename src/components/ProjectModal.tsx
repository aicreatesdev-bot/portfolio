import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Layers, Sparkles } from 'lucide-react';

export type Project = {
  id: number;
  name: string;
  category: string;
  description: string;
  tech: string[];
  preview_image_url: string | null;
  details: string;
};

export default function ProjectModal({
  open,
  project,
  onClose,
}: {
  open: boolean;
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            aria-label="Close"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.2, 0.9, 0.2, 1] }}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-[0_30px_120px_rgba(0,0,0,0.7)] backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,197,94,0.22),transparent_55%)]" />
            <div className="relative grid gap-0 lg:grid-cols-[1.3fr_1fr]">
              <div className="relative p-5 sm:p-6">
                <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-black/50 shadow-[0_0_0_1px_rgba(34,197,94,0.14),0_0_40px_rgba(34,197,94,0.08)]">
                  <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,197,94,0.28),rgba(16,185,129,0.0),rgba(132,204,22,0.22),rgba(34,197,94,0.28))] opacity-70" />
                  <div className="relative aspect-[16/10]">
                    {project.preview_image_url ? (
                      <img
                        src={project.preview_image_url}
                        alt={`${project.name} preview`}
                        className="h-full w-full object-cover opacity-90"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-white/60">
                        <Sparkles className="mr-2 h-5 w-5" /> Preview
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <InfoPill icon={<Layers className="h-4 w-4" />} label="Category" value={project.category} />
                  <InfoPill icon={<Cpu className="h-4 w-4" />} label="Stack" value={project.tech.slice(0, 3).join(' • ')} />
                  <InfoPill icon={<Sparkles className="h-4 w-4" />} label="Focus" value="Speed • UX • Conversion" />
                </div>
              </div>

              <div className="relative p-5 sm:p-6">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 rounded-xl border border-white/10 bg-black/30 p-2 text-white/80 transition hover:bg-black/45"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
                  Project Details
                </div>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{project.name}</h3>
                <p className="mt-2 text-sm text-white/70">{project.description}</p>

                <div className="mt-5">
                  <div className="text-xs font-semibold tracking-wide text-white/60">Tech Used</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-xs font-semibold tracking-wide text-white/60">What I delivered</div>
                  <p className="mt-2 whitespace-pre-wrap text-sm text-white/75">{project.details}</p>
                </div>

                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      setTimeout(() => {
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 50);
                    }}
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-400 px-4 py-3 text-sm font-semibold text-black shadow-[0_0_28px_rgba(34,197,94,0.42)] transition hover:brightness-110"
                  >
                    Build something like this
                  </a>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function InfoPill({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur">
      <div className="flex items-center gap-2 text-xs text-white/60">
        <span className="text-emerald-300">{icon}</span>
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-white/90">{value}</div>
    </div>
  );
}
