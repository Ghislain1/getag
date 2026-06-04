import { useRef, useEffect } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tag = target?.tagName;
      if (tag === 'A' || tag === 'BUTTON' || target.closest?.('.slot, .bento-card, .team-card')) {
        const el = cursorRef.current;
        if (el) {
          el.style.width = '40px';
          el.style.height = '40px';
          el.style.background = 'rgba(220,38,38,0.08)';
        }
      }
    };

    const onMouseOut = () => {
      const el = cursorRef.current;
      if (el) {
        el.style.width = '20px';
        el.style.height = '20px';
        el.style.background = 'transparent';
      }
    };

    let animId: number;
    const animate = () => {
      cursorPos.current.x += (mouse.current.x - cursorPos.current.x) * 0.12;
      cursorPos.current.y += (mouse.current.y - cursorPos.current.y) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.left = cursorPos.current.x + 'px';
        cursorRef.current.style.top = cursorPos.current.y + 'px';
      }
      animId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver as EventListener, true);
    document.addEventListener('mouseout', onMouseOut, true);
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver as EventListener, true);
      document.removeEventListener('mouseout', onMouseOut, true);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div className="cursor-el" ref={cursorRef} />
      <div className="cursor-dot-el" ref={dotRef} />
    </>
  );
}
