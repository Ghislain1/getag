import { useEffect, useRef } from 'react';

export function useParallax() {
  const floatsRef = useRef<(HTMLDivElement | null)[]>([null, null]);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      floatsRef.current.forEach((el, i) => {
        if (!el) return;
        const speed = i === 0 ? 0.08 : -0.06;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
      const heroCard = cardRef.current;
      if (heroCard && scrollY < window.innerHeight) {
        heroCard.style.setProperty('--parallax-y', `${scrollY * 0.04}px`);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const setFloatRef = (i: number) => (el: HTMLDivElement | null) => {
    floatsRef.current[i] = el;
  };

  return { setFloatRef, cardRef };
}
