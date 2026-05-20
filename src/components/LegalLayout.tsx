import { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import Background from './Background';
import { setMeta } from '../lib/seo';

export default function LegalLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  useEffect(() => {
    setMeta({
      title: `${title} — AI Creates Dev`,
      description: subtitle,
      url: window.location.href,
    });
  }, [title, subtitle]);

  return (
    <div className="relative min-h-screen bg-[#050806] text-white">
      <Background />
      <div className="mx-auto max-w-4xl px-4 pb-10 pt-28 sm:px-6 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
            Legal
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
          <p className="mt-3 text-base text-white/70">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.2, 0.9, 0.2, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,197,94,0.14),transparent_60%)]" />
          <div className="relative prose prose-invert max-w-none leading-relaxed prose-p:text-white/75 prose-p:leading-relaxed prose-p:my-4 prose-li:text-white/75 prose-li:my-1 prose-strong:text-white prose-headings:text-white prose-headings:tracking-tight">
            {children}
          </div>
        </motion.div>

        <footer className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="font-semibold text-white/80">AI Creates</span>
              <span className="mx-2 text-white/35">/</span>
              <span>© 2026</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                className="underline-offset-4 transition hover:text-white hover:underline"
                href="https://www.instagram.com/web.ai.create/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="underline-offset-4 transition hover:text-white hover:underline"
                href="https://github.com/aicreatesdev-bot"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="underline-offset-4 transition hover:text-white hover:underline"
                href="https://discord.gg/jean9SywWk"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
              <div className="hidden h-4 w-px bg-white/10 sm:block" />
              <a
                className="underline-offset-4 transition hover:text-white hover:underline"
                href="#/terms"
              >
                Terms
              </a>
              <a
                className="underline-offset-4 transition hover:text-white hover:underline"
                href="#/privacy"
              >
                Privacy
              </a>
              <a
                className="underline-offset-4 transition hover:text-white hover:underline"
                href="#/"
              >
                Home
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
