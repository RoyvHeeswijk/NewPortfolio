import { useEffect, useRef, useState } from 'react';

export function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[wordIndex];
    if (!current) return;

    if (!isDeleting && text === current) {
      pauseTimeoutRef.current = setTimeout(() => setIsDeleting(true), pause);
      return () => {
        if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      };
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < current.length) setText(current.slice(0, text.length + 1));
      } else if (text.length > 0) {
        setText(current.slice(0, text.length - 1));
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, speed, pause]);

  return text;
}
