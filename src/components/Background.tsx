import { useEffect, useMemo, useRef } from 'react';

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
  hue: number;
};

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useMemo(() => {
    const count = 46;
    const list: Particle[] = [];
    for (let i = 0; i < count; i++) {
      list.push({
        x: rand(0, 1000),
        y: rand(0, 1000),
        r: rand(0.8, 2.2),
        vx: rand(-0.12, 0.12),
        vy: rand(-0.12, 0.12),
        a: rand(0.12, 0.5),
        hue: rand(110, 145),
      });
    }
    return list;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let last = performance.now();

    const draw = (t: number) => {
      const dt = Math.min(40, t - last);
      last = t;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      // background
      ctx.clearRect(0, 0, w, h);

      // animated gradients
      const g1 = ctx.createRadialGradient(w * 0.25, h * 0.15, 0, w * 0.25, h * 0.15, Math.max(w, h) * 0.8);
      g1.addColorStop(0, `rgba(34,197,94,${0.12 + 0.06 * Math.sin(t / 1100)})`);
      g1.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      const g2 = ctx.createRadialGradient(w * 0.75, h * 0.35, 0, w * 0.75, h * 0.35, Math.max(w, h) * 0.75);
      g2.addColorStop(0, `rgba(16,185,129,${0.10 + 0.06 * Math.cos(t / 1400)})`);
      g2.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      // particles
      for (const p of particles) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 55%, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // subtle grid
      ctx.globalAlpha = 0.25;
      ctx.strokeStyle = 'rgba(34,197,94,0.08)';
      ctx.lineWidth = 1;
      const gap = 44;
      for (let x = 0; x < w; x += gap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [particles]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.10),transparent_55%)]" />
      <div className="absolute -top-32 left-1/2 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,197,94,0.22),rgba(16,185,129,0.0),rgba(132,204,22,0.18),rgba(34,197,94,0.22))] blur-3xl" />
    </div>
  );
}
