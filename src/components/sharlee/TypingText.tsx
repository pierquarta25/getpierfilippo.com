'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

export const TypingText = () => {
  const words = ['FULL STACK DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'REACT SPECIALIST', 'SOFTWARE DEVELOPER', 'UX DEVELOPER'];
  const [typedText, setTypedText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const containerRef = useRef<HTMLSpanElement>(null);
  const lastUpdateRef = useRef(0);
  const rafIdRef = useRef<number>(0);

  // Ferma l'animazione quando il componente non è visibile nella viewport
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Delay iniziale prima di avviare l'animazione
  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setHasStarted(true);
      setIsDeleting(true);
    }, 2000);
    return () => clearTimeout(initialDelay);
  }, []);

  // Logica di animazione con requestAnimationFrame invece di setTimeout
  const animate = useCallback((timestamp: number) => {
    const delay = isDeleting ? 50 : 100;

    if (timestamp - lastUpdateRef.current >= delay) {
      lastUpdateRef.current = timestamp;

      setTypedText((prevText) => {
        const currentWord = words[wordIndex];

        if (isDeleting) {
          if (prevText.length <= 1) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
          return currentWord.substring(0, prevText.length - 1);
        } else {
          if (prevText.length === currentWord.length) {
            // Pausa prima di cancellare la parola successiva
            setTimeout(() => setIsDeleting(true), 1500);
            return prevText;
          }
          return currentWord.substring(0, prevText.length + 1);
        }
      });
    }

    rafIdRef.current = requestAnimationFrame(animate);
  }, [isDeleting, wordIndex, words]);

  useEffect(() => {
    if (!hasStarted || !isVisible) {
      // Se non è visibile o non è partita, cancella qualsiasi animazione in corso
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      return;
    }

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [hasStarted, isVisible, animate]);

  return (
    <span
      ref={containerRef}
      className="text-xs md:text-sm font-mono font-bold tracking-[0.3em] text-black/40 dark:text-white/30 uppercase flex items-center gap-1"
    >
      {typedText}
      <span className="w-[1px] h-4 bg-black dark:bg-white animate-caret ml-1" />
    </span>
  );
};
