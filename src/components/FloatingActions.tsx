import { useState, useEffect } from 'react';
import { DrawingPinFilledIcon, MobileIcon, ChatBubbleIcon } from '@radix-ui/react-icons';

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const btnClass = `flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full border border-glass-border bg-red text-white backdrop-blur-[10px] transition-all duration-500 ease-out hover:border-red-600 hover:bg-glass-hover hover:text-red-600`;

  const wrapperClass = `fixed bottom-8 right-8 z-[99] flex flex-col gap-3 transition-all duration-500 ease-out ${visible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`;

  return (
    <div className={wrapperClass}>
      <a
        href="https://maps.google.com/?q=..."
        target="_blank"
        rel="noopener noreferrer"
        className={btnClass}
        aria-label="Adresse auf Karte öffnen"
      >
        <DrawingPinFilledIcon width={18} height={18} />
      </a>
      <a
        href="tel:+49000000000"
        className={btnClass}
        aria-label="Anrufen"
      >
        <MobileIcon width={18} height={18} />
      </a>
      <a
        href="https://wa.me/4915259269888"
        target="_blank"
        rel="noopener noreferrer"
        className={btnClass}
        aria-label="WhatsApp"
      >
        <ChatBubbleIcon width={18} height={18} />
      </a>
      <button
        onClick={scrollToTop}
        className={btnClass}
        aria-label="Nach oben"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
