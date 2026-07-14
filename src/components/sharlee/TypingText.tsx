'use client';

import React, { useState, useEffect } from 'react';

export const TypingText = () => {
  const words = ['FULL STACK DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'REACT SPECIALIST', 'SOFTWARE DEVELOPER', 'UX DEVELOPER'];
  const [typedText, setTypedText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setHasStarted(true);
      setIsDeleting(true);
    }, 2000);
    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText.length <= 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex, hasStarted]);

  return (
    <span className="text-xs md:text-sm font-mono font-bold tracking-[0.3em] text-black/40 dark:text-white/30 uppercase flex items-center gap-1">
      {typedText}
      <span className="w-[1px] h-4 bg-black dark:bg-white animate-caret ml-1" />
    </span>
  );
};
