import { DrawingPinFilledIcon, MobileIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import { GradientWrap } from './shared/GradientWrap';

export default function FloatingActions() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[99] flex flex-col gap-3">
      <GradientWrap aria-label="Adresse auf Karte öffnen" className="h-[44px] w-[44px]">
        <a
          href="https://maps.google.com/?q=..."
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full w-full items-center justify-center text-ink transition-colors hover:text-[var(--accent)]"
        >
          <DrawingPinFilledIcon width={18} height={18} />
        </a>
      </GradientWrap>
      <GradientWrap aria-label="Anrufen" className="h-[44px] w-[44px]">
        <a
          href="tel:+4915259269888"
          className="flex h-full w-full items-center justify-center text-ink transition-colors hover:text-[var(--accent)]"
        >
          <MobileIcon width={18} height={18} />
        </a>
      </GradientWrap>
      <GradientWrap aria-label="WhatsApp" className="h-[44px] w-[44px]">
        <a
          href="https://wa.me/4915259269888"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full w-full items-center justify-center text-ink transition-colors hover:text-[var(--accent)]"
        >
          <ChatBubbleIcon width={18} height={18} />
        </a>
      </GradientWrap>
      <GradientWrap aria-label="Nach oben" className="h-[44px] w-[44px]">
        <button
          onClick={scrollToTop}
          className="flex h-full w-full items-center justify-center text-ink transition-colors hover:text-[var(--accent)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </button>
      </GradientWrap>
    </div>
  );
}