import { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';

interface MaskedTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
}

const wordVariants: Variants = {
  hidden: { y: '110%' },
  visible: { y: 0 },
};

export default function MaskedText({ text, className = '', as: Tag = 'h1', delay = 0 }: MaskedTextProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const words = text.split(' ');

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (reducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  // The trigger lives on the heading itself: the inner spans are clipped by
  // overflow-hidden, so an observer on them would never report as in view.
  const MotionTag = motion[Tag] as typeof motion.h1;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] mr-[0.25em] last:mr-0">
          <motion.span
            className="inline-block"
            variants={wordVariants}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
