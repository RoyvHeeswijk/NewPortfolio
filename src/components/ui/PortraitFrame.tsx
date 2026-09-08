import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

interface PortraitFrameProps {
  src: string;
  alt: string;
  className?: string;
}

const LENS_RADIUS = 110;

export default function PortraitFrame({ src, alt, className = '' }: PortraitFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [plain, setPlain] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)');
    setPlain(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPlain(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const lensX = useMotionValue(-LENS_RADIUS * 2);
  const lensY = useMotionValue(-LENS_RADIUS * 2);
  const rotateX = useSpring(0, { stiffness: 140, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 140, damping: 18 });

  const lensMask = useMotionTemplate`radial-gradient(circle ${LENS_RADIUS}px at ${lensX}px ${lensY}px, #000 0%, #000 42%, transparent 76%)`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    lensX.set(x);
    lensY.set(y);
    rotateY.set((x / rect.width - 0.5) * 10);
    rotateX.set((0.5 - y / rect.height) * 10);
  };

  const handleLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  const corner = 'absolute border-primary transition-all duration-500 ease-out';
  const cornerSize = hovered ? 'w-10 h-10' : 'w-5 h-5';

  const imageClass =
    'object-cover object-[center_12%] scale-[1.03] transition-[filter] duration-700';

  return (
    <div className={className} style={{ perspective: 900 }}>
      <motion.div
        ref={frameRef}
        className="relative isolate w-44 lg:w-56 xl:w-64 2xl:w-72 aspect-[3/4] border border-border/80 overflow-hidden bg-background transition-shadow duration-500"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={{
          boxShadow: hovered
            ? '0 28px 60px -24px hsl(var(--primary) / 0.35)'
            : '0 12px 40px -20px hsl(var(--background) / 0.8)',
        }}
        transition={{ duration: 0.4 }}
        onMouseEnter={() => !plain && setHovered(true)}
        onMouseMove={plain ? undefined : handleMove}
        onMouseLeave={handleLeave}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 11rem, (max-width: 1280px) 14rem, 18rem"
          priority
          className={`${imageClass} ${
            plain ? 'saturate-[0.92] brightness-[0.96]' : 'saturate-[0.75] brightness-[0.9] contrast-[1.05]'
          }`}
        />

        {/* Editorial grade: fade into the page background and add a soft emerald cast */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-primary/10 pointer-events-none" />
        <div className="absolute inset-0 bg-primary/12 mix-blend-soft-light pointer-events-none" />
        <div className="absolute inset-0 shadow-[inset_0_0_0_1px_hsl(var(--primary)/0.15)] pointer-events-none" />

        {!plain && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ maskImage: lensMask, WebkitMaskImage: lensMask }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 11rem, (max-width: 1280px) 14rem, 18rem"
              aria-hidden="true"
              className={`${imageClass} saturate-[1.05] brightness-[1.02]`}
            />
          </motion.div>
        )}

        <span className="absolute inset-0 overflow-hidden pointer-events-none">
          <span className="absolute inset-x-0 top-0 h-full portrait-scan">
            <span className="block h-px w-full bg-primary/40" />
          </span>
        </span>

        <span aria-hidden="true" className={`${corner} ${cornerSize} left-2 top-2 border-l border-t`} />
        <span aria-hidden="true" className={`${corner} ${cornerSize} right-2 top-2 border-r border-t`} />
        <span aria-hidden="true" className={`${corner} ${cornerSize} left-2 bottom-2 border-l border-b`} />
        <span aria-hidden="true" className={`${corner} ${cornerSize} right-2 bottom-2 border-r border-b`} />
      </motion.div>
    </div>
  );
}
