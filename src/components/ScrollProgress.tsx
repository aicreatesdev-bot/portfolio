import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-gradient-to-r from-emerald-400 via-lime-400 to-green-500 shadow-[0_0_18px_rgba(34,197,94,0.55)]"
      style={{ scaleX }}
    />
  );
}
