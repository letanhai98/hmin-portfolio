import { useState, useEffect } from 'react';

export const useScroll = (needScroll = true) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToId = (id: string) => {
    let access = document.getElementById(id) as any;
    access && access.scrollIntoView({ behavior: 'smooth' }, true);
  };

  useEffect(() => {
    const onScroll = () => {
      if (needScroll) setScrollY(window.scrollY);
    };

    onScroll();

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [needScroll]);

  return {
    scrollY,
    handleScrollToTop,
    scrollToId,
  };
};
