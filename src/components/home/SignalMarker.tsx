interface SignalMarkerProps {
  variant?: 'dot' | 'frame';
  className?: string;
}

export default function SignalMarker({ variant = 'dot', className = '' }: SignalMarkerProps) {
  return (
    <span
      aria-hidden
      className={`signal-marker inline-block shrink-0 ${
        variant === 'frame' ? 'signal-marker--frame' : 'signal-marker--dot'
      } ${className}`}
    />
  );
}
