import { useEffect, useMemo, useRef, useState } from 'react';

function isTouchDevice() {
  if (typeof window === 'undefined') return true;
  return (
    'ontouchstart' in window ||
    (navigator.maxTouchPoints ?? 0) > 0 ||
    // iPadOS Safari can report as Mac
    window.matchMedia?.('(pointer: coarse)').matches
  );
}

function matchesHoverTarget(el: Element | null) {
  if (!el) return false;
  return Boolean(
    el.closest(
      'a,button,[role="button"],input,select,textarea,summary,label,details,[data-cursor="hover"],.cursor-hover'
    )
  );
}

export default function CursorGlow() {
  const enabled = useMemo(() => {
    if (typeof window === 'undefined') return false;
    // Hide on touch devices (mobile/tablet touch)
    return !isTouchDevice();
  }, []);

  const ref = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      setHovering(matchesHoverTarget(e.target as Element | null));
    };

    const onOut = (e: MouseEvent) => {
      // When leaving an element, re-check what we're currently over
      setHovering(matchesHoverTarget((e.relatedTarget as Element | null) ?? null));
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, true);
    document.addEventListener('mouseout', onOut, true);

    // Start from center
    target.current.x = window.innerWidth / 2;
    target.current.y = window.innerHeight / 2;
    pos.current.x = target.current.x;
    pos.current.y = target.current.y;

    const loop = () => {
      const el = ref.current;
      const dot = dotRef.current;
      if (el) {
        // Smooth trailing movement (lerp)
        const speed = hovering ? 0.20 : 0.14;
        pos.current.x += (target.current.x - pos.current.x) * speed;
        pos.current.y += (target.current.y - pos.current.y) * speed;

        const x = pos.current.x;
        const y = pos.current.y;

        // Translate using CSS variables for minimal style recalcs
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        if (dot) dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver, true);
      document.removeEventListener('mouseout', onOut, true);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled, hovering]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-30">
      {/* Outer blurred glow orb */}
      <div
        ref={ref}
        className={
          'pointer-events-none fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 ' +
          (hovering ? 'h-14 w-14 opacity-90' : 'h-10 w-10 opacity-80')
        }
        style={{ willChange: 'transform' }}
      >
        <div
          className={
            'absolute inset-0 rounded-full ' +
            'bg-[radial-gradient(circle_at_30%_30%,rgba(163,230,53,0.85),rgba(16,185,129,0.32),rgba(34,197,94,0.05))]'
          }
          style={{
            boxShadow:
              '0 0 40px rgba(34,197,94,0.28), 0 0 18px rgba(163,230,53,0.18), inset 0 0 18px rgba(16,185,129,0.18)',
            filter: 'blur(0.2px)',
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: hovering
              ? '0 0 60px rgba(34,197,94,0.35), 0 0 24px rgba(163,230,53,0.22)'
              : '0 0 44px rgba(34,197,94,0.30), 0 0 18px rgba(163,230,53,0.18)',
          }}
        />
      </div>

      {/* Inner crisp dot */}
      <div
        ref={dotRef}
        className={
          'pointer-events-none fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 ' +
          (hovering ? 'h-3 w-3' : 'h-2.5 w-2.5')
        }
        style={{ willChange: 'transform' }}
      >
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-300 via-lime-300 to-green-400"
          style={{ boxShadow: '0 0 16px rgba(34,197,94,0.55)' }}
        />
      </div>
    </div>
  );
}

