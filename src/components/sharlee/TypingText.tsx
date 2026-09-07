'use client';

import React, { useState, useEffect, useRef } from 'react';

// Array costante fuori dal componente — evita ricreazione ad ogni render
const WORDS = ['FULL STACK DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'REACT SPECIALIST', 'SOFTWARE DEVELOPER', 'UX DEVELOPER'];

export const TypingText = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const containerRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  
  // Refs per lo stato mutabile (non triggerano re-render)
  const wordIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const currentTextRef = useRef(WORDS[0]); // Tiene traccia del testo corrente

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

  // Logica di animazione con setTimeout e mutazione diretta del DOM per massimizzare le performance
  useEffect(() => {
    if (!hasStarted || !isVisible || !textRef.current) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const prevText = currentTextRef.current;
      const currentWord = WORDS[wordIndexRef.current];
      let newText = prevText;

      if (isDeletingRef.current) {
        if (prevText.length <= 1) {
          isDeletingRef.current = false;
          wordIndexRef.current = (wordIndexRef.current + 1) % WORDS.length;
        }
        newText = currentWord.substring(0, prevText.length - 1);
      } else {
        if (prevText.length === currentWord.length) {
          // Pausa di 1.5s prima di cancellare la parola
          timeoutId = setTimeout(() => {
            isDeletingRef.current = true;
            timeoutId = setTimeout(tick, 50);
          }, 1500);
          return;
        }
        newText = currentWord.substring(0, prevText.length + 1);
      }

      currentTextRef.current = newText;
      if (textRef.current) {
        textRef.current.textContent = newText;
      }

      // Schedula il prossimo tick
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
      <span ref={textRef}>{WORDS[0]}</span>
      <span className="w-[1px] h-4 bg-black dark:bg-white animate-caret ml-1" />
    </span>
  );
};
