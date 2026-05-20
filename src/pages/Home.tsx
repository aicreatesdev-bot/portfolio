import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Instagram,
  Mail,
  MessageCircle,
  Sparkles,
  Shield,
  Lock,
  Code2,
  Layers,
  Server,
  Wand2,
  Gauge,
  LayoutGrid,
  PenTool,
  Smartphone,
  Wrench,
  UploadCloud,
} from 'lucide-react';
import Background from '../components/Background';
import Section from '../components/Section';
import ProjectModal, { Project } from '../components/ProjectModal';

type Skill = {
  key: string;
  title: string;
  icon: React.ReactNode;
  level: number;
  blurb: string;
};

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
      style={{ transformStyle: 'preserve-3d' }}
      whileHover={{ y: -6, rotateX: 6, rotateY: -6 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(34,197,94,0.22),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex items-start gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-400/25 text-emerald-200 shadow-[0_0_30px_rgba(34,197,94,0.14)]">
          {skill.icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <div className="truncate text-base font-semibold text-white">{skill.title}</div>
            <div className="text-xs font-semibold text-white/60">{skill.level}%</div>
          </div>
          <p className="mt-1 text-sm text-white/70">{skill.blurb}</p>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-black/40 ring-1 ring-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-lime-400 to-green-500 shadow-[0_0_18px_rgba(34,197,94,0.35)]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [active, setActive] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Contact is handled via embedded Google Form.

  const skills: Skill[] = useMemo(
    () => [
      {
        key: 'ai',
        title: 'AI Web Development',
        icon: <Wand2 className="h-5 w-5" />,
        level: 96,
        blurb: 'AI-powered workflows for speed, quality, and iteration.' ,
      },
      {
        key: 'front',
        title: 'Frontend Development',
        icon: <LayoutGrid className="h-5 w-5" />,
        level: 92,
        blurb: 'Modern UI, motion, micro-interactions, and responsive layouts.',
      },
      {
        key: 'back',
        title: 'Backend Development',
        icon: <Server className="h-5 w-5" />,
        level: 88,
        blurb: 'APIs, auth-ready patterns, and scalable data flows.',
      },
      {
        key: 'full',
        title: 'Full Stack Apps',
        icon: <Layers className="h-5 w-5" />,
        level: 90,
        blurb: 'From concept to production: DB, API routes, UI, and deployment.',
      },
      {
        key: 'saas',
        title: 'SaaS Dashboards',
        icon: <Gauge className="h-5 w-5" />,
        level: 86,
        blurb: 'Data-rich dashboards with premium UX and secure patterns.',
      },
      {
        key: 'landing',
        title: 'Landing Pages',
        icon: <Sparkles className="h-5 w-5" />,
        level: 94,
        blurb: 'Conversion-focused landing pages with strong performance.',
      },
      {
        key: 'port',
        title: 'Portfolio Websites',
        icon: <Code2 className="h-5 w-5" />,
        level: 93,
        blurb: 'High-end personal brands with narrative + credibility.',
      },
      {
        key: 'biz',
        title: 'Business Websites',
        icon: <Shield className="h-5 w-5" />,
        level: 90,
        blurb: 'Modern websites for local businesses and global brands.',
      },
      {
        key: 'ui',
        title: 'UI/UX Design',
        icon: <PenTool className="h-5 w-5" />,
        level: 87,
        blurb: 'Clean UI, readable hierarchy, and premium interaction design.',
      },
      {
        key: 'resp',
        title: 'Responsive Design',
        icon: <Smartphone className="h-5 w-5" />,
        level: 95,
        blurb: 'Mobile-first design that still feels premium on desktop.',
      },
      {
        key: 'deploy',
        title: 'GitHub Deployment',
        icon: <UploadCloud className="h-5 w-5" />,
        level: 85,
        blurb: 'Clean repos, Vercel deploys, and maintainable workflows.',
      },
      {
        key: 'maint',
        title: 'Website Maintenance',
        icon: <Wrench className="h-5 w-5" />,
        level: 83,
        blurb: 'Updates, improvements, optimizations, and ongoing support.',
      },
    ],
    []
  );

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      const mapped: Project[] = Array.isArray(data)
        ? data.map((p: any) => ({
            ...p,
            tech: Array.isArray(p.tech) ? p.tech : safeJsonArray(p.tech),
          }))
        : [];
      setProjects(mapped);
    } catch (err) {
      console.error('Fetch error:', err);
      setProjects([]);
    } finally {
      setLoadingProjects(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const openProject = (p: Project) => {
    setActive(p);
    setModalOpen(true);
  };

  // (legacy) direct form submission removed per request.

  return (
    <div id="top" className="relative min-h-screen bg-[#050806] text-white">
      <Background />

      {/* HERO */}
      <header className="relative pt-28 sm:pt-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.9, 0.2, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
                AI Creates Dev • Futuristic Premium Builds
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                <span className="bg-gradient-to-r from-white via-emerald-100 to-lime-200 bg-clip-text text-transparent">
                  Building Modern Websites With AI
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg">
                I create fast, responsive, premium websites, landing pages, portfolios, SaaS dashboards, and business
                websites using AI-powered full stack development.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-400 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_34px_rgba(34,197,94,0.45)] transition hover:brightness-110"
                >
                  View Projects <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScXGF_CyB3zGYHXbtDUY_LK1mR-rjDIkSuu91g8FBHn9cxZRA/viewform"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" /> Contact Me
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <SocialChip href="https://www.instagram.com/web.ai.create/" icon={<Instagram className="h-4 w-4" />} label="Instagram" />
                <SocialChip href="https://github.com/aicreatesdev-bot" icon={<Github className="h-4 w-4" />} label="GitHub" />
                <SocialChip href="https://discord.gg/jean9SywWk" icon={<MessageCircle className="h-4 w-4" />} label="Discord" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.05, ease: [0.2, 0.9, 0.2, 1] }}
              className="relative"
            >
              <div className="absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(34,197,94,0.25),transparent_60%)] blur-2xl" />

              <motion.div
                className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ rotateX: 6, rotateY: -10, y: -8 }}
                transition={{ type: 'spring', stiffness: 150, damping: 16 }}
              >
                <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,197,94,0.24),rgba(16,185,129,0.0),rgba(132,204,22,0.20),rgba(34,197,94,0.24))] opacity-70" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-white/80">AI Creates • Live Build Panel</div>
                    <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70">v2026</div>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <StatRow label="Performance" value="Fast" pct={92} />
                    <StatRow label="Animations" value="Smooth" pct={96} />
                    <StatRow label="UX" value="Premium" pct={94} />
                    <StatRow label="Conversion" value="High" pct={90} />
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <GlassTile title="3D Cards" subtitle="Depth + glow" />
                    <GlassTile title="Particles" subtitle="Subtle motion" />
                    <GlassTile title="Scroll Reveal" subtitle="Section transitions" />
                    <GlassTile title="Modal Projects" subtitle="No redirects" />
                  </div>
                </div>
              </motion.div>

              {/* floating shapes */}
              <FloatingShape className="-right-4 -top-8 -z-10" delay={0.1} size={120} />
              <FloatingShape className="-left-8 top-20 -z-10" delay={0.35} size={140} />
              <FloatingShape className="right-10 -bottom-12 -z-10" delay={0.2} size={160} />
            </motion.div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <div className="mt-20 sm:mt-28">
        <Section
          id="about"
          eyebrow="About"
          title="AI-powered full stack web developer"
          subtitle="Professional, clean UI. Premium motion. Fast performance."
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <p className="text-base leading-relaxed text-white/75">
                I’m an AI full stack web developer who helps businesses, creators, restaurants, gyms, shops, startups,
                and personal brands get online with modern, responsive, and high-converting websites. I focus on clean
                UI, smooth animations, fast performance, and professional user experience.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <MiniStat label="Build speed" value="Ultra" />
                <MiniStat label="Quality" value="Premium" />
                <MiniStat label="Support" value="Reliable" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative"
              style={{ perspective: 1200 }}
            >
              <motion.div
                whileHover={{ rotateX: 8, rotateY: -10, y: -10 }}
                transition={{ type: 'spring', stiffness: 140, damping: 14 }}
                className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(34,197,94,0.18),0_20px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_0%,rgba(34,197,94,0.25),transparent_60%)]" />
                <div className="relative flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                    <img
                      src="/uploads/upload_1.png"
                      alt="AI Creates profile"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 ring-1 ring-emerald-400/30" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">AI Creates Dev</div>
                    <div className="text-sm text-white/65">Futuristic freelancer portfolio</div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <BadgeLine label="Design" value="Glassmorphism + Neon" />
                  <BadgeLine label="Stack" value="Vite • React • Tailwind • Supabase" />
                  <BadgeLine label="Delivery" value="Fast iterations • Clean handoff" />
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/35 p-4">
                  <div className="text-xs font-semibold tracking-wide text-white/60">Speciality</div>
                  <div className="mt-1 text-sm text-white/80">Premium websites that look expensive — and load fast.</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Section>
      </div>

      {/* SKILLS */}
      <div className="mt-16 sm:mt-22">
        <Section
          id="skills"
          eyebrow="Skills"
          title="What I build"
          subtitle="Modern frontend + backend + AI workflow — designed to convert."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <SkillCard key={s.key} skill={s} />
            ))}
          </div>
        </Section>
      </div>

      {/* PROJECTS */}
      <div className="mt-16 sm:mt-22">
        <Section
          id="projects"
          eyebrow="Work"
          title="My Projects"
          subtitle="Click any project to open details in a premium modal — no redirects."
        >
          {loadingProjects ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[240px] animate-pulse rounded-3xl border border-white/10 bg-white/[0.04]"
                />
              ))}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,197,94,0.20),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-lg font-semibold text-white">{p.name}</div>
                        <div className="mt-1 inline-flex rounded-full border border-emerald-500/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                          {p.category}
                        </div>
                      </div>
                      <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-500/25 to-lime-400/10 ring-1 ring-emerald-400/20" />
                    </div>

                    <p className="mt-3 text-sm text-white/70">{p.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.slice(0, 4).map((t) => (
                        <span key={t} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/75">
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => openProject(p)}
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-400 px-4 py-3 text-sm font-semibold text-black shadow-[0_0_28px_rgba(34,197,94,0.38)] transition hover:brightness-110"
                    >
                      View Details <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <ProjectModal open={modalOpen} project={active} onClose={() => setModalOpen(false)} />
        </Section>
      </div>

      {/* CONTACT */}
      <div className="mt-16 sm:mt-22 pb-16 sm:pb-24">
        <Section
          id="contact"
          eyebrow="Contact"
          title="Let’s build something premium"
          subtitle="Fill out the Google Form — premium, responsive, and fast."
        >
          <div className="grid gap-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.04 }}
              className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-gradient-to-b from-white/10 to-white/[0.04] p-4 sm:p-5 shadow-[0_0_0_1px_rgba(34,197,94,0.18),0_24px_110px_rgba(0,0,0,0.65)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_0%,rgba(34,197,94,0.22),transparent_60%)]" />
              <div className="absolute -inset-20 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,197,94,0.18),rgba(16,185,129,0.0),rgba(132,204,22,0.14),rgba(34,197,94,0.18))] opacity-55 blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold text-white">Google Form</div>
                    <p className="mt-1 text-sm text-white/70">
                      Prefer a guided form? Fill this out — it opens right here and works on any device.
                    </p>
                  </div>
                  <div className="hidden h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-500/25 to-lime-400/10 ring-1 ring-emerald-400/20 sm:block" />
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_0_30px_rgba(34,197,94,0.10)]">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(34,197,94,0.16),transparent_55%)]" />
                    <iframe
                      title="AI Creates Google Form"
                      src="https://docs.google.com/forms/d/e/1FAIpQLScXGF_CyB3zGYHXbtDUY_LK1mR-rjDIkSuu91g8FBHn9cxZRA/viewform?embedded=true"
                      className="relative block h-[980px] w-full"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScXGF_CyB3zGYHXbtDUY_LK1mR-rjDIkSuu91g8FBHn9cxZRA/viewform"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                  >
                    Open in new tab <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-400 px-4 py-3 text-sm font-semibold text-black shadow-[0_0_28px_rgba(34,197,94,0.35)] transition hover:brightness-110"
                  >
                    View projects <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>

      <div className="pb-24" />

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/40 py-10 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-2xl border border-white/10 bg-black/30 ring-1 ring-emerald-500/20 shadow-[0_0_24px_rgba(34,197,94,0.18)]">
                  <img src="/uploads/upload_1.png" alt="AI Creates logo" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div>
                  <div className="text-base font-semibold">AI Creates</div>
                  <div className="text-sm text-white/65">Premium futuristic websites with AI</div>
                </div>
              </div>
              <div className="mt-3 text-sm text-white/60">© 2026 AI Creates. All rights reserved.</div>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-2 text-sm text-white/60 md:justify-end">
              <FooterTextLink href="https://www.instagram.com/web.ai.create/" label="Instagram" />
              <FooterTextLink href="https://github.com/aicreatesdev-bot" label="GitHub" />
              <FooterTextLink href="https://discord.gg/jean9SywWk" label="Discord" />
              <FooterTextLink href="#/terms" label="Terms" />
              <FooterTextLink href="#/privacy" label="Privacy" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function safeJsonArray(v: any): string[] {
  if (!v) return [];
  if (Array.isArray(v)) return v.map(String);
  try {
    const parsed = JSON.parse(v);
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

function SocialChip({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:border-emerald-500/25 hover:bg-white/10"
    >
      <span className="text-emerald-200">{icon}</span>
      {label}
    </a>
  );
}

function StatRow({ label, value, pct }: { label: string; value: string; pct: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
      <div className="flex items-center justify-between text-sm">
        <div className="text-white/70">{label}</div>
        <div className="font-semibold text-white/90">{value}</div>
      </div>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-black/40 ring-1 ring-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-lime-400 to-green-500 shadow-[0_0_18px_rgba(34,197,94,0.35)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function GlassTile({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
      <div className="text-sm font-semibold text-white/90">{title}</div>
      <div className="mt-1 text-xs text-white/60">{subtitle}</div>
    </div>
  );
}

function FloatingShape({ className, delay, size }: { className: string; delay: number; size: number }) {
  return (
    <motion.div
      className={
        'pointer-events-none absolute rounded-[40px] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 to-lime-400/5 blur-[0px] ' +
        className
      }
      style={{ width: size, height: size }}
      animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
      <div className="text-xs font-semibold tracking-wide text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white/90">{value}</div>
    </div>
  );
}

function BadgeLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3">
      <div className="text-xs font-semibold tracking-wide text-white/60">{label}</div>
      <div className="text-sm font-semibold text-white/90">{value}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold tracking-wide text-white/60">{label}</span>
      {children}
    </label>
  );
}

function LinkRow({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-white/80 transition hover:border-emerald-500/25 hover:bg-black/45"
    >
      <div className="flex items-center gap-2">
        <span className="text-emerald-200">{icon}</span>
        {label}
      </div>
      <ArrowUpRight className="h-4 w-4 text-white/50" />
    </a>
  );
}

function LegalCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,197,94,0.14),transparent_60%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}

function LegalBlock({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
        <span className="text-emerald-200">{icon}</span>
        {title}
      </div>
      <div className="mt-2 text-sm text-white/70">{children}</div>
    </div>
  );
}

function FooterTextLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        if (href.startsWith('#')) {
          e.preventDefault();
          if (href.startsWith('#/')) {
            // HashRouter expects URLs like "#/terms".
            window.location.hash = href;
            return;
          }
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="underline-offset-4 transition hover:text-white hover:underline"
    >
      {label}
    </a>
  );
}
