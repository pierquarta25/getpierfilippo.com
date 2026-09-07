'use client';

import React, { useState, useEffect, useRef } from 'react';

// Array costante fuori dal componente — evita ricreazione ad ogni render
const WORDS = ['FULL STACK DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'REACT SPECIALIST', 'SOFTWARE DEVELOPER', 'UX DEVELOPER'];

export const TypingText = () => {
  const [typedText, setTypedText] = useState(WORDS[0]);
  const [hasStarted, setHasStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const containerRef = useRef<HTMLSpanElement>(null);

  // Refs per lo stato mutabile (non triggerano re-render)
  const wordIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

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

  // Logica di animazione con setTimeout (più efficiente di rAF per task discreti)
  useEffect(() => {
    if (!hasStarted || !isVisible) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
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
            // Pausa di 1.5s prima di cancellare la parola
            timeoutId = setTimeout(() => {
              isDeletingRef.current = true;
              timeoutId = setTimeout(tick, 50);
            }, 1500);
            return prevText;
          }
          return currentWord.substring(0, prevText.length + 1);
        }
      });

      // Schedula il prossimo tick solo se non siamo in pausa
      const delay = isDeletingRef.current ? 50 : 100;
      timeoutId = setTimeout(tick, delay);
    };

    timeoutId = setTimeout(tick, isDeletingRef.current ? 50 : 100);

    return () => clearTimeout(timeoutId);
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
