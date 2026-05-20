import { useEffect } from 'react';
import AppRouter from './AppRouter';
import { setMeta } from './lib/seo';

export default function App() {
  useEffect(() => {
    setMeta({
      title: 'AI Creates Dev — Futuristic Portfolio',
      description:
        'Building modern websites with AI. Premium, fast, responsive websites, landing pages, portfolios, SaaS dashboards, and business sites.',
      url: window.location.href,
    });
  }, []);

  return <AppRouter />;
}
