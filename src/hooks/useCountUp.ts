import { useEffect, useRef } from 'react';

export function useCountUp(target: number, threshold = 0.5) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = target > 100
            ? Math.round(current).toLocaleString('de')
            : String(Math.round(current));
          if (current >= target) clearInterval(timer);
        }, 16);
        observer.unobserve(el);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, threshold]);

  return ref;
}
