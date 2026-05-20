import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

type NavItem = { label: string; href: string };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const items: NavItem[] = useMemo(
    () => [
      { label: 'Home', href: '#top' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
      { label: 'Terms', href: '#/terms' },
      { label: 'Privacy', href: '#/privacy' },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith('#/')) {
      // HashRouter expects URLs like "#/terms".
      window.location.hash = href;
      return;
    }
    // If we're on a routed page (e.g. #/terms), jump back to home then scroll.
    const onHome = window.location.hash === '' || window.location.hash === '#/' || window.location.hash === '#';
    if (!onHome && href.startsWith('#')) {
      window.location.hash = '#/';
      // allow route to render Home, then scroll
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed inset-x-0 top-0 z-40">
      <div className={cn('mx-auto max-w-6xl px-4 sm:px-6', scrolled ? 'pt-3' : 'pt-4')}>
        <div
          className={cn(
            'relative rounded-2xl border border-white/10 bg-black/35 backdrop-blur-xl',
            'shadow-[0_10px_40px_rgba(0,0,0,0.55)]',
            scrolled && 'border-emerald-500/20'
          )}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
            <button onClick={() => go('#top')} className="group flex items-center gap-2">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-black/30 ring-1 ring-emerald-500/20 shadow-[0_0_22px_rgba(34,197,94,0.18)]">
                <img
                  src="/uploads/upload_1.png"
                  alt="AI Creates logo"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold tracking-wide text-white">AI Creates</div>
                <div className="text-xs text-white/60">Premium AI Dev</div>
              </div>
            </button>

            <div className="hidden items-center gap-1 md:flex">
              {items.map((it) => (
                <button
                  key={it.href}
                  onClick={() => go(it.href)}
                  className="rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
                >
                  {it.label}
                </button>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScXGF_CyB3zGYHXbtDUY_LK1mR-rjDIkSuu91g8FBHn9cxZRA/viewform"
                target="_blank"
                rel="noreferrer"
                className="ml-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 px-4 py-2 text-sm font-semibold text-black shadow-[0_0_28px_rgba(34,197,94,0.45)] transition hover:brightness-110"
              >
                Hire Me <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 backdrop-blur transition hover:bg-white/10"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden border-t border-white/10"
              >
                <div className="grid gap-1 px-4 py-3">
                  {items.map((it) => (
                    <button
                      key={it.href}
                      onClick={() => go(it.href)}
                      className="rounded-xl px-3 py-2 text-left text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                    >
                      {it.label}
                    </button>
                  ))}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScXGF_CyB3zGYHXbtDUY_LK1mR-rjDIkSuu91g8FBHn9cxZRA/viewform"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 px-4 py-2 text-center text-sm font-semibold text-black shadow-[0_0_28px_rgba(34,197,94,0.45)]"
                  >
                    Contact
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
