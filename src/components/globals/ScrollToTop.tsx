'use client';

import { useScroll } from '@/hooks';
import Image from 'next/image';
import React from 'react';

export const ScrollToTop = () => {
  const { scrollY, handleScrollToTop } = useScroll();

  return scrollY >= 150 ? (
    <div
      onClick={handleScrollToTop}
      className="fixed bottom-6 right-6 z-50 animate-bounce hover:text-yellow-500 text-white duration-200 rounded-lg hover:bg-gray-900 cursor-pointer hover:p-2"
    >
      <span>hminDev()</span>
    </div>
  ) : null;
};
