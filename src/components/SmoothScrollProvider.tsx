'use client';

import { useEffect } from 'react';
import { initSmoothScroll, destroySmoothScroll } from '@/lib/smoothScroll';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const lenis = initSmoothScroll();

    return () => {
      destroySmoothScroll();
    };
  }, []);

  return <>{children}</>;
}


