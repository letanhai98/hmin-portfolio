'use client';

import { useScroll } from '@/hooks';
import Image from 'next/image';
import React from 'react';

export const ScrollToTop = () => {
  const { scrollY, handleScrollToTop } = useScroll();

  return scrollY >= 200 ? (
    <div
      onClick={handleScrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-red-500"
    >
      "1231"
    </div>
  ) : null;
};
