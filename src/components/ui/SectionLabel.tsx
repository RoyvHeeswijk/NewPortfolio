import { motion } from 'framer-motion';
import Rule from './Rule';

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export default function SectionLabel({ number, label, className = '' }: SectionLabelProps) {
  return (
    <div className={`mb-10 ${className}`}>
      <motion.p
        className="font-mono text-xs uppercase tracking-label text-primary mb-4"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {number} — {label}
      </motion.p>
      <Rule />
    </div>
  );
}
