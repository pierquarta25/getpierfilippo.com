'use client';

import React, { useState, useEffect, useRef } from 'react';

// Array costante fuori dal componente — evita ricreazione ad ogni render
const WORDS = ['FULL STACK DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'REACT SPECIALIST', 'SOFTWARE DEVELOPER', 'UX DEVELOPER'];

export const TypingText = () => {
  const [typedText, setTypedText] = useState(WORDS[0]);
  const [hasStarted, setHasStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const containerRef = useRef<HTMLSpanElement>(null);

  // Refs per lo stato mutabile dell'animazione (evitano re-render e dependency loop)
  const wordIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const isPausedRef = useRef(false);
  const rafIdRef = useRef<number>(0);
  const lastUpdateRef = useRef(0);

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
      isDeletingRef.current = true;
    }, 2000);
    return () => clearTimeout(initialDelay);
  }, []);

  // Logica di animazione con requestAnimationFrame
  useEffect(() => {
    if (!hasStarted || !isVisible) {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = 0;
      }
      return;
    }

    const animate = (timestamp: number) => {
      const delay = isDeletingRef.current ? 50 : 100;

      if (timestamp - lastUpdateRef.current >= delay) {
        lastUpdateRef.current = timestamp;

        if (isPausedRef.current) {
          // Non fare nulla durante la pausa
        } else {
          setTypedText((prevText) => {
            const currentWord = WORDS[wordIndexRef.current];

            if (isDeletingRef.current) {
              if (prevText.length <= 1) {
                isDeletingRef.current = false;
                wordIndexRef.current = (wordIndexRef.current + 1) % WORDS.length;
              }
              return currentWord.substring(0, prevText.length - 1);
            } else {
              if (prevText.length === currentWord.length) {
                // Pausa prima di cancellare la parola successiva
                isPausedRef.current = true;
                setTimeout(() => {
                  isDeletingRef.current = true;
                  isPausedRef.current = false;
                }, 1500);
                return prevText;
              }
              return currentWord.substring(0, prevText.length + 1);
            }
          });
        }
      }

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = 0;
      }
    };
  }, [hasStarted, isVisible]);

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
