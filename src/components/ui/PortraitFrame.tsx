import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

interface PortraitFrameProps {
  src: string;
  alt: string;
  className?: string;
}

const LENS_RADIUS = 130;

export default function PortraitFrame({ src, alt, className = '' }: PortraitFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [plain, setPlain] = useState(false);

  // Pointer devices without hover (and visitors who asked for less motion)
  // get the photo in full colour with no lens or tilt.
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
    rotateY.set((x / rect.width - 0.5) * 12);
    rotateX.set((0.5 - y / rect.height) * 12);
  };

  const handleLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  const corner = 'absolute w-6 h-6 border-primary transition-all duration-500 ease-out';
  const cornerSize = hovered ? 'w-10 h-10' : 'w-6 h-6';

  return (
    <div className={className} style={{ perspective: 900 }}>
      <motion.div
        ref={frameRef}
        className="relative isolate w-44 lg:w-56 xl:w-64 2xl:w-72 aspect-[3/4] border border-border overflow-hidden transition-shadow duration-500"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={{
          boxShadow: hovered
            ? '0 25px 70px -25px hsl(var(--primary) / 0.45)'
            : '0 0 0 0 hsl(var(--primary) / 0)',
        }}
        transition={{ duration: 0.4 }}
        onMouseEnter={() => !plain && setHovered(true)}
        onMouseMove={plain ? undefined : handleMove}
        onMouseLeave={handleLeave}
      >
        {/* Base layer: greyscale photo tinted towards the accent colour */}
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 14rem, 18rem"
          priority
          className={`object-cover transition-[filter] duration-700 ${plain ? '' : 'grayscale contrast-[1.1]'}`}
        />
        {!plain && (
          <div className="absolute inset-0 bg-primary/35 mix-blend-color pointer-events-none" />
        )}

        {/* Lens: the true colours, revealed only where the cursor is */}
        {!plain && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ maskImage: lensMask, WebkitMaskImage: lensMask }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 14rem, 18rem"
              aria-hidden="true"
              className="object-cover saturate-150 brightness-110"
            />
          </motion.div>
        )}

        {/* Slow scan line to keep the frame alive without the cursor */}
        <span className="absolute inset-0 overflow-hidden pointer-events-none">
          <span className="absolute inset-x-0 top-0 h-full portrait-scan">
            <span className="block h-px w-full bg-primary/60" />
          </span>
        </span>

        {/* Corner brackets that open up on hover */}
        <span aria-hidden="true" className={`${corner} ${cornerSize} left-2 top-2 border-l border-t`} />
        <span aria-hidden="true" className={`${corner} ${cornerSize} right-2 top-2 border-r border-t`} />
        <span aria-hidden="true" className={`${corner} ${cornerSize} left-2 bottom-2 border-l border-b`} />
        <span aria-hidden="true" className={`${corner} ${cornerSize} right-2 bottom-2 border-r border-b`} />
      </motion.div>
    </div>
  );
}
