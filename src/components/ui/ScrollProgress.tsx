import { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function ScrollProgress() {
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.set(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [scrollProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-px z-[100] origin-left bg-primary"
      style={{ scaleX: scrollProgress }}
    />
  );
}
