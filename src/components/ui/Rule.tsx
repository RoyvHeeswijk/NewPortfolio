import { motion } from 'framer-motion';

interface RuleProps {
  className?: string;
}

export default function Rule({ className = '' }: RuleProps) {
  return (
    <motion.div
      className={`hairline w-full origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
